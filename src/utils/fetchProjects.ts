import { Project } from '@/typings/Project';

export const fetchProjects = async () => {
    const rest = await fetch(`${process.env.BASE_URL}/api/projects`);
    const projects: Project[] = await rest.json();
    
    return projects;
}