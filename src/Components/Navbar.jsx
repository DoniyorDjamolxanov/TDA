import React, { useState } from 'react'
import Logo from "../assets/logo.svg"
import Search from "../assets/Search.svg"
import navigaion from "../assets/navigation.svg"
import phone from "../assets/phone.svg"
import mail from "../assets/mail.svg"
import list from "../assets/list.svg"
import Ham from "../assets/Haam.svg"
import X from "../assets/X.svg"
import 'swiper/css';
import { Link, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import Basket from './Basket'


function Navbar() {
  const [open, setOpen] = useState(false)
   const [Hamm, setHamm] = useState(false)
  return (
    <>

      <nav className='   '>
        
        <div className="flex justify-between items-center  bg-white gap-[1rem]  m-[auto] p-[1rem] max-w-[1350px] m-auto">
          
          <Link to={"/"}><img src={Logo} alt="" className='w-[130px] h-[65px]'  /></Link>

          <span className='flex w-[320px]'>
            <input type="text" name="" id="" className='bg-gray-200 text-gray-500 w-[220px] h-[50px] flex w-full border p-2 outline-none p-[1rem] rounded-l-lg  ' />
            <button className='w-[38px] h-[50px] rounded-r-lg bg-[rgba(130,186,1,1)]  flex justify-center  md: w-[60px] '><img src={Search} alt="" className='w-[24px] h-[25px] mt-[0.8rem] ' /></button>
          </span>

<div className="hidden md:flex md:gap-[0.5rem] md:  lg:text-[20px] w-[400px]">
          <img src={navigaion} alt="" className=' border-gray-100 border-[5px] rounded-4xl   bg-gray-100' />
          <span>
            <p className='text-gray-500 text-[14px]'>Выберите филиал:</p>
            <h3 className='text-[14px]'>г. Владивосток </h3>
          </span>




          <img src={phone} alt="" className='border-gray-100 border-[5px] rounded-4xl   bg-gray-100' />
          <span>
            <h3 className=' text-[14px]'> +7 (123) 456-78-90  </h3>
            <h3 className=' text-[14px]'> +7 (123) 456-78-90  </h3>
          </span>
</div>
{/* Ham */}
<div className="z-[9999] md:hidden ">
  {Hamm || (<img src={Ham} alt=""  onClick={()=> setHamm(true)} />)}

 {Hamm && (
     <div className="flex flex-col gap-[1rem] bg-gray-200 text-black p-[0.6rem] rounded fixed ml-[-7rem] mt-[1.7rem] ">

<span className=' flex items-center justify-between '>
       <h1 className='text-[19px] font-bold tracking-wide text-[rgb(130,186,1)]'> Каталог</h1>
       
       <button onClick={()=> setHamm(false)} className='mr-[1rem] '><img src={X} alt=""  className='w-[22px] h-[15px] '/></button>
         </span>
         
<Swiper 
  direction="vertical"
  slidesPerView={3} // 
  spaceBetween={1}
  mousewheel={true}
  pagination={{ clickable: true }}
  navigation={true}

  style={{ height: "100px" }} 
>

  <SwiperSlide><Link to="DailyProduct">Молочная продукция</Link></SwiperSlide> 
  <SwiperSlide><Link to="MeatProduct">Мясная продукция</Link></SwiperSlide> 
  <SwiperSlide><Link to="#">Напитки</Link></SwiperSlide>  
  <SwiperSlide><Link to="#">Бакалея</Link></SwiperSlide>
  <SwiperSlide><Link to="#">Грибы</Link></SwiperSlide>
  <SwiperSlide><Link to="#">Крупы</Link></SwiperSlide> 
  <SwiperSlide><Link to="#">Овощи</Link></SwiperSlide>
  <SwiperSlide><Link to="#">Ягоды</Link></SwiperSlide> 
</Swiper> 


 </div>
 )


 }
</div>


          <button className=' hidden w-[195px] h-[50px] flex items-center justify-center gap-[1rem] border-none  bg-[rgba(103,1,186,1)] text-white  rounded-lg shadow-2xl lg:flex'> <img src={mail} alt="" /> | Написать нам</button>
   <button  onClick={()=> setOpen(true)} className='hidden'>Карзина</button > 
        </div>
        
        <div className="bg-[rgba(200,200,222,0.30)] ">
          <div className="flex  items-center  justify-between   hidden  gap-[2rem] md:flex max-w-[1350px] m-auto pr-[1rem] pl-[1rem] ">

            <button className=' w-[140px] h-[35px] flex items-center justify-center  gap-[1rem] border-none  bg-[rgba(103,1,186,1)] text-white  rounded-lg text-[17px] p-[1.7rem] md:'> <img src={list} alt="" />     Каталог</button>

   

<Swiper 
  slidesPerView={6} // 
  spaceBetween={1}
  mousewheel={true}
  pagination={{ clickable: true }}
  navigation={true}

  style={{ height: "30px", width:"1100px", }} >
    <div className="flex justify-between m-auto gap-[1rem] ">
             <SwiperSlide><Link to={"DailyProduct"}>Молочная продукция</Link></SwiperSlide> 
             <SwiperSlide>  <Link to={"MeatProduct"}> Мясная продукция </Link></SwiperSlide>
           <SwiperSlide> <Link> Напитки </Link></SwiperSlide>  
           <SwiperSlide> <Link> Бакалея </Link></SwiperSlide>  
            <SwiperSlide> <Link> Грибы   </Link></SwiperSlide> 
            <SwiperSlide><Link> Крупы   </Link></SwiperSlide>  
           <SwiperSlide><Link> Овощи   </Link></SwiperSlide>   
           <SwiperSlide> <Link> Ягоды   </Link></SwiperSlide>  
</div>
              </Swiper>

          

          </div>




        </div>

       {open &&(
  <div className=" fixed inset-0 z-[9999] bg-black/50 flex">

<Basket open={open} setOpen={setOpen}/>

</div>
       )}
      </nav>


    </>
  )
}

export default Navbar