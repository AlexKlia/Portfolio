import { SocialLink } from '@/typings/SocialLink'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"

type Props = {
        socialLinks: SocialLink[]
}

export default function Header({ socialLinks }: Props) {
        return (
                <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-42 xl:items-center p-4'>
                        <motion.div
                                initial={{
                                        x: -420,
                                        opacity: 0,
                                        scale: 0.42,
                                }}
                                animate={{
                                        x: 0,
                                        opacity: 1,
                                        scale: 1,
                                }}
                                transition={{duration: 1}}
                                className='flex flex-row items-center'
                        >
                                {socialLinks?.filter(socialLink => socialLink.isActive).map((socialLink) =>
                                        <SocialIcon
                                                key={socialLink.id}
                                                url={socialLink.url}
                                                fgColor='gray'
                                                bgColor='transparent'
                                        />
                                )}
                        </motion.div>


                        <motion.div
                                initial={{
                                        x: 420,
                                        opacity: 0,
                                        scale: 0.42,
                                }}
                                animate={{
                                        x: 0,
                                        opacity: 1,
                                        scale: 1,
                                }}
                                transition={{duration: 1}}
                                className='flex flex-row items-center text-gray-300 cursor-pointer'
                        >
                                <SocialIcon
                                        network='email'
                                        fgColor='gray'
                                        bgColor='transparent'
                                />
                                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                                        Contact me
                                </p>
                        </motion.div>
                </header>
        )
}