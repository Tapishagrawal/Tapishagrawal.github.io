
import React, { useEffect } from 'react'
import { motion } from "framer-motion"
export default function SectionDivider() {

    useEffect(() => {

    }, [])

    return (
        <div className='flex justify-center items-center'>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className='bg-gray-200 dark:bg-opacity-20 my-20 h-16 w-1 rounded-full hidden sm:block'
            ></motion.div>
        </div>
    )
}
