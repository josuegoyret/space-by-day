import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';

const CircleButton = ({ direction, ...rest }: { direction: 'left' | 'right' }) => {
  return (
    <button {...rest} className='bg-nasa-red rounded-full cursor-pointer p-1 md:p-1.5'>
      {direction === 'left' ? (
        <>
          <ArrowLeftIcon className='block md:hidden' size='16' />
          <ArrowLeftIcon className='hidden md:block' size='20' />
        </>
      ) : (
        <>
          <ArrowRightIcon className='block md:hidden' size='16' />
          <ArrowRightIcon className='hidden md:block' size='20' />
        </>
      )}
    </button>
  );
};

export default CircleButton;
