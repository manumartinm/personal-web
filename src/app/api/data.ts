import path from 'path';
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { enumToOptions } from '@/utils/enum-to-object';
import { Collections } from '@/DTO/Collections';

const collections = enumToOptions(Collections);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const jsonDirectory = path.join(process.cwd(), 'databse');

  const collection = req.query.collection;

  if (
    typeof collection !== 'string' ||
    !collection ||
    !Object.keys(collections).includes(collection)
  )
    res.status(400).json({ message: 'Invalid collection' });

  const fileContents = await fs.readFile(
    jsonDirectory + `/${collection}.json`,
    'utf8',
  );

  res.status(200).json(JSON.parse(fileContents));
}
