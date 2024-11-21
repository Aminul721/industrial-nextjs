import Link from 'next/link'
import React from 'react'

const DropDownMenu = ({ dropDownList, parentId }) => {
    return (
        <div className={`absolute z-50 bg-muted flex max-h-0 py-0 overflow-hidden transition-all duration-500  group-hover:max-h-[300px] group-hover:py-5`}>
            <ul className={`px-6 ${dropDownList.length > 7 ? "columns-2 gap-20 relative after:absolute after:left-1/2 after:top-0 after:h-full after:w-[1px] after:bg-[#c2d6eb80]" : "min-w-60"} `}>
                {
                    dropDownList.map(({ id, name, path }) => {
                        return (
                            <li key={id} className='leading-10'>
                                <Link href={path} data-id={parentId} className='dropdown-link text-cream-foreground text-xl font-medium multiline-hover'>{name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default DropDownMenu