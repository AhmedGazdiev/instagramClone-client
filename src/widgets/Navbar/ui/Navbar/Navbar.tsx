import { ThemeContext } from '@/app/provider'
import Logo from '@/shared/assets/Logo.png'
import { Theme } from '@/shared/consts/theme'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NavMenu, NavSearch } from '..'
import cls from './Navbar.module.scss'

export const Navbar = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<div className={cls.navbar}>
			<div className='container'>
				<div className={cls.wrap}>
					<Link to={'/'} className={cls.logo}>
						<img
							className={theme === Theme.DARK && cls.dark}
							src={Logo}
							alt=''
						/>
					</Link>
					<NavSearch />
					<NavMenu />
				</div>
			</div>
		</div>
	)
}
