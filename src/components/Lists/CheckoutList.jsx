import React from 'react'

import card from '../../assets/payment.png'
import { FaShippingFast } from "react-icons/fa";
import CardList from './CardList';
import Cart from './Cart';
import { ListPhone } from '../../constant/Contant'
import CustomSlider from '../../utils/CustomeSlide';
const CheckoutList = () => {
    
    return (
        <>
            <div className='py-[48px] text-center'>
                <h1 className='text-[24px] font-bold '>Váš košík</h1>
                <p className='text-[18px] font-medium opacity-[0.5] pt-[8px]'>V košíku máte aktuálne 2 produkty</p>
            </div>
            {/* list  */}
            <div className='px-[48px]'>
                <div className='grid grid-cols-2 gap-[48px] h-auto pb-5 '>
                    <div className=' flex flex-col'>
                        {Array(3).fill(3).map((_, index) => (
                            <Cart key={index} />
                        ))}
                    </div>
                    <div className='border h-[550px] flex flex-col'>
                        <div className="h-[72px] bg-[#F5F5F5] px-5 ">
                            <div className='flex justify-between items-center h-[72px] '>
                                <div className='flex items-center gap-3'>
                                    <FaShippingFast size={20} />
                                    <p className='text-[14px] font-medium'>Doručíme</p>
                                </div>
                                <div>
                                    <p className='text-[14px] font-medium opacity-[0.5]'>Pon, 19. 8 - Ut, 20. 8.</p>
                                </div>
                            </div>
                            {/* card info */}
                            <div className='flex justify-between items-center pt-[27px]'>
                                <p className='text-[14px] font-semibold'>Akceptujeme platby</p>
                                <img src={card} alt="card_image" className='object-cover' />
                            </div>
                            <div className='flex justify-between items-center pt-[27px]'>
                                <p className='text-[14px] font-semibold'>Voucher</p>
                                <input type="text" placeholder='' className='border w-[40%] focus:outline-none  px-1  h-[48px]' />
                            </div>
                            <div>
                                <ul className=' pt-[40px] border-b pb-2'>
                                    <li className='flex justify-between items-center'>
                                        <p className='text-[18px] font-medium'>Spolu položky</p>
                                        <p className='text-[18px] font-medium'>3778 €</p>
                                    </li>
                                    <li className='flex justify-between items-center pt-[16px]'>
                                        <p className='text-[18px] font-medium'>Doprava:</p>
                                        <p className='text-[18px] font-medium'>0 €</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='pt-[16px]'>
                                <div className='flex justify-between items-center'>
                                    <h2 className='text-[18px] font-medium'>Spolu: <span className='text-[#999999] font-medium text-[18px]'>(vrátane DPH)</span></h2>
                                    <h2 className='text-[40px] font-bold'>3778 €</h2>
                                </div>
                                <div className='flex items-center gap-3 pt-[8px]'>
                                    <input type='checkbox' className='w-[24px] h-[24px]' />
                                    <p className='text-[#7C7C7C] text-[16px] font-medium'>zobraziť cenu bez DPH</p>
                                </div>
                            </div>
                            {/* Buttons */}
                            <div className='flex justify-between items-center pt-[32px] gap-5'>
                                <button className='border-2  hover:bg-[#6A4EF5] hover:text-white hover:border-[#6A4EF5] text-center border-black font-bold text-[16px]  transition-all duration-300 h-[48px] w-full'>Pokračovať v nákupe</button>
                                <button className=' text-center hover:bg-[#6A4EF5] transition-all duration-300 text-white bg-black font-bold text-[16px] h-[48px] w-full'>Do pokladne</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='px-[48px] pb-10'>
                <CustomSlider>
                    {
                        ListPhone?.map((list, index) => (
                            <CardList ind={index} list={list} />
                        ))
                    }
                </CustomSlider>
               
            </div>
        </>
    )
}

export default CheckoutList