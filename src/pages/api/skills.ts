import type { NextApiRequest, NextApiResponse } from 'next'
import skills from '@/data/skills.json'
import { SkillData } from '@/typings/SkillData'

export default function handler(req: NextApiRequest, res: NextApiResponse<SkillData[]>) {
    res.status(200).json(skills)
}
