"use client"
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { cn } from '@/lib/utils'
import AddressCard from './addressCard'
import { addressList } from '@/lib/fackData/addressList'
import SectionTitle from '@/components/ui/sectionTitle'

const LeafletMap = dynamic(
    () => import('./leafletMap'),
    {
        loading: () => <p>A map is loading</p>,
        ssr: false
    }
)
const Address = ({ className, addressClass }) => {
    const [mapDirection, setMapDirection] = useState([35.9588148, -80.0130777])
    return (
        <section className='pt-10'>
            <SectionTitle
                section_name={"Contact"}
                section_title={"Connect & Collaborate"}
                section_title_class={"max-w-[1000px] lg:mb-8 mb-5"}
                section_description={"Partnering for a Better Tomorrow."}
            />

            <div className={'container 2xl:mt-[120px] lg:mt-25 md:mt-20 mt-16'}>
                <div className={cn('grid lg:grid-cols-[32%_auto]', className)}>
                    <div className={cn('grid lg:grid-cols-1 2sm:grid-cols-2 grid-cols-1 gap-y-10 lg:gap-y-6', addressClass)}>
                        {
                            addressList.map(({ id, address, company, country, email, phone, lat_lng }) => <AddressCard key={id} id={id} address={address} company={company} country={country} email={email} phone={phone} lat_lng={lat_lng} setMapDirection={setMapDirection} />)
                        }
                    </div>
                    <div className='w-full max-h-[392px] lg:sticky lg:top-20 z-[1] mt-16 lg:mt-0'>
                        <LeafletMap mapDirection={mapDirection} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Address