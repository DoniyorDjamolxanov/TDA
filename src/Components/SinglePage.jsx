
import React, { useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from "./Navbar"
import Data from '../Static/Static'
import Footer from './Footer'
import { CartContext } from './CartContext'
function SinglePage() {
    const { id } = useParams()
    const filteredData = Data.filter(item => item.id == id)
    const [count, setCount] = useState(0)
    const { AddtoCard } = useContext(CartContext)


    return (
        <>
            <Navbar />
            <div className="cart">
                {
                    filteredData.map((item, index) => (
                        <div className="flex items-center justify-center mt-[2rem]" key={index}>
                            <div className="grid gap-[2rem]">

                                <span className='w-[120px] h-[120px] shadow-xl'><img src={item.BigImage} alt="" /></span>
                                <span className='w-[120px] h-[120px] shadow-xl'><img src={item.BigImage} alt="" /></span>
                                <span className='w-[120px] h-[120px] shadow-xl'><img src={item.BigImage} alt="" /></span>

                            </div>

                            <div className="w-[520px] h-[630px] bg-[]">


                                <img src={item.BigImage} alt="" />

                            </div>

                            <div className="bg-gray-200/50 rounded-xl p-[2rem]">
                                <div className="flex gap-[1rem] text-white text-center ">
                                    <span className='w-[60px] h-[30px] bg-[rgba(186,34,1,1)] rounded-r-xl'>-40%</span>
                                    <span className='w-[88px] h-[30px] bg-[rgba(1,186,19,1)] rounded-r-xl'>Новинка</span>
                                    <span className='w-[54px] h-[30px] bg-[rgba(1,119,186,1)] rounded-r-xl'>Хит </span>
                                </div>

                                <h1 className='text-[36px] font-bold'>{item.name} 0.5ml</h1>

                                <div className="flex items-center gap-[2rem]">
                                    <span>
                                        <s className='text-xl font-lg text-[rgba(103,1,186,1)]' >{item.price + 40}₽</s>
                                        <h1 className='text-[36px] font-bold '>{item.price}₽</h1>
                                    </span>
                                    <span className='flex items-center text-black gap-[1rem]'>
                                        <button className='w-[38px] h-[40px] rounded-l-lg bg-gray-200 text-[25px]' onClick={() => setCount(count - 1)}>-</button>
                                        <h2 className=''>{count}</h2>
                                        <button className='w-[38px] h-[40px] rounded-r-lg bg-gray-200 text-[25px]' onClick={() => setCount(count + 1)}>+</button>
                                    </span>

                                    <button onClick={() => AddtoCard(item, count)} className=' w-[120px] h-[40px] text-[18px] border text-black rounded-lg'>В корзину</button>

                                    <Link to={"/"}>Back</Link>
                                </div>

                                <div className="grid gap-[0.8rem] mt-[2rem]">
                                    <h2 className='font-semibold text-[18px]'>Описание:</h2>

                                    <p >Год урожая 2021.</p>
                                    <p>Хранить при температуре от +2 до +8 C.</p>
                                    <p>Срок годности 14 дней.</p>
                                    <p>ТУ 9739-007-73492117-05</p>
                                </div>
                                <div className="grid gap-[0.5rem] mt-[1rem]">
                                    <h2 className='font-semibold text-[18px]'>Характеристики:</h2>

                                    <p ></p>
                                    <p>Хранить при температуре от +2 до +8 C.</p>
                                    <p>Срок годности 14 дней.</p>
                                    <p>ТУ 9739-007-73492117-05</p>
                                </div>

                            </div>









                        </div>
                    ))
                }

            </div>
            <Footer />
        </>
    )
}

export default SinglePage