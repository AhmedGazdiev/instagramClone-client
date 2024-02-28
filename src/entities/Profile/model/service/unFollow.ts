import { ThunkConfig } from '@/app/provider'
import { User, userActions } from '@/entities/User'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { profileActions } from '../slice/profileSlice'

interface FollowParams {
   user: User
   auth: User
}

export const unFollowUser = createAsyncThunk<any, FollowParams, ThunkConfig>(
   'profile/unFollow',
   async (params, thunkApi) => {
      const { rejectWithValue, dispatch, extra } = thunkApi
      const { user, auth } = params

      try {

         const newUser = {
            ...user, followers: user.followers.filter((item) => item._id !== auth._id)
         }

         dispatch(profileActions.setUpdateFolow(newUser))

         dispatch(userActions.setUpdateUser({
            ...auth,
            following: auth.following.filter((item) => item._id !== user._id)
         }))

         await extra.api.patch(`/user/${user._id}/unfollow`)
      } catch (err: any) {
         return rejectWithValue(err.response.data.msg)
      }
   }
)