import { ThemeContext } from '@/app/provider'
import { createPost } from '@/entities/PostCard'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { checkImages } from '@/shared/lib/checkImages'
import { Form, HStack, Icon, Input, Text, VStack } from '@/shared/ui'
import { Button, message, Modal } from 'antd'
import { FC, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
	AddPostModalFormNames,
	AddPostModalFormValues,
	useAddPostModalSchema,
} from '../useAddPostModalSchema'
import cls from './AddPostModal.module.scss'

interface AddPostModalProps {
	isOpen: boolean
	onClose: () => void
}

export const AddPostModal: FC<AddPostModalProps> = ({ isOpen, onClose }) => {
	const { theme } = useContext(ThemeContext)
	const { t } = useTranslation('')
	const { register, watch, handleSubmit, errors, isValid, isSubmitting } =
		useAddPostModalSchema()
	const [images, setImages] = useState([])
	const dispatch = useAppDispatch()

	const handleChangeImages = (e: any) => {
		const files = [...e.target.files]

		const { err, newImages } = checkImages(files)

		if (err) return message.error(err)

		setImages([...images, ...newImages])
	}

	const handleDeleteImage = (index: number) => {
		const newImages = [...images]
		newImages.splice(index, 1)
		setImages(newImages)
	}

	const onSubmit = async (data: AddPostModalFormValues) => {
		if (images.length < 0) return message.error('Изображения не добавлены')

		await dispatch(createPost({ images, content: data.content }))
		setImages([])
		onClose()
	}

	return (
		<>
			<Modal
				title={
					<Text fw={700} size={18} color='default'>
						Добавить пост
					</Text>
				}
				footer={false}
				open={isOpen}
				onCancel={onClose}
				centered
			>
				<Form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
					<VStack gap={16} align='end'>
						<Input
							{...register(AddPostModalFormNames.CONTENT)}
							value={watch(AddPostModalFormNames.CONTENT)}
							error={errors?.content?.message}
							textarea
							placeholder='Введите текст'
							className={cls.textarea}
						/>

						{images.length > 0 && (
							<HStack gap={8} wrap='wrap'>
								{images.map((img, index) => (
									<div className={cls.image} key={Math.random()}>
										<img src={URL.createObjectURL(img)} alt='img' />
										<span onClick={() => handleDeleteImage(index)}>
											&times;
										</span>
									</div>
								))}
							</HStack>
						)}

						<HStack>
							<label htmlFor='files' className={cls.media}>
								<HStack gap={12}>
									<input
										type='file'
										id='files'
										accept='image/*, video/*'
										onChange={handleChangeImages}
										multiple
									/>
									<Icon type='Clip' />
									<Icon type='Camera' />
								</HStack>
							</label>
							<HStack justify='end'>
								<Text as='span' size={12} color={'default'}>
									<Text as='span' color={errors?.content ? 'red' : 'default'}>
										{watch(AddPostModalFormNames.CONTENT)?.length}
									</Text>
									/ 200
								</Text>
							</HStack>
						</HStack>
						<Button
							htmlType='submit'
							type='primary'
							disabled={!isValid}
							loading={isSubmitting}
						>
							Добавить
						</Button>
					</VStack>
				</Form>
			</Modal>
		</>
	)
}
