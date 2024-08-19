import path from 'path';
import { promises as fs } from 'fs';
import { enumToOptions } from '@/utils/enum-to-object';
import { Collections } from '@/DTO/Collections';
import { NextResponse } from 'next/server';

const collections = enumToOptions(Collections);

export const GET = async (req: Request) => {
  const jsonDirectory = path.join(process.cwd(), 'database');

  const { searchParams } = new URL(req.url);
  const collection = searchParams.get('collection') as Collections;
  const validCollections = collections.map((collection) => collection.value);

  if (
    typeof collection !== 'string' ||
    !collection ||
    !validCollections.includes(collection)
  ) {
    const error = {
      message: 'Invalid collection',
      validCollections,
    };

    return new NextResponse(JSON.stringify(error), { status: 400 });
  }

  const fileContents = await fs.readFile(
    jsonDirectory + `/${collection}.json`,
    'utf8',
  );

  return new NextResponse(fileContents, { status: 200 });
};
