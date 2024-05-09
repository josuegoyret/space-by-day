import DayPage from '@/components/day-page/DayPage';
import { YEAR } from '@/lib/config';
import { getFormattedDate, validateDay, validateMonth } from '@/utils/date.util';
import { notFound } from 'next/navigation';

interface DayByParamPageProps {
  params: { month: string; day: string };
}

const DayByParamPage = ({ params }: DayByParamPageProps) => {
  const { isValid: isValidMonth, month } = validateMonth({ month: params.month });
  if (!isValidMonth) notFound();
  const { isValid: isValidDay, day } = validateDay({ month, day: params.day });
  if (!isValidDay) notFound();
  const dayDate = new Date(YEAR, month, day);
  const currentDate = getFormattedDate({ date: dayDate });
  return <DayPage date={currentDate} />;
};

export default DayByParamPage;
