
import React, { useEffect } from 'react'
import { motion } from "framer-motion"
export default function SectionDivider() {

    useEffect(() => {

    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }} 
            className='bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block'
        ></motion.div>
    )
}
