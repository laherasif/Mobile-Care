import React, { useEffect } from 'react'
import { MdClose } from 'react-icons/md';

const GeComSidebar = ({ setSidebarOpen, sidebarOpen }) => {
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    useEffect(() => {
        if (sidebarOpen) {
            if (typeof window !== "undefined" && window.document) {
                document.body.style.overflow = "hidden";
            }
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [sidebarOpen]);


    return (
        <>
            <div>
                <div className={`fixed inset-0 bg-slate-900 bg-opacity-30 cursor-pointer   transition-opacity duration-200 ${sidebarOpen ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none'}`}
                    onClick={() => setSidebarOpen(false)}
                    aria-hidden="true" ></div>

                <div className={`flex items-center fixed  z-50 top-0  right-0 `}>
                    <div className={` flex flex-col bg-[#DEF241]   ${sidebarOpen ? 'opacity-100 translate-x-65' : '-translate-x-0 opacity-0 pointer-events-none'} transform ease-in-out h-screen overflow-y-auto w-72   `} >
                        <div className="px-[24px] py-[50px] relative h-full">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className='text-[24px] font-bold'>geCommerce</h2>
                                </div>
                                <div className="border-2 rounded-full p-2 bg-black border-black cursor-pointer" onClick={() => setSidebarOpen(false)}>
                                    <MdClose size={15} className='text-[#DEF241]' />
                                </div>
                            </div>
                            {/* droplist */}
                            <div className='py-[40px]'>
                                <div>
                                    <ul className='flex flex-col items-start gap-10'>
                                        <li className='text-[24px] font-semibold transition-all duration-300 hover:text-[#5D31FF] cursor-pointer'>DOMOV</li>
                                        <li className='text-[24px] font-semibold transition-all duration-300 hover:text-[#5D31FF] cursor-pointer'>ecommerce</li>
                                        <li className='text-[24px] font-semibold transition-all duration-300 hover:text-[#5D31FF] cursor-pointer'>commerce</li>
                                        <li className='text-[24px] font-semibold transition-all duration-300 hover:text-[#5D31FF] cursor-pointer'>fakturácia</li>
                                        <li className='text-[24px] font-semibold transition-all duration-300 hover:text-[#5D31FF] cursor-pointer'>riadenie firmy</li>
                                        <li className='text-[24px] font-semibold transition-all duration-300 hover:text-[#5D31FF] cursor-pointer'>cenník</li>
                                        <li className='text-[24px] font-semibold transition-all duration-300 hover:text-[#5D31FF] cursor-pointer'>kontakt</li>
                                    </ul>
                                </div>
                                <div className='pt-[40px]'>
                                    <div className='flex items-center gap-5'>
                                        <div className='border-2 cursor-pointer hover:bg-[#5D31FF] hover:text-white text-[#151515] font-semibold text-[14px] px-5 py-3 hover:border-[#5D31FF] border-black'>prihlásenie</div>
                                        <div className='border-2 cursor-pointer hover:bg-[#5D31FF] hover:text-white hover:border-[#5D31FF] border-black px-5 py-3 text-[#DEF241] bg-black font-semibold text-[14px]'>registrácia</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GeComSidebar