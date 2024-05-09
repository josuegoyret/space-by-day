import { APOD_API_KEY, APOD_API_URL } from '@/lib/config';

export const getAPODByRange = async ({
  rangeStart,
  rangeEnd,
  hourlyRevalidation
}: {
  rangeStart: string;
  rangeEnd: string;
  hourlyRevalidation: boolean;
}): Promise<APODObject[]> => {
  const config = hourlyRevalidation ? { next: { revalidate: 3600 } } : {};
  const res = await fetch(
    `${APOD_API_URL}?api_key=${APOD_API_KEY}&start_date=${rangeStart}&end_date=${rangeEnd}&hd=False&thumbs=True`,
    { ...config }
  );
  if (res.ok) return await res.json();
  else throw new Error('Error while getting APOD by range');
};

export const getAPODByDay = async ({ date }: { date: string }): Promise<APODObject> => {
  const res = await fetch(`${APOD_API_URL}?api_key=${APOD_API_KEY}&date=${date}&hd=True&thumbs=True&concept_tags=True`);
  if (res.ok) return await res.json();
  else throw new Error('Error while getting APOD by day');
};
