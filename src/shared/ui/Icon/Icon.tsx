import { ThemeContext } from '@/app/provider'
import { Theme } from '@/shared/consts/theme'
import { classNames } from '@/shared/lib/classNames'
import { useContext, type FC } from 'react'
import cls from './Icon.module.scss'
import { iconName, type IconType } from './IconName'

interface IconProps {
	type: IconType
	className?: string
	onClick?: () => void
}

export const Icon: FC<IconProps> = ({ type, className = '', onClick }) => {
	const { theme } = useContext(ThemeContext)

	return (
		<div
			onClick={onClick}
			className={classNames(cls.icon, { [cls.dark]: theme === Theme.DARK }, [
				className,
			])}
		>
			{iconName[type]}
		</div>
	)
}
