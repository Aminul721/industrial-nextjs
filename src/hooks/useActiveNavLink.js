"use client"
import React, { useEffect, useState } from 'react'

const useActiveNavLink = (pathName) => {
    const [active, setActive] = useState()
    useEffect(() => {
        const nav_link = document.querySelectorAll(".nav-link")
        const dropdown_link = document.querySelectorAll(".dropdown-link")

        nav_link.forEach((nav_item) => {
            const nav_id = nav_item?.getAttribute("data-id")
            const nav_pathname = nav_item?.getAttribute("href")

            if (pathName === nav_pathname) {
                setActive(nav_id)
            }

            dropdown_link.forEach((dropdown_item) => {
                const dropdown_pathname = dropdown_item?.getAttribute('href');
                const dropdown_id = dropdown_item?.getAttribute("data-id")
                if (dropdown_pathname === pathName) {
                    if (nav_id === dropdown_id) {
                        setActive(dropdown_id)
                    }
                }
            })
        })
    }, [pathName])
    return [active]
}

export default useActiveNavLink