export type Experience = {
    id: number,
    title: string,
    src: string,
    localization: string,
    details: string[],
    isActive: boolean,
    dateStart: number,
    dateStop?: number,
    langages?: string[]
}