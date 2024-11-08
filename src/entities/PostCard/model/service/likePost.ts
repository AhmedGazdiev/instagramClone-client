import { ThunkConfig } from '@/app/provider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { postActions } from '../slice/postSlice'
import { LikePostParams } from '../types/post'

export const likePost = createAsyncThunk<
	any,
	LikePostParams,
	ThunkConfig<string>
>('post/create', async (params, thunkApi) => {
	const { extra, rejectWithValue, dispatch } = thunkApi

	const { post, auth } = params

	const newPost = { ...post, likes: [...post.likes, auth] }

	try {
		const res = await extra.api.patch(`/post/${post._id}/like`)

		dispatch(postActions.setUpdatePost(newPost))
	} catch (err: any) {
		return rejectWithValue(err.response.data.msg)
	}
})
