"use client"
import { cn } from "@/lib/utils"
import SlotCounter from "react-slot-counter"

const FunFacte = ({ color, data }) => {
    return (
        <div className='pt-2'>
            <ul className='flex justify-between flex-wrap gap-10 '>
                {
                    data.map(({ id, count, title }) => {
                        return (
                            <li key={id} className='flex flex-col'>
                                <h3 className={cn("font-extrabold text-muted-foreground [font-size:_clamp(3rem,2.3942rem+2.6923vw,5.625rem)] leading-none", color)}><SlotCounter startValue={0} value={count} debounceDelay={5000} duration={2} animateOnVisible={{ triggerOnce: true, rootMargin: '0px 0px -100px 0px' }} /></h3>
                                <span className={cn(`w-[150px] h-[1px] bg-muted mt-3.5 mb-4`)}></span>
                                <span className={cn(`2sm:text-2xl text-xl font-bold text-[#4D5965]`)}>{title}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default FunFacte