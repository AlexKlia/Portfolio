import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {
    about:string,
    src: string
}

export default function About({about, src}: Props) {
  return (
    <motion.div
        initial={{
            x: -420,
            opacity: 0
        }}
        whileInView={{
            x:0,
            opacity: 1
        }}
        transition={{duration: 1}}
        viewport={{once: true}}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[4.2px] text-gray-500 text-2xl'>About</h3>

        <Image
                className='-mb-20 md:mb-0 flex-shrink-0 h-56 w-56 rounded-full object-cover md:w-95 md:h-95 xl:w-[500px] xl:h-[500px]'
                loader={() => src}
                src={src}
                alt="About section photo"
                width={420}
                height={420}
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#139902]'>little</span> background</h4>
            <p className='text-sm'>{about}</p>
        </div>
    </motion.div>
  )
}