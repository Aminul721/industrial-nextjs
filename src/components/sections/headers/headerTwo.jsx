"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSortDown } from 'react-icons/fa';
import Hamburger from '../../../../public/icons/hamburger';
import Offcanvas, { OffcanvasClose, OffcanvasContent, OffcanvasOverlay, OffcanvasTrigger } from '@/components/ui/offcanvas';
import { menuList } from '@/lib/fackData/menuList';
import DropDownMenu from './dropDownMenu';
import MegaMenu from './megaMenu';
import { Button } from '@/components/ui/button';
import MobileMenu from './mobileMenu';
import StickyHeader from '@/components/ui/stickyHeader';
import useActiveNavLink from '@/hooks/useActiveNavLink';
import Logo from '@/components/ui/logo';
import TopHeaderTwo from './topHeaderTwo';
import ShopCart from './shopCart';
import SearchForm from './serchForm';

const HeaderTwo = () => {
  const pathName = usePathname()
  const [active] = useActiveNavLink(pathName)

  return (
    <StickyHeader pathName={pathName}>
      <header id='header' className='sticky w-full transition-[top] duration-300 z-40 bg-background backdrop-filter-[12px] border-b px-2 2xl:px-0'>
        <div id='header-container' className='container-fluid flex justify-between items-center gap-15'>
          <Link href={"/"} className='xl:block hidden'>
            <Logo src='/images/logoTwo.svg' width="248" height="44" />
          </Link>{/* logo for desktop */}
          <div className='w-full relative after:absolute after:left-0 after:top-0 after:h-full after:w-[1px] xl:after:bg-border'>
            <div>
              <TopHeaderTwo />
              <span className='border-b block w-full'></span>
            </div>
            <div className='flex justify-between items-center gap-7.5 xl:py-4 py-3 xl:pl-3'>
              <Link href={"/"} className='xl:hidden w-44'>
                <Logo src='/images/logoTwo.png' width="248" height="44" />
              </Link>
              <nav className='xl:block hidden'>
                <ul className='flex items-center 2xl:gap-[54px] gap-8'>
                  {
                    menuList.map(({ id, dropdownMenu, name, path, megaMenu }) => {
                      return (
                        <li key={id} className='group'>
                          <Link href={path} data-id={id} className={`nav-link text-xl text-muted-foreground font-medium pt-3 pb-[17px] flex items-center gap-1 transition-all duration-500 group-hover:text-secondary-foreground ${active == id ? "text-secondary-foreground" : ""}`}>
                            {name}
                            {
                              (dropdownMenu || megaMenu) && <FaSortDown />
                            }
                          </Link>
                          {
                            dropdownMenu.length && <DropDownMenu dropDownList={dropdownMenu} parentId={id} bgColor={"bg-secondary"} />
                          }
                          {
                            megaMenu.length && <MegaMenu dropDownList={megaMenu} parentId={id} bgColor={"bg-secondary"} color={'text-secondary'} border={"border-secondary"} />
                          }
                        </li>
                      )
                    })
                  }
                </ul>
              </nav>

              <div >
                <div className=' hidden xl:flex items-center 2xl:gap-[54px] gap-8'>
                  <SearchForm color="text-secondary-foreground" bg_color="bg-secondary" />
                  <ShopCart color="text-secondary-foreground" bg_color="bg-secondary" border_color="border-secondary" />
                  <Button asChild className="after:bg-secondary border-secondary hover:text-secondary-foreground">
                    <Link href={"/contact"}>Request a Quote</Link>
                  </Button>
                </div>
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </header>
    </StickyHeader>
  )
}

export default HeaderTwo