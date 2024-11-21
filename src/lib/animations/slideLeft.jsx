"use client"
import React from 'react'
import { motion } from "framer-motion"

const SlideLeft = ({ className, children, delay_id }) => {
    const slideLeftVariants = {
        offscreen: {
            x: -80,
            opacity: 0
        },
        onscreen: {
            x: 0,
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
            variants={slideLeftVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default SlideLeft