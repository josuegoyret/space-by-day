import MonthPage from '@/components/month-page/MonthPage';
import { validateMonth } from '@/utils/date.util';
import { notFound } from 'next/navigation';

interface MonthPageProps {
  params: { month: string };
}

// responsible of display MonthPage for the given month in params
const MonthByParamPage = ({ params }: MonthPageProps) => {
  const { isValid, month } = validateMonth({ month: params.month });
  if (!isValid) notFound();

  return <MonthPage month={month} />;
};

export default MonthByParamPage;
