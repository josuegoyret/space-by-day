import Image from 'next/image';
import FadeContent from '../fade-content/FadeContent';
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

  return (
    <div className={`relative overflow-hidden ${first ? 'border-t border-l' : ''}`}>
      {slot.apod && src && (
        <Image
          className={`object-cover ${!isCurrentMonth ? 'grayscale' : ''}`}
          src={src}
          fill
          sizes='(max-width: 1536px) 15vw, 220px'
          // since we are showing up 7 images per row, for mobile and desktop, a 15vw as download size will work;
          // for larger screens, such as monitors, the width will be constrained by a 1536px max-width, so
          // a 220px fixed size will work;
          alt={`${slot.apod.title} by ${slot.apod.copyright}`}
          quality={50}
        />
      )}
      <div className={`flex flex-col items-center p-1`}>
        <div className='p-1 w-full text-center'>{slot.day}</div>
        <div className='aspect-square w-full min-h-20 flex justify-center items-center p-1'>
          {!slot.apod && <FadeContent revealDate={revealDate} />}
        </div>
      </div>
    </div>
  );
};

export default DaySlot;
