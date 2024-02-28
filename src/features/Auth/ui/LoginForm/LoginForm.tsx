import { AppLink, Button, Form, HStack, Icon, Input, Text, VStack } from '@/shared/ui'
import cls from './LoginForm.module.scss'
import Logo from '@/shared/assets/Logo.png'
import { useContext } from 'react'
import { Theme } from '@/shared/consts/theme'
import { ThemeContext } from '@/app/provider'
import { useTranslation } from 'react-i18next'
import { type LoginFormValues, useLoginForm } from "../../model/schema/useLoginForm";
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useNavigate } from 'react-router-dom'
import { loginByEmail } from '../../model/service/loginByEmail'
import { useSelector } from 'react-redux'
import { getAuthError } from '../../model/selectors/getAuthError'
import { getAuthLoading } from '../../model/selectors/getAuthLoading'

export const LoginForm = () => {
  const { t } = useTranslation('LoginPage')
  const { theme } = useContext(ThemeContext)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const authError = useSelector(getAuthError)
  const authLoading = useSelector(getAuthLoading)
  
  const { register, watch, handleSubmit, isValid, errors, LoginFormNames } = useLoginForm()

  const onSubmit = async (data: LoginFormValues) => {
    const res = await dispatch(loginByEmail(data))

    if (res.meta.requestStatus === 'fulfilled') {
      navigate('/')
    }
  }

  return (
    <HStack justify='center'>
      <VStack className={cls.auth} gap={12}>
        <VStack className={cls.authTop} align='center'>
          <img className={Theme.DARK === theme && cls.dark} src={Logo} alt="Logo" />
          <Form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
            <VStack gap={16} align='center'>
              <Input
                {...register(LoginFormNames.EMAIL)}
                value={watch(LoginFormNames.EMAIL)}
                error={errors?.email?.message}
                placeholder={t('Телефон, имя пользователя или эл.адрес')}
              />
              <Input
                {...register(LoginFormNames.PASSWORD)}
                value={watch(LoginFormNames.PASSWORD)}
                error={errors?.password?.message}
                type='password'
                placeholder={t('Пароль')}
              />
              {authError && <Text className={cls.formError} color='red'>{authError}</Text>}
              <Button className={cls.btn} type='submit' loading={authLoading} max disabled={!isValid && authLoading}>Войти</Button>
              <Text>Или</Text>

              <VStack gap={16} align='center'>
                <Button
                  variant='outline'
                  max
                  addonLeft={<Icon type='Google' />}
                >
                  Войти через Google
                </Button>
                <Button
                  variant='outline'
                  max
                  addonLeft={<Icon type='Facebook' />}
                >
                  Войти через Facebook
                </Button>
                <AppLink to='/forgot'><Text>Забыли пароль?</Text></AppLink>
              </VStack>
            </VStack>
          </Form>
        </VStack>

        <HStack className={cls.authBottom} align='center' gap={12} justify='center'>
          <Text as='span' size={13}>У вас еще нет аккаунта?</Text>
          <AppLink to='/register'>
            <Text color='blue' size={14}>Зарегистрироваться</Text>
          </AppLink>
        </HStack>
      </VStack>
    </HStack>
  )
}