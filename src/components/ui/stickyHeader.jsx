"use client"
import React, { useEffect } from 'react'

const StickyHeader = ({ children, top = 0 }) => {
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => window.removeEventListener('scroll', isSticky)
    }, [])
    const isSticky = () => {
        const header = document.getElementById("header")
        const headerContainer = document.getElementById("header-container")
        const topHeader = document.getElementById("top-header")

        header.style.top = `-${headerContainer.clientHeight}px`

        const scrollTop = window.scrollY;
        if (scrollTop >= 300) {
            header.style.top = topHeader ? `-${topHeader.clientHeight}px` : top
            header.classList.add("header-pinned")
        }
        else {
            header.classList.remove("header-pinned")
        }

    }

    return (
        <>
            {children}
        </>
    )
}

export default StickyHeader