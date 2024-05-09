import Image from 'next/image';

const FadeContent = ({ revealDate }: { revealDate: string }) => {
  return (
    <div className='relative w-full h-full group cursor-pointer'>
      <div className='flex items-center justify-center absolute inset-0 bg-white transition-all duration-200 ease-in-out group-hover:opacity-0'>
        <div className='w-1/3 min-w-6 aspect-square opacity-25 relative'>
          <Image className='object-cover' src={'/assets/images/nasa-logo.svg'} fill alt='NASA insignia' />
        </div>
      </div>
      <div className='flex items-center justify-center p-1 md:p-2 absolute inset-0 bg-white opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100'>
        <p className='block lg:hidden text-center text-xs'>Revealed {revealDate.split('/').slice(0, 2).join('/')}</p>
        <p className='hidden lg:block text-center text-base'>Revealed on {revealDate}</p>
      </div>
    </div>
  );
};

export default FadeContent;
