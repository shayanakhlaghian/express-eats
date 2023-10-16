const TertiaryButton = ({
  children,
  onClick,
  type = 'button',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}) => {
  return (
    <button
      type={type}
      className='text-primary font-bold capitalize text-sm md:text-base tracking-wide border-b-2 pb-1 border-primary group'
      onClick={onClick}
    >
      {children}
      <span className='font-bold text-xl ml-2 group-hover:ml-4 duration-200'>
        &rarr;
      </span>
    </button>
  );
};
export default TertiaryButton;
