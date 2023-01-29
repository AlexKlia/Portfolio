import React, { useState } from 'react'
import { SiTypescript, SiMysql, SiSymfony, SiReact, SiSolidity, SiRust, SiAngular, SiShopify, SiFacebook, SiHtml5, SiJavascript, SiCss3, SiPython } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { GrLanguage } from "react-icons/gr"
import { BsTranslate } from "react-icons/bs"
import TooltipSkill from './TooltipSkill'

type Props = {
    id: number
    skill: string
    color?: string
    hovered?: boolean
    hoverColor?: string
    className?: string
    size?: number
    proficiency?: number
}

const baseColor: string = '#1499026e';
const hoverBaseColor: string = '#139902';
const baseSize: number = 32;

const getSkillTitle = (title: string, proficiency?: number) => {
    if (proficiency !== undefined) {
        title += ': ' + proficiency + '%'
    }

    return title
}

const getSkillElement = (id: number, skill: string, color?: string, hovered?: boolean, hoverColor?: string, size?: number, className?: string, proficiency?: number) => {
    const [isHoveringId, setIsHovered] = useState(0);
    const onMouseEnter = (id: number) => setIsHovered(id);
    const onMouseLeave = () => setIsHovered(0);

    let skillColor = baseColor;
    if (color !== undefined) {
        skillColor = color;
    }

    let skillHoveredColor = hoverBaseColor;
    if (hoverColor !== undefined) {
        skillHoveredColor = hoverColor;
    }

    let skillSize = baseSize;
    if (size !== undefined) {
        skillSize = size;
    }

    skillColor = hovered ? isHoveringId === id ? skillHoveredColor : skillColor : skillHoveredColor

    switch (skill.toLowerCase()) {
        case 'angular':
            return <TooltipSkill title={getSkillTitle('Angular', proficiency)} skillElement={<SiAngular onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />;
        case 'typescript':
            return <TooltipSkill title={getSkillTitle('Typescript', proficiency)} skillElement={<SiTypescript onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />;
        case 'sql':
            return <TooltipSkill title={getSkillTitle('SQL Server', proficiency)} skillElement={<SiMysql onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />;
        case 'symfony':
            return <TooltipSkill title={getSkillTitle('Symfony', proficiency)} skillElement={<SiSymfony onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />;
        case 'react':
            return <TooltipSkill title={getSkillTitle('React.js', proficiency)} skillElement={<SiReact onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />;
        case 'nextjs':
            return <TooltipSkill title={getSkillTitle('Next.js', proficiency)} skillElement={<TbBrandNextjs onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />;
        case 'solidity':
            return <TooltipSkill title={getSkillTitle('Solidity', proficiency)} skillElement={<SiSolidity onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />;
        case 'rust':
            return <TooltipSkill title={getSkillTitle('Rust', proficiency)} skillElement={<SiRust onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />;
        case 'shopify':
            return <TooltipSkill title={getSkillTitle('Shopify', proficiency)} skillElement={<SiShopify onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />;
        case 'translate':
            return <TooltipSkill title={getSkillTitle('English', proficiency)} skillElement={<BsTranslate onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />;
        case 'fb':
            return <TooltipSkill title={getSkillTitle('Facebook Ads', proficiency)} skillElement={<SiFacebook onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />;
        case 'html':
            return <TooltipSkill title={getSkillTitle('HTML 5', proficiency)} skillElement={<SiHtml5 onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />;
        case 'css':
            return <TooltipSkill title={getSkillTitle('CSS 3', proficiency)} skillElement={<SiCss3 onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />;
        case 'python':
            return <TooltipSkill title={getSkillTitle('Python', proficiency)} skillElement={<SiPython onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />;
        case 'js':
            return <TooltipSkill title={getSkillTitle('Javascript', proficiency)} skillElement={<SiJavascript onMouseEnter={() => onMouseEnter(id)} onMouseLeave={() => onMouseLeave()} className={className} color={skillColor} size={skillSize} />} />;
        default:
            return <GrLanguage size={size} />
    }
}

export default function Skill({ id, skill, color, hovered, hoverColor, size, proficiency, className }: Props) {
    if (!proficiency) {
        return getSkillElement(id, skill, color, hovered, hoverColor, size, className);
    } else {
        return (
            <div className='rounded-full border border-[#14990227] hover:border-[#139902] px-5 py-5 md:px-6 md:py-6 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32'>
                {getSkillElement(id, skill, color, hovered, hoverColor, size, className, proficiency)}
            </div>
        )
    }
}