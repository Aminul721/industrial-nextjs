"use client"
import { cn } from '@/lib/utils';
import React from 'react'
import { useInView } from 'react-intersection-observer';

const OutLineSvgText = ({ children, className }) => {
    const { ref, inView, entry } = useInView({
        threshold: 1.00,
        triggerOnce: true
    });
    return (
        <svg ref={ref} strokeWidth="1" className={cn(`text-transparent webkit-text-stroke-width-1 [font-size:_clamp(3rem,1.8173rem+5.2564vw,8.125rem)] font-extrabold leading-[1.20] h-16 sm:h-20 lg:h-25 xl:h-28 2xl:h-[124px] ${inView ? 'stroke-dasharray-1000 stroke-dashoffset-1000 animate-text-line-animation' : 'fill-transparent'} stroke-primary ${className}`)}><text x="0%" dominantBaseline="middle" y="70%">{children}</text></svg>
    )
}

export default OutLineSvgText