import React, { useState } from 'react'
import { FaShoppingBag } from "react-icons/fa";
import image6 from '../../assets/bars.png'
import GeComSidebar from '../Sidebar/GeComSidebar';

const Banner = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <>
            {sidebarOpen && <GeComSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
            <div className='bg-[#5D31FF] text-white h-[30px] flex justify-center items-center'>
                <p className='text-[12px] font-normal'>14 dní bezplatne 🎁</p>
                <p className='px-3'> | </p>
                <p className='text-[12px] font-semibold'>Vyskúšať geCommerce</p>
            </div>

            {/* Mobile Screen */}
            <div className=' lg:hidden  flex justify-between  items-center pt-[16px] px-[24px]'>
                <h2 className='text-[24px] font-semibold text-white'>geCommerce</h2>
                <div className='flex items-center gap-5'>
                    <FaShoppingBag className='text-white' size={25} />
                    <div className='bg-[#DEF241] w-[48px] h-[48px] flex justify-center items-center'>
                        <img onClick={() => setSidebarOpen(true)} src={image6} alt="" className='object-cover w-[30px] h-[30px]' />
                    </div>
                </div>
            </div>
            {/* Header */}
            <div className='xl:flex lg:flex hidden justify-between  items-center gap-5 bg-[#DEF241] px-[48px] h-[70px]'>
                <div>
                    <p className='text-[24px] font-semibold'>geCommerce</p>
                </div>
                <div>
                    <ul className='flex items-center gap-10'>
                        <li className='text-[16px] font-semibold transition-all duration-300 hover:text-[#5D31FF] cursor-pointer'>DOMOV</li>
                        <li className='text-[16px] font-semibold transition-all duration-300 hover:text-[#5D31FF] cursor-pointer'>ecommerce</li>
                        <li className='text-[16px] font-semibold transition-all duration-300 hover:text-[#5D31FF] cursor-pointer'>commerce</li>
                        <li className='text-[16px] font-semibold transition-all duration-300 hover:text-[#5D31FF] cursor-pointer'>fakturácia</li>
                        <li className='text-[16px] font-semibold transition-all duration-300 hover:text-[#5D31FF] cursor-pointer'>riadenie firmy</li>
                        <li className='text-[16px] font-semibold transition-all duration-300 hover:text-[#5D31FF] cursor-pointer'>cenník</li>
                        <li className='text-[16px] font-semibold transition-all duration-300 hover:text-[#5D31FF] cursor-pointer'>kontakt</li>
                    </ul>
                </div>
                <div>
                    <div className='flex items-center gap-5'>
                        <div className='border-2 cursor-pointer hover:bg-[#5D31FF] hover:text-white text-[#151515] font-semibold text-[14px] px-5 py-3 hover:border-[#5D31FF] border-black'>prihlásenie</div>
                        <div className='border-2 cursor-pointer hover:bg-[#5D31FF] hover:text-white hover:border-[#5D31FF] border-black px-5 py-3 text-[#DEF241] bg-black font-semibold text-[14px]'>registrácia</div>
                    </div>
                </div>

            </div>

            {/* Heading  */}
            <div className='lg:px-[48px] px-[24px] py-[40px]'>
                <h1 className='lg:text-[48px] text-[32px] flex flex-col font-bold text-white'>U NÁS SI
                    <span className='text-[#DEF241]'> VYBERIE KAŽDÝ</span>
                </h1>
                <p className='text-white lg:text-[24px] text-[16px] lg:font-medium font-normal pt-[24px] max-w-[500px]'>Funkcie nášho systému ocení každý, kto sa v Commerce už nejaký čas pohybuje, no aj tí z vás, ktorí s e-shopom ešte len začínate.</p>
            </div>

        </>
    )
}

export default Banner