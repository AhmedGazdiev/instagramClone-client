export { userActions, userReducer } from './model/slice/userSlice'
export type { UserState } from './model/types/user'
export type { User } from './model/types/user'

export { getAuthData } from './model/selectors/getAuthData'
export { getAuthToken } from './model/selectors/getAuthToken'
export { getAuthLoading } from './model/selectors/getUserLoading'


export { getFetchAuthUser } from './model/service/getFetchAuthUser'
export { logout } from './model/service/logout'