import { YEAR } from '@/lib/config';

export const getMonthNumberOfDays = ({ month, year }: { month: MonthIndex; year: number }): number => {
  return new Date(year, month + 1, 0).getDate();
};

export const getDaysArray = ({ numberOfDays }: { numberOfDays: number }): number[] => {
  return Array.from({ length: numberOfDays }, (_, index) => index + 1);
};

export const getFirstDayOfMonth = ({ month, year }: { month: MonthIndex; year: number }): number => {
  const firstDay = new Date(year, month, 1);
  return firstDay.getDay();
};

interface CurrentMonthInfo {
  currentMonthDaysArray: number[];
  firstDay: number;
  currentMonthNumberOfDays: number;
}

export const getCurrentMonthInfo = ({ month, year }: { month: MonthIndex; year: number }): CurrentMonthInfo => {
  const numberOfDays = getMonthNumberOfDays({ month, year });
  const currentMonthDaysArray = getDaysArray({ numberOfDays });
  const firstDay = getFirstDayOfMonth({ month, year });
  return { currentMonthDaysArray, firstDay, currentMonthNumberOfDays: numberOfDays };
};

export const getLastMonthNumberOfDays = ({ month, year }: { month: MonthIndex; year: number }): number => {
  return new Date(year, month, 0).getDate();
};

export const getLastMonthDaysArray = ({
  numberOfDays,
  nextMonthFirstDay
}: {
  numberOfDays: number;
  nextMonthFirstDay: number;
}): number[] => {
  return Array.from({ length: nextMonthFirstDay }, (_, index) => numberOfDays - nextMonthFirstDay + index + 1);
};

interface LastMonthInfo {
  lastMonthDaysArray: number[];
  lastDay: number;
}

export const getLastMonthInfo = ({ month, year }: { month: MonthIndex; year: number }): LastMonthInfo => {
  const numberOfDays = getLastMonthNumberOfDays({ month, year });
  const firstDay = getFirstDayOfMonth({ month, year });
  const lastMonthDaysArray = getLastMonthDaysArray({ numberOfDays, nextMonthFirstDay: firstDay });
  return { lastMonthDaysArray, lastDay: numberOfDays };
};

export const getNextMonthNumberOfDays = ({
  currentMonthFirstDay,
  currentMonthNumberOfDays
}: {
  currentMonthFirstDay: number;
  currentMonthNumberOfDays: number;
}): number => {
  const daysSum = currentMonthFirstDay + currentMonthNumberOfDays;
  const numberOfRows = Math.ceil(daysSum / 7);
  const nextMonthNumberOfDays = numberOfRows * 7 - daysSum;
  return nextMonthNumberOfDays;
};

export const getNextMonthDaysArray = ({ nextMonthNumberOfDays }: { nextMonthNumberOfDays: number }): number[] => {
  return Array.from({ length: nextMonthNumberOfDays }, (_, index) => index + 1);
};

interface NextMonthInfo {
  nextMonthDaysArray: number[];
  nextMonthNumberOfDays: number;
}

export const getNextMonthInfo = ({
  currentMonthFirstDay,
  currentMonthNumberOfDays
}: {
  currentMonthFirstDay: number;
  currentMonthNumberOfDays: number;
}): NextMonthInfo => {
  const nextMonthNumberOfDays = getNextMonthNumberOfDays({ currentMonthFirstDay, currentMonthNumberOfDays });
  const nextMonthDaysArray = getNextMonthDaysArray({ nextMonthNumberOfDays });
  return { nextMonthDaysArray, nextMonthNumberOfDays };
};

export const getFormattedDate = ({ date }: { date: Date }): string => {
  const _year = date.getFullYear();
  const _month = String(date.getMonth() + 1).padStart(2, '0'); // padStart to make sure is two digits
  const _day = String(date.getDate()).padStart(2, '0');
  return `${_year}-${_month}-${_day}`;
};

export const formatDate = ({ date }: { date: Date }): string => {
  return new Intl.DateTimeFormat('es-AR').format(date);
};

export const validateMonth = ({ month: _month }: { month: string }) => {
  let isValid = true;
  if (!(Number(_month) >= 1 && Number(_month) <= 12)) isValid = false;
  const month = (Number(_month) - 1) as MonthIndex;
  return { isValid, month };
};

export const validateDay = ({ month, day }: { month: MonthIndex; day: string }) => {
  // check if is in the future
  const now = new Date();
  const dayDate = new Date(YEAR, month, Number(day));
  const isInTheFuture = now < dayDate;

  // check if is impossible
  const monthNumberOfDays = getMonthNumberOfDays({ month, year: 2024 });
  const isPossible = Number(day) > 0 && Number(day) <= monthNumberOfDays;

  return { isValid: !isInTheFuture && isPossible, day: Number(day) };
};
