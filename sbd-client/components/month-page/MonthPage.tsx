import { getMonthlyAPOD } from '@/actions/calendar.action';
import { YEAR } from '@/lib/config';
import { getCurrentMonthInfo, getFormattedDate, getLastMonthInfo, getNextMonthInfo } from '@/utils/date.util';
import Calendar from '@/components/ui/calendar/Calendar';

interface MonthPageProps {
  month: MonthIndex;
}

// responsible of retrieve the data and calculate the days to display
const MonthPage = async ({ month }: MonthPageProps) => {
  const now = new Date();
  const isCurrentMonth = month === now.getMonth();
  const { lastMonthDaysArray } = getLastMonthInfo({ month, year: 2024 });
  const { currentMonthDaysArray, firstDay, currentMonthNumberOfDays } = getCurrentMonthInfo({
    month: month,
    year: 2024
  });
  const { nextMonthDaysArray } = getNextMonthInfo({ currentMonthFirstDay: firstDay, currentMonthNumberOfDays });

  const endMonth = isCurrentMonth ? month : month + 1;
  const endDay = isCurrentMonth ? now.getDate() : nextMonthDaysArray[nextMonthDaysArray.length - 1];
  const [startDate, endDate] = [
    getFormattedDate({ year: YEAR, month: month - 1, day: lastMonthDaysArray[0] }),
    getFormattedDate({ year: YEAR, month: endMonth, day: endDay })
  ];

  const { data: apodRange } = await getMonthlyAPOD({ startDate, endDate });

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
