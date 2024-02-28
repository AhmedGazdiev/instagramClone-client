import { lazy } from 'react'

const RegisterLazyPage = lazy(
  async () => 
  await new Promise((res) => {
  // @ts-ignore
  setTimeout(() => res(import('./RegisterPage')), 1000)
}))

export default RegisterLazyPage
