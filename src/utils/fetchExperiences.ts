import { Experience } from '@/typings/Experience';

export const fetchExperiences = async () => {
    const rest = await fetch(`${process.env.BASE_URL}/api/experiences`);
    const experiences: Experience[] = await rest.json();
    
    return experiences;
}