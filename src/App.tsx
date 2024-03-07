import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Homepage from './pages/HomePage/homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Header/>
     <Homepage/>
     <Footer/>
    </div>
     
    </>
  )
}

export default App
