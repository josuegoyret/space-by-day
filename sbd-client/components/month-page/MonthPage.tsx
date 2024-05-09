import { getMonthlyAPOD } from '@/actions/calendar.action';
import { YEAR } from '@/lib/config';
import { getCurrentMonthInfo, getFormattedDate, getLastMonthInfo, getNextMonthInfo } from '@/utils/date.util';
import Calendar from '@/components/ui/calendar/Calendar';

interface MonthPageProps {
  month: MonthIndex;
}

// responsible of retrieve the data and calculate the days to display
const MonthPage = async ({ month }: MonthPageProps) => {
  // calculate days to display
  const { lastMonthDaysArray } = getLastMonthInfo({ month, year: 2024 });
  const { currentMonthDaysArray, firstDay, currentMonthNumberOfDays } = getCurrentMonthInfo({
    month: month,
    year: 2024
  });
  const { nextMonthDaysArray } = getNextMonthInfo({ currentMonthFirstDay: firstDay, currentMonthNumberOfDays });
  const concatenatedDaysArray = [...lastMonthDaysArray, ...currentMonthDaysArray, ...nextMonthDaysArray];

  // retrieve apod data if necessary
  const now = new Date();
  let apodRange: APODObject[] = [];
  const startMonth = lastMonthDaysArray.length ? month - 1 : month;
  const startDay = concatenatedDaysArray[0];
  const startDate = new Date(YEAR, startMonth, startDay);
  const endMonth = nextMonthDaysArray.length ? month + 1 : month;
  const endDay = concatenatedDaysArray[concatenatedDaysArray.length - 1];
  const endDate = new Date(YEAR, endMonth, endDay);
  const isCalendarCompleted = now > endDate;
  const isCalendarEmpty = now < startDate;
  const isCalendarRunning = !isCalendarCompleted && !isCalendarEmpty;

  if (isCalendarEmpty) apodRange = [];
  else {
    const _rangeStart = startDate;
    const _rangeEnd = isCalendarRunning ? now : endDate;
    const [rangeStart, rangeEnd] = [getFormattedDate({ date: _rangeStart }), getFormattedDate({ date: _rangeEnd })];
    const { data } = await getMonthlyAPOD({ rangeStart, rangeEnd, hourlyRevalidation: isCalendarRunning });
    apodRange = data;
  }

  // build data to display
  const allDaysArray: DayObject[] = [...lastMonthDaysArray, ...currentMonthDaysArray, ...nextMonthDaysArray].map(
    (day, i) => {
      // TODO: refactor month calculation (avoid using nested ternaries)
      return {
        day,
        month:
          i <= lastMonthDaysArray.length - 1
            ? month - 1
            : i <= lastMonthDaysArray.length + currentMonthDaysArray.length - 1
              ? month
              : month + 1,
        year: YEAR,
        apod: apodRange[i] || null
      };
    }
  );

  return (
    <main className='flex min-h-screen flex-col items-center px-2 md:px-8 py-24 w-full max-w-screen-2xl mx-auto'>
      <h1 className='text-3xl font-bold py-8'>The Space By Day🌌🚀👩🏼‍🚀</h1>
      <Calendar allDaysArray={allDaysArray} month={month} />
    </main>
  );
};

export default MonthPage;
