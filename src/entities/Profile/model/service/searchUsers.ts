import { ThunkConfig } from '@/app/provider'
import { User } from '@/entities/User'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface SearchUsersParams {
   search: string
}

interface getFetchSearchUsers {
   users: User[]
}

export const searchUsers = createAsyncThunk<any, SearchUsersParams, ThunkConfig>(
   'profile/searchUsers',
   async ({ search }, thunkApi) => {
      const { rejectWithValue, extra } = thunkApi

      try {
         const res = await extra.api.get<getFetchSearchUsers>(`/search?username=${search}`)

         return res.data.users

      } catch (err: any) {
         return rejectWithValue(err.response.data.msg)
      }
   }
)