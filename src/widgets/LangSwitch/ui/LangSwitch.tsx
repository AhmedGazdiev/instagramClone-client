import './language.scss'
import { useTranslation } from 'react-i18next'

export const LangSwitch = () => {
  const { i18n } = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
      <button className='language' onClick={toggleLang}>
         {i18n.language}
      </button>
  )
}
