import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';

const CircleButton = ({ direction, ...rest }: { direction: 'left' | 'right' }) => {
  return (
    <button {...rest} className='bg-nasa-red rounded-full cursor-pointer p-1 md:p-2'>
      {direction === 'left' ? (
        <>
          <ArrowLeftIcon className='block md:hidden' size='20' />
          <ArrowLeftIcon className='hidden md:block' size='24' />
        </>
      ) : (
        <>
          <ArrowRightIcon className='block md:hidden' size='20' />
          <ArrowRightIcon className='hidden md:block' size='24' />
        </>
      )}
    </button>
  );
};

export default CircleButton;
