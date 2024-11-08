export { PostCard } from './ui/PostCard/PostCard'
export { PostCardAddComent } from './ui/PostCardAddComent/PostCardAddComent'
export { PostCardComents } from './ui/PostCardComments/PostCardComents'
export { PostCardFooter } from './ui/PostCardFooter/PostCardFooter'
export { PostCardHeader } from './ui/PostCardHeader/PostCardHeader'
export { PostCardMain } from './ui/PostCardMain/PostCardMain'
export { PostCardSkeleton } from './ui/PostCardSkeleton/PostCardSkeleton'

export { postActions, postReducer } from './model/slice/postSlice'
export type { Post, PostProps, PostState } from './model/types/post'

export { createPost } from './model/service/createPost'
export { likePost } from './model/service/likePost'
export { unLikePost } from './model/service/unLikePost'

export { getDataPost } from './model/selectors/getDataPost'
export { getPostInited } from './model/selectors/getPostInited'
export { getPostsLoading } from './model/selectors/getPostsLoading'
