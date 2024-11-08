import { StateSchema } from '@/app/provider'

export const getPostInited = (state: StateSchema) => state.post.inited || false
