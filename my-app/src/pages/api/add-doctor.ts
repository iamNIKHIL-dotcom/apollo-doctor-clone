import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../app/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const doctor = await prisma.doctor.create({ data: req.body });
    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add doctor' });
  }
}
