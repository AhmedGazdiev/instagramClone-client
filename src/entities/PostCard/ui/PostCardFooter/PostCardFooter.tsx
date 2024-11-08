import { LikeBtn } from '@/features/LikeBtn'
import { HStack, Icon, Text, VStack } from '@/shared/ui'
import { FC } from 'react'
import { PostProps } from '../../model/types/post'
import cls from './PostCard.module.scss'

export const PostCardFooter: FC<PostProps> = ({ post }) => {
	return (
		<VStack className={cls.footer} gap={22}>
			<HStack align='center' justify='between'>
				<HStack gap={16} align='center'>
					<LikeBtn post={post} />
					<Icon type='Comment' />
					<Icon type='SharePosts' />
				</HStack>
				<Icon type='Save' />
			</HStack>
			<VStack className={cls.body} gap={8}>
				<Text color='default' fw={700} size={14}>
					{post.likes?.length} likes
				</Text>
				<div>
					<Text className={cls.username} color='default' as='span' fw={700}>
						{post.user?.username}
					</Text>
					<Text as='span' fw={500}>
						{post.content}
					</Text>
				</div>
			</VStack>
		</VStack>
	)
}
