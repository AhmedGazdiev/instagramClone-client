import { ThunkConfig } from '@/app/provider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { GetFetchPosts } from '../types/home'

export const getFetchPosts = createAsyncThunk<any, void, ThunkConfig<string>>(
	'post/getPosts',
	async (_, thunkApi) => {
		const { extra, rejectWithValue } = thunkApi

		try {
			const res = await extra.api.get<GetFetchPosts>('/posts')

			console.log(res.data)

			return res.data
		} catch (err: any) {
			return rejectWithValue(err.response.data.msg)
		}
	}
)
