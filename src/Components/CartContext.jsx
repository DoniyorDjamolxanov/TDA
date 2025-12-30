import React, { createContext, useState } from 'react'

export const CartContext = createContext()
export default function CartProvider({ children }) {

  const [cart, setCart] = useState([])

  const AddtoCard = (product) => {
    setCart(prevCart => {
const item = prevCart.find(el=> el.id === product.id)

if(item){
  return prevCart.map(el =>
    el.id === product.id
    ? {... el, count: el.count + 1}
    : el
  )
  
}
return [...prevCart, {...product, count: 1}]

    })
 
  }
  return (
    <>
      <CartContext.Provider value={{ cart, AddtoCard }}>
        {children}
      </CartContext.Provider>
    </>
  )
}