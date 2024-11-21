"use client"
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import React, { createContext, useContext, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

const OffcanvasContext = createContext({});

const OffcanvasOverlay = ({ children, className }) => {
    const [active, setActive] = useContext(OffcanvasContext)

    return (
        <div data-state={active} onClick={() => setActive("closed")} className={cn(`bg-black/15 h-full fixed z-50 right-0 top-0 transition-all duration-200 ease w-full data-[state=closed]:invisible data-[state=open]:visible`, className)}></div>
    )
}

const OffcanvasContent = ({ children, className, side }) => {
    const [active] = useContext(OffcanvasContext)
    const offcanvasVariants = cva(
        "fixed z-[999] transition-all duration-500 h-auto shadow-md bg-background max-w-md max-h-min rounded-[30px]",
        {
            variants: {
                side: {
                    top: "data-[state=closed]:top-[-150%] data-[state=open]:top-0 left-0",
                    bottom: "",
                    right: "data-[state=closed]:right-[-150%] data-[state=open]:right-0 top-0",
                    left: "data-[state=closed]:left-[-150%] data-[state=open]:left-0"
                }
            },
            defaultVariants: {
                side: "right",
            },
        }
    )

    return (
        <div data-state={active} className={cn(offcanvasVariants({ side }), className)}>
            {children}
        </div>
    )
}


const OffcanvasClose = ({ children, className, props }) => {
    const [, setActive] = useContext(OffcanvasContext)
    return (
        <div onClick={() => setActive("closed")} className={cn(`absolute right-4 top-4 text-muted-foreground font-bold text-4xl cursor-pointer`, className)}>
            {children ? children : <MdClose />}
        </div>
    )
}

const OffcanvasTrigger = ({ children, className, ...props }) => {
    const [, setActive] = useContext(OffcanvasContext)

    return (
        <div onClick={() => setActive("open")} {...props} className={cn("text-5xl text-muted-foreground cursor-pointer", className)}>
            {children ? children : <BiMenuAltRight />}
        </div>
    )
}


const Offcanvas = ({ children }) => {
    const [active, setActive] = useState("closed")
    return (
        <OffcanvasContext.Provider value={[active, setActive]}>
            {children}
        </OffcanvasContext.Provider>
    )
}

export default Offcanvas

export { OffcanvasOverlay, OffcanvasTrigger, OffcanvasContent, OffcanvasClose, OffcanvasContext }