import { cn } from '@/lib/utils'
import React from 'react'

const RightArrow = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cn('lg:w-[35px] lg:h-6 w-7 h-4', className)} viewBox="0 0 35 24" fill="none">
            <path d="M24 22.2983L33 12.286L24 2.27384" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
            <path d="M1 12.2861L32 12.2861" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
        </svg>
    )
}

export default RightArrow

