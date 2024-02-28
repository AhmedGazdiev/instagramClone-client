import { forwardRef, type FC, type InputHTMLAttributes } from 'react'
import cls from './Input.module.scss'
import { Text } from '@/shared/ui'
import { Mods, classNames } from '@/shared/lib/classNames'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   className?: string
   error?: string
   value: string
}

export const Input: FC<InputProps> = forwardRef((props, ref: any) => {
   const { className = '', value = '', error, placeholder, ...rest } = props

   const mods: Mods = {
      [cls.active]: value,
      [cls.errorField]: error
   }

   return (
      <div className={classNames(cls.field, mods, [className])}>
         <div className={cls.label}>
            <input ref={ref} value={value} {...rest} />

            {placeholder && <Text as='span' className={cls.placeholder}>{placeholder}</Text>}
         </div>

         {error && <Text as='span' className={classNames(cls.error, { [cls.errorActive]: error }, [])}>{error}</Text>}
      </div>
   )
})