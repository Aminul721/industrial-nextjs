import Logo from '@/components/ui/logo'
import SocialMediaList from '@/components/ui/socalMediaList'
import Link from 'next/link'
import React from 'react'

const TopHeaderTwo = () => {
  return (
    <div className='py-4 hidden xl:flex justify-between items-center'>
      <div className='flex xl:gap-12 gap-6'>
        <div className='flex items-center px-3'>
          <p className='font-medium text-muted-foreground'>Address:</p>
          <p className='text-muted-foreground'>20c Factory Street, Newyork, NY 10205</p>
        </div>
        <div className='flex items-center'>
          <p className='font-medium text-muted-foreground'>Call Us: </p>
          <Link href={"tel:(1800)456-7890"} className='multiline-hover text-muted-foreground'>(1800)456-7890</Link>
        </div>
      </div>
      <SocialMediaList />
    </div>
  )
}

export default TopHeaderTwo