import { getFetchPosts } from '@/pages/HomePage/model/service/getFetchPosts'
import { GetFetchPosts } from '@/pages/HomePage/model/types/home'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post, PostState } from '../types/post'

const initialState: PostState = {
	loading: false,
	posts: [],
	resultPosts: 0,
	error: '',
	inited: false,
}

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		setCreatePost: (state, action: PayloadAction<Post>) => {
			state.posts = [action.payload, ...state.posts]
		},
		setUpdatePost: (state, action: PayloadAction<Post>) => {
			state.posts = state.posts.map(post =>
				post._id === action.payload._id ? action.payload : post
			)
		},
	},
	extraReducers(builder) {
		builder
			.addCase(getFetchPosts.pending, state => {
				state.loading = true
			})
			.addCase(
				getFetchPosts.fulfilled,
				(state, action: PayloadAction<GetFetchPosts>) => {
					state.loading = false
					state.posts = action.payload.posts
					state.resultPosts = action.payload.results
					state.inited = true
				}
			)
			.addCase(getFetchPosts.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
	},
})

export const postActions = postSlice.actions
export const postReducer = postSlice.reducer
