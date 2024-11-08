import { ThunkConfig } from '@/app/provider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { postActions } from '../slice/postSlice'
import { LikePostParams } from '../types/post'

export const unLikePost = createAsyncThunk<
	any,
	LikePostParams,
	ThunkConfig<string>
>('post/create', async (params, thunkApi) => {
	const { extra, rejectWithValue, dispatch } = thunkApi

	const { post, auth } = params

	const newPost = {
		...post,
		likes: post.likes.filter(item => item._id !== auth._id),
	}

	try {
		const res = await extra.api.patch(`/post/${post._id}/unlike`)

		dispatch(postActions.setUpdatePost(newPost))
	} catch (err: any) {
		return rejectWithValue(err.response.data.msg)
	}
})
