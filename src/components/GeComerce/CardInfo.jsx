import React from 'react'
import lineImag from '../../assets/line.png'
import { FaArrowUpLong } from "react-icons/fa6";
const CardData = () => {
    return (
        <div >
            <div className="relative bg-contain bg-no-repeat bg-right" style={{ backgroundImage: `url(${lineImag})` }}>
                <div className='grid lg:grid-cols-4 gap-5 xl:px-[48px] px-[24px]'>
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-4">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-lg font-bold mb-2 text-white">Živnostník</h2>
                            <p className="text-2xl font-bold text-[#DEF241] mb-4">6.99 € <span className='text-[#A3A3A3] font-normal text-[18px]'>/</span> <span className='text-[#A3A3A3] font-normal text-[18px]'>mesiac</span></p>
                        </div>
                        <p className="mb-4 text-white">Vďaka mobilnej aplikácii máte prehľad o svojom e-shope.</p>
                        <div className='flex justify-end items-end'>
                            <button className="hover:bg-[#DEF241] flex items-center gap-3 bg-transparent text-white hover:text-black px-4 py-2 border-[#DEF241] border-2 hover:border-[#DEF241]">
                                zistiť viac
                                <FaArrowUpLong className='rotate-45' />
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-4">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-lg font-bold mb-2 text-white">Živnostník</h2>
                            <p className="text-2xl font-bold text-[#DEF241] mb-4">6.99 € <span className='text-[#A3A3A3] font-normal text-[18px]'>/</span> <span className='text-[#A3A3A3] font-normal text-[18px]'>mesiac</span></p>
                        </div>
                        <p className="mb-4 text-white">Vďaka mobilnej aplikácii máte prehľad o svojom e-shope.</p>
                        <div className='flex justify-end items-end'>
                            <button className="hover:bg-[#DEF241] flex items-center gap-3 bg-transparent text-white hover:text-black px-4 py-2 border-[#DEF241] border-2 hover:border-[#DEF241]">
                                zistiť viac
                                <FaArrowUpLong className='rotate-45' />
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-4">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-lg font-bold mb-2 text-white">Živnostník</h2>
                            <p className="text-2xl font-bold text-[#DEF241] mb-4">6.99 € <span className='text-[#A3A3A3] font-normal text-[18px]'>/</span> <span className='text-[#A3A3A3] font-normal text-[18px]'>mesiac</span></p>
                        </div>
                        <p className="mb-4 text-white">Vďaka mobilnej aplikácii máte prehľad o svojom e-shope.</p>
                        <div className='flex justify-end items-end'>
                            <button className="hover:bg-[#DEF241] flex items-center gap-3 bg-transparent text-white hover:text-black px-4 py-2 border-[#DEF241] border-2 hover:border-[#DEF241]">
                                zistiť viac
                                <FaArrowUpLong className='rotate-45' />
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-4">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-lg font-bold mb-2 text-white">Živnostník</h2>
                            <p className="text-2xl font-bold text-[#DEF241] mb-4">6.99 € <span className='text-[#A3A3A3] font-normal text-[18px]'>/</span> <span className='text-[#A3A3A3] font-normal text-[18px]'>mesiac</span></p>
                        </div>
                        <p className="mb-4 text-white">Vďaka mobilnej aplikácii máte prehľad o svojom e-shope.</p>
                        <div className='flex justify-end items-end'>
                            <button className="hover:bg-[#DEF241] flex items-center gap-3 bg-transparent text-white hover:text-black px-4 py-2 border-[#DEF241] border-2 hover:border-[#DEF241]">
                                zistiť viac
                                <FaArrowUpLong className='rotate-45' />
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Tags  */}

            <div className='flex items-center flex-wrap lg:px-[48px] gap-3 px-[24px] py-[40px]'>
                <div className='border-[#E09FFF] border-2 rounded-full px-2 py-1'>
                    <p className='text-white font-normal text-[14px]'>na 14 dní bezplatne</p>
                </div>
                <div className='border-[#E09FFF] border-2 rounded-full px-2 py-1'>
                    <p className='text-white font-normal text-[14px]'>bez ekonómky</p>
                </div>
                <div className='border-[#E09FFF] border-2 rounded-full px-2 py-1'>
                    <p className='text-white font-normal text-[14px]'>stručný prehľad v telefóne</p>
                </div>
            </div>

            <div className='py-[32px] lg:px-[48px] px-[24px] flex justify-center items-center rotate-12'>
              <p className='lg:text-[24px] text-[14px] font-normal text-white'>Chcete si nechať poradiť?  <span className='text-[#DEF241]'>Napíšte nám</span></p>
            </div>
        </div>
    )
}

export default CardData