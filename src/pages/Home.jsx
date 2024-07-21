import React from 'react'
const Home = () => {
  return (
    <div className='bg-black h-screen text-white'>
      <div className='px-[48px] flex flex-col justify-center items-center pt-32'>
        <h1 className='text-[40px] font-bold'>Test Assignments</h1>
        <a href="/checkout" target='_blank' className='text-[30px] pt-5'>Task No 1 and Task 2  : Click Here (checkout Page With Sidebar ) </a>
        <a href="/products" target='_blank' className='text-[30px] pt-5'>Task No 3 : Click Here (Sidebar With Filter) </a>
        <a href="/geCommerce" target='_blank' className='text-[30px] pt-5'>Task No 4 and Task No 4.1 : Click Here (GeCommerce web and mobile view with  Rightbar ) </a>
      </div>
    </div>
  )
}
export default Home