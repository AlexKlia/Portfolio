import { HeroData } from '@/typings/HeroData';

export const fetchHeroData = async () => {
    const rest = await fetch(`${process.env.BASE_URL}/api/heroData`);
    const heroData: HeroData = await rest.json();
    
    return heroData;
}