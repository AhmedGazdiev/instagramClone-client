import { classNames } from '@/shared/lib/classNames'
import { CSSProperties, FC } from 'react'
import cls from './Skeleton.module.scss'

interface SkeletonProps {
	className?: string
	width?: number | string
	height?: number | string
	radius?: number | string
}

export const Skeleton: FC<SkeletonProps> = props => {
	const { className, width, height, radius } = props

	const styles: CSSProperties = {
		width,
		height,
		borderRadius: radius,
	}

	return (
		<div className={classNames(cls.skeleton, {}, [className])} style={styles} />
	)
}
