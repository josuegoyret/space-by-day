import Image from 'next/image';

interface DayDetailProps {
  apod: APODObject;
}

const DayDetail = ({ apod }: DayDetailProps) => {
  const src = apod.media_type === 'video' && apod.thumbnail_url ? apod.thumbnail_url : apod.hdurl;
  return (
    <section className='flex flex-col gap-10'>
      <div className='flex flex-col gap-8'>
        <h4 className='font-label uppercase text-xs text-nasa-gray font-medium' style={{ letterSpacing: '3.5px' }}>
          A day in the space
        </h4>
        <h1 className='text-5xl font-display font-bold' style={{ lineHeight: '1.05em' }}>
          {apod.title}
        </h1>
      </div>
      <figure className='flex flex-col gap-6'>
        <Image src={src} width={712} height={480} alt={`Image for date: ${apod.date}`} quality={100} priority />
        <figcaption className='text-sm text-nasa-gray text-start'>
          {apod.copyright ? `Photo by ${apod.copyright}` : 'Public domain photo'}
        </figcaption>
      </figure>
      <p className='text-base' style={{ lineHeight: '1.65em' }}>
        {apod.explanation}
      </p>
    </section>
  );
};

export default DayDetail;
