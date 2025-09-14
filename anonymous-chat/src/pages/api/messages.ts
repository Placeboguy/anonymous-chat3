import { NextApiRequest, NextApiResponse } from 'next';

let messages: { content: string; sender: string }[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { content, sender } = req.body;
        if (!content || !sender) {
            return res.status(400).json({ error: 'Content and sender are required' });
        }
        const newMessage = { content, sender };
        messages.push(newMessage);
        return res.status(201).json(newMessage);
    } else if (req.method === 'GET') {
        return res.status(200).json(messages);
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}