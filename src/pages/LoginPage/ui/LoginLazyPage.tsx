import { lazy } from 'react'

const LoginLazyPage = lazy(
  async () => 
  await new Promise((res) => {
  // @ts-ignore
  setTimeout(() => res(import('./LoginPage')), 1000)
}))

export default LoginLazyPage
