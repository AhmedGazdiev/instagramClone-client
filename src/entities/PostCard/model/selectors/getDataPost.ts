import { StateSchema } from '@/app/provider'

export const getDataPost = (state: StateSchema) => state.post.posts || []
