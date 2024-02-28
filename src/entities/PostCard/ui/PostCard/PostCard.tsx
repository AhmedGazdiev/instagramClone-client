import { VStack } from '@/shared/ui'
import { PostCardAddComent } from '../PostCardAddComent/PostCardAddComent'
import { PostCardComents } from '../PostCardComments/PostCardComents'
import { PostCardFooter } from '../PostCardFooter/PostCardFooter'
import { PostCardHeader } from '../PostCardHeader/PostCardHeader'
import { PostCardMain } from '../PostCardMain/PostCardMain'
import cls from './PostCard.module.scss'

export const PostCard = () => {
  return (
    <VStack className={cls.postCard}>
      <PostCardHeader />
      <PostCardMain />
      <PostCardFooter />
      <div className={cls.coments}>
        <PostCardComents />
      </div>
      <div className={cls.addComment}>
        <PostCardAddComent />
      </div>
    </VStack>
  )
}
