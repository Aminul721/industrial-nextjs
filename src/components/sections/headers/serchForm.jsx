import React from 'react'
import SearchIcon from '../../../../public/icons/searchIcon';
import Offcanvas, { OffcanvasClose, OffcanvasContent, OffcanvasTrigger } from '@/components/ui/offcanvas';
import { cn } from '@/lib/utils';

const SerchForm = ({color, bg_color}) => {
    return (
        <Offcanvas>
            <OffcanvasTrigger className={cn("text-primary-foreground", color)}><SearchIcon /></OffcanvasTrigger>
            <OffcanvasContent className={cn("max-w-full w-full h-full bg-primary rounded-none", bg_color)} side={"top"}>
                <OffcanvasClose className={"text-cream-foreground"} />
                <form className='container h-full mx-auto flex justify-center  flex-col'>
                    <h1 className=' [font-size:_clamp(90px,14vw,200px)] font-extrabold text-cream-foreground leading-[100%] mb-5'>Search</h1>
                    <div className='relative'>
                        <input type='text' placeholder='Type & Hit Enter' required className='w-full border-[1.5px] border-background bg-transparent outline-none px-9 py-6 md:text-[35px] text-2xl font-medium text-cream-foreground placeholder:text-cream-foreground  ' />
                        <span className='text-cream-foreground absolute right-7 top-1/2 -translate-y-1/2 cursor-pointer'> <SearchIcon height={"38"} width={"38"} /></span>
                    </div>
                </form>
            </OffcanvasContent>
        </Offcanvas>
    )
}

export default SerchForm