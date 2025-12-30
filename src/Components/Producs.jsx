import React, { useState } from 'react'
import Data from '../Static/Static'
import Slider from 'react-slick'
import shop from "../assets/shop.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


function Producs() {
  const [info, setInfo] = useState(null)

  const handClick = (id) => {
    setInfo(prev => prev === id ? null : id);

  }


  const settings = {
    dots: true,
    Infinity: true,
    speed: 600,
    slidesToShow: 8,
    slidesToScroll: 1,
    adaptiveHeight: false,


  };

  
  const settingsMobile = {
  
    Infinity: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,


  };

  const settingsMobileSM = {
  
    Infinity: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: false,


  };

   const settingsMobileMD = {
  
    Infinity: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,


  };

  const settingsMobileLG = {
  
    Infinity: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: false,


  };


   const settingsMobileXL = {
  
    Infinity: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    adaptiveHeight: false,


  };
  return (
    <>
<div className="relative z-0 hidden 2xl:block">
      <Slider {...settings} >

        {

          Data.slice(0, 19).map((item, index) => (

            <div className="shadow-xl  flex gap[1rem]  max-w-[190px] m-auto mt-[1rem] mb-[1rem] rounded-lg  z-[0]" key={index} onClick={() => handClick(item.id)}  >
              <img src={item.image} alt="" className='w-[140px] m-auto '/>
              {info === item.id && (<h1 className='text-start ml-[1rem] w-[100px] z-[0]'>{item.name.slice(0, 18)} </h1>)}
              <span className=' flex items-center gap-[2rem] mt-[1rem]'>
                <span className='flex items-center flex-col gap-[2rem] ml-[1rem] '>
                  {info === item.id && (<s className=' text-violet-600 text-[15px] '>{item.price + 40} ₽</s>)}
                  {info === item.id && (<h3 className=' text-black text-[18px] font-bold mt-[-2rem]'>{item.price} ₽</h3>)}

                </span>
                <Link to={`/cart/${item.id}`}>
                  {info === item.id && (<img src={shop} alt="" className=' rounded-3xl  bg-gray-200/50 p-[1rem] ' />)}
                </Link>
              </span>
            </div>


          ))
        }

      </Slider>

</div>


{/* 2 */}

<div className="relative z-0 sm:hidden">
<h1 className="text-[20px] font-bold text-center mt-[-1.5rem]" >Наши Товары</h1>
      <Slider {...settingsMobile}>

        {

          Data.slice(0, 19).map((item, index) => (

            <div className="shadow-xl  flex gap[1rem]  w-[300px] m-auto mt-[1rem] mb-[1rem] rounded-lg  z-[0] outline-none " key={index} onClick={() => handClick(item.id)}  >
              <img src={item.image} alt="" className='w-[200px] m-auto '/>
              {info === item.id && (<h1 className='text-center ml-[1rem]  z-[0] font-bold'>{item.name} </h1>)}
              <span className=' flex items-center justify-center mt-[1rem gap-[2rem]'>
                <span className='flex items-center flex-col gap-[2rem] ml-[1rem] '>
                  {info === item.id && (<s className=' text-violet-600 text-[15px] '>{item.price + 40} ₽</s>)}
                  {info === item.id && (<h3 className=' text-black text-[18px] font-bold mt-[-2rem]'>{item.price} ₽</h3>)}

                </span>
                <Link to={`/cart/${item.id}`}>
                  {info === item.id && ( <button className=' text-[13px] w-[100px] h-[35px]  border-[1.5px] rounded-lg border-[rgba(103,1,186,1)]'>Купить</button>)}
                </Link>
              </span>
            </div>


          ))
        }

      </Slider>

</div>

<div className="relative z-0 hidden sm:block md:hidden ">
<h1 className="text-[20px] font-bold text-center mt-[-1.5rem]" >Наши Товары</h1>
      <Slider {...settingsMobileSM}>

        {

          Data.slice(0, 19).map((item, index) => (

            <div className="shadow-xl  flex gap[1rem]  w-[300px] m-auto mt-[1rem] mb-[1rem] rounded-lg  z-[0] outline-none " key={index} onClick={() => handClick(item.id)}  >
              <img src={item.image} alt="" className='w-[200px] m-auto '/>
              {info === item.id && (<h1 className='text-center ml-[1rem]  z-[0] font-bold'>{item.name} </h1>)}
              <span className=' flex items-center justify-center mt-[1rem gap-[2rem]'>
                <span className='flex items-center flex-col gap-[2rem] ml-[1rem] '>
                  {info === item.id && (<s className=' text-violet-600 text-[15px] '>{item.price + 40} ₽</s>)}
                  {info === item.id && (<h3 className=' text-black text-[18px] font-bold mt-[-2rem]'>{item.price} ₽</h3>)}

                </span>
                <Link to={`/cart/${item.id}`}>
                  {info === item.id && ( <button className=' text-[13px] w-[100px] h-[35px]  border-[1.5px] rounded-lg border-[rgba(103,1,186,1)]'>Купить</button>)}
                </Link>
              </span>
            </div>


          ))
        }

      </Slider>

</div>




<div className="relative z-0 hidden md:block lg:hidden">
<h1 className="text-[20px] font-bold text-center mt-[-1.5rem]" >Наши Товары</h1>
      <Slider {...settingsMobileMD}>

        {

          Data.slice(0, 19).map((item, index) => (

            <div className="shadow-xl  flex gap[1rem]  w-[300px] m-auto mt-[1rem] mb-[1rem] rounded-lg  z-[0] outline-none " key={index} onClick={() => handClick(item.id)}  >
              <img src={item.image} alt="" className='w-[200px] m-auto '/>
              {info === item.id && (<h1 className='text-center ml-[1rem]  z-[0] font-bold'>{item.name} </h1>)}
              <span className=' flex items-center justify-center mt-[1rem gap-[2rem]'>
                <span className='flex items-center flex-col gap-[2rem] ml-[1rem] '>
                  {info === item.id && (<s className=' text-violet-600 text-[15px] '>{item.price + 40} ₽</s>)}
                  {info === item.id && (<h3 className=' text-black text-[18px] font-bold mt-[-2rem]'>{item.price} ₽</h3>)}

                </span>
                <Link to={`/cart/${item.id}`}>
                  {info === item.id && ( <button className=' text-[13px] w-[100px] h-[35px]  border-[1.5px] rounded-lg border-[rgba(103,1,186,1)]'>Купить</button>)}
                </Link>
              </span>
            </div>


          ))
        }

      </Slider>

</div>

<div className="relative z-0 hidden  lg:block xl:hidden">
<h1 className="text-[20px] font-bold text-center mt-[-1.5rem]" >Наши Товары</h1>
      <Slider {...settingsMobileLG}>

        {

          Data.slice(0, 19).map((item, index) => (

            <div className="shadow-xl  flex gap[1rem]  w-[300px] m-auto mt-[1rem] mb-[1rem] rounded-lg  z-[0] outline-none " key={index} onClick={() => handClick(item.id)}  >
              <img src={item.image} alt="" className='w-[200px] m-auto '/>
              {info === item.id && (<h1 className='text-center ml-[1rem]  z-[0] font-bold'>{item.name} </h1>)}
              <span className=' flex items-center justify-center mt-[1rem gap-[2rem]'>
                <span className='flex items-center flex-col gap-[2rem] ml-[1rem] '>
                  {info === item.id && (<s className=' text-violet-600 text-[15px] '>{item.price + 40} ₽</s>)}
                  {info === item.id && (<h3 className=' text-black text-[18px] font-bold mt-[-2rem]'>{item.price} ₽</h3>)}

                </span>
                <Link to={`/cart/${item.id}`}>
                  {info === item.id && ( <button className=' text-[13px] w-[100px] h-[35px]  border-[1.5px] rounded-lg border-[rgba(103,1,186,1)]'>Купить</button>)}
                </Link>
              </span>
            </div>


          ))
        }

      </Slider>

</div>


<div className="relative z-0 hidden  xl:block lg:hidden 2xl:hidden">
<h1 className="text-[20px] font-bold text-center mt-[-1.5rem]" >Наши Товары</h1>
      <Slider {...settingsMobileXL}>

        {

          Data.slice(0, 19).map((item, index) => (

            <div className="shadow-xl  flex gap[1rem]  w-[300px] m-auto mt-[1rem] mb-[1rem] rounded-lg  z-[0] outline-none " key={index} onClick={() => handClick(item.id)}  >
              <img src={item.image} alt="" className='w-[200px] m-auto '/>
              {info === item.id && (<h1 className='text-center ml-[1rem]  z-[0] font-bold'>{item.name} </h1>)}
              <span className=' flex items-center justify-center mt-[1rem gap-[2rem]'>
                <span className='flex items-center flex-col gap-[2rem] ml-[1rem] '>
                  {info === item.id && (<s className=' text-violet-600 text-[15px] '>{item.price + 40} ₽</s>)}
                  {info === item.id && (<h3 className=' text-black text-[18px] font-bold mt-[-2rem]'>{item.price} ₽</h3>)}

                </span>
                <Link to={`/cart/${item.id}`}>
                  {info === item.id && ( <button className=' text-[13px] w-[100px] h-[35px]  border-[1.5px] rounded-lg border-[rgba(103,1,186,1)]'>Купить</button>)}
                </Link>
              </span>
            </div>


          ))
        }

      </Slider>

</div>



    </>
  )
}

export default Producs