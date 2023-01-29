import type { NextApiRequest, NextApiResponse } from 'next'
import projects from '@/data/projects.json'
import { Project } from '@/typings/Project'

export default function handler(req: NextApiRequest, res: NextApiResponse<Project[]>) {
    res.status(200).json(projects)
}
