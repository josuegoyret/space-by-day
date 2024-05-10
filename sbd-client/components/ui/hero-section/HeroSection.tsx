import { NASA_HERO_PHOTO } from '@/lib/config';
import Image from 'next/image';
import PrimaryButton from '../library/primary-button/PrimaryButton';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='w-full h-128 md:h-160 relative'>
      <Image src={NASA_HERO_PHOTO} alt='The Earth photo' fill className='object-cover -z-50' priority />
      <div className='w-full h-full hero-gradient text-nasa-white flex flex-col justify-center'>
        <div className='px-4 sm:px-7 md:px-10 flex flex-col gap-6 w-full max-w-screen-2xl mx-auto'>
          <h1 className='font-display text-5xl md:text-7xl font-bold max-w-2xl leading-none'>
            <span className='hidden md:block'>
              Space By Day:
              <br />A Stellar Journey
            </span>
            <span className='block md:hidden'>Space By Day</span>
          </h1>
          <div className='flex flex-col gap-4'>
            <p className='max-w-lg md:max-w-2xl'>
              <span className='hidden md:block'>
                {`Explore the universe, one photo at the time: The Space By Day shares the Astronomy Picture of the Day
              (APOD), curated by NASA's microservice. Access the APOD explanation by selecting a date in the calendar.`}
              </span>
              <span className='block md:hidden'>
                {`Explore the universe, one photo at the time: Astronomy Picture of the Day
              (APOD), curated by NASA's microservice.`}
              </span>
            </p>
            <Link aria-label='Link to calendar' href={'#calendar'}>
              <PrimaryButton aria-label='Get Started' className='w-max'>
                Get Started
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
