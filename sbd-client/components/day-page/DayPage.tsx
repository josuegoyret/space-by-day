import { getDailyAPOD } from '@/actions/calendar.action';
import { notFound } from 'next/navigation';
import DayDetail from '../day-detail/DayDetail';

interface DayPageProps {
  date: string;
}

const DayPage = async ({ date }: DayPageProps) => {
  const { data: apod } = await getDailyAPOD({ date });
  if (!apod) notFound(); // TODO: add error handler

  return (
    <main className='flex min-h-screen flex-col gap-12 md:gap-20 items-center px-2 md:px-7 py-24 w-full max-w-screen-md mx-auto'>
      <DayDetail apod={apod} />
    </main>
  );
};

export default DayPage;
