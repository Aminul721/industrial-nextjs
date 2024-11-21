import SlideLeft from '@/lib/animations/slideLeft'
import { staticBluarDataUrl } from '@/lib/staticBluarDataUrl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardTwo = ({ img, name, position, desc }) => {
    return (
        <div className='flex lg:flex-row flex-col gap-[34px] items-center'>
            <Link href={'/team-single'} className='w-full overflow-hidden'>
                <SlideLeft> <Image src={img} placeholder='blur' blurDataURL={staticBluarDataUrl} width={212} height={272} alt='team' /></SlideLeft>
            </Link>
            <div >
                <Link href={'/team-single'} className='text-2xl font-bold leading-160 text-muted-foreground multiline-hover'><span>{name}</span></Link>
                <p className='font-bold text-muted-foreground'>{position}</p>
                <p className='mt-[18px] text-muted-foreground'>
                As the lead designer, Michael brought creativity and innovation to the project. His visionary approach guided the entire design process.
                </p>
            </div>
        </div>
    )
}

export default CardTwo