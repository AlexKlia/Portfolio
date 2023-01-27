import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SiTypescript, SiMysql, SiSymfony, SiReact, SiSolidity, SiRust, SiAngular, SiShopify, SiFacebook } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { GrLanguage } from "react-icons/gr"
import { BsTranslate } from "react-icons/bs"

type Props = {
    title: string,
    localization: string,
    langages?: string[],
    dateStart: string,
    dateStop?: string,
    details: string[],
    src: string
}

export default function ExperienceCard({title, localization, langages, dateStart, dateStop, details, src}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full md:w-1/2 xl:w-1/3 w snap-center bg-[#363636] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
         <Image
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                loader={() => src}
                src={src}
                alt={title}
                width={420}
                height={420}
        />

        <motion.div
            initial={{
                y: -42,
                opacity: 0
            }}
            whileInView={{
                y:0,
                opacity: 1
            }}
            transition={{duration: 1}}
            viewport={{once: true}}
            className='px-0 md:px-10'
        >
            <h4 className='text-4xl font-light'>{title}</h4>
            <p className='font-bold text-2xl mt-1'>{localization}</p>
            <div className='flex item-center mx-auto text-center space-x-2 my-2'>
                {langages?.map((param, index) => {
                    const color: string = '#139902';
                    const size: number = 32;

                    switch(param.toLowerCase()) {
                        case 'angular':
                            return <SiAngular key={index} color={color} size={size} />;
                        case 'typescript':
                            return <SiTypescript key={index} color={color} size={size} />;
                        case 'sql':
                            return <SiMysql key={index} color={color} size={size} />;
                        case 'symfony':
                            return <SiSymfony key={index} color={color} size={size} />;
                        case 'react':
                            return <SiReact key={index} color={color} size={size} />;
                        case 'nextjs':
                            return <TbBrandNextjs key={index} color={color} size={size} />;
                        case 'solidity':
                            return <SiSolidity key={index} color={color} size={size} />;
                        case 'rust':
                            return <SiRust key={index} color={color} size={size} />;
                        case 'shopify':
                            return <SiShopify key={index} color={color} size={size} />;
                        case 'translate':
                            return <BsTranslate key={index} color={color} size={size} />;
                        case 'fb':
                            return <SiFacebook key={index} color={color} size={size} />;
                        default:
                            return <GrLanguage key={index} size={size} />
                    }
                }
                )}
            </div>
            <p className='uppercase py-5 text-gray-300'>{dateStart} - {dateStop}</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                {details?.map((detail, i) =>
                    <li key={i}>{detail}</li>
                )}
            </ul>
        </motion.div>
    </article>
  )
}