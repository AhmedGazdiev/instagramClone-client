import { useSelector } from 'react-redux'
import { getAuthData } from '@/entities/User'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { profileActions } from '../../model/slice/profileSlice'
import { FC, useCallback, useEffect, useState } from 'react'
import { getProfileUser } from '../../model/selectors/getProfileUser'
import { Avatar, HStack, Text, VStack, Icon, DropDown } from '@/shared/ui'
import { useProfile } from '../../model/consts/useProfile'
import { Button, Modal, Spin } from "antd";
import { User } from '@/entities/User'
import { getProfileUserLoading } from '../../model/selectors/getProfileUserLoading'
import { EditProfile } from '../EditProfile/EditProfile'
import { FollowBtn } from '@/features/FollowBtn'
import { FollowEnum } from '../../model/types/profile'
import { FollowModal } from '../FollowModal/FollowModal'
import { useProfileModal } from '../../model/hooks/useProfileModal'
import cls from './ProfileInfo.module.scss'

interface ProfileInfoProps {
  id: string
  users: User[]
}

export const ProfileInfo: FC<ProfileInfoProps> = ({ id, users }) => {
  const dispatch = useAppDispatch()
  const authData = useSelector(getAuthData)
  const user = useSelector(getProfileUser)
  const profileLoading = useSelector(getProfileUserLoading)
  const dropDownDotsItems = useProfile(authData?._id === id)

  const { isOpen, isFollowModal, onClose, onOpen, onCloseFollowModal, onOpenFollowersModal, onOpenFollowingModal } = useProfileModal()



  useEffect(() => {
    if (authData?._id === id) {
      dispatch(profileActions.setProfileUser(authData))
    } else {
      const newUser = users.find((user) => user._id === id)

      if (newUser) dispatch(profileActions.setProfileUser(newUser))
    }
  }, [id, authData, users])

  if (profileLoading) {
    return <HStack justify='center'>
      <Spin size='large' />
    </HStack>
  }

  return (
    <div className={cls.profileInfo}>
      <HStack>
        {
          user &&
          <HStack gap={100} align='center'>
            <Avatar size={180} src={user?.avatar} />
            <VStack gap={50}>
              <HStack gap={50} align='center'>
                <Text fw={500} color='default' size={32}>@{user.username}</Text>

                {authData?._id === id ? (
                  <Button onClick={onOpen} type="primary">Изменить</Button>
                ) : (
                  <FollowBtn user={user} id={id} />
                )}
                <Modal
                  open={isOpen}
                  centered
                  onCancel={onClose}
                  footer={null}
                >
                  <Text fw={700} size={16} color='default'>Edit profile</Text>
                  <EditProfile auth={authData} onClose={onClose} />
                </Modal>

                <DropDown items={dropDownDotsItems}>
                  <Icon type='Dots' />
                </DropDown>
              </HStack>
              <HStack gap={50}>
                <VStack gap={8} align='center' className={cls.followClick}>
                  <Text size={16} fw={700} color='default'>*</Text>
                  <Text color='default' size={14}>публикаци</Text>
                </VStack>
                <VStack gap={8} align='center' onClick={onOpenFollowersModal} className={cls.followClick}>
                  <Text size={16} fw={700} color='default'>{user.followers.length}</Text>
                  <Text color='default' size={14}>подписчики</Text>
                </VStack>
                <VStack gap={8} align='center' onClick={onOpenFollowingModal} className={cls.followClick}>
                  <Text size={16} fw={700} color='default'>{user.following.length}</Text>
                  <Text color='default' size={14}>подписки</Text>
                </VStack>

                <Modal
                  title={<Text fw={700} size={16} color='default'>{isFollowModal.view === FollowEnum.FOLLOWERS ? 'Подписчики' : 'Подписки'}</Text>}
                  open={isFollowModal.isOpen}
                  centered
                  onCancel={onCloseFollowModal}
                  footer={null}
                >
                  <FollowModal data={isFollowModal.view === FollowEnum.FOLLOWERS ? user.followers : user.following} />
                </Modal>

              </HStack>
              <VStack gap={8}>
                <Text fw={700} color="default" size={18}>{user?.fullname}</Text>
                <Text fw={400} color="default" size={14}>{user.mobile}</Text>
                <Text fw={400} color="default" size={14}>{user.address}</Text>
                <Text fw={400} color="default" size={14}><a href={user.website} target="_blank">{user.website}</a></Text>
                <Text fw={400} color="default" size={14}>{user.story}</Text>
              </VStack>
            </VStack>
          </HStack>
        }
      </HStack>
    </div>
  )
}
