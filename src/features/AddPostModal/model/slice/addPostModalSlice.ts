import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AddPostModalState } from '../types'

const initialState: AddPostModalState = {
   isOpen: false
}

export const addPostModalSlice = createSlice({
   name: 'addPostModal',
   initialState,
   reducers: {
      setIsAddPostModal: (state, action: PayloadAction<boolean>) => {
         state.isOpen = action.payload
      }
   },
   extraReducers(builder) { }
})

export const addPostModalActions = addPostModalSlice.actions
export const addPostModalReducer = addPostModalSlice.reducer