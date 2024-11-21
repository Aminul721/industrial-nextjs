"use client"
import React, { useEffect, useState } from 'react'
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const CheckoutForm = ({customerInfo, setCustomerInfo}) => {
    const [country, setCountry] = useState("")
    const [open, setOpen] = useState()
  
    useEffect(() => {
        document.body.style.cssText = `overflow:auto !important; margin-right:0 !important`;
        setCustomerInfo({ ...customerInfo, "country": country })
    }, [open])


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setCustomerInfo({ ...customerInfo, [name]: value, "country": country })
    }
 
    return (
        <form>
            <div className='flex flex-col gap-7.5'>
                <div className='flex 2sm:flex-row flex-col justify-between gap-[22px]'>
                    <Input className={"placeholder:text-muted-foreground font-medium rounded-none py-[14px] text-lg"} onChange={handleInputChange} type={"text"} name={"first_name"} placeholder={"First name *"} />
                    <Input className={"placeholder:text-muted-foreground font-medium rounded-none py-[14px] text-lg"} onChange={handleInputChange} type={"text"} name={"last_name"} placeholder={"Last name *"} />
                </div>
                <div>
                    <Input className={"placeholder:text-muted-foreground font-medium rounded-none py-[14px] text-lg"} onChange={handleInputChange} type={"text"} name={"company_name"} placeholder={"Company name"} />
                </div>
                <div>
                    <Select onOpenChange={setOpen} onValueChange={setCountry}>
                        <SelectTrigger className='rounded-none py-[14px] h-15 text-lg font-medium focus:ring-offset-0 text-muted-foreground'>
                            <SelectValue placeholder="Country/Region *" />
                        </SelectTrigger>
                        <SelectContent className='rounded-none py-[14px] bg-primary'>
                            <SelectItem value="united-states" className="text-lg font-medium cursor-pointer text-cream-foreground focus:bg-transparent focus:text-accent-transparent">United States</SelectItem>
                            <SelectItem value="united-kingdom" className="text-lg font-medium cursor-pointer text-cream-foreground focus:bg-transparent focus:text-accent-transparent">United Kingdom</SelectItem>
                            <SelectItem value="bangladesh" className="text-lg font-medium cursor-pointer text-cream-foreground focus:bg-transparent focus:text-accent-transparent">Bangladesh</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Input className={"placeholder:text-muted-foreground font-medium rounded-none py-[14px] text-lg"} onChange={handleInputChange} type={"text"} name={"house_number"} placeholder={"House number & Street name"} />
                </div>
                <div>
                    <Input className={"placeholder:text-muted-foreground font-medium rounded-none py-[14px] text-lg"} onChange={handleInputChange} type={"text"} name={"apartment"} placeholder={"Apartment, suit, unit, etc (optional)"} />
                </div>
                <div>
                    <Input className={"placeholder:text-muted-foreground font-medium rounded-none py-[14px] text-lg"} onChange={handleInputChange} type={"text"} name={"city"} placeholder={"Town/city *"} />
                </div>
                <div className='flex 2sm:flex-row flex-col justify-between gap-[22px]'>
                    <Input className={"placeholder:text-muted-foreground font-medium rounded-none py-[14px] text-lg"} onChange={handleInputChange} type={"text"} name={"postcode"} placeholder={"Postcode *"} />
                    <Input className={"placeholder:text-muted-foreground font-medium rounded-none py-[14px] text-lg"} onChange={handleInputChange} type={"text"} name={"phone"} placeholder={"Phone *"} />
                </div>
                <div>
                    <Input className={"placeholder:text-muted-foreground font-medium rounded-none py-[14px] text-lg"} onChange={handleInputChange} type={"email"} name={"email"} placeholder={"Email Address *"} />
                </div>
            </div>
            <div className='flex items-center gap-4 mt-[18px]'>
                <Checkbox id="terms" className="rounded-none w-[14px] h-[14px] flex justify-center items-center" />
                <Label htmlFor="terms" className="text-lg text-muted-foreground-foreground font-semibold">Create an account?</Label>
            </div>
            <span className='block w-full h-[1px] bg-secondary my-7.5'></span>
            <div className='flex items-center gap-4 mt-[18px]'>
                <Checkbox id="extra" className="rounded-none w-[14px] h-[14px] flex justify-center items-center" />
                <Label htmlFor="extra" className="text-lg text-muted-foreground-foreground font-semibold">Create an account?</Label>
            </div>
            <Textarea className={"placeholder:text-muted-foreground font-medium rounded-none py-[14px] text-lg mt-11 min-h-[200px]"} onChange={handleInputChange} placeholder={"Order notes (optional)"} name={"notes"} />
        </form>
    )
}

export default CheckoutForm