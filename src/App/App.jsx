
import { initReactI18next } from 'react-i18next'
import Content from '../layout/Content'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import translationEn from '../Locales/translationEn'
import translationRu from '../Locales/translationRu'
import translationUz from '../Locales/translationUz'
import i18n from "i18next"



i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: translationUz },
    ru: { translation: translationRu },
    en: { translation: translationEn }
  },
  lng: "uz",
  fallbackLng: "uz"
})

function App() {



  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  )
}

export default App
