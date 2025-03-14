import DayPage from '@/components/day-page/DayPage';
import { getFormattedDate } from '@/utils/date.util';

// responsible of displaying DayPage for current day
const DayByDefaultPage = () => {
  const currentDate = getFormattedDate({ date: new Date() }); // TODO: check UTC date
  return <DayPage date={currentDate} />;
};

export default DayByDefaultPage;
