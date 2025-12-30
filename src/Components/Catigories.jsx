import React from 'react'
import Milk from "../assets/Milk.svg"
import Meat from "../assets/Meat.svg"
import Vegetables from "../assets/Vg.svg"
import Blueberies from "../assets/bl.svg"
import { Link } from 'react-router-dom'
function Catigories() {
  return (
    <>


      <div className="bg-gray-100 mt-[5rem] h-auto flex  flex-col  justify-center mt-[1rem]  p-[2rem] ">
        <h1 className='font-bold text-[20px]  m-auto mb-[3rem]'>Популярные категории</h1>
        <img src="" alt="" />

        <div className=" m-auto flex justify-center gap-[2rem] items-center   flex-wrap
 ">

          <span className='h-[200px] rounded-lg shadow-xl bg-gray-200/50 md:h-[250px]'>
            <Link to={"DailyProduct"}> <img src={Milk} alt="" className='w-[240px] md:w-[300px]'/></Link>
            <p className=' text-center justify-center mt-[1rem] text-[13px] font-bold md:text-[18px]'>Молочная продукция</p>
          </span>

          <span className='h-[200px] rounded-lg shadow-xl md:h-[250px]'>
            <Link to={"MeatProduct"}><img src={Meat} alt="" className='w-[240px] md:w-[300px]'/></Link>
            <p className=' text-center justify-center mt-[1rem] text-[13px] font-bold md:text-[18px]'>Мясная продукция</p>
          </span>
          <span className='h-[200px] rounded-lg shadow-xl md:h-[250px]'>
            <Link><img src={Vegetables} alt="" className='w-[240px] md:w-[300px]'/></Link>
            <p className=' text-center justify-center mt-[1rem] text-[13px] font-bold md:text-[18px]'>Овощи</p>
          </span>
          <span className='h-[200px] rounded-lg shadow-xl md:h-[250px]'>
            <Link><img src={Blueberies} alt="" className='w-[240px] md:w-[300px]'/></Link>
            <p className=' text-center justify-center mt-[1rem] text-[13px] font-bold md:text-[18px]'>Ягоды</p>
          </span>
        </div>
      </div>
    </>
  )
}

export default Catigories