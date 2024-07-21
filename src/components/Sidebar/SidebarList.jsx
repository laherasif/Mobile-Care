import React, { useState } from "react";
import logo from '../../assets/sidebarlogo.png'
import icon1 from '../../assets/h1.png'
import icon2 from '../../assets/clip.png'
import icon3 from '../../assets/arrow.png'
import { MdClose } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { sidebarList } from '../../constant/Contant'
import { MdFacebook } from 'react-icons/md'
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa'
const SidebarList = ({ setSidebarOpen, sidebarOpen }) => {
    const [activeList, setActiveList] = useState({})
    const [nextedList, setNestedList] = useState({})


    const handleList = (list) => {
        let check = list.id === activeList.id
        if (check) {
            setActiveList({})
        } else {
            setActiveList(list)
        }
    }

    const handleNext = (list) => {
        let check = list.id === nextedList.id
        if (check) {
            setNestedList({})
        } else {
            setNestedList(list)
        }
    }


    return (
        <>
            <div className={`flex items-center fixed  z-50 top-0  left-0 `}>
                <div className={` flex flex-col bg-[#6A4EF5]   ${sidebarOpen ? 'opacity-100 translate-x-0' : '-translate-x-64 opacity-0 pointer-events-none'} custom-scrollbar transform transition-transform duration-300 ease-in-out h-screen overflow-y-auto   w-96`} >
                    <div className="px-[24px] py-[24px]">
                        <div className="flex justify-between items-center">
                            <div>
                                <img src={logo} alt="logo" className="object-cover" />
                            </div>
                            <div className="border-2 p-2 border-black cursor-pointer" onClick={() => setSidebarOpen(false)}>
                                <MdClose size={15} />
                            </div>
                        </div>

                        {/* list */}
                        <div className="pt-[32px]">
                            {
                                sidebarList?.map((list, index) => (
                                    <div onClick={() => handleList(list)} className="flex group cursor-pointer justify-between items-center pb-[13px]" key={index}>
                                        <div>
                                            <p className={`${list?.id === activeList?.id ? 'font-bold text-white' : 'font-semibold text-[#D5CCFF]'}  text-[16px] group-hover:underline`}>{list?.heading}</p>
                                        </div>
                                        <div className={`${list?.id === activeList?.id ? 'bg-white w-[32px] h-[32px] flex justify-center items-center' : ''}`}>
                                            <IoIosArrowForward size={list?.id === activeList?.id ? 20 : 18} className={`${list?.id === activeList?.id ? 'text-black' : 'text-[#D5CCFF]'}`} />
                                        </div>
                                    </div>
                                ))
                            }
                            {/* list 2  */}
                            <div>
                                <hr className="opacity-[0.5] mt-2 " />
                            </div>
                            <div className="pt-[32px] ">
                                <ul>
                                    <li>
                                        <div className="flex group cursor-pointer justify-between items-center pb-[13px]" >
                                            <div>
                                                <p className={`font-semibold text-[#D5CCFF]  text-[16px] group-hover:underline`}>Najpredávanejšie</p>
                                            </div>
                                            <div >
                                                <IoIosArrowForward size={18} className={`text-[#D5CCFF]`} />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex group cursor-pointer justify-between items-center pb-[13px]" >
                                            <div className="flex items-center gap-2">
                                                <img src={icon1} alt="imag" className="" />
                                                <p className={`font-semibold text-[#D5CCFF]  text-[16px] group-hover:underline`}>Najnovšie</p>
                                            </div>
                                            <div >
                                                <IoIosArrowForward size={18} className={`text-[#D5CCFF]`} />
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex group cursor-pointer justify-between items-center pb-[13px]" >
                                            <div className="flex items-center gap-2">
                                                <img src={icon2} alt="imag" className="" />
                                                <p className={`font-semibold text-[#D5CCFF]  text-[16px] group-hover:underline`}>Zľavy</p>
                                            </div>
                                            <div >
                                                <IoIosArrowForward size={18} className={`text-[#D5CCFF]`} />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <hr className="opacity-[0.5] mt-2 " />
                            </div>
                            <div className="pt-[32px] ">
                                <ul>
                                    <li className="pb-[21px]">
                                        <p className={`font-semibold text-[#D5CCFF]  text-[16px] group-hover:underline`}>Kontakt</p>
                                    </li>
                                    <li className="pb-[21px]">
                                        <p className={`font-semibold text-[#D5CCFF]  text-[16px] group-hover:underline`}>Často kladené otázky</p>
                                    </li>
                                    <li className="pb-[21px]  border-b border-gray-400">
                                        <p className={`font-semibold text-[#D5CCFF]  text-[16px] group-hover:underline`}>Blog</p>
                                    </li>
                                    <li className="pb-[18px] pt-[29px] border-b border-gray-400">
                                        <div className="flex group cursor-pointer justify-between items-center pb-[13px]" >
                                            <div className="flex items-center gap-2">
                                                <img src={icon3} alt="imag" className="" />
                                                <p className={`font-semibold text-[#D5CCFF]  text-[16px] group-hover:underline`}>Obľúbené produkty</p>
                                            </div>

                                        </div>
                                    </li>
                                    <li className="pt-[21px]">
                                        <h1 className='text-white text-[14px] font-semibold'>Sledujte nás</h1>
                                        <div className='pt-[16px] flex items-center gap-4'>
                                            <MdFacebook className='text-white' />
                                            <FaInstagram className='text-white' />
                                            <FaYoutube className='text-white' />
                                            <FaWhatsapp className='text-white' />
                                            <FaTiktok className='text-white' />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                {Object.keys(activeList)?.length > 0 &&
                    <div className="bg-white  w-96 border-r h-screen">
                        <div className="px-[24px] py-[24px]">
                            <div>
                                <h2 className="text-[24px] font-bold text-[#6A4EF5]">{activeList?.heading}</h2>
                            </div>
                            <div className="pt-[32px]">
                                {
                                    activeList?.NestedList?.map((list, index) => (
                                        <div onClick={() => handleNext(list)} className="flex group justify-between cursor-pointer items-center pb-[13px]" key={index}>
                                            <div className="flex items-center gap-2">
                                                <img src={list?.icon} alt="icon" className="object-contain w-[32px] h-[32px]" />
                                                <p className={`${list?.id === nextedList?.id ? 'font-bold' : 'font-semibold'} text-black text-[16px] group-hover:underline `}>{list?.title}</p>
                                            </div>
                                            <div className={`${list?.id === nextedList?.id ? 'bg-black w-[32px] h-[32px] flex justify-center items-center' : ''}`}>
                                                <IoIosArrowForward size={list?.id === nextedList?.id ? 20 : 18} className={`${list?.id === nextedList?.id ? 'text-white' : 'text-black'}`} />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                }
                {Object.keys(nextedList)?.length > 0 &&
                    <div className="bg-white h-screen w-96">
                        <div className="px-[24px] py-[24px]">
                            <div>
                                <h2 className="text-[24px] font-bold text-[#6A4EF5]">{nextedList?.title}</h2>
                            </div>
                            <div className="pt-[32px]">
                                {
                                    nextedList?.nextedLists?.map((list, index) => (
                                        <div onClick={() => setActiveList(list)} className="flex justify-between cursor-pointer items-center pb-[13px] group " key={index}>
                                            <div>
                                                <p className={`tex-black text-[16px] font-semibold group-hover:underline`}>{list?.title}</p>
                                            </div>
                                            <div>
                                                <IoIosArrowForward className="text-white" />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default SidebarList