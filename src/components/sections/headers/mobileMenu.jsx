"use client"
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

import { menuList } from '@/lib/fackData/menuList'
import SocialMediaList from '@/components/ui/socalMediaList';
import Logo from '@/components/ui/logo';
import ShopCart from './shopCart'
import SerchForm from './serchForm'
import { FaCaretDown } from 'react-icons/fa';
import Hamburger from '../../../../public/icons/hamburger';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"


const MobileMenu = () => {
    const pathName = usePathname()
    const [dropDownActive, setDropDownActive] = useState("")
    const [open, setOpen] = useState("")

    const handleDropDown = (e, id, dropdownMenu, megaMenu) => {
        if (dropdownMenu.length || megaMenu.length) {
            setDropDownActive(dropDownActive ? "" : id)
        }
    }
    useEffect(() => {
        setOpen(false)
    }, [pathName])

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className={"xl:hidden block"}><Hamburger /></SheetTrigger>
            <SheetContent className="px-0 sm:w-3/4 w-5/6">
                <nav className={`max-h-screen min-h-screen overflow-y-auto bg-[#F9FFFC] top-0 z-50 py-4 px-4`}>
                    <SheetTitle><Link href={"/"}><Logo /></Link></SheetTitle>
                    <ul className='mt-7'>
                        {
                            menuList.map(({ id, dropdownMenu, name, path, megaMenu }, parentItem) => {
                                return (
                                    <li key={id} onClick={(e) => handleDropDown(e, id, dropdownMenu, megaMenu)} >
                                        <Link href={path} data-id={id} className={`nav-link text-xl font-medium py-4 flex items-center gap-2 transition-all duration-500 ${dropDownActive === id ? "bg-primary text-cream-foreground" : "text-primary-foreground"}`} >
                                            {name}
                                            {(dropdownMenu || megaMenu) && <FaCaretDown />}
                                        </Link>
                                        {
                                            dropdownMenu &&
                                            <ul className={`transition-all duration-500 max-h-0 overflow-hidden px-4 ${dropDownActive === id ? "max-h-[500px] bg-primary text-cream-foreground pb-2" : ""}`}>
                                                {
                                                    dropdownMenu.map(({ id, name, path }) => {
                                                        return (
                                                            <li key={id} className='leading-10'>
                                                                <Link data-id={parentItem.id} href={path} className='dropdown-item text-cream-foreground text-xl font-medium  inline-block relative after:transition-all after:duration-700 after:absolute after:left-0 after:bottom-0 after:contents-[""] after:w-0 after:h-[2px] after:bg-background after:hover:w-full '>{name}</Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        }
                                        {
                                            megaMenu &&
                                            <div className={`transition-all duration-500 max-h-0 overflow-hidden px-4 ${dropDownActive === id ? "max-h-[700px] bg-primary text-cream-foreground " : ""}`}>
                                                {
                                                    megaMenu.map(({ id, menus }) => {
                                                        return (
                                                            <ul key={id}>
                                                                {
                                                                    menus.map(({ id, name, path, desc }) => {
                                                                        return (
                                                                            <li key={id} className='pb-5'>
                                                                                <Link data-id={parentItem.id} href={path} className='dropdown-item text-cream-foreground text-xl font-medium inline-block relative after:transition-all after:duration-700 after:absolute after:left-0 after:bottom-0 after:contents-[""] after:w-0 after:h-[2px] after:bg-background after:hover:w-full '>{name}</Link>
                                                                                <span className='block text-cream-foreground_rgba text-sm'>{desc}</span>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        )
                                                    })
                                                }
                                            </div>
                                        }
                                    </li>
                                )
                            })
                        }
                        <div className='pt-10 pb-5'>
                            <div className='flex items-center gap-10'>
                                <SerchForm />
                                <ShopCart />
                            </div>
                            <div className='pt-5'>
                                <div>
                                    <p className='font-medium'>Address:</p>
                                    <p>20c Factory Street, Newyork, NY 10205</p>
                                </div>
                                <div className='py-5'>
                                    <p className='font-medium'>Call Us: </p>
                                    <Link href={"tel:(1800)456-7890"} className='multiline-hover'>(1800)456-7890</Link>
                                </div>
                                <div>
                                    <p className='font-medium'>We are social </p>
                                    <SocialMediaList />
                                </div>
                            </div>
                        </div>
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>

    )
}

export default MobileMenu