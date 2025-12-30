import React from 'react'
import V from "../assets/vgg.svg"
import L from "../assets/lgg.svg"
import Kubok from "../assets/Kubk.svg"
function News() {
  return (
    <>

      <div className=" w-[1400px] m-auto grid gap-[3rem] mt-[6rem] mb-[6rem] hidden">
        <h1 className='font-bold  text-[36px] '>Новости</h1>

        <div className="flex justify-between">

          <span className=' w-[410px] h-[405] flex flex-col gap-[1rem] p-[0.5rem] hover:shadow-xl '>
            <img src={V} alt="" />

            <p className='text-gray-500'>15.12.2021</p>

            <p className=' font-bold text-[18px]'>«Самое ценное в нашем мире —
              овощи»</p>
          </span>

          <span className=' w-[410px] h-[405px] flex flex-col gap-[1rem] hover:shadow-xl p-[0.5rem] rounded-lg '>
            <img src={L} alt="" />

            <p className='text-gray-500'>15.12.2021</p>

            <p className=' font-bold text-[18px]'> Чувсто вкуса </p>
          </span>

          <span className=' w-[410px] h-[415px] flex flex-col gap-[1rem] hover:shadow-xl p-[0.5rem]  rounded-lg '>
            <img src={Kubok} alt="" />

            <p className='text-gray-500'>15.12.2021</p>

            <p className=' font-bold text-[18px]'>“TDA” установила новый мировой
              рекорд Гиннесса</p>
          </span>


        </div>
      </div>

{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    <div className=" m-auto grid gap-[3rem] mt-[6rem] mb-[6rem] justify-center ">
        <h1 className='font-bold  text-[19px] text-center'>Новости</h1>

        <div className="flex flex-wrap  justify-center lg:gap-[2rem] xl:gap-[6rem]">

          <span className=' w-[300px] flex flex-col gap-[1rem] p-[0.5rem] hover:shadow-xl lg:w-[410px] '>
            <img src={V} alt="" />

            <p className='text-gray-500 text-[13px]'>15.12.2021</p>

            <p className=' font-bold text-[15px]'>«Самое ценное в нашем мире —
              овощи»</p>
          </span>

          <span className=' w-[300px]  flex flex-col gap-[1rem] hover:shadow-xl p-[0.5rem] rounded-lg lg:w-[410px]'>
            <img src={L} alt="" />

            <p className='text-gray-500 text-[13px]'>15.12.2021</p>

            <p className=' font-bold text-[15px]'> Чувсто вкуса </p>
          </span>

          <span className=' w-[300px]  flex flex-col gap-[1rem] hover:shadow-xl p-[0.5rem]  rounded-lg lg:w-[410px]'>
            <img src={Kubok} alt="" />

            <p className='text-gray-500 text-[13px]'>15.12.2021</p>

            <p className=' font-bold text-[15px]'>“TDA” установила новый мировой
              рекорд Гиннесса</p>
          </span>


        </div>
      </div>


    </>
  )
}

export default News