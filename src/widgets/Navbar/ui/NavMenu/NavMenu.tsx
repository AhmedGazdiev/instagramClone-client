import { getAuthData, logout } from '@/entities/User'
import {
	AddPostModal,
	addPostModalActions,
	getIsAddPostModalIsOpen,
} from '@/features/AddPostModal'
import { SwitchButton } from '@/features/SwitchButton'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { AppLink, Avatar, DropDown, Icon, Text } from '@/shared/ui'
import { LangSwitch } from '@/widgets/LangSwitch/ui/LangSwitch'
import { MenuProps } from 'antd'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { type INavMenuItem } from '../../model/consts/navMenu'
import cls from './NavMenu.module.scss'

export const NavMenu = () => {
	const dispatch = useAppDispatch()
	const authData = useSelector(getAuthData)

	const isOpenAddPostModal = useSelector(getIsAddPostModalIsOpen)

	const onCloseAddPostModal = useCallback(() => {
		dispatch(addPostModalActions.setIsAddPostModal(false))
	}, [isOpenAddPostModal])

	const navMenuItems: INavMenuItem[] = [
		{
			href: '/',
			iconType: 'Home',
		},
		{
			href: '/message',
			iconType: 'Messenger',
		},
		{
			iconType: 'NewPosts',
			onClick: () => dispatch(addPostModalActions.setIsAddPostModal(true)),
		},
		{
			href: '',
			iconType: 'FindPeople',
		},
		{
			href: '/favorite',
			iconType: 'Favorite',
		},
	]

	const dropDownItems: MenuProps['items'] = [
		{
			label: <Text color='blue'>{authData?.fullname}</Text>,
			key: '0',
		},
		{
			label: (
				<AppLink to={`/profile/${authData?._id}`}>
					<Text color='default'>Профиль</Text>
				</AppLink>
			),
			key: '1',
		},
		{
			label: <Text color='default'>Сменить тему</Text>,
			key: '2',
		},
		{
			label: <Text color='default'>Настройки</Text>,
			key: '3',
		},
		{
			label: <Text color='default'>Выйти</Text>,
			onClick: () => dispatch(logout()),
			key: '4',
		},
	]

	return (
		<nav className={cls.nav}>
			<ul className={cls.list}>
				{navMenuItems.map(item => (
					<li key={item.iconType}>
						{item.href ? (
							<Link to={item.href} className={cls.link}>
								<Icon type={item.iconType} />
							</Link>
						) : (
							<Icon type={item.iconType} onClick={item.onClick} />
						)}
					</li>
				))}

				<AddPostModal
					isOpen={isOpenAddPostModal}
					onClose={onCloseAddPostModal}
				/>

				<li>
					<SwitchButton />
				</li>
				<li>
					<LangSwitch />
				</li>
				<li>
					<DropDown items={dropDownItems} placement='bottomLeft'>
						<Avatar src={authData?.avatar} size={32} />
					</DropDown>
				</li>
			</ul>
		</nav>
	)
}
