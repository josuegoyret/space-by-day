const ArrowRightIcon = ({ className, size }: { className?: string; size?: string }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width={size || '24'}
      height={size || '24'}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <line x1='5' y1='12' x2='19' y2='12'></line>
      <polyline points='12 5 19 12 12 19'></polyline>
    </svg>
  );
};

export default ArrowRightIcon;
