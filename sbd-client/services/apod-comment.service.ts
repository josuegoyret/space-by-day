import { API_URL } from '@/lib/config';

export const createAPODComment = async ({ content, apodDate }: { content: string; apodDate: string }) => {
  const res = await fetch(`${API_URL}/apod-comment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content, apodDate })
  });
  return res;
};

export const getAPODComments = async ({
  apodDate
}: {
  apodDate: string;
}): Promise<{ success: boolean; message: string; apodComments: PhotoComment[] }> => {
  const res = await fetch(`${API_URL}/apod-comment/${apodDate}`, { cache: 'no-store' });
  if (res.ok) return await res.json();
  else throw new Error('Error while gettins comments');
};
