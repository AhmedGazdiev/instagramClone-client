import { ThunkConfig } from '@/app/provider'
import { userActions } from '@/entities/User'
import { User } from '@/entities/User/model/types/user'
import { LOCAL_STORAGE_TOKEN } from '@/shared/consts/localstorage'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginFormValues } from '../schema/useLoginForm'

interface GetFetchLoginData {
	user: User
	token: ''
}

export const loginByEmail = createAsyncThunk<
	any,
	LoginFormValues,
	ThunkConfig<string>
>('auth/login', async (userData, thunkApi) => {
	const { rejectWithValue, dispatch, extra } = thunkApi

	try {
		const res = await extra.api.post('/login', userData)

		if (res.data) {
			dispatch(userActions.setAuthData(res.data))
			localStorage.setItem(LOCAL_STORAGE_TOKEN, res.data.token)
		}
	} catch (err: any) {
		return rejectWithValue(err.response.data.msg)
	}
})
