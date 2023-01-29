import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCirecles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    words: string[],
    src: string
}

export default function Hero({ words, src }: Props) {
    const [text, count] = useTypewriter({ words, loop: true, delaySpeed: 420 })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCirecles />
            <Image
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                loader={() => src}
                src={src}
                alt="Photo de profil"
                width={420}
                height={420}
            />
            <div className="z-20">
                <h1 className="text-xs sm:text-sm uppercase text-gray-500 pb-2 tracking-[4.2px]">Web Developer</h1>
                <h2 className="text-xl md:text-5xl lg:text-6xl font-semibold px-10 w-96 h-32 sm:h-44 lg:h-60 mx-auto">
                    <span className="mr-2">{text}</span>
                    <Cursor cursorColor="#139902" />
                </h2>

                <div className="pt-2 sm:pt-5 grid grid-cols-2 sm:grid-cols-4 w-4/6 sm:w-full mx-auto">
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>

                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>

                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>

                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}