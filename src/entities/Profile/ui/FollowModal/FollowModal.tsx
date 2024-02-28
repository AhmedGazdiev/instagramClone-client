import { User } from '@/entities/User'
import cls from './FollowModal.modal.scss'
import { FC } from 'react'
import { HStack, UserCard, VStack } from '@/shared/ui'
import { FollowBtn } from '@/features/FollowBtn'

interface FollowModalProps {
  data: User[]
}

export const FollowModal: FC<FollowModalProps> = ({ data }) => {

  return (
      <VStack gap={8}>
        {
          data.length > 0 ? data.map((user) => (
            <UserCard
             title={user.fullname}
              content={user.username}
               id={user._id}
                src={user.avatar}
                >
                  <FollowBtn user={user} id={user._id} />
                </UserCard>
          )) : null
        }
      </VStack>
  )
}
