import Link from 'next/link';
import CircleButton from '../ui/library/circle-button/CircleButton';

interface CalendarNavigatorProps {
  month: MonthIndex;
}

const CalendarNavigator = ({ month }: CalendarNavigatorProps) => {
  const months: MonthLabel[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  return (
    <div className='bg-nasa-black text-white py-2 px-2 md:py-4 md:px-8 flex items-center justify-around h-20 md:h-28 w-full'>
      <Link
        href={`/calendar/month/2024/${month}`}
        className={`blue-square ${month === 0 ? 'pointer-events-none opacity-70' : ''}`}
      >
        <CircleButton direction='left' />
      </Link>
      <div className='text-2xl md:text-3xl font-semibold font-display'>{months[month]} 2024</div>
      <Link
        href={`/calendar/month/2024/${month + 2}`}
        className={`blue-square ${month === 11 ? 'pointer-events-none opacity-70' : ''}`}
      >
        <CircleButton direction='right' />
      </Link>
    </div>
  );
};

export default CalendarNavigator;
