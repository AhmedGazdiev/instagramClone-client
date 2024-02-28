export { ProfileInfo } from './ui/ProfileInfo/ProfileInfo'
export { ProfilePosts } from './ui/ProfilePosts/ProfilePosts'
export { EditProfile } from './ui/EditProfile/EditProfile'

export { profileActions, profileReduser } from './model/slice/profileSlice'

export { ProfileState,FollowEnum } from './model/types/profile'

export { getProfileUser } from './model/selectors/getProfileUser'
export { getProfileUsers } from './model/selectors/getProfileUsers'
export { getSearchUsers } from './model/selectors/getSearchUsers'
export { getSearchLoading } from './model/selectors/getSearchLoading'
export { getProfileUserLoading } from './model/selectors/getProfileUserLoading'
export { getProfileError } from './model/selectors/getProfileError'
export { getProfileSuccess } from './model/selectors/getProfileSuccess'

export { searchUsers } from './model/service/searchUsers'
export { getUserProfile } from './model/service/getUserProfile'
export { updateProfile } from './model/service/updateProfile'
export { followUser } from './model/service/follow'
export { unFollowUser } from './model/service/unFollow'