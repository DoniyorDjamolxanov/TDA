  import React, { useEffect, useState } from 'react'
  import Navbar from './Components/Navbar'
  import Producs from './Components/Producs'
  import Center from './Components/Center'
  import Catigories from './Components/Catigories'
  import CartProvider from './Components/CartContext'
  import Basket from './Components/Basket'
  import PromotionalItems from './Components/PromotionalItems'
  import AboutCompany from './Components/AboutCompany'
  import News from './Components/News'
  import Footer from './Components/Footer'
import BottomNavigationBar from './Components/BottomNavigationBar'
import App from './App'

  export default function Home() {
   const [screen, setScreen] = useState(window.innerWidth)

   useEffect(()=>{
const HandleSubmit = ()=> setScreen(window.innerWidth)
window.addEventListener("resize", HandleSubmit)
return () => window.removeEventListener("resize", HandleSubmit)
   },[])

    return (
      <div className='overflow-hidden'>


  <Navbar/>
  <Producs/>
  <Center/>
  <Catigories/>
  <PromotionalItems/>
      <AboutCompany/>
      <News/>
      <Footer/>
    {screen <=760 && <BottomNavigationBar/>}
   
      </div>
    )
  }
