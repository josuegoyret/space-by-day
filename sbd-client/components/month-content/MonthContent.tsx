import { getCurrentMonthInfo, getLastMonthInfo, getNextMonthInfo } from '@/utils/date.util';

// responsible of calculate and display the days of the month, in their respective places
const MonthContent = () => {
  const { lastMonthDaysArray } = getLastMonthInfo({ month: 1, year: 2024 });
  const { currentMonthDaysArray, firstDay, currentMonthNumberOfDays } = getCurrentMonthInfo({ month: 1, year: 2024 });
  const { nextMonthDaysArray } = getNextMonthInfo({ currentMonthFirstDay: firstDay, currentMonthNumberOfDays });

  return (
    <div className='grid grid-cols-7 divide-x divide-y border-b border-r'>
      {lastMonthDaysArray.map((day, i) => {
        return (
          <div key={i} className={`flex flex-col items-center p-1 ${i === 0 ? 'border-t border-l' : ''}`}>
            <div className='p-1 w-full text-center'>{day}</div>
            <div className='aspect-saquere w-full min-h-28 flex justify-center items-center p-1'></div>
          </div>
        );
      })}
      {currentMonthDaysArray.map((day, i) => {
        return (
          <div key={i} className={`flex flex-col items-center p-1`}>
            <div className='p-1 w-full text-center'>{day}</div>
            <div className='aspect-saquere w-full min-h-28 flex justify-center items-center p-1'></div>
          </div>
        );
      })}
      {nextMonthDaysArray.map((day, i) => {
        return (
          <div key={i} className={`flex flex-col items-center p-1`}>
            <div className='p-1 w-full text-center'>{day}</div>
            <div className='aspect-saquere w-full min-h-28 flex justify-center items-center p-1'></div>
          </div>
        );
      })}
    </div>
  );
};

export default MonthContent;
