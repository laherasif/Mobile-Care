import React from 'react'

const TopHeader = () => {
    return (
        <>
            {/*Top header */}
            <div className='bg-black h-[24px] px-[48px]  w-full flex justify-between items-center'>
                <div>
                    <p className='text-[12px] font-semibold text-white'>Pomoc & kontakt</p>
                </div>
                <div className='flex justify-between gap-4 items-center'>
                    <p className='text-[12px] font-semibold text-white'>Rastislavova 68, Košice</p>
                    <p className='text-[12px] font-semibold text-white'>+421 919 215 491</p>
                </div>
            </div>

            {/*  Faq's*/}
            <div className='bg-white h-[24px] px-[48px]'>
                <div className='flex justify-end items-end'>
                    <ul className='flex justify-between items-center space-x-[16px] pt-[2px]'>
                        <li className='text-[12px] font-semibold'>Sledovanie zásielky</li>
                        <li className='text-[12px] font-semibold'>Vrátenie tovaru</li>
                        <li className='text-[12px] font-semibold'>O nás</li>
                        <li className='text-[12px] font-semibold'>FAQ</li>
                        <li className='text-[12px] font-semibold'>Blog</li>
                    </ul>
                </div>
            </div>

            {/* Nove */}
            <div className='bg-[#F54E80] h-[24px] px-[48px]'>
                <div className='flex justify-center items-center'>
                    <p className='font-bold text-[14px] text-white'>Nové iPhone 14 PRO s 20% zľavou ✨</p>
                </div>
            </div>
        </>
    )
}

export default TopHeader