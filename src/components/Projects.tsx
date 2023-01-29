import { Project } from '@/typings/Project'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Props) {
    const filteredProject = projects?.filter(project => project.isActive).sort((a, b) => a.id < b.id ? -1 : 1);
    return (
        <motion.div
            initial={{
                x: -42,
                opacity: 0
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='flex flex-col relative h-screen text-left md:flex-row max-w-full justify-evenly mx-auto items-center overflow-scroll sm:overflow-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#139902]'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

            <div className='relative top-36 sm:top-0 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#139902]'>
                {filteredProject.map((project, index) =>
                    <div key={project.id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <Image
                            className='top-1/4 md:mb-0 flex-shrink-0 rounded-full object-cover w-36 h-36 sm:w-60 sm:h-60 xl:w-72 xl:h-72'
                            loader={() => project.src}
                            src={project.src}
                            alt={project.title}
                            width={420}
                            height={420}
                        />

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-xl md:text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#139902]'>
                                    Case Study {index+1} of {filteredProject.length}: 
                                </span> {project.title}
                            </h4>

                            <p className='text-sm text-left md:text-center'>{project.detail}</p>
                        </div>
                    </div>
                )}
            </div>

            <div className='w-full absolute top-[30%] bg-[#14990227]/10 left-0 h-2/4 -skew-y-12'></div>
        </motion.div>
    )
}