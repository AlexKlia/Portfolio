import type { NextApiRequest, NextApiResponse } from 'next'
import experiences from '@/data/experiences.json'
import { Experience } from '@/typings/Experience'

export default function handler(req: NextApiRequest, res: NextApiResponse<Experience[]>) {
    res.status(200).json(experiences)
}
