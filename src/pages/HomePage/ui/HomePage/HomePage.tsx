import { getPostInited } from '@/entities/PostCard'
import { getAuthData } from '@/entities/User'
import { PostList } from '@/features/PostsList'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { HStack, VStack } from '@/shared/ui'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getFetchPosts } from '../../model/service/getFetchPosts'
import { HomeStories } from '../HomeStories/HomeStories'
import { HomeSuggestions } from '../HomeSuggestions/HomeSuggestions'
import { HomeUser } from '../HomeUser/HomeUser'
import cls from './HomePage.module.scss'

const HomePage = () => {
	const { t } = useTranslation()
	const authData = useSelector(getAuthData)
	const dispatch = useAppDispatch()
	const isInitedPosts = useSelector(getPostInited)

	useEffect(() => {
		if (!isInitedPosts) {
			dispatch(getFetchPosts())
		}
	}, [isInitedPosts, dispatch])

	return (
		<HStack className={cls.home} gap={28}>
			<VStack className={cls.left} gap={22}>
				<HomeStories />
				<PostList />
			</VStack>
			<VStack className={cls.right} gap={40}>
				<HStack>
					<HomeUser user={authData} />
				</HStack>
				<HomeSuggestions user={authData} />
			</VStack>
		</HStack>
	)
}

export default HomePage
