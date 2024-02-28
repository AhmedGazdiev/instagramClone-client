import { ThunkConfig } from '@/app/provider'
import { User, userActions } from '@/entities/User'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { profileActions } from '../slice/profileSlice'

interface FollowParams {
   user: User
   auth: User
}

export const followUser = createAsyncThunk<any, FollowParams, ThunkConfig>(
   'profile/follow',
   async (params, thunkApi) => {
      const { rejectWithValue, dispatch, extra } = thunkApi
      const { user, auth } = params

      try {

         const newUser = {
            ...user, followers: [...auth.followers, auth]
         }

         dispatch(profileActions.setUpdateFolow(newUser))

         dispatch(userActions.setUpdateUser({
            ...auth,
            following: [...auth.following, user]
         }))

         const res = await extra.api.patch(`/user/${user._id}/follow`)

         return res.data
      } catch (err: any) {
         return rejectWithValue(err.response.data.msg)
      }
   }
)