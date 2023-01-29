import { AboutData } from '@/typings/AboutData';

export const fetchAbout = async () => {
    const rest = await fetch(`${process.env.BASE_URL}/api/about`);
    const about: AboutData = await rest.json();
    
    return about;
}