import { staticBluarDataUrl } from '@/lib/staticBluarDataUrl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DemoCard = ({ demo_img, demo_name, link }) => {
    return (
        <div className='bg-accent pt-10 pb-[70px] px-4 rounded-lg relative transition-all duration-700 hover:-translate-y-4'>
            <div className='flex gap-2 absolute top-5'>
                <span className='block w-[9px] h-[9px] bg-primary rounded-full'></span>
                <span className='block w-[9px] h-[9px] bg-primary rounded-full'></span>
                <span className='block w-[9px] h-[9px] bg-primary rounded-full'></span>
            </div>
            <Link href={link}>
                <Image src={demo_img} alt={demo_name} blurDataURL={staticBluarDataUrl} placeholder='blur' width={600} height={500} sizes='100vw' className='rounded-lg object-cover' />
                <p className='text-[22px] font-extrabold text-center absolute bottom-[22px] left-1/2 -translate-x-1/2'>{demo_name}</p>
            </Link>
        </div>
    )
}

export default DemoCard