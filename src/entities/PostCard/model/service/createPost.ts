import { ThunkConfig } from '@/app/provider'
import { ImageUpload, imageUploade } from '@/shared/lib/imageUpload'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { postActions } from '../slice/postSlice'
import { Post } from '../types/post'

interface CreatPostParams {
	content: string
	images: File[]
}
interface GetCreatePostParams {
	newPost: Post
}

export const createPost = createAsyncThunk<
	any,
	CreatPostParams,
	ThunkConfig<string>
>('post/create', async (params, thunkApi) => {
	const { extra, rejectWithValue, dispatch } = thunkApi
	const { content, images } = params

	try {
		let newImages: ImageUpload[] = []

		if (images.length > 0) newImages = await imageUploade(images)

		const res = await extra.api.post<GetCreatePostParams>('/posts', {
			content,
			images: newImages,
		})

		dispatch(postActions.setCreatePost(res.data.newPost))
	} catch (err: any) {
		return rejectWithValue(err.response.data.msg)
	}
})
