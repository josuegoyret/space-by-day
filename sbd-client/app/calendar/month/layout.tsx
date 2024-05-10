import HeroSection from '@/components/ui/hero-section/HeroSection';

interface MonthLayoutProps {
  children: React.ReactNode;
}

const MonthLayout = ({ children }: MonthLayoutProps) => {
  return (
    <>
      <HeroSection />
      {children}
    </>
  );
};

export default MonthLayout;
