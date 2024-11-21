import { staticBluarDataUrl } from '@/lib/staticBluarDataUrl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardThree = ({src, name, position,}) => {
    return (
        <div className='w-full h-full hover-underline'>
            <Link href={'/team-single'} >
                <Image src={src} width={417} height={395} placeholder='blur' blurDataURL={staticBluarDataUrl} sizes='100vw' alt='team-img' />
            </Link>
            <div className='mt-7.5'>
                <Link href={'/team-single'} className='text-2xl font-bold leading-160 text-muted-foreground '><span>{name}</span></Link>
                <p className=' text-muted-foreground'>{position}</p>
            </div>
        </div>
    )
}

export default CardThree