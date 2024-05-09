'use server';

import { getAPODByDay, getAPODByRange } from '@/services/apod.service';

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
    return { success: false, message: error.message || 'Error while getting APOD by range', data: [] };
  }
};

interface GetDailyAPODValue {
  success: boolean;
  message: string;
  data: APODObject | null;
}

export const getDailyAPOD = async ({ date }: { date: string }): Promise<GetDailyAPODValue> => {
  try {
    const data = await getAPODByDay({ date });
    return { success: true, message: 'APOD by day successfully achieved', data };
  } catch (error: any) {
    return { success: false, message: error.message || 'Error while getting APOD by day', data: null };
  }
};
