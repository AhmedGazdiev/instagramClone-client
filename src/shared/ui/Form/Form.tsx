import { classNames } from '@/shared/lib/classNames'
import { type FC, type FormHTMLAttributes, type ReactNode } from 'react'
import cls from './Form.module.scss'

interface FromProps extends FormHTMLAttributes<HTMLFormElement> {
   children: ReactNode
   className?: string
}

export const Form: FC<FromProps> = (props) => {
   const { children, className = '', ...rest } = props
   return (
      <form className={classNames(cls.form, {}, [className])} {...rest}>{children}</form>
   )
}