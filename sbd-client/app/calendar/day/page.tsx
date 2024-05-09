import { getFormattedDate } from '@/utils/date.util';

// responsible of displaying DayPage for current day
const DayByDefaultPage = () => {
  const currentDate = getFormattedDate({ date: new Date() });
  return <div>{currentDate}</div>;
};

export default DayByDefaultPage;
