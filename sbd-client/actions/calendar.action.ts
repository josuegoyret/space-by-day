'use server';

import { getAPODByRange } from '@/services/apod.service';

interface GetMonthlyAPODValue {
  success: boolean;
  message: string;
  data: APODObject[];
}

export const getMonthlyAPOD = async ({
  rangeStart,
  rangeEnd,
  hourlyRevalidation
}: {
  rangeStart: string;
  rangeEnd: string;
  hourlyRevalidation: boolean;
}): Promise<GetMonthlyAPODValue> => {
  try {
    const data = await getAPODByRange({ rangeStart, rangeEnd, hourlyRevalidation });
    return { success: true, message: 'APOD by range successfully achieved', data };
  } catch (error: any) {
    return { success: false, message: error.message || 'APOD by range successfully achieved', data: [] };
  }
};
