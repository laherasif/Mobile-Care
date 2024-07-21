import React from 'react'
import image5 from '../../assets/arrowblack.png'
import { MdDelete } from 'react-icons/md'
import cardImage1 from '../../assets/card1.png'

const Cart = () => {
  return (
    <>
      <div className='flex justify-between border-b py-[24px]'>
        <div className='flex w-[70%]'>
          <img src={cardImage1} alt="phone_image" className='object-cover' />
          <div className='pt-1 '>
            <h2 className='text-[18px] font-semibold'>iPhone 14</h2>
            <p className='text-[16px] text-[#999999] font-medium'>Kapacita: 256 GB, Farba: Silver</p>
            <div className='group'>
            <div className="border-2 border-black flex items-center cursor-pointer group-hover:bg-[#6A4EF5] group-hover:border-[#6A4EF5] transition-all duration-300  h-[36px] mt-[29px] w-[85%] px-[12px] ">
              <img src={image5} alt="arrow" />
              <p className='text-[12px] group-hover:text-white font-bold pl-2'>Odložiť na neskôr</p>
            </div>

            </div>
          </div>
        </div>
        <div className=''>
          <div className='flex justify-between items-center gap-5'>
            <h2 className='font-bold text-[#F54E80] text-[18px]'>1299 €  <span className='font-medium text-[16px] text-[#999999] line-through'>1799 €</span></h2>
            <MdDelete size={20} />
          </div>
          <div className='pt-[8px]'>
            <p className='text-[#F54E80] text-[12px] font-medium'>Uštríte 17% oproti pôvodnej sume</p>
          </div>
          <div className='pt-[24px]'>
            <p className='text-[12px] font-medium '>Zadajte množstvo tu</p>
            <select className='border w-full px-1 mt-[8px] h-[48px]'>
              <option>1</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart