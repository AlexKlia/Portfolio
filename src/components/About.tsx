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
            x: -42,
            opacity: 0
        }}
        whileInView={{
            x:0,
            opacity: 1
        }}
        transition={{duration: 1}}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <Image
                className='-mb-20 absolute hidden sm:block top-52 xl:top-1/4 md:mb-0 flex-shrink-0 rounded-full object-cover sm:w-60 sm:h-60 xl:w-72 xl:h-72'
                loader={() => src}
                src={src}
                alt="About section photo"
                width={420}
                height={420}
        />

        <div className='space-y-10 px-0 md:px-10 absolute top-1/3 sm:top-2/4 xl:top-2/3 text-center'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#139902]'>little</span> background</h4>
            <p className='text-sm text-left md:text-center px-4 overflow-y-scroll max-h-72 md:max-h-full sm:overflow-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#139902]'>{about}</p>
        </div>
    </motion.div>
  )
}