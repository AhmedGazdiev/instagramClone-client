import { Post } from '@/entities/PostCard'
import { User } from '@/entities/User'

export interface HomeProps {
	user: User
}

export interface GetFetchPosts {
	posts: Post[]
	msg: string
	results: number
}
