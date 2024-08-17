import { Collections } from '@/DTO/Collections';
import { useEffect, useState } from 'react';

const useReadDatabase = <T extends {}>(collection: Collections) => {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    const readDatabase = async () => {
      try {
        const data = await fetch(`/api/data?collection=${collection}`);
        const dataJson = await data.json();

        setData(dataJson as T[]);
      } catch (error) {
        console.error(error);
      }
    };

    readDatabase();
  }, [collection]);

  return data;
};

export default useReadDatabase;
