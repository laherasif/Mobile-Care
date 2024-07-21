import React, { useState } from 'react'
import { FaCheck, FaPlus } from 'react-icons/fa';
import Imag1 from '../../assets/arrowblack.png'
const CardList = ({ list, ind }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [activeList, setActiveList] = useState(null);
    const [activeColor, setActiveColor] = useState(null);
    const [activeSize, setActiveSize] = useState(null);
    const size = ["64 GB", "125 GB", "256 GB", "512 GB", "1 TB", "2 TB"]
    const colors = ["#F4E8CE", "#594F63", "#F0F2F2", "#403E3D"]


    const handleRemove = () => {
        setIsHovered(false)
        setActiveList(null)
    }


    const handleClose = (s) => {
        setActiveSize(s)
        setActiveList(null)
    }


    return (
        <>
            <div
                key={ind}
                className="max-w-xl mx-auto w-[300px] relative  overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => handleRemove()}
            >
                <div
                    className={`w-full h-[300px] bg-cover bg-center transform transition-transform duration-1000 ease-in-out `}
                    style={{
                        backgroundImage: `url(${isHovered ? list?.imageUrl : list?.hoverdUrl})`
                    }}
                ></div>
                <div className='absolute top-0 left-0'>
                    <div className={`${list?.active ? 'block bg-[#D0FF16] px-1 py-1' : 'hidden'} `}>
                        <p className='text-[12px] font-medium'>{list?.active}</p>
                    </div>
                </div>
                <div className='absolute top-0 right-0  hover:animate-shake'>
                    <img src={Imag1} alt="drop" className='object-cover ' />
                </div>
                {isHovered && (
                    <div className='absolute bottom-10 px-[24px] left-0 right-0'>
                        <div onClick={() => setActiveList(ind)} className='bg-black h-auto py-2 text-white  transition-opacity flex justify-center items-center cursor-pointer duration-500 ease-in-out'>
                            { activeSize === null &&  activeList === ind ?
                                <div className='flex items-center flex-wrap gap-2 justify-center'>
                                    {
                                        size?.map((s, index) => (
                                            <div onClick={() => handleClose(s)} className='hover:bg-gray-800 px-1 py-[2px] text-[13px] cursor-pointer' key={index}>
                                                {s}
                                            </div>
                                        ))
                                    }
                                </div>
                                :
                                activeSize ?
                                    <div className='flex gap-2 justify-center items-center'>
                                        <h2>Rychly nakup</h2>
                                        <FaCheck />
                                    </div>
                                    :
                                    <div className='flex gap-2 justify-center items-center'>
                                        <FaPlus />
                                        <h2>Rychly nakup</h2>
                                    </div>
                            }

                        </div>
                    </div>
                )}
            </div>
            <div className='px-4'>
                <h2 className='pt-2 text-black font-semibold text-[16px]'>{list?.heading}</h2>
                <p className='text-[#69727d] font-medium text-[14px]'>{list?.title}</p>
                <p className='pt-1 text-black font-bold text-[18px]'>{list?.price}</p>
                <div className="flex items-center gap-1 pt-2">
                    {
                        colors?.map((color, index) => (
                            <span key={index} onClick={() => setActiveColor(index)} className={`w-4 ${activeColor === index ? 'border border-black p-2' : ""} h-4 rounded-full cursor-pointer bg-[${color}]`}></span>
                        ))
                    }

                </div>
            </div>
        </>

    )
}

export default CardList