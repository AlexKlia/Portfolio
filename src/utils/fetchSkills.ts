import { SkillData } from '@/typings/SkillData';

export const fetchSkills = async () => {
    const rest = await fetch(`${process.env.BASE_URL}/api/skills`);
    const skills: SkillData[] = await rest.json();
    
    return skills;
}