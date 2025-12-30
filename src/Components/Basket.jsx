import React, { useContext, useState } from 'react'
import { CartContext } from './CartContext'
import png from "../assets/png.png"
function Basket({setOpen, open}) {
  
    const { cart } = useContext(CartContext)
    console.log(cart.length);
    
  return (
    <>
     
<div className=" flex flex-col w-[1000px] bg-gray-300 m-auto mt-[5rem] z-[100] gap-[1.5rem] p-[2rem] rounded-2xl">
  <h1 className='flex justify-center text-center text-[30px] font-bold'>Карзина</h1>
     { cart.length > 0 ? (
        cart.map((item, index )=> (
            <div className="" key={index}>
           <h1 className='text-25px font-bold'>{item.name}</h1>
            <h1>{item.count}</h1>
            </div>
           
        ))
      
     ) : (
         <img src={png} alt=""  className='w-[500px] h-[500px] flex m-auto'/>
     )
    }    
     <button onClick={()=> setOpen(false)}>Закрыть</button>
    </div>
    
    
    
    
    </>
  )
}

export default Basket