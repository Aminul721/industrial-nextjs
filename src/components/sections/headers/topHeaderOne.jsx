import React from 'react'
import Link from 'next/link'
import SocialMediaList from '@/components/ui/socalMediaList'
import Logo from '@/components/ui/logo'

const TopHeaderOne = () => {
    return (
        <div className='container-fluid py-5 hidden xl:flex justify-between items-center'>
            <Link href={"/"}><Logo /></Link>
            <div className='flex gap-12.5'>
                <div>
                    <p className='font-medium text-muted-foreground'>Address:</p>
                    <p className='text-muted-foreground'>20c Factory Street, Newyork, NY 10205</p>
                </div>
                <div>
                    <p className='font-medium text-muted-foreground'>Call Us: </p>
                    <Link href={"tel:(1800)456-7890"} className='multiline-hover text-muted-foreground'>(1800)456-7890</Link>
                </div>
                <div>
                    <p className='font-medium text-muted-foreground'>We are social </p>
                    <SocialMediaList />
                </div>
            </div>
        </div>
    )
}

export default TopHeaderOne