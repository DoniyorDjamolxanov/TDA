import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Router, Link, Routes, Navigate } from 'react-router-dom'
import "./Style.css"
import Producs from './Components/Producs'
import SinglePage from './Components/SinglePage'
import Home from './Home'
import DairyProducts from './Components/DairyProducts'
import CartProvider from './Components/CartContext'
import MeatProducts from './Components/MeatProducts'
import Basket from './Components/Basket'
function App() {

  return (
    <>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart/:id' element={<SinglePage />} />
          <Route path='/MeatProduct' element={<MeatProducts />} />
          <Route path='/DailyProduct' element={<DairyProducts />} />
          <Route path='/basket' element={< Basket />} />
        </Routes>
      </CartProvider>
    </>
  )
}

export default App