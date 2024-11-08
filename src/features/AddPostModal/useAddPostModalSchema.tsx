import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'

export enum AddPostModalFormNames {
	CONTENT = 'content',
}

export interface AddPostModalFormValues {
	content?: string
}

export const useAddPostModalSchema = () => {
	const schema = yup.object().shape({
		content: yup
			.string()
			.required('Поле не может быть пустым')
			.min(30, 'Минимум 30 символов')
			.max(200, 'Максимум 200 символов'),
	})

	const {
		register,
		watch,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
	} = useForm<AddPostModalFormValues>({
		mode: 'onChange',
		resolver: yupResolver(schema),
		defaultValues: {
			content: '',
		},
	})

	return {
		register,
		watch,
		AddPostModalFormNames,
		handleSubmit,
		errors,
		isValid,
		isSubmitting,
	}
}
