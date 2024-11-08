import { classNames, Mods } from '@/shared/lib/classNames'
import { Text } from '@/shared/ui'
import { forwardRef, ReactNode, type FC, type InputHTMLAttributes } from 'react'
import cls from './Input.module.scss'

interface InputProps
	extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
	className?: string
	error?: string
	value: string
	textarea?: boolean
	children?: ReactNode
}

export const Input: FC<InputProps> = forwardRef((props, ref: any) => {
	const {
		className = '',
		error,
		value = '',
		placeholder,
		textarea = false,
		...rest
	} = props

	const mods: Mods = {
		[cls.active]: value,
		[cls.errorField]: error,
		[cls.textareaActive]: textarea,
	}

	return (
		<div className={classNames(cls.field, mods, [className])}>
			<div className={cls.label}>
				{textarea ? (
					<textarea ref={ref} defaultValue={value} {...rest} />
				) : (
					<input ref={ref} defaultValue={value} {...rest} />
				)}

				{placeholder && (
					<Text as='span' className={cls.placeholder}>
						{placeholder}
					</Text>
				)}
			</div>
			{error && (
				<Text as='span' className={classNames(cls.error, mods, [])}>
					{error}
				</Text>
			)}
		</div>
	)
})
