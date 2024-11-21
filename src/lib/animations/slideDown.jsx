"use client"
import React from 'react'
import { motion } from "framer-motion"

const SlideDown = ({ className, children, delay_id = 1 }) => {
    const slideDownVariants = {
        offscreen: {
            y: -80,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                // type: "spring",
                // bounce: 0.4,
                duration: 0.8,
                delay: (delay_id === 1 ? 0 : 0.1 * delay_id)
            }
        }
    };
    return (
        <motion.div
            variants={slideDownVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default SlideDown