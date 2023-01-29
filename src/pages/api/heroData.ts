import type { NextApiRequest, NextApiResponse } from 'next'
import heroData from '@/data/heroData.json'
import { HeroData } from '@/typings/HeroData'

export default function handler(req: NextApiRequest, res: NextApiResponse<HeroData>) {
    res.status(200).json(heroData)
}
