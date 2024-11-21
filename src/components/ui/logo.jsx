import Image from 'next/image'
import React from 'react'

const Logo = ({ src = "/images/logoOne.png", width = "174", height = "30" }) => {
    return (
        <Image src={src} width={width} height={height} alt='logo' />
        
    )
}

export default Logo