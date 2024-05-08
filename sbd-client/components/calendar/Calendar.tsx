import { getMonthlyAPOD } from '@/actions/calendar.action';
import MonthContent from '../ui/month-content/MonthContent';
import HeaderPresentation from '../ui/header-presentation/HeaderPresentation';
import { getCurrentMonthInfo, getFormattedDate, getLastMonthInfo, getNextMonthInfo } from '@/utils/date.util';
import { YEAR } from '@/lib/config';

// responsible of retrieve the data and calculate the days to display
const Calendar = async () => {
  // check month edge cases: 0 and 11
  const MONTH = 4;
  const { lastMonthDaysArray } = getLastMonthInfo({ month: MONTH, year: 2024 });
  const { currentMonthDaysArray, firstDay, currentMonthNumberOfDays } = getCurrentMonthInfo({
    month: MONTH,
    year: 2024
  });
  const { nextMonthDaysArray } = getNextMonthInfo({ currentMonthFirstDay: firstDay, currentMonthNumberOfDays });

  const [startDate, endDate] = [
    getFormattedDate({ year: YEAR, month: MONTH - 1, day: lastMonthDaysArray[0] }),
    getFormattedDate({ year: YEAR, month: MONTH, day: 8 })
  ];

  const { data: apodRange } = await getMonthlyAPOD({ startDate, endDate });

  const allDaysArray: DayObject[] = [...lastMonthDaysArray, ...currentMonthDaysArray, ...nextMonthDaysArray].map(
    (day, i) => {
      return {
        day,
        month:
          i <= lastMonthDaysArray.length - 1
            ? MONTH - 1
            : i <= lastMonthDaysArray.length - 1 + currentMonthDaysArray.length - 1
              ? MONTH
              : MONTH + 1,
        year: YEAR,
        apod: apodRange[i] || null
      };
    }
  );

  return (
    <div className='w-full'>
      <HeaderPresentation />
      <MonthContent allDaysArray={allDaysArray} />
    </div>
  );
};

export default Calendar;
