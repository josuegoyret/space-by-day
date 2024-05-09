import Image from 'next/image';
import FadeContent from '../fade-content/FadeContent';
import styles from './DaySlot.module.scss';
import { formatDate } from '@/utils/date.util';

interface DaySlotProps {
  month: MonthIndex;
  slot: DayObject;
  first: boolean;
}

const DaySlot = ({ slot, first, month: calendarMonth }: DaySlotProps) => {
  const src = slot.apod?.media_type === 'video' ? slot.apod?.thumbnail_url : slot.apod?.url;
  const { year, month, day } = slot;
  const revealDate = formatDate({ year, month, day });
  const isCurrentMonth = calendarMonth === month;
  const alt = `${slot.apod?.title} ${slot.apod?.copyright ? `by ${slot.apod.copyright}` : ''}`;

  return (
    <div
      className={`relative overflow-hidden ${first ? 'border-t border-l' : ''} group cursor-pointer ${!isCurrentMonth ? 'grayscale opacity-70 pointer-events-none' : ''}`}
    >
      {slot.apod && src && (
        <Image
          className={`object-cover -z-50 group-hover:scale-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:group-hover:scale-115 md:group-hover:translate-x-2 md:group-hover:-translate-y-2 transition-all ease-in-out duration-100`}
          src={src}
          fill
          sizes='(max-width: 1536px) 15vw, 220px'
          // since we are showing up 7 images per row, for mobile and desktop, a 15vw as download size will work;
          // for larger screens, such as monitors, the width will be constrained by a 1536px max-width, so
          // a 220px fixed size will work;
          alt={alt}
          quality={50}
          priority // all images are displayed on screen at once, so shouldn't be lazy loaded
        />
      )}
      <div
        className={`flex flex-col items-center p-1 ${slot.apod ? 'text-white bg-gradient-to-b from-gray-950 group-hover:opacity-0' : ''} transition-all ease-in-out duration-100`}
      >
        <div className='p-1 w-full text-center'>{slot.day}</div>
        <div className='aspect-square w-full min-h-20 flex justify-center items-center p-1'>
          {!slot.apod ? (
            <FadeContent revealDate={revealDate} />
          ) : (
            <>
              <p className={`text-center text-xs ${styles['clamp-2']}`}>{slot.apod.title}</p>
              <p className='hidden lg:block text-center font-medium'>{slot.apod.title}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DaySlot;
