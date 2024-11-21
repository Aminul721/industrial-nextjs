"use client"
import { useState } from 'react'
import Image from 'next/image'
import { staticBluarDataUrl } from '@/lib/staticBluarDataUrl'


const ProductPreview = ({ findProduct }) => {
    const { thumbnail, prodcut_album } = findProduct
    const [imageUrl, setImageUrl] = useState(thumbnail)
    return (
        <div className='flex lg:flex-col md:flex-row flex-col gap-6'>
            <div className=' sm:w-[60%] lg:w-auto'>
                <Image src={imageUrl} placeholder='blur' blurDataURL={staticBluarDataUrl} width={650} height={813} sizes='100vw' alt='lamp' className='max-h-[811px] h-full' />
            </div>
            <div className='flex flex-wrap gap-5 sm:w-[40%] lg:w-auto'>
                {
                    prodcut_album.map((img, index) => {
                        return (
                            <Image key={index} width={120} height={120} onClick={() => setImageUrl(img)} src={img} alt={`img_${index}`} placeholder='blur' blurDataURL={staticBluarDataUrl}  className='max-w-[112px] w-full max-h-[112px] h-full cursor-pointer' />
                        )
                    })
                } 
            </div>
        </div>
    )
}

export default ProductPreview