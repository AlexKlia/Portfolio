import { SocialLink } from '@/typings/SocialLink'
import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"

type Props = {
        socialLinks: SocialLink[]
}


export default function Header({ socialLinks }: Props) {
        const [isHoveringId, setIsHovered] = useState(0);
        const onMouseEnter = (id: number) => setIsHovered(id);
        const onMouseLeave = () => setIsHovered(0);
        const EMAIL_ID: number = 420;

        return (
                <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-4'>
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
                                                        fgColor={isHoveringId === socialLink.id ? '#139902' : 'gray'}
                                                        onMouseEnter={() => onMouseEnter(socialLink.id)}
                                                        onMouseLeave={() => onMouseLeave()}
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
                                onMouseEnter={() => onMouseEnter(EMAIL_ID)}
                                onMouseLeave={() => onMouseLeave()}
                        >
                                <SocialIcon
                                        network='email'
                                        bgColor='transparent'
                                        fgColor={isHoveringId === EMAIL_ID ? '#139902' : 'gray'}  
                                />
                                <p className='uppercase hidden md:inline-flex text-sm'>
                                        <span className={isHoveringId === EMAIL_ID? 'text-[#139902]' : 'text-gray-400'}>
                                                Contact me
                                        </span>
                                </p>
                        </motion.div>
                </header>
        )
}