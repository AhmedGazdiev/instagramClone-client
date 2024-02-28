import { HomePage, LoginLazyPage, ProfileLazyPage, RegisterLazyPage } from '@/pages'
import { Loading } from '@/shared/ui'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthLaout } from './AuthLaout'
import { AppLayout } from './AppLayout'

const router = () => {
  return (
    <>
      <Suspense fallback={<Loading className="spinner" />}>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/profile/:id' element={<ProfileLazyPage />} />
          </Route>
          <Route path='/' element={<AuthLaout />}>
            <Route path='/login' element={<LoginLazyPage />} />
            <Route path='/register' element={<RegisterLazyPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default router
