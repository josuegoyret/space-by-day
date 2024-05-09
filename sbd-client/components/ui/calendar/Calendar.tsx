import MonthContent from '../month-content/MonthContent';
import HeaderPresentation from '../header-presentation/HeaderPresentation';

interface CalendarProps {
  allDaysArray: DayObject[];
  month: MonthIndex;
}

// responsible for rendering header and content of a monthly calendar
const Calendar = async ({ allDaysArray, month }: CalendarProps) => {
  return (
    <div className='w-full'>
      <HeaderPresentation />
      <MonthContent allDaysArray={allDaysArray} month={month} />
    </div>
  );
};

export default Calendar;
