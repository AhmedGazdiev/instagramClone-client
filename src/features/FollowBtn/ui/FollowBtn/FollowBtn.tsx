import { FC, useEffect, useState } from 'react'
import { followUser, unFollowUser } from '@/entities/Profile'
import { User, getAuthData } from '@/entities/User'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { Button } from 'antd'
import cls from './FollowBtn.module.scss'

interface FollowBtnProps {
   user: User
   id: string
}

export const FollowBtn: FC<FollowBtnProps> = ({ user, id }) => {
   const [follow, setFollow] = useState<boolean>(false)
   const [load, setLoad] = useState<boolean>(false)

   const authData = useSelector(getAuthData)
   const dispatch = useAppDispatch()

   const onFollow = async() => {
      if (load) return

      setLoad(true)
      await dispatch(followUser({ user, auth: authData }))
      setLoad(false)
   }

   const unFollow = async() => {
      if (load) return

      setLoad(true)
      await dispatch(unFollowUser({user,auth:authData}))
      setLoad(false)
   }

   useEffect(() => {
      if (authData?.following.find((item) => item._id === id)) {
         setFollow(true)
      }
      return () => setFollow(false)
   }, [authData?.following, id])

   return (
      <>
         {follow ? (
            <Button type='primary' onClick={unFollow} loading={load}>
               Отписаться
            </Button>
         ) : (
            <Button type='primary' onClick={onFollow} loading={load}>
               Подписатсья
            </Button>
         )}
      </>
   )
}
