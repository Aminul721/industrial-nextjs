"use client"
import Link from 'next/link'
import { Button } from '../ui/button'
import Logo from '../ui/logo'
import RightArrow from '../../../public/icons/rightArrow'

const Header = () => {
    return (
        <header className='py-4 absolute top-0 left-0 bg-background z-40 w-full shadow-md'>
            <div className='container-fluid'>
                <div className='bottom-navbar'>
                    <div className='flex sm:flex-row flex-col justify-between items-center'>
                        <div className='flex justify-between items-center py-3'>
                            <Logo/>
                        </div>
                        <Button asChild className="mt-5 sm:mt-0 hidden sm:flex gap-3">
                            <Link href={"https://www.templatemonster.com/store/themeperch/"}>Buy Industria <RightArrow width={"35"} height={"22"} /></Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header