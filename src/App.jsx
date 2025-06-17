import { useState } from 'react'
import ScrollComponent from './components/scrollcomponent/ScrollComponent'
import Main from './components/main/Main'
import Footer from './components/footer/Footer.jsx'
import '@fontsource/inter';


function App() {
  return(
    <>
      <ScrollComponent />
      <Main />
      <Footer />
    </>
  )
}

export default App
