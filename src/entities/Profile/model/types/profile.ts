import { User } from "@/entities/User"

export interface ProfileState {
   posts: any[]
   users: User[]
   user: User
   error: string
   success: string
   loading: boolean
   searchUsers: User[]
   searchLoading: boolean
}

export enum FollowEnum {
   FOLLOWERS = 'followers',
   FOLLOWING = 'following'
}

export interface FollowModalType {
   isOpen: boolean
   view: FollowEnum
}