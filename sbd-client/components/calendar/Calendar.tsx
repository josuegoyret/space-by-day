import MonthContent from '../month-content/MonthContent';
import HeaderPresentation from '../ui/header-presentation/HeaderPresentation';

// responsible of retrieve the data and display the calendar
const Calendar = () => {
  return (
    <div className='w-full'>
      <HeaderPresentation />
      <MonthContent />
    </div>
  );
};

export default Calendar;
