import { HStack, Text, UserCard, VStack } from '@/shared/ui'
import { Button } from 'antd'
import { FC } from 'react'
import { HomeProps } from '../../model/types/home'
import cls from './HomeSuggestions.module.scss'

export const HomeSuggestions: FC<HomeProps> = ({ user }) => {
	return (
		<div className={cls.suggestions}>
			<VStack gap={16}>
				<HStack justify='between' align='center'>
					<Text as='p'>Suggestions For You</Text>
					<Button type='text'>See All</Button>
				</HStack>
				<VStack gap={12}>
					{[1, 2, 3, 4, 5].map(item => (
						<UserCard
							key={item}
							id={user?._id}
							title={user?.fullname}
							content={user?.username}
							size={56}
							src={user?.avatar}
						>
							<Button>Swith</Button>
						</UserCard>
					))}
				</VStack>
			</VStack>
		</div>
	)
}
