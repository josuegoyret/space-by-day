import { APOD_API_KEY, APOD_API_URL } from '@/lib/config';

export const getAPODByRange = async ({
  startDate,
  endDate
}: {
  startDate: string;
  endDate: string;
}): Promise<APODObject[]> => {
  const res = await fetch(
    `${APOD_API_URL}?api_key=${APOD_API_KEY}&start_date=${startDate}&end_date=${endDate}&hd=false&thumbs=true`
  );
  if (res.ok) return await res.json();
  else throw new Error('Error while getting APOD by range');
};
