interface PrimaryButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
}

const PrimaryButton = ({ children, ...rest }: PrimaryButtonProps) => {
  return (
    <button
      {...rest}
      className='font-display font-bold text-nasa-white bg-nasa-red hover:bg-nasa-red-dark text-lg px-4 py-2 rounded-md blue-square transition-all duration-100'
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
