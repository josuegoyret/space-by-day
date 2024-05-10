import { getDailyAPOD } from '@/actions/calendar.action';
import { notFound } from 'next/navigation';
import DayDetail from '../day-detail/DayDetail';
import DayComments from '../day-comments/DayComments';

interface DayPageProps {
  date: string;
}

const DayPage = async ({ date }: DayPageProps) => {
  const { data: apod } = await getDailyAPOD({ date });
  if (!apod) notFound(); // TODO: add error handler

  return (
    <main className='flex min-h-screen flex-col gap-20 md:gap-28 items-center px-2 md:px-7 py-24 w-full max-w-screen-md mx-auto'>
      <DayDetail apod={apod} />
      <DayComments date={date} />
    </main>
  );
};

export default DayPage;
