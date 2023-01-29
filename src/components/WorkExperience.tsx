import { Experience } from '@/typings/Experience'
import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {
    experiences: Experience[]
}

export default function WorkExperience({experiences}: Props) {
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
        viewport={{once: true}}
        className='flex flex-col relative h-screen text-left overflow-hidden md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[10px] sm:tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>

        <div className='absolute top-36 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#139902]'>
            {  
                experiences?.filter(e => e.isActive)
                    .sort((a, b) => a.dateStart < b.dateStart ? 1 : -1)
                    .map(e => {
                        const dateStop: string = e.dateStop ? new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long'}).format(e.dateStop) : 'now'

                        return {
                            id: e.id,
                            title: e.title,
                            langages: e.langages,
                            dateStart: new Intl.DateTimeFormat( 'en-US', { year: 'numeric', month: 'long'}).format(e.dateStart),
                            dateStop: dateStop,
                            details: e.details,
                            localization: e.localization,
                            src: e.src
                        }
                    })
                    .map(e =>
                        <ExperienceCard key={e.id}
                                        title={e.title}
                                        langages={e.langages}
                                        dateStart={e.dateStart}
                                        dateStop={e.dateStop}
                                        details={e.details}
                                        localization={e.localization}
                                        src={e.src}
                        />
                    )
            }
        </div>
    </motion.div>
  )
}