'use client';

import { NASA_BOUNDRY_PHOTO } from '@/lib/config';
import Image from 'next/image';
import Link from 'next/link';

// eslint-disable-next-line
const PrivateRoutesError = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  return (
    <main className='w-full h-screen relative flex flex-col gap-10 items-center '>
      <Image src={NASA_BOUNDRY_PHOTO} alt='The Earth photo' fill className='object-cover -z-50' priority />
      <div className='w-full h-full px-2 md:px-7 pt-10 pb-48 hero-gradient text-nasa-white flex flex-col justify-center'>
        <div className='px-4 sm:px-7 md:px-10 flex flex-col gap-16 w-full max-w-screen-2xl mx-auto'>
          <h1 className='text-center font-label text-9xl font-light'>500</h1>
          <div className='flex flex-col items-center justify-center gap-6'>
            <p className='max-w-xl text-2xl text-center'>{`It's been a problem while getting your information: seems like this APOD is not available. Check the URL and try again or return to calendar.`}</p>
            <div className='flex item-center justify-center w-max gap-4'>
              <Link
                className='text-lg text-nasa-white font-medium p-2 blue-square cursor-pointer hover:underline decoration-dashed underline-offset-8'
                aria-label='Nav to day page'
                href={'/calendar/month'}
              >
                Return Calendar
              </Link>
              <button
                onClick={() => reset()}
                className='text-lg text-nasa-white font-medium p-2 blue-square cursor-pointer hover:underline decoration-dashed underline-offset-8'
                aria-label='Try again button'
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivateRoutesError;
