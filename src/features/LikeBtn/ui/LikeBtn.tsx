import { likePost, PostProps, unLikePost } from '@/entities/PostCard'
import { getAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { classNames, Mods } from '@/shared/lib/classNames'
import { Icon } from '@/shared/ui'
import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import cls from './LikeBtn.module.scss'

export const LikeBtn: FC<PostProps> = ({ post }) => {
	const [isLike, setIsLike] = useState<boolean>(false)
	const authData = useSelector(getAuthData)
	const dispatch = useAppDispatch()
	const [isLoad, setIsLoad] = useState<boolean>(false)

	const like = async () => {
		if (isLoad) return
		setIsLoad(true)
		await dispatch(likePost({ post, auth: authData }))
		setIsLoad(false)
	}

	const unLike = async () => {
		if (isLoad) return
		setIsLoad(true)
		await dispatch(unLikePost({ post, auth: authData }))
		setIsLoad(false)
	}

	useEffect(() => {
		if (post.likes.find(item => item._id === authData?._id)) {
			setIsLike(true)
		}

		return () => setIsLike(false)
	}, [post.likes, authData._id])

	const mods: Mods = {
		[cls.dasabled]: isLoad,
	}

	return (
		<div className={cls.like}>
			{isLike ? (
				<Icon
					onClick={unLike}
					className={classNames(cls.like, mods, [])}
					type='ActiveFavorite'
				/>
			) : (
				<Icon
					onClick={like}
					className={classNames(cls.like, mods, [])}
					type='Favorite'
				/>
			)}
		</div>
	)
}
