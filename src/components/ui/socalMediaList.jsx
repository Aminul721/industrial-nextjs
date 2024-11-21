import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const SocialMediaList = ({className}) => {
    return (
        <ul className='flex items-center gap-7.5'>
            <li>
                <Link href="" className={cn('font-medium text-muted-foreground relative after:contents-[""] after:absolute after:h-[20px] after:w-[1px] after:bg-black after:rotate-[22deg] after:top-1/2 after:-translate-y-1/2 after:right-[-15px] multiline-hover', className)}><span>FB</span></Link>
            </li>
            <li>
                <Link href="" className={cn('font-medium text-muted-foreground relative after:contents-[""] after:absolute after:h-[20px] after:w-[1px] after:bg-black after:rotate-[22deg] after:top-1/2 after:-translate-y-1/2 after:right-[-15px] multiline-hover', className)}><span>IN</span></Link>
            </li>
            <li>
                <Link href="" className={cn('font-medium text-muted-foreground relative after:contents-[""] after:absolute after:h-[20px] after:w-[1px] after:bg-black after:rotate-[22deg] after:top-1/2 after:-translate-y-1/2 after:right-[-15px] multiline-hover', className)}><span>TW</span></Link>
            </li>
            <li>
                <Link href="" className={cn('font-medium text-muted-foreground multiline-hover', className)}><span>LI</span></Link>
            </li>
        </ul>
    )
}

export default SocialMediaList