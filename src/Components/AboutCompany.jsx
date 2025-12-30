import React from 'react'
import Money from "../assets/Money.svg"
import Delivery from "../assets/Delivery.svg"
import Dimond from "../assets/Dimond.svg"
function AboutCompany() {
  return (
    <>
      <div className=" bg-[rgba(249,249,249,1)] h-[455px] flex hidden">
        <div className=" w-[1400px] m-auto flex justify-between  items-center ">
          <div className="grid gap-[3rem]">
            <h1 className='text-[36px] font-bold '>О компании</h1>
            <p className='w-[520px] leading-[26px]'>Ясность нашей позиции очевидна: укрепление и развитие внутренней структуры обеспечивает широкому кругу (специалистов) участие в формировании модели развития. Экономическая повестка сегодняшнего дня прекрасно подходит для реализации экономической целесообразности принимаемых решений.
              Как принято считать, предприниматели в сети интернет формируют глобальную экономическую сеть и при этом -  разоблачены!</p>
          </div>
          <div className=" flex gap-[4rem]">


            <span className='w-[190px] h-[150px] shadow-xl flex flex-col items-center gap-[1rem] justify-center '><img src={Money} alt="" /> <p className='text-[15px] font-bold text-center'>Оптовые цены</p></span>

            <span className='w-[190px] h-[150px] shadow-xl flex flex-col items-center gap-[1rem] justify-center '><img src={Delivery} alt="" /> <p className='text-[15px] font-bold text-center'>Доставка по городу
              и краю</p></span>

            <span className='w-[190px] h-[150px] shadow-xl flex flex-col items-center gap-[1rem] justify-center '><img src={Dimond} alt="" /> <p className='text-[15px] font-bold text-center'>15 лет на рынке</p></span>
          </div>
        </div>
      </div>

{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}




   <div className=" bg-[rgba(249,249,249,1)]">
        <div className="grid gap-[5rem] md:flex xl:ml-[7rem]">
          
          <div className="grid gap-[3rem] sm:gap-[1rem]  ">
            <h1 className='text-[18px] font-bold text-center sm:mt-[2rem] lg:text-[36px] lg:mr-[15rem] md:text-[25px] '>О компании</h1>
            <p className='w-[300px] leading-[26px] text-[13px] text-center m-auto sm:w-full p-[2rem] md:w-[520px] md:text-start md:mb-[20rem] xl:mb-auto lg:text-[15px]'>Ясность нашей позиции очевидна: укрепление и развитие внутренней структуры обеспечивает широкому кругу (специалистов) участие в формировании модели развития. Экономическая повестка сегодняшнего дня прекрасно подходит для реализации экономической целесообразности принимаемых решений.
              Как принято считать, предприниматели в сети интернет формируют глобальную экономическую сеть и при этом -  разоблачены!</p>
          </div>
          <div className=" flex flex-wrap gap-[4rem] m-auto justify-center md:ml-[-5rem]">


            <span className='w-[280px] h-[150px] shadow-xl flex flex-col items-center gap-[1rem] justify-center '><img src={Money} alt="" /> <p className='text-[13px] font-semibold text-center'>Оптовые цены</p></span>

            <span className='w-[280px] h-[150px] shadow-xl flex flex-col items-center gap-[1rem] justify-center '><img src={Delivery} alt="" /> <p className='text-[13px] font-semibold text-center'>Доставка по городу
              и краю</p></span>

            <span className='w-[280px] h-[150px] shadow-xl flex flex-col items-center gap-[1rem] justify-center '><img src={Dimond} alt="" /> <p className='text-[13px] font-semibold text-center'>15 лет на рынке</p></span>
          </div>
        </div>
      </div>




    </>
  )
}

export default AboutCompany