import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='w-full h-24 py-4 px-7 md:px-10 bg-nasa-black flex items-center justify-between'>
      <p className='text-nasa-white text-lg font-bold'>
        APOD
        <span className='block md: hidden'>Calendar</span>
      </p>
      <Image
        className='object-cover'
        src={'/assets/images/nasa-logo-square.svg'}
        width={60}
        height={60}
        alt='NASA insignia'
      />
      <div className='flex flex-col md:flex-row items-center md:gap-5'>
        <Link
          className='text-nasa-white text-lg font-bold md:p-2 blue-square cursor-pointer'
          aria-label='Nav to month page'
          href={'/calendar/month'}
        >
          Month
        </Link>
        <Link
          className='text-nasa-white text-lg font-bold px-1 md:p-2 blue-square cursor-pointer'
          aria-label='Nav to day page'
          href={'/calendar/day'}
        >
          Day
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
