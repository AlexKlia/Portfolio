export type Experience = {
    id: number,
    title: string,
    src: string,
    enterprise: string,
    details: string[],
    isActive: boolean,
    dateStart: number,
    langages?: string[],
    dateStop?: number
}