import React, { useState } from 'react'
import { MdClose, MdSearch } from 'react-icons/md'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FilterData } from '../../constant/Contant';
import MultiRangeSlider from 'multi-range-slider-react'
const FilterList = ({ setSidebarOpen, sidebarOpen }) => {
    const [activeList, setActiveList] = useState(0)
    // const [isActive, setIsActive] = useState(0)
    const [minValue, set_minValue] = useState(0);
    const [maxValue, set_maxValue] = useState(0);

    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);

    };

    const handleToggle = (index) => {
        let check = activeList === index
        if (check) {
            setActiveList(null)
        } else {
            setActiveList(index)
        }
    }


    return (
        <>
            <div className={`flex items-center fixed  z-50 top-0  left-0 `}>
                <div className={` flex flex-col bg-white   ${sidebarOpen ? 'opacity-100 translate-x-0' : '-translate-x-64 opacity-0 pointer-events-none'} transform ease-in-out h-screen overflow-y-auto   w-96`} >
                    <div className="px-[24px] py-[24px] relative h-full">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className='text-[24px] font-bold'>Filter</h2>
                            </div>
                            <div className="border-2 p-2 border-black cursor-pointer" onClick={() => setSidebarOpen(false)}>
                                <MdClose size={15} />
                            </div>
                        </div>
                        {/* droplist */}
                        <div className='pt-[32px]'>
                            <div>
                                {
                                    FilterData?.map((item, index) => (
                                        <div className='pb-4' key={index}>
                                            <div onClick={() => handleToggle(index)} className='flex justify-between items-center cursor-pointer'>
                                                <h2 className='font-semibold text-[16px]'>{item.title}</h2>
                                                {activeList === index ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
                                            </div>
                                            <div className=''>
                                                {
                                                    item.type === "date" && activeList === index ?
                                                        <div className=' border-b-2 pb-2'>
                                                            <div className='flex justify-between items-center gap-5 px-6 pt-[16px]'>
                                                                <div className='border font-medium w-full h-[48px] text-[15px] flex justify-start px-4 items-center'>
                                                                    {minValue} €
                                                                </div>
                                                                <div className='border font-medium w-full h-[48px] text-[15px] flex justify-start px-4 items-center'>
                                                                    {maxValue} €
                                                                </div>
                                                            </div>
                                                            <div className='py-[20px] px-[24px]'>
                                                                <MultiRangeSlider
                                                                    min={0}
                                                                    max={10000}
                                                                    step={5}
                                                                    minValue={minValue}
                                                                    maxValue={maxValue}
                                                                    barInnerColor={"#176B87"}
                                                                    labels={false}
                                                                    ruler={false}
                                                                    label={false}
                                                                    onInput={(e) => {
                                                                        handleInput(e);
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        :
                                                        activeList === index &&
                                                        <div div className='px-[24px] '>
                                                            <div className='flex mt-4 items-center h-[48px] w-[298px] bg-white px-4 border'>
                                                                <MdSearch size={20} />
                                                                <input type="text" className='h-full w-full px-3 focus:outline-none' placeholder='Zadajte názov produktu' />
                                                            </div>
                                                            <div className=' pt-[16px]'>
                                                                {item?.NestedLinks?.map((list, index) => (
                                                                    <div key={index} className='flex items-center pb-2'>
                                                                        <input type='checkbox' className='w-[20px] h-[20px]' />
                                                                        <h2 className='text-[16px] font-medium px-2'>{list?.title}</h2>
                                                                    </div>
                                                                ))}

                                                            </div>
                                                        </div>
                                                }
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>

                        </div>


                        {/* Bottom buttons */}
                        <div className='absolute bottom-5  w-auto left-0 right-0 px-[24px]'>
                            <div className='flex justify-between gap-5 items-center'>
                                <div>
                                    <h2 className='h-[48px] px-5 underline font-semibold text-black flex justify-center items-center'>Vymazať filter</h2>
                                </div>
                                <div>
                                    <button className='h-[48px] px-5 bg-black text-white flex justify-center items-center'>1772 výsledkov</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default FilterList