import type { NextApiRequest, NextApiResponse } from 'next'
import about from '@/data/about.json'
import { AboutData } from '@/typings/AboutData'

export default function handler(req: NextApiRequest, res: NextApiResponse<AboutData>) {
    res.status(200).json(about)
}
