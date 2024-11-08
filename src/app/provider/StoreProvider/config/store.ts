import { postReducer } from '@/entities/PostCard'
import { profileReduser } from '@/entities/Profile'
import { userReducer } from '@/entities/User'
import { addPostModalReducer } from '@/features/AddPostModal'
import { authReducer } from '@/features/Auth'
import { $api } from '@/shared/api'
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from './StateSchema'

export const createStore = () => {
	const rootReducers: ReducersMapObject<StateSchema> = {
		auth: authReducer,
		user: userReducer,
		profile: profileReduser,
		addPostModal: addPostModalReducer,
		post: postReducer,
	}

	const extraArg: ThunkExtraArg = {
		api: $api,
	}

	const store = configureStore({
		reducer: rootReducers,
		devTools: DEV,
		// @ts-ignore
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: extraArg,
				},
			}),
	})

	return store
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch']
