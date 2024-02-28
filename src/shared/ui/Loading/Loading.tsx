import { FC } from 'react'
import cls from './Loading.module.scss'
import { classNames } from '@/shared/lib/classNames'

type sizeType = 'm' | 's' | 'l' | 'xl'
type variantType = 'primary' | 'default' | 'gray' | 'white'

interface LoadingProps {
   className?: string
   size?: sizeType
   variant?: variantType
}

export const Loading: FC<LoadingProps> = (props) => {
   const { className, size = 's', variant } = props

   const sizeClasses: Record<sizeType, string> = {
      m: cls.m,
      s: cls.s,
      l: cls.l,
      xl: cls.xl
   }

   const variantClasses: Record<variantType, string> = {
      default: cls.default,
      gray: cls.gray,
      primary: cls.primary,
      white: cls.white
   }

   const classes = [
      size && sizeClasses[size],
      variant && variantClasses[variant]
   ]

   return (
      <div className={className}>
      <div className={classNames(cls.ldsEllipsis, {}, classes)}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
   )
}