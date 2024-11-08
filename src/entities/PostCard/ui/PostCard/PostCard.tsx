import { VStack } from '@/shared/ui'
import { PostCardAddComent } from '../PostCardAddComent/PostCardAddComent'
import { PostCardComents } from '../PostCardComments/PostCardComents'
import { PostCardFooter } from '../PostCardFooter/PostCardFooter'
import { PostCardHeader } from '../PostCardHeader/PostCardHeader'
import { PostCardMain } from '../PostCardMain/PostCardMain'
import cls from './PostCard.module.scss'
import { Post, PostProps } from '../../model/types/post'
import { FC } from 'react'

export const PostCard: FC<PostProps> = ({ post }) => {
	return (
		<VStack className={cls.postCard}>
			<PostCardHeader post={post} />
			<PostCardMain post={post} />
			<PostCardFooter post={post} />
			<div className={cls.coments}>
				<PostCardComents />
			</div>
			<div className={cls.addComment}>
				<PostCardAddComent />
			</div>
		</VStack>
	)
}
