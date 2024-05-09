import MonthPage from '@/components/month-page/MonthPage';
import { notFound } from 'next/navigation';

interface MonthPageProps {
  params: { month: string };
}

// responsible of display MonthPage for the given month in params
const MonthByParamPage = ({ params }: MonthPageProps) => {
  if (!(Number(params.month) >= 1 && Number(params.month) <= 12)) notFound();
  const month = (Number(params.month) - 1) as MonthIndex;
  return <MonthPage month={month} />;
};

export default MonthByParamPage;
