import { Loading } from '@/shared/ui'
import cls from './PageLoader.module.scss'
import { useSelector } from 'react-redux'
import { getAuthLoading } from '@/entities/User'

export const PageLoader = () => {
   const laoding = useSelector(getAuthLoading)

   if (laoding) {
      return (
         <div className={cls.pageLoader}>
            <Loading size='xl' />
         </div>
      )
   }
   return null
}
