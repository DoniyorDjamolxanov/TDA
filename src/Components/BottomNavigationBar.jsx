import React from 'react'
import ham2 from "../assets/ham2.svg"
import poisk from "../assets/poisk.svg"
import karzina from "../assets/karzina.svg"
import acc from "../assets/acc.svg"
function BottomNavigationBar() {
  return (
    <>

    <div className= "  flex items-center justify-center  bg-[rgba(103,1,186,1)] gap-[2rem] text-white left-0 bottom-0 right-0 fixed  p-[0.5rem] text-[13px] ">
        <span className='flex flex-col items-center '>
<img src={ham2} alt="" />
<p>Каталог</p>
        </span>
            <span className='flex flex-col items-center '>
<img src={poisk} alt="" />      
<p>Поиск</p>
        </span>
            <span className='flex flex-col items-center '>
<img src={karzina} alt="" />
<p>Карзина</p>
        </span>
            <span className='flex flex-col items-center '>
<img src={acc} alt="" />
<p>Аккаунт</p>
        </span>
    </div>


    </>
  )
}

export default BottomNavigationBar