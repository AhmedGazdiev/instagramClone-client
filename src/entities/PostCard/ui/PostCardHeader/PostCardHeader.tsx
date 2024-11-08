import { getAuthData } from '@/entities/User'
import { UserCard } from '@/shared/ui'
import { EllipsisOutlined } from '@ant-design/icons'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { PostProps } from '../../model/types/post'
import cls from './PostCardHeader.module.scss'

export const PostCardHeader: FC<PostProps> = ({ post }) => {
	const authData = useSelector(getAuthData)

	return (
		<div className={cls.header}>
			<UserCard
				title={post.user?.fullname}
				id={post._id}
				content={post.user?.username}
				src={post.user?.avatar}
				size={32}
			>
				<EllipsisOutlined />
			</UserCard>
		</div>
	)
}
