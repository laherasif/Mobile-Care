import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from '../Sidebar/Sidebar'
const Layout = ({ children }) => {
  const [sidebarOpen , setSidebarOpen] = useState(false)
    return (
        <div className='relative'>
            {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main className=' mt-60'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout