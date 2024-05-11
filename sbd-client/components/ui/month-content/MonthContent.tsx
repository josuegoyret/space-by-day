import DaySlot from '../../day-slot/DaySlot';

interface MonthContentProps {
  allDaysArray: DayObject[];
  month: MonthIndex;
}

const MonthContent = ({ allDaysArray, month }: MonthContentProps) => {
  return (
    <div className='grid grid-cols-7 divide-x divide-y border-b border-r'>
      {allDaysArray.map((day, i) => (
        <DaySlot key={i} slot={day} first={i === 0} month={month} />
      ))}
    </div>
  );
};

export default MonthContent;
