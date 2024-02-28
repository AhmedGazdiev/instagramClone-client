import { PostList } from '@/features/PostsList'
import { AppLink, HStack, Text, UserCard, VStack } from '@/shared/ui'
import { useTranslation } from 'react-i18next'
import cls from './HomePage.module.scss'
import { useSelector } from 'react-redux'
import { getAuthData } from '@/entities/User'
import { Button } from 'antd'
import { FollowBtn } from '@/features/FollowBtn'

const HomePage = () => {
  const { t } = useTranslation()
  const authData = useSelector(getAuthData)

  return (
    // <div>{t('Главная страница')}</div>
    <HStack className={cls.home} gap={28}>
      <VStack className={cls.left} gap={22}>
        <div>SLIDER</div>
        <PostList />
      </VStack>
      <VStack className={cls.right} gap={40}>
        <HStack>
          <UserCard
            id={authData?._id}
            title={authData?.fullname}
            content={authData?.username}
            size={56}
            src={authData?.avatar}
          >
            <Button type='text'>Swith</Button>
          </UserCard>
        </HStack>
        <VStack gap={16}>
          <HStack justify='between' align='center'>
            <Text as='p'>Suggestions For You</Text>
            <Button type='text'>See All</Button>
          </HStack>
          <VStack gap={12}>
            {
              [1, 2, 3, 4, 5].map((item) => (
                <UserCard
                  id={authData?._id}
                  title={authData?.fullname}
                  content={authData?.username}
                  size={32}
                  src={authData?.avatar}
                >
                  <Button type='text'>Swith</Button>
                </UserCard>
              ))
            }
          </VStack>
        </VStack>
      </VStack>
    </HStack>
  )
}

export default HomePage