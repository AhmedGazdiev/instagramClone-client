import { UserCard } from '@/shared/ui'
import cls from './HomeUser.module.scss'
import { User } from '@/entities/User'
import { FC } from 'react'
import { Button } from 'antd'
import { HomeProps } from '../../model/types/home'

export const HomeUser: FC<HomeProps> = ({ user }) => {
	return (
		<div className={cls.user}>
			<UserCard
				id={user?._id}
				title={user?.fullname}
				content={user?.username}
				size={56}
				src={user?.avatar}
			>
				<Button>Swith</Button>
			</UserCard>
		</div>
	)
}
