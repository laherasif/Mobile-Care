import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='bg-black h-screen text-white'>
      <div className='px-[48px] flex flex-col justify-center items-center pt-32'>
        <h1 className='text-[40px] font-bold'>Test Assignments</h1>
        <Link to="/checkout" className='text-[30px] pt-5'>Task No 1 and Task 2  : Click Here (checkout Page With Sidebar ) </Link>
        <Link to="/products" className='text-[30px] pt-5'>Task No 3 : Click Here (Sidebar With Filter) </Link>
        <Link to="/geCommerce" target='_blank' className='text-[30px] pt-5'>Task No 4 and Task No 4.1 : Click Here (GeCommerce web and mobile view with  Rightbar ) </Link>
      </div>
    </div>
  )
}
export default Home