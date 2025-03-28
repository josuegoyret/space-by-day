import Image from 'next/image';
import FadeContent from '../ui/fade-content/FadeContent';
import styles from './DaySlot.module.scss';
import DaySlotWrapper from '../ui/day-slot-wrapper/DaySlotWrapper';
import { formatDate } from '@/utils/date.util';

interface DaySlotProps {
  month: MonthIndex;
  slot: DayObject;
  first: boolean;
}

const DaySlot = ({ slot, first, month: calendarMonth }: DaySlotProps) => {
  const src = slot.apod?.media_type === 'video' ? slot.apod?.thumbnail_url : slot.apod?.url;
  const { year, month, day } = slot;
  const revealDate = formatDate({ date: new Date(year, month, day) });
  const isCurrentMonth = calendarMonth === month;
  const linkToDetailPage = isCurrentMonth && slot.apod ? `/calendar/day/2024/${slot.month + 1}/${slot.day}` : undefined;
  const alt = `${slot.apod?.title} ${slot.apod?.copyright ? `by ${slot.apod.copyright}` : ''}`;

  return (
    <DaySlotWrapper link={linkToDetailPage}>
      <div
        className={`relative overflow-hidden ${first ? 'border-t border-l' : ''} group cursor-pointer ${!isCurrentMonth ? 'grayscale opacity-70 pointer-events-none' : ''}`}
      >
        {slot.apod && src && (
          <Image
            className={`object-cover -z-50 group-hover:scale-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:group-hover:scale-110 md:group-hover:translate-x-2 md:group-hover:-translate-y-2 transition-all ease-in-out duration-300`}
            src={src}
            fill
            sizes='(max-width: 1536px) 15vw, 220px'
            // since we are showing up 7 images per row, for mobile and desktop, a 15vw as download size will work;
            // for larger screens, such as monitors, the width will be constrained by a 1536px max-width, so
            // a 220px fixed size will work;
            alt={alt}
            quality={50}
          />
        )}
        <div
          className={`flex flex-col items-center p-1 ${slot.apod ? 'text-white bg-gradient-to-b from-gray-950 group-hover:opacity-0' : ''} transition-all ease-in-out duration-300`}
        >
          <div className='p-1 w-full text-center font-semibold font-label'>{slot.day}</div>
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
    </DaySlotWrapper>
  );
};

export default DaySlot;
