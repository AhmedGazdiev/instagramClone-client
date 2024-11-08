import { ThunkConfig } from '@/app/provider'
import { LOCAL_STORAGE_TOKEN } from '@/shared/consts/localstorage'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const logout = createAsyncThunk<any, void, ThunkConfig<string>>(
	'user/getAuthUser',
	async (params, thunkApi) => {
		const { rejectWithValue, extra } = thunkApi

		try {
			const res = await extra.api.post('/logout')

			if (res.data) {
				localStorage.removeItem(LOCAL_STORAGE_TOKEN)
				window.location.href = '/'
			}
		} catch (err: any) {
			return rejectWithValue(err.response.data.msg)
		}
	}
)
