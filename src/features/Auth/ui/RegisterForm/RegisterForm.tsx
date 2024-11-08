import { ThemeContext } from '@/app/provider'
import Logo from '@/shared/assets/Logo.png'
import { Theme } from '@/shared/consts/theme'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import {
	AppLink,
	Button,
	Form,
	HStack,
	Icon,
	Input,
	Text,
	VStack,
} from '@/shared/ui'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
	RegisterFormNames,
	type RegisterFormValues,
	useRegisterForm,
} from '../../model/schema/useRegisterForm'
import { getAuthError } from '../../model/selectors/getAuthError'
import { getAuthLoading } from '../../model/selectors/getAuthLoading'
import { registerByEmail } from '../../model/service/registerByEmail'
import cls from './RegisterForm.module.scss'

export const RegisterForm = () => {
	const { theme } = useContext(ThemeContext)
	const { t } = useTranslation('RegisterPage')
	const { register, watch, handleSubmit, errors, isValid } = useRegisterForm()

	const dispatch = useAppDispatch()
	const authError = useSelector(getAuthError)
	const authLoading = useSelector(getAuthLoading)
	const navigate = useNavigate()

	const onSubmit = async (data: RegisterFormValues) => {
		const res = await dispatch(registerByEmail(data))

		if (res.meta.requestStatus === 'fulfilled') {
			navigate('/login')
		}
	}

	return (
		<HStack justify='center'>
			<VStack className={cls.auth} gap={12}>
				<VStack className={cls.authTop} align='center'>
					<img
						className={Theme.DARK === theme && cls.dark}
						src={Logo}
						alt='Logo'
					/>

					<VStack align='center' gap={16} className={cls.formTop}>
						<Text as='span' size={14}>
							{t(
								'Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.'
							)}
						</Text>
						<Button variant='outline' max addonLeft={<Icon type='Facebook' />}>
							{t('Войти через Facebook')}
						</Button>
						<Text>{t('Или')}</Text>
					</VStack>
					<Form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
						<VStack gap={12} align='center'>
							<Input
								{...register(RegisterFormNames.EMAIL)}
								value={watch(RegisterFormNames.EMAIL)}
								error={errors?.email?.message}
								type='text'
								placeholder={t('Телефон, или эл.адрес')}
							/>
							<Input
								{...register(RegisterFormNames.FULLNAME)}
								value={watch(RegisterFormNames.FULLNAME)}
								error={errors?.fullname?.message}
								type='text'
								placeholder={t('Имя и фамилия')}
							/>
							<Input
								type='text'
								{...register(RegisterFormNames.USERNAME)}
								value={watch(RegisterFormNames.USERNAME)}
								error={errors?.username?.message}
								placeholder={t('Имя пользователя')}
							/>
							<Input
								{...register(RegisterFormNames.PASSWORD)}
								value={watch(RegisterFormNames.PASSWORD)}
								error={errors?.password?.message}
								type='password'
								placeholder={t('Пароль')}
							/>
							<Input
								{...register(RegisterFormNames.CF_PASSWORD)}
								value={watch(RegisterFormNames.CF_PASSWORD)}
								error={errors?.cf_password?.message}
								type='password'
								placeholder={t('Повторите пароль')}
							/>

							<Text size={14} color='gray' fw={400} className={cls.desc}>
								{t(
									'Регистрируясь, вы принимаете Условия. Прочитайте Политика конфидициальности, чтобы узнать, как мы получаем, используем и передаем ваши данные. Также просмотрите Политику в отношении файлов cookie, чтобы узнать, как мы используем файлы cookie и подобные технологии.'
								)}
							</Text>
							{authError && (
								<Text className={cls.formError} color='red'>
									{authError}
								</Text>
							)}
							<Button
								disabled={!isValid && authLoading}
								type='submit'
								max
								loading={authLoading}
							>
								{t('Регистрация')}
							</Button>
							<VStack gap={16} align='center'>
								<AppLink to='/forgot'>
									<Text>{t('Забыли пароль?')}</Text>
								</AppLink>
							</VStack>
						</VStack>
					</Form>
				</VStack>

				<HStack
					className={cls.authBottom}
					align='center'
					gap={12}
					justify='center'
				>
					<Text as='span' size={13}>
						{t('Есть аккаунт?')}
					</Text>
					<AppLink to='/login'>
						<Text color='blue' size={14}>
							{t('Вход')}
						</Text>
					</AppLink>
				</HStack>
			</VStack>
		</HStack>
	)
}
