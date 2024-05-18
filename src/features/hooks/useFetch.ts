import { Car, Model, Param } from 'features/post/types';
import { get } from 'features/services/transpot';
import { useEffect, useState } from 'react';

type FetchState = Car[] | Model[] | Param[] | null;

export const useFetch = (url: string, params?: string) => {
  const [state, setState] = useState<FetchState>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await get(url);
        const timeoutId = setTimeout(() => {
          setState(response.data);
        }, 1000);
      } catch (error) {
        console.error('GETPOST', error);
      }
    })();
  }, [url, params]);

  return state;
};
