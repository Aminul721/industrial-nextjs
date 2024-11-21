"use client"
import React from 'react'
import Link from 'next/link'
import { FaSortDown } from "react-icons/fa";
import { menuList } from '@/lib/fackData/menuList';
import { Button } from '@/components/ui/button';
import TopHeaderOne from './topHeaderOne'
import DropDownMenu from './dropDownMenu';
import MegaMenu from './megaMenu';
import MobileMenu from './mobileMenu';
import StickyHeader from '@/components/ui/stickyHeader';
import { usePathname } from 'next/navigation';
import useActiveNavLink from '@/hooks/useActiveNavLink';
import Logo from '@/components/ui/logo';
import ShopCart from './shopCart';
import SearchForm from './serchForm';

const HeaderOne = () => {
    const pathName = usePathname()
    const [active] = useActiveNavLink(pathName)

    return (
        <StickyHeader pathName={pathName}>
            <header id='header' className='sticky w-full transition-[top] duration-300 z-40  bg-background'>
                <div id='header-container' className='px-2 2xl:px-0 [.header-pinned_&]:shadow-md'>
                    <div id='top-header'>
                        <TopHeaderOne />
                        <div className='bg-[#253B2F33] w-full h-[1px] xl:block hidden'></div>
                    </div>
                    <div className='container-fluid flex justify-between items-center py-3 xl:py-0'>
                        <Link href={"/"} className='xl:hidden'>
                            <Logo />
                        </Link>
                        <nav className='xl:block hidden'>
                            <ul className='flex items-center xl:gap-[54px] gap-8'>
                                {
                                    menuList.map(({ id, dropdownMenu, name, path, megaMenu }) => {
                                        return (
                                            <li key={id} className='group'>
                                                <Link href={path} data-id={id} className={`nav-link text-xl text-muted-foreground font-medium pt-3 pb-[17px] flex items-center gap-1 transition-all duration-500 group-hover:text-primary-foreground ${active == id ? "text-primary-foreground" : ""}`}>
                                                    {name}
                                                    {
                                                        (dropdownMenu || megaMenu) && <FaSortDown />
                                                    }
                                                </Link>
                                                {
                                                    dropdownMenu.length && <DropDownMenu dropDownList={dropdownMenu} parentId={id} />
                                                }
                                                {
                                                    megaMenu.length && <MegaMenu dropDownList={megaMenu} parentId={id} />
                                                }
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>

                        <div >
                            <div className=' hidden xl:flex items-center xl:gap-[54px] gap-8'>
                                <SearchForm />
                                <ShopCart />
                                <Button asChild>
                                    <Link href={"/contact"}>Request a Quote</Link>
                                </Button>
                            </div>
                           <MobileMenu/>
                        </div>
                    </div>
                </div>
            </header>
        </StickyHeader>
    )
}

export default HeaderOne