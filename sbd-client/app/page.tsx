import Calendar from '@/components/calendar/Calendar';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center px-2 md:px-8 py-24 w-full max-w-screen-2xl mx-auto'>
      <h1 className='text-3xl font-bold py-8'>The Space By Day🌌🚀👩🏼‍🚀</h1>
      <Calendar />
    </main>
  );
}
