import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../app/lib/prisma';

interface WhereClause {
  location?: string;
  specialization?: string;
  consultationFee?: {
    gte?: number;
    lte?: number;
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, location, specialization, feeRange } = req.query;
  const take = 10;
  const skip = (Number(page) - 1) * take;

  try {
    const where: WhereClause = {};
    if (location) where.location = String(location);
    if (specialization) where.specialization = String(specialization);
    if (feeRange) {
      if (feeRange === '100-500') {
        where.consultationFee = { gte: 100, lte: 500 };
      } else if (feeRange === '500-1000') {
        where.consultationFee = { gte: 500, lte: 1000 };
      } else if (feeRange === '1000+') {
        where.consultationFee = { gte: 1000 };
      }
    }

    const [doctors, totalCount] = await Promise.all([
      prisma.doctor.findMany({
        where,
        skip,
        take,
      }),
      prisma.doctor.count({ where }),
    ]);

    res.status(200).json({ doctors, totalCount });
  } catch {
    res.status(500).json({ error: 'Failed to fetch doctors. Please try again later.' });
  }
}
