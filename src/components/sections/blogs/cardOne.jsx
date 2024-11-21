import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import ZoomIn from '@/lib/animations/zoomIn'
import { staticBluarDataUrl } from '@/lib/staticBluarDataUrl'

const CardOne = ({ thumb, date, tag, title, id }) => {
    return (
        <ZoomIn delay_id={id}>
            <Link href={"/blog-single"}>
                <Image src={thumb} alt={title} width={429} height={250} placeholder='blur' blurDataURL={staticBluarDataUrl} sizes='100vw' className='w-full h-auto' />
                <div className='lg:mt-8 mt-6'>
                    <p className={cn(`text-muted-foreground flex items-center gap-2 mb-2.5 text-lg`)}> <span>{date}</span> / <span>{tag}</span> </p>
                    <span className={cn(`text-muted-foreground font-semibold text-2xl multiline-hover`)}>{title}</span>
                </div>
            </Link>
        </ZoomIn>
    )
}

export default CardOne