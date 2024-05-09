import MonthPage from '@/components/month-page/MonthPage';

// responsible of displaying MonthPage for current month
const MonthByDefaultPage = () => {
  const currentMonth = new Date().getMonth() as MonthIndex;
  return <MonthPage month={currentMonth} />;
};

export default MonthByDefaultPage;
