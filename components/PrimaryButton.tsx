const PrimaryButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className='bg-primary text-white capitalize font-bold tracking-wide px-4 py-1 md:py-2 md:px-6 lg:px-8 rounded-full hover:bg-primary-dark text-sm md:text-base duration-100 border-2 border-primary hover:border-primary-dark'
    >
      {children}
    </button>
  );
};
export default PrimaryButton;
