import { SkillData } from '@/typings/SkillData'
import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'

type Props = {
    skills: SkillData[]
}

export default function Skills({skills}: Props) {
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
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-full xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>

        <h4 className='absolute top-36 uppercase tracking-[4.2px] text-gray-500 text-sm'>Hover over a skill for currency proficiency</h4>

        <div className='grid grid-cols-3 gap-10 absolute top-56 '>
            {
                skills?.filter(skill => skill.isActive)
                    .sort((a, b) => a.proficiency > b.proficiency ? -1 : 1)
                    .map(skill => <Skill key={skill.id} id={skill.id} skill={skill.code} hovered={true} className='w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20' proficiency={skill.proficiency} />)
            }
        </div>
    </motion.div>
  )
}