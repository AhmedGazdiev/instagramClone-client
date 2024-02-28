import Logo from '@/shared/assets/Logo.png'
import { NavMenu, NavSearch } from '..'
import cls from './Navbar.module.scss'
import { ThemeContext } from '@/app/provider'
import { useContext } from 'react'
import { Theme } from '@/shared/consts/theme'
import { Link } from 'react-router-dom'
import { Text } from '@/shared/ui'

export const Navbar = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={cls.navbar}>
      <div className="container">
        <div className={cls.wrap}>
          <Link to={'/'} className={cls.logo}>
            <img className={theme === Theme.DARK && cls.dark} src={Logo} alt="" />
            <Text size={14} fw={700} color='blue'>.CLONE</Text>
          </Link>
          <NavSearch />
          <NavMenu />
        </div>
      </div>
    </div>
  )
}
