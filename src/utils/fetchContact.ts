import { Contact } from '@/typings/Contact';

export const fetchContact = async () => {
    const rest = await fetch(`${process.env.BASE_URL}/api/contactme`);
    const contact: Contact = await rest.json();
    
    return contact;
}