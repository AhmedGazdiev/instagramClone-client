import { createSlice } from '@reduxjs/toolkit'
import { ProfileState } from '../types/profile'
import { searchUsers } from '../service/searchUsers'
import { getUserProfile } from '../service/getUserProfile'
import { updateProfile } from '../service/updateProfile'

const initialState: ProfileState = {
   posts: [],
   users: [],
   user: null,
   error: '',
   success: '',
   loading: false,
   searchUsers: [],
   searchLoading: false
}

const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {
      setProfileUser: (state, action) => {
         state.user = action.payload
      },
      setSearchUsers: (state) => {
         state.searchUsers = []
      },
      setClearMessage: (state) => {
         state.error = ''
         state.success = ''
      },
      setUpdateFolow: (state, action) => {
         state.users = state.users.map((user) => (user._id === action.payload._id ? action.payload : user))
      }
   },
   extraReducers(builder) {
      builder
         .addCase(searchUsers.pending, (state) => {
            state.searchLoading = true
         })
         .addCase(searchUsers.fulfilled, (state, action) => {
            state.searchLoading = false
            state.searchUsers = action.payload
            state.error = ''
         })
         .addCase(searchUsers.rejected, (state, action) => {
            state.searchLoading = false
            state.error = action.payload
         })
         .addCase(getUserProfile.pending, (state) => {
            state.loading = true
         })
         .addCase(getUserProfile.fulfilled, (state, action) => {
            state.loading = false
            state.users = [...state.users, action.payload.user]
         })
         .addCase(getUserProfile.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
         .addCase(updateProfile.pending, (state, action) => {
            state.success = ''
            state.error = ''
         })
         .addCase(updateProfile.fulfilled, (state, action) => {
            state.success = "Профиль успешно обнавлен"
            state.error = ''
         })
         .addCase(updateProfile.rejected, (state, action) => {
            state.success = ''
            state.error = "При обновлении профиль произошла ошибка"
         })
   }
})


export const profileActions = profileSlice.actions
export const profileReduser = profileSlice.reducer