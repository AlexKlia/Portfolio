import { SocialLink } from '@/typings/SocialLink';

export const fetchSocialLinks = async () => {
    const rest = await fetch(`${process.env.BASE_URL}/api/socialLinks`);
    const socialLinks: SocialLink[] = await rest.json();
    
    return socialLinks;
}