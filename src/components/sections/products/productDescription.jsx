"use client"
import { useState } from 'react'
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import RightArrow from '../../../../public/icons/rightArrow';

const initialTabs = ["Description", "Product Details", "Reviews"]
const ProductDescription = () => {
    const [activeTab, setActiveTab] = useState(initialTabs[0])
    return (
        <div className='2xl:mt-[120px] lg:mt-25 md:mt-20 mt-16'>
            <ul className='flex xm:flex-wrap gap-5 justify-between mb-2.5'>
                {
                    initialTabs.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => setActiveTab(item)}
                                className="relative xl:text-4xl md:text-3xl sm:text-2xl font-bold leading-[1.35] text-muted-foreground"
                            >
                                {activeTab === item && (
                                    <motion.span
                                        layoutId="bubble"
                                        className="absolute inset-0 -bottom-[13px] z-10 border-b-[5px] border-b-primary"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
            <hr className='' />
            <div className='mt-7.5 max-w-[958px] w-full relative overflow-hidden'>
                <div className={`${activeTab === "Description" ? "relative opacity-100 translate-y-0 transition-all duration-500" : "absolute top-0 left-0 opacity-0 translate-y-10 transition-all duration-500"} bg-background `}>
                    <p>The Ratio Pendant Lamp featurees a wide lampshade, referring  the bold and elegant shape  classic metal penwdants. The lamp to features a spun steel shade with a seweamlessly embedded LED module. The Ratio Pendant Lamp featurees a wide lampshade, referring  the bold and elegant shape  classic metal penwdants. The lamp to features a spun steel shade with a seweamlessly embedded LED module.</p>
                    <p className='mt-6'>The Ratio Pendant Lamp featurees a wide lampshade, referring  the bold and elegant shape  classic metal penwdants. The lamp to features a spun steel shade with. </p>
                </div>
                <div className={`${activeTab === "Product Details" ? "relative opacity-100 translate-y-0 transition-all duration-500" : "absolute top-0 left-0 opacity-0 translate-y-10 transition-all duration-500"} bg-background `}>
                    <p >The Ratio Pendant Lamp featurees a wide lampshade, referring  the bold and elegant shape  classic metal penwdants. The lamp to features a spun steel shade with. </p>
                    <p className='mt-6'>The Ratio Pendant Lamp featurees a wide lampshade, referring  the bold and elegant shape  classic metal penwdants. The lamp to features a spun steel shade with a seweamlessly embedded LED module. The Ratio Pendant Lamp featurees a wide lampshade, referring  the bold and elegant shape  classic metal penwdants. The lamp to features a spun steel shade with a seweamlessly embedded LED module.</p>
                </div>
                <div className={`${activeTab === "Reviews" ? "relative opacity-100 translate-y-0 transition-all duration-500" : "absolute top-0 left-0 opacity-0 translate-y-10 transition-all duration-500"} bg-background `}>
                    <form>
                        <Input className="rounded-none py-[14px] border-muted border-2 text-lg mb-[13px]" placeholder={"Your Name"} type={"text"} />
                        <div className='flex sm:flex-row flex-col gap-x-5'>
                            <Input className="rounded-none py-[14px] border-muted border-2 text-lg mb-[13px]" placeholder={"Phone Number"} type={"number"} />
                            <Input className="rounded-none py-[14px] border-muted border-2 text-lg mb-[13px]" placeholder={"Your Email"} type={"email"} />
                        </div>
                        <Textarea placeholder={'Type your massage'} className={"min-h-[187px] rounded-none py-[14px] border-muted border-2 text-lg mb-[13px]"} />
                        <div className='flex justify-end'>
                            <Button variant="outline" size="lg">Send massage <RightArrow height={"22"} width={"35"} /></Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription