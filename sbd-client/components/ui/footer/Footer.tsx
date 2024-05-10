import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex flex-col px-4 sm:px-7 md:px-10 py-6 text-nasa-white bg-nasa-black divide-y'>
      <div className='flex flex-col gap-8 py-8'>
        <Image
          className='object-cover'
          src={'/assets/images/nasa-logo-square.svg'}
          width={60}
          height={60}
          alt='NASA insignia'
        />
        <div className='flex flex-col md:flex-row justify-between gap-5'>
          <div className='flex flex-col gap-4 max-w-xs'>
            <div className='flex flex-col gap-2'>
              <p className='text-sm text-label'>Inspired by</p>
              <h3 className='text-xl text-display font-bold'>The National Aeronautics and Space Administration</h3>
            </div>
            <p className='text-nasa-gray leading-tight'>
              One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one
              of the most popular websites across all federal agencies.
            </p>
          </div>
          <div className='flex flex-col md:items-end'>
            <Link
              className='text-nasa-white text-lg font-medium md:p-2 blue-square cursor-pointer hover:underline decoration-dashed underline-offset-8'
              aria-label='Nav to month page'
              href={'/calendar/month'}
            >
              Month
            </Link>
            <Link
              className='text-nasa-white font-medium p-2 blue-square cursor-pointer hover:underline decoration-dashed underline-offset-8'
              aria-label='Nav to day page'
              href={'/calendar/day'}
            >
              Day
            </Link>
          </div>
        </div>
      </div>
      <div className='py-8 flex flex-col md:flex-row gap-4 md:gap-6 text-nasa-gray text-sm border-nasa-gray'>
        <p>
          Page Last Updated: <span className='font-bold'>May 10, 2024</span>
        </p>
        <p>
          Page Editor: <span className='font-bold'>Josué Goyret</span>
        </p>
        <p>
          Responsible NASA Official: <span className='font-bold'>Abigail Bowman</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
