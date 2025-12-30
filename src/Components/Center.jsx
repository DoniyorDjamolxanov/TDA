import React from 'react'
import line from "../assets/sss.svg"
import Data from '../Static/Static'
import { Link } from 'react-router-dom'
function Center() {
  return (
    <>

      <div className="flex items-center justify-between m-auto  mt-[3rem] sm:justify-center 2xl:gap-[15rem]">



<div className="hidden sm:block xl:hidden">
  {Data.slice(7,8).map((item, index)=> <img src={item.image} key={index} alt="" className='w-[500px] md:w-[600px] h-[] lg:w-[650px]'/> )}
</div>


        <div className="flex flex-col gap-[0.5rem]  w-[320px] m-auto text-center xl:justify-start xl:items-start xl: text-start xl:w-[440px] sm:mr-[2rem] ">
          <h1 className='text-[28px] text-[rgba(130,186,1,1)] lg md:text-[35px] font-bold xl:text-[46px]'>250 ₽/шт</h1>
          <h1 className=' text-[20px] font-bold md:text-[25px] xl:text-[36px]'>Корнишоны
            «Кубаночка»</h1>
          <p className='text-[13px] text-[rgba(168,168,168,1)] md:text-[16px]    xl:text-[18px]'>(1-3 см) 680 г. 1/8 </p>
          <p className='text-[13px] md:text-[16px]  xl:text-[18px]'>Корнишоны "Кубаночка" настоящая находка. Огурчики упругие, довольно
            плотные, очень хрустящие. Рассол
            в меру пряный с низким содержанием
            уксуса. Отлично влияют на пищеварение, повышают аппетит. Среди
            составляющих огурцов есть калий, который необходим
            для нормальной
            работоспособности мышц сердца
            и почек. </p>
          <span className=' flex  items-center justify-around mt-[1rem] xl:gap-[2rem]'>
            <button className=' w-[100px] h-[35px] flex items-center justify-center  gap-[1rem] border-none  bg-[rgba(103,1,186,1)] text-white  rounded-lg text-[13px] xl:w-[190px] xl:h-[50px] xl:text-[20px] lg:w-[150px] lg:h-[50px]'>В корзину</button>

            <button className=' text-[13px] w-[100px] h-[35px] gap-[1rem] border-[1.5px] rounded-lg border-[rgba(103,1,186,1)] lg:w-[150px] lg:h-[50px] xl:w-[190px] xl:h-[50px] xl:text-[20px]'>Подробнее</button>
          </span>
        </div>
        <div className="hidden xl:block">
          <img src={line} alt="" className=' absolute ml-[2rem] mt-[1rem]' />
          <div className="flex gap-[3rem] mr-[9rem] mt-[17rem]">

            {
              Data.slice(6, 7).map((item) => <img src={item.image} alt="" className='w-[90px] h-[92px] z-[1] rounded-full  border-[5px] border-white  mt-[-6rem]  shadow-xl' />)
            }
            {Data.slice(8, 9).map((item) => <img src={item.image} alt="" className='w-[90px] h-[92px] z-[1] rounded-full  border-[5px] border-white  mt-[-16rem] shadow-xl' />)
            }
            {Data.slice(5, 6).map((item) => <img src={item.image} alt="" className='w-[90px] h-[92px] z-[1]  rounded-full  border-[5px] border-white mt-[-18rem]  shadow-xl' />)
            }
            {Data.slice(1, 2).map((item) => <img src={item.image} alt="" className='w-[90px] h-[92px] z-[1]  rounded-full  border-[5px] border-white  mt-[-16rem] shadow-xl' />)
            }
            {Data.slice(4, 5).map((item) => <img src={item.image} alt="" className='w-[90px] h-[92px] z-[1]  rounded-full  border-[5px] border-white  mt-[-6rem] shadow-xl' />)
            }
          </div>
          {Data.slice(7, 8).map((item) => <img src={item.image} alt="" className='w-[223px] h-[228px] rounded-full z-[1]  border-[15px] border-white  ml-[13rem] mt-[-6rem] shadow-xl' />)
          }
        </div>






      </div>




      <div className=" w-[1100px] h-[1000px] rounded-[650px] absolute  z-[-1] mt-[-68rem] ml-[40.5rem] bg-gradient-to-t from-gray-200/50 to-transparent hidden 2xl:block"></div>
    </>
  )
}

export default Center