"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";


const CustomRightArrow = ({ onClick }) => {
    const handleClick = () => {
        onClick();
    };
    return (
        <div onClick={handleClick} className=' border-2 cursor-pointer right-0  rounded w-8 h-8 flex justify-center items-center absolute bottom-0'>
            <FaLongArrowAltRight />
        </div>
    );
};


const CustomLeftArrow = ({ onClick }) => {
    const handleClick = () => {
        onClick();
    };
    return (
        <div onClick={handleClick} className=' border-2 hidden cursor-pointer left-0  rounded w-8 h-8  absolute bottom-0'>
            <FaLongArrowAltRight />
        </div>
    );
};





const CustomSlider = ({ children }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        }
    };



    return (
        <>
            <div className='relative'>
                <Carousel
                    responsive={responsive}
                    customRightArrow={<CustomRightArrow/>}
                    customLeftArrow={<CustomLeftArrow/>}
                    containerClass="py-5"
                    showDots={false}
                    autoPlay
                    arrows={true}
                    infinite
                >
                    {children}

                </Carousel>


            </div>
        </>
    )
}

// transition-transform duration-300 transform hover:scale-105 hover:shadow-md

export default CustomSlider