import React from 'react'
import { Button } from './button'
import RightArrow from '../../../public/icons/rightArrow'
import { DotIcon } from 'lucide-react'

const Pagination = () => {
    return (
        <div className='container'>
            <ul className='flex justify-center'>
                <li className='2sm:mr-[22px] mr-1'>
                    <Button className="rotate-180 max-h-[75px] h-full lg:px-6 px-3" size="lg"><RightArrow width={"35"} height={"22"} /></Button>
                </li>
                <li className='flex justify-center items-center w-[74px] h-[75px] border-[2px] font-semibold cursor-pointer border-r-0 border-primary bg-primary text-cream-foreground transition-all duration-500 hover:bg-primary hover:text-cream-foreground'>01</li>
                <li className='flex justify-center items-center w-[74px] h-[75px] border-[2px] font-semibold cursor-pointer border-r-0 border-primary transition-all duration-500 hover:bg-primary hover:text-cream-foreground'>02</li>
                <li className='flex justify-center items-center w-[74px] h-[75px] border-[2px] font-semibold cursor-pointer  border-primary transition-all duration-500 hover:bg-primary hover:text-cream-foreground'>03</li>
                <li className='flex justify-center items-end w-[74px] h-[75px] pb-2'> <DotIcon /><DotIcon /><DotIcon /> </li>
                <li className='flex justify-center items-center w-[74px] h-[75px] border-[2px] font-semibold cursor-pointer  border-primary transition-all duration-500 hover:bg-primary hover:text-cream-foreground'>39</li>
                <li className='2sm:ml-[22px] ml-1'>
                    <Button size='lg' className="max-h-[75px] h-full"><span className='sm:block hidden'>Next</span> <RightArrow width={"35"} height={"22"} /></Button>
                </li>
            </ul>
        </div>
    )
}

export default Pagination