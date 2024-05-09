import MonthContent from '../month-content/MonthContent';
import HeaderPresentation from '../header-presentation/HeaderPresentation';

interface CalendarProps {
  allDaysArray: DayObject[];
}

// responsible for rendering header and content of a monthly calendar
const Calendar = async ({ allDaysArray }: CalendarProps) => {
  return (
    <div className='w-full'>
      <HeaderPresentation />
      <MonthContent allDaysArray={allDaysArray} />
    </div>
  );
};

export default Calendar;
