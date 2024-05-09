import Link from 'next/link';

interface DaySlotWrapperProps {
  children: React.ReactNode;
  link: string | undefined;
}

const DaySlotWrapper = ({ children, link }: DaySlotWrapperProps) => {
  if (link) return <Link href={link}>{children}</Link>;

  return <>{children}</>;
};

export default DaySlotWrapper;
