import React from 'react'
import Logo from "../assets/logo.svg"
import twitter from "../assets/twitter.svg"
import Facebook from "../assets/facebook.svg"
import Vk from "../assets/Vk.svg"
import instagram from "../assets/instagram.svg"
import mail from "../assets/mail.svg"
function Footer() {
  return (
    <>


      <div className="   bg-gray-200/50 h-[417px] flex flex-col mt-[8rem] hidden 2xl:block">
        <div className=" w-[1400px] m-auto flex  justify-between  pt-[2.5rem]">
          <span><img src={Logo} alt="" /></span>
          <span className='flex flex-col  gap-[0.5rem]'>
            <h1 className=' font-bold  text-[18px] mb-[0.6rem]'>О компании</h1>

            <p>Новости</p>
            <p>Контакты</p>
            <p>Пользовательское соглашение</p>
            <p>Политика обработки персональных данных</p>
          </span>

          <span className='flex flex-col  gap-[0.5rem]'>
            <h1 className=' font-bold  text-[18px] mb-[0.6rem]' >Покупателям</h1>

            <p>Доставка и оплата</p>
            <p>Как вернуть</p>
            <p>Как заказать</p>
            <p>Программа лояльности</p>
            <p>Вопросы и ответы</p>
            <p>Юридическим лицам</p>
          </span>

          <span className=' flex flex-col  gap-[1rem]'>
            <h1 className=' font-bold  text-[18px] mb-[0.6rem]'>Подписаться на рассылку актуальных новостей:</h1>
            <span className=' flex gap-[2rem]'>
              <input type="text" name="" id="" placeholder='Email' className='w-[237px] h-[50px] border border-gray-500 rounded outline-none p-[1rem]' />

              <button className=' w-[195px] h-[50px] flex items-center justify-center gap-[1rem] border-none  bg-[rgba(103,1,186,1)] text-white  rounded-lg shadow-2xl'> <img src={mail} alt="" /> | Написать нам</button>

            </span>
            <h1 className=' font-bold  text-[18px] w-[350px]'>Заказывайте товары круглосуточно
              и задавайте вопросы</h1>
            <h1 className='font-bold text-[36px] text-violet-700  '>8 800 123-45-67</h1>
          </span>

        </div>
        <div className="h-[10px]">
          <hr className='bg-gray-200' />
          <span className='w-[1400px] m-auto flex  justify-between items-center mt-[2.5rem] text-gray-500' > <p>© Интернет-магазин “TDA”</p>
            <span className=' flex items-center gap-[1rem]'>
              <img src={twitter} alt="" />
              <img src={Facebook} alt="" />
              <img src={Vk} alt="" />
              <img src={instagram} alt="" />
            </span>
          </span>
        </div>
      </div>





      <div className="   bg-gray-200/50 h-[497px] flex flex-col mt-[8rem] h-auto mb-[2rem] 2xl:hidden">
        <div className="grid m-auto items-center gap-[2rem] sm:flex sm:flex-wrap sm:pr-[2rem] sm:justify-center">
      
          <span className='m-auto items-center'><img src={Logo} alt="" className='w-[130px]' /></span>
      
          <span className='flex flex-col gap-[0.5rem] items-center md:mr-[5rem]' >
            <h1 className=' font-bold  text-[18px] mb-[0.6rem] '>О компании</h1>

            <p>Новости</p>
            <p>Контакты</p>
            <p>Пользовательское соглашение</p>
            <p>Политика обработки персональных данных</p>
          
          </span>
        

          <span className='flex flex-col  gap-[0.5rem] items-center md:mr-[5rem] '>
            <h1 className=' font-bold  text-[18px] mb-[0.6rem]' >Покупателям</h1>

            <p>Доставка и оплата</p>
            <p>Как вернуть</p>
            <p>Как заказать</p>
            <p>Программа лояльности</p>
            <p>Вопросы и ответы</p>
            <p>Юридическим лицам</p>
          </span>

          <span className=' flex flex-col  gap-[1rem] items-center'>
            <h1 className=' font-bold  text-[15px] mb-[0.6rem] w-[200px] m-auto'>Подписаться на рассылку актуальных новостей:</h1>
            <span className=' flex gap-[2rem]'>
              <input type="text" name="" id="" placeholder='Email' className='w-[180px] h-[35px] border border-gray-500 rounded outline-none p-[1rem]' />

              <button className=' w-[120px] h-[35px] flex items-center justify-center gap-[0.3rem] border-none  bg-[rgba(103,1,186,1)] text-white  rounded-lg shadow-2xl text-[13px]'> <img src={mail} alt=""className='w-[15px] h-[15px]' />Написать нам</button>

            </span>
            <h1 className=' font-bold  text-[15px] w-[350px]'>Заказывайте товары круглосуточно
              и задавайте вопросы</h1>
            <h1 className='font-bold text-[26px] text-violet-700  '>8 800 123-45-67</h1>
          </span>

        </div>
        <div className="h-[120px]">
          <hr className='bg-gray-200' />
          <span className='w-[300px] m-auto flex  items-center mt-[1.5rem] mb-[1rem] text-gray-500' > <p>© Интернет-магазин “TDA”</p>
            <span className=' flex items-center  gap-[0.5rem] mr-[2rem]'>
              <img src={twitter} alt="" />
              <img src={Facebook} alt="" />
              <img src={Vk} alt="" />
              <img src={instagram} alt="" />
            </span>
          </span>
        </div>
      </div>






    </>
  )
}

export default Footer