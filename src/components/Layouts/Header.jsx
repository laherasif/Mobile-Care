import React, { useState } from 'react'
import TopHeader from './TopHeader'
import logo from '../../assets/logo.png'
import image1 from '../../assets/clip.png'
import image2 from '../../assets/h1.png'
import image3 from '../../assets/h2.png'
import image4 from '../../assets/user.png'
import image5 from '../../assets/arrow.png'
import image6 from '../../assets/bars.png'
import { BsBag } from "react-icons/bs";
import { BsBagFill } from "react-icons/bs";
import { MdSearch } from 'react-icons/md'
import { useLocation } from 'react-router-dom'
// import Sidebar from '../Sidebar/Sidebar'
const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation().pathname
  return (
    <div className='fixed top-0 w-full z-40'>
      <TopHeader />
      {/* top nav */}
      <div className='bg-black px-[48px] py-[24px] '>
        {/* top nav */}
        <div className='flex justify-between items-center '>
          <div className=' w-full'>
            <ul className='flex items-center'>
              <li className='flex items-center gap-[8px]  justify-center h-[48px] w-[140px]'>
                <img src={image1} alt="icon" className='' />
                <p className='text-[16px] hover:text-[#6A4EF5] cursor-pointer font-semibold text-white'>Výpredaj</p>
              </li>
              <li className='flex items-center gap-[8px]  justify-center h-[48px] w-[140px]'>
                <img src={image2} alt="icon" className='' />
                <p className='text-[16px] hover:text-[#6A4EF5] cursor-pointer font-semibold text-white'>Novinky</p>
              </li>
              <li className='flex items-center gap-[8px]  justify-center h-[48px] w-[140px]'>
                <img src={image3} alt="icon" className='' />
                <p className='text-[16px] hover:text-[#6A4EF5] cursor-pointer font-semibold text-white'>MC Servis</p>
              </li>
            </ul>
          </div>
          <div className=' w-full flex justify-center items-center'>
            <img src={logo} alt="icon" className='' />
          </div>
          <div className=' w-full flex justify-end items-end'>
            <div className='flex items-center gap-[10px] '>
              <img src={image4} alt="icon" className='' />
              <img src={image5} alt="icon" className='' />
              <div>1</div>
              <div className='relative inline-block group w-full cursor-pointer pl-1 '>
                <BsBag size={20} className='text-white cursor-pointer absolute -bottom-2 right-0.5 transition-opacity duration-300 opacity-100 group-hover:opacity-0' />
                <BsBagFill size={20} className='text-white cursor-pointer absolute -bottom-2 right-0.5 transition-opacity duration-300 opacity-0 group-hover:opacity-100' />
                <div className='absolute  -top-5 right-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
                  <div className=' rounded-full flex justify-center items-center group-hover:bg-blue-500 w-4 h-4  group-hover:text-white'>
                    <p className='text-[12px]'>2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* navbar */}
        <div className='flex justify-between  items-center mt-[24px]'>
          <div className='group' onClick={() => setSidebarOpen(!sidebarOpen)}>
            <div className='flex items-center  justify-center transition-all duration-300 group-hover:bg-[#6A4EF5] cursor-pointer bg-white w-[190px] h-[48px] gap-2'>
              <p className='text-[16px] font-bold group-hover:text-white '>{location === "/products" ? "Filter" :"Všetky kategórie"}</p>
              <img src={image6} alt="" className='object-cover' />
            </div>
          </div>
          <div className='w-[90%] ml-3'>
            <ul className='flex items-center gap-2 '>
              <li className='text-white text-[16px]  rounded hover:bg-gray-900 transition-all duration-300 px-5 h-[48px] flex justify-center items-center text-center  font-semibold hover:text-[#6A4EF5] cursor-pointer'>
                <p>iPhone</p>
              </li>
              <li className='text-white text-[16px]  rounded hover:bg-gray-900 transition-all duration-300 px-5 h-[48px] flex justify-center items-center text-center  font-semibold hover:text-[#6A4EF5] cursor-pointer'>
                <p>iPad</p>
              </li>
              <li className='text-white text-[16px]  rounded hover:bg-gray-900 transition-all duration-300 px-5 h-[48px] flex justify-center items-center text-center  font-semibold hover:text-[#6A4EF5] cursor-pointer'>
                <p>MacBook</p>
              </li>
              <li className='text-white text-[16px]  rounded hover:bg-gray-900 transition-all duration-300 px-5 h-[48px] flex justify-center items-center text-center  font-semibold hover:text-[#6A4EF5] cursor-pointer'>
                <p>Apple Airpods</p>
              </li>
              <li className='text-white text-[16px]  rounded hover:bg-gray-900 transition-all duration-300 px-5 h-[48px] flex justify-center items-center text-center  font-semibold hover:text-[#6A4EF5] cursor-pointer'>
                <p>Smarthome</p>
              </li>
              <li className='text-white text-[16px]  rounded hover:bg-gray-900 transition-all duration-300 px-5 h-[48px] flex justify-center items-center text-center font-semibold hover:text-[#6A4EF5] cursor-pointer'>
                <p>Príslušenstvo</p>
              </li>
            </ul>
          </div>
          <div className=' '>
            <div className='flex items-center h-[48px] w-[298px] bg-white px-4'>
              <MdSearch size={20} />
              <input type="text" className='h-full w-full px-3 focus:outline-none' placeholder='Zadajte názov produktu' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header