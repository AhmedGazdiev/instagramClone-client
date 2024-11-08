import { ThunkConfig } from '@/app/provider'
import { User } from '@/entities/User'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface SearchUsersParams {
	search: string
}

interface getFetchSearchUsers {
	users: User[]
}

export const getUserProfile = createAsyncThunk<
	any,
	{ id: string },
	ThunkConfig<string>
>('profile/getUserProfile', async ({ id }, thunkApi) => {
	const { rejectWithValue, extra } = thunkApi

	try {
		const res = await extra.api.get(`/user/${id}`)

		return res.data
	} catch (err: any) {
		return rejectWithValue(err.response.data.msg)
	}
})
