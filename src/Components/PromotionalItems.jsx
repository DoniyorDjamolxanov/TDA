import React from 'react'
import immg from "../assets/img.svg"

function PromotionalItems() {
  return (
    <>

      <div className="max-w-[1400px] m-auto flex  justify-between items-center mt-[12rem] hidden lg:flex   xl:ml-auto">


        <div className="grid gap-[1rem] w-[430px] mt-[-10rem] lg:ml-[2rem]">

          <h1 className='text-[36px] font-bold mt-[-8rem]'>Акционные товары</h1>
          <h3 className='text-[26px] font-bold'>Малина свежемороженая </h3>
          <p className='text-rgba(39,39,39,1) leading-[26px] lg'>Малина – очень вкусная и ароматная ягода. Она обладает жаропонижающим и противовоспалительным эффектом, богата железом, медью и витаминами А, Е, РР, В2. На производстве используется технология шоковой заморозки, что позволяет сохранить вкус, аромат и пользу свежих ягод.
            В свежем виде эта ягода – настоящее лакомство. Кроме того
            с ней можно готовить различные десерты и пироги.</p>
          <span className='flex  items-center gap-[2rem]'> <h1 className='text-[48px] font-bold text-green-600'>250 ₽/кг</h1> <s className='text-[24px] text-violet-600 font-bold'>350 ₽/кг</s> </span>
          <span className='flex gap-[2rem]'> <button className=' w-[190px] h-[50px] flex items-center justify-center  gap-[1rem] border-none  bg-[rgba(103,1,186,1)] text-white  rounded-lg text-xl'>В корзину</button>
            <button className=' text-xl w-[190px] h-[50px] gap-[1rem] border-[1.5px] rounded-lg border-[rgba(103,1,186,1)]'>Подробнее</button>
          </span>
        </div>

        <div className="">
          <img src={immg} alt="" className='lg:w-[600px] xl:w-auto' />
        </div>





      </div>



{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}



   <div className=" flex   flex-col  justify-center  mb-[2rem] flex-wrap lg:hidden ">


        <div className="grid  gap-[1rem]">

          <h1 className='text-[18px] font-bold mt-[8rem] text-center sm:text-[25px] sm:text-start ml-[2rem]'>Акционные товары</h1>
          
        <div className='m-auto'>
          <img src={immg} alt="" />
        </div>
          <h3 className='text-[16px] font-bold text-center sm:text-start sm:ml-[2rem] sm:text-[26px] '>Малина свежемороженая </h3>
          <p className='text-rgba(39,39,39,1) leading-[26px] text-[13px] w-[300px] m-auto text-center sm:text-start  sm:w-full sm:p-[2rem] sm:text-[15px] md:w-[700px] md:ml-[1rem]'>Малина – очень вкусная и ароматная ягода. Она обладает жаропонижающим и противовоспалительным эффектом, богата железом, медью и витаминами А, Е, РР, В2. На производстве используется технология шоковой заморозки, что позволяет сохранить вкус, аромат и пользу свежих ягод.
            В свежем виде эта ягода – настоящее лакомство. Кроме того
            с ней можно готовить различные десерты и пироги.</p>
          <span className='flex  items-center gap-[2rem] justify-center sm:justify-start  sm:ml-[2rem]'> <h1 className='text-[26px] font-bold text-green-600 sm:text-[35px]'>250 ₽/кг</h1> <s className='text-[20px] text-violet-600 font-bold sm:text-[25px]'>350 ₽/кг</s> </span>
          <span className='grid gap-[2rem] justify-center m-auto sm:flex sm:justify-start  sm:ml-[2rem]'>
             <button className=' w-[150px] h-[35px] flex items-center justify-center  gap-[1rem] border-none  bg-[rgba(103,1,186,1)] text-white  rounded-lg text-[15px] shadow-xl sm:w-[170px] sm:h-[50px]'>В корзину</button>
            <button className=' text-[15px] w-[150px] h-[35px]  border-[1.5px] rounded-lg border-[rgba(103,1,186,1)] shadow-xl sm:w-[170px]  sm:h-[50px]'>Подробнее</button>
          </span>
        </div>






      </div>


    </>
  )
}

export default PromotionalItems