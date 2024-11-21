import React from 'react'

const PlayIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109" fill="none" className='md:w-full w-20'>
            <g filter="url(#filter0_b_465_594)">
                <circle cx="54.5" cy="54.5" r="54.5" fill="#D9D9D9" fillOpacity="0.78" />
            </g>
            <path d="M45.5 38.5455L74 55L45.5 71.4545L45.5 38.5455Z" fill="currentColor" stroke="currentColor" />
            <defs>
                <filter id="filter0_b_465_594" x="-4" y="-4" width="117" height="117" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_465_594" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_465_594" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export default PlayIcon