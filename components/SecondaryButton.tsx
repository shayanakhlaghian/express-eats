const SecondaryButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className='bg-transparent border-2 border-primary text-primary capitalize font-bold tracking-wide px-4 py-1 md:px-5 lg:px-6 rounded-full hover:bg-primary hover:text-white text-sm md:text-base duration-100'
    >
      {children}
    </button>
  );
};
export default SecondaryButton;
