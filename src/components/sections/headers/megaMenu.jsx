import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import RightArrow from '../../../../public/icons/rightArrow'
import { cn } from '@/lib/utils'

const MegaMenu = ({ dropDownList, parentId, bgColor,border, color }) => {
    return (
        <div className={'absolute z-50 left-1/2 -translate-x-1/2 bg-muted flex max-w-[1320px] w-full transition-all duration-500 max-h-0 overflow-hidden  group-hover:max-h-[370px]'}>
            {
                dropDownList.map(({ menus, id }) => {
                    return (
                        <ul key={id} className='w-full relative after:absolute after:top-0 after:-right-1 after:contents-[""] after:bg-[#c2d6eb80] last:after:bg-transparent after:w-[1px] after:h-full'>
                            {
                                menus.map(({ id, path, name, desc, img }) => {
                                    return (
                                        <li key={id}>
                                            {img ?
                                                <div className=' relative' >
                                                    <Image src={img} alt={name} loading='lazy' placeholder='blur' className='w-full h-full' />
                                                    <p className='text-cream-foreground text-[34px] font-extrabold leading-[134%] absolute top-6 left-6'>{name}</p>
                                                    <Button asChild className={cn(`absolute bottom-4 left-6 w-[83%] right-0 text-2xl font-semibold after:${bgColor} hover:${color}`, border)}>
                                                        <Link href={'/contact'} >{desc} <RightArrow width='30' height='20' /></Link>
                                                    </Button>
                                                </div>
                                                :
                                                <div className='px-6 pt-7.5 ' >
                                                    <Link href={path} data-id={parentId} className='dropdown-link text-cream-foreground text-lg font-bold  inline-block multiline-hover'>{name}</Link>
                                                    <span className='block text-cream-foreground opacity-90 text-sm'>{desc}</span>
                                                </div>
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
                })
            }

        </div>
    )
}

export default MegaMenu