import { FC, ReactNode } from 'react'
import cls from './Modal.module.scss'
import { classNames } from '@/shared/lib/classNames'

interface ModalProps {
   isOpen: boolean
   onClose: () => void
   className?: string
   children: ReactNode
}

export const Modal: FC<ModalProps> = (props) => {
   const { isOpen, onClose, className = '', children } = props

   return (
      <div className={classNames(cls.modal, { [cls.modalActive]: isOpen }, [className])}>
         <div className={cls.box}>
            <button className={cls.close} onClick={onClose}>
               &times;
            </button>

            <div className={cls.content}>{children}</div>

         </div>
      </div>
   )
}
