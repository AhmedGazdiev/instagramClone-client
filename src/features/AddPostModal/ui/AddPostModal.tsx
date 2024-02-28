import { FC } from 'react'
import { Modal } from 'antd'
import { Text } from '@/shared/ui'
import cls from './AddPostModal.module.scss'

interface AddPostModalProps {
   isOpen: boolean
   onClose: () => void
}

export const AddPostModal: FC<AddPostModalProps> = ({ isOpen, onClose }) => {

   return (
      <Modal
         title={<Text size={18} fw={700}>Добавить пост</Text>}
         footer={false}
         open={isOpen}
         onCancel={onClose}
      >
         <h1>Add Post</h1>
      </Modal>
   )
}
