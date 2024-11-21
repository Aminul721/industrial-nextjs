import React from 'react'
import Footer from '@/components/sections/footer'
import HeaderTwo from '@/components/sections/headers/headerTwo'

const layout = ({children}) => {
  return (
    <div>
        <HeaderTwo/>
        {children}
        <Footer logo={"/images/logoTwo.svg"}/>
    </div>
  )
}

export default layout