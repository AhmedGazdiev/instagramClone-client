import { UserCard } from '@/shared/ui'
import cls from './PostCardHeader.module.scss'
import { useSelector } from 'react-redux'
import { getAuthData } from '@/entities/User'
import { EllipsisOutlined } from '@ant-design/icons'

export const PostCardHeader = () => {

  const authData = useSelector(getAuthData)

  return (
    <div className={cls.header}>
      <UserCard
        title={authData?.fullname}
        id={authData?._id}
        content={authData?.username}
        src={authData?.avatar}
        size={32}
      >
        <EllipsisOutlined/>
      </UserCard>
    </div>
  )
}
