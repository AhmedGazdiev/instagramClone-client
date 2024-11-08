import { User } from '@/entities/User'
import { ImageUpload } from './../../../../shared/lib/imageUpload'
export interface Post {
	comments: string[]
	content: string
	createdAt: string
	images: ImageUpload[]
	likes: User[]
	updatedAt: string
	user: User
	__v: number
	_id: string
}

export interface PostState {
	loading: boolean
	posts: Post[]
	resultPosts: number
	error: string
	inited: boolean
}

export type PostProps = {
	post: Post
}

export interface LikePostParams {
	post: Post
	auth: User
}
