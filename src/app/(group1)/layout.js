import Footer from '@/components/sections/footer'
import HeaderOne from '@/components/sections/headers/headerOne'
import React from 'react'

const layout = ({ children }) => {
  return (
    <>
      <HeaderOne />
      <div className='bg-[#253B2F33] w-full h-[1px] xl:block hidden'></div>
      {children}
      <Footer />
    </>
  )
}

export default layout