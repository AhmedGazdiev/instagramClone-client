import {
	getDataPost,
	getPostsLoading,
	PostCard,
	PostCardSkeleton,
} from '@/entities/PostCard'
import { Text, VStack } from '@/shared/ui'
import { useSelector } from 'react-redux'

export const PostList = () => {
	const dataPosts = useSelector(getDataPost)
	const loading = useSelector(getPostsLoading)

	if (loading) {
		return (
			<VStack gap={32}>
				{[0, 1, 2].map((item, index) => (
					<PostCardSkeleton key={index} />
				))}
			</VStack>
		)
	}

	return (
		<VStack gap={32}>
			{dataPosts.length > 0 ? (
				dataPosts.map(post => <PostCard key={post._id} post={post} />)
			) : (
				<Text size={18}>Постов нет</Text>
			)}
		</VStack>
	)
}
