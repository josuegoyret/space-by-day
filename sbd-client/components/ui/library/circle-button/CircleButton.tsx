import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';

interface CircleButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  direction: 'left' | 'right';
}

const CircleButton = ({ direction, ...props }: CircleButtonProps) => {
  return (
    <button {...props} className='bg-nasa-red rounded-full cursor-pointer p-1 md:p-1.5'>
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
