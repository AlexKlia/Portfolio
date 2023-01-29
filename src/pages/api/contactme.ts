import type { NextApiRequest, NextApiResponse } from 'next'
import contactme from '@/data/contactme.json'
import { Contact } from '@/typings/Contact'

export default function handler(req: NextApiRequest, res: NextApiResponse<Contact>) {
    res.status(200).json(contactme)
}
