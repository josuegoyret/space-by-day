'use client';

import { NASA_BOUNDRY_PHOTO } from '@/lib/config';
import Image from 'next/image';
import Link from 'next/link';

// eslint-disable-next-line
const NotFoundPage = () => {
  return (
    <main className='w-full h-screen relative flex flex-col gap-10 items-center '>
      <Image src={NASA_BOUNDRY_PHOTO} alt='The Earth photo' fill className='object-cover -z-50' priority />
      <div className='w-full h-full px-2 md:px-7 pt-10 pb-48 hero-gradient text-nasa-white flex flex-col justify-center'>
        <div className='px-4 sm:px-7 md:px-10 flex flex-col gap-10 md:gap-16 w-full max-w-screen-2xl mx-auto'>
          <h1 className='text-center font-label text-7xl md:text-9xl font-light'>404</h1>
          <div className='flex flex-col items-center justify-center gap-6'>
            <p className='max-w-xl text-xl md:text-2xl text-center'>
              The cosmic object you were looking for has disappeared beyond the event horizon.
            </p>
            <div className='flex item-center justify-center w-max gap-2 md:gap-4'>
              <Link
                className='text-lg text-nasa-white font-medium p-2 blue-square cursor-pointer hover:underline decoration-dashed underline-offset-8'
                aria-label='Navigate to calendar'
                href={'/calendar/month'}
              >
                Return Calendar
              </Link>
              <Link
                className='text-lg text-nasa-white font-medium p-2 blue-square cursor-pointer hover:underline decoration-dashed underline-offset-8'
                aria-label='Navigate to day page'
                href={'/calendar/day'}
              >
                Day Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
