import React, { useContext, useState } from 'react'
import Data from "../Static/Static"
import Navbar from './Navbar'
import { CartContext } from './CartContext'
import Basket from './Basket'
import Footer from './Footer'
import BottomNavigationBar from './BottomNavigationBar'
import { useEffect } from 'react'
function MeatProducts() {
          const [screen, setScreen] = useState(window.innerWidth)
  
    useEffect(()=> {
  const HandleScreen = ()=> setScreen(window.innerWidth)
  window.addEventListener("resize", HandleScreen)
  return ()=> window.removeEventListener("resize", HandleScreen)
    },[])

  const { AddtoCard } = useContext(CartContext)
 

  return (
    <>
      <Navbar />
      <div className=" w-[1400px] m-auto  flex gap-[3rem] flex-wrap mt-[6rem] mb-[6rem] hidden">
        {

          Data.filter((item) => item.catigories == "Meat").map((item, index) => (

            <div className="w-[300px] h-[415px] shadow-xl rounded" key={index}>
              <img src={item.image} alt="" className='w-[300px] h-[300px] ' />

              <div className="ml-[1.5rem] grid gap-[1rem]">
                <h1 className='text-[18px] font-semibold'>{item.name}</h1>
                <span className=' flex items-center gap-[3rem]'>
                  <span className=' grid '>
                    <s className='text-[rgba(103,1,186,1)] text-[17px]'>{item.price + 40}₽</s>
                    <p className='text-[22px] font-bold w-[50px] flex'>{item.price} ₽</p>
                  </span>

                  <button onClick={() => AddtoCard(item)} className=' text-xl w-[120px] h-[40px] gap-[1rem] border-[1.5px] rounded-lg border-[rgba(103,1,186,1)] '> В корзинку</button>
                </span>
              </div>
            </div>


          ))
        }</div>

    <div className="  m-auto  flex justify-center gap-[3rem] flex-wrap mt-[6rem] mb-[6rem] ">
        {

          Data.filter((item) => item.catigories == "Meat").map((item, index) => (

            <div className="w-[300px] h-[415px] shadow-xl rounded" key={index}>
              <img src={item.image} alt="" className='w-[300px] h-[300px] ' />

              <div className="ml-[1.5rem] grid gap-[1rem]">
                <h1 className='text-[18px] font-semibold'>{item.name}</h1>
                <span className=' flex items-center gap-[3rem]'>
                  <span className=' grid '>
                    <s className='text-[rgba(103,1,186,1)] text-[17px]'>{item.price + 40}₽</s>
                    <p className='text-[22px] font-bold w-[50px] flex'>{item.price} ₽</p>
                  </span>

                  <button onClick={() => AddtoCard(item)} className=' text-xl w-[120px] h-[40px] gap-[1rem] border-[1.5px] rounded-lg border-[rgba(103,1,186,1)] '> В корзинку</button>
                </span>
              </div>
            </div>


          ))
        }</div>
      

      <Footer/>

    {screen <= 650 && <BottomNavigationBar/>}
    </>
  )
}

export default MeatProducts