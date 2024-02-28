import { classNames } from '@/shared/lib/classNames'
import cls from './AppLink.module.scss'
import { FC, ReactNode } from 'react'
import { LinkProps, NavLink } from 'react-router-dom'

type AppLinkProps = {
   className?: string
   children: ReactNode
} & LinkProps

export const AppLink: FC<AppLinkProps> = (props) => {
   const { to, children, className = '', ...rest } = props

   return (
      <NavLink
         to={to}
         className={classNames(cls.appLink, {}, [className])}
         {...rest}
      >
         {children}
      </NavLink>
   )
}