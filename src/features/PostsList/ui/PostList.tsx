import { VStack } from '@/shared/ui'
import cls from './PostList.module.scss'
import { PostCard } from '@/entities/PostCard'

export const PostList = () => {
  return (
    <VStack>
      <PostCard/>
    </VStack>
  )
}
