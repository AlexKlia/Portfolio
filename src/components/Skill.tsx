import React from 'react'
import { SiTypescript, SiMysql, SiSymfony, SiReact, SiSolidity, SiRust, SiAngular, SiShopify, SiFacebook, SiHtml5, SiJavascript, SiCss3, SiPython } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { GrLanguage } from "react-icons/gr"
import { BsTranslate } from "react-icons/bs"
import TooltipSkill from './TooltipSkill'

type Props = {
    skill: string
    color?: string
    size?: number
}

const baseColor: string = '#139902';
const baseSize: number = 32;

const getSkillElement = (skill: string, color?: string, size?: number) => {
    let skillColor = baseColor;
    if(color !== undefined) {
        skillColor = color;
    }

    let skillSize = baseSize;
    if(size !== undefined) {
        skillSize = size;
    }

    switch(skill.toLowerCase()) {
        case 'angular':
            return <TooltipSkill title="Angular" skillElement={<SiAngular color={skillColor} size={skillSize} />} />;
        case 'typescript':
            return <TooltipSkill title="Typescript" skillElement={<SiTypescript color={skillColor} size={skillSize} />} />;
        case 'sql':
            return <TooltipSkill title="SQL Server" skillElement={<SiMysql color={skillColor} size={skillSize} />} />;
        case 'symfony':
            return <TooltipSkill title="Symfony" skillElement={<SiSymfony color={skillColor} size={skillSize} />} />;
        case 'react':
            return <TooltipSkill title="React.js" skillElement={<SiReact color={skillColor} size={skillSize} />} />;
        case 'nextjs':
            return <TooltipSkill title="Next.js" skillElement={<TbBrandNextjs color={skillColor} size={skillSize} />} />;
        case 'solidity':
            return <TooltipSkill title="Solidity" skillElement={<SiSolidity color={skillColor} size={skillSize} />} />;
        case 'rust':
            return <TooltipSkill title="Rust" skillElement={<SiRust color={skillColor} size={skillSize} />} />;
        case 'shopify':
            return <TooltipSkill title="Shopify" skillElement={<SiShopify color={skillColor} size={skillSize} />} />;
        case 'translate':
            return <TooltipSkill title="English" skillElement={<BsTranslate color={skillColor} size={skillSize} />} />;
        case 'fb':
            return <TooltipSkill title="Facebook Ads" skillElement={<SiFacebook color={skillColor} size={skillSize} />} />;
        case 'html':
            return <TooltipSkill title="HTML 5" skillElement={<SiHtml5 color={skillColor} size={skillSize} />} />;
        case 'css':
            return <TooltipSkill title="CSS 3" skillElement={<SiCss3 color={skillColor} size={skillSize} />} />;
        case 'python':
            return <TooltipSkill title="Python" skillElement={<SiPython color={skillColor} size={skillSize} />} />;
        case 'js':
            return <TooltipSkill title="Javascript" skillElement={<SiJavascript color={skillColor} size={skillSize} />} />;
        default:
            return <GrLanguage size={size} />
    }
}

export default function Skill({skill, color, size}: Props) {
  return (<>{getSkillElement(skill, color, size)}</>)
}