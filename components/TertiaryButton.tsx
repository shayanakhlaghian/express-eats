const TertiaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className='text-primary font-bold capitalize text-sm md:text-base tracking-wide border-b-2 pb-1 border-primary group'>
      {children}
      <span className='font-bold text-xl ml-2 group-hover:ml-4 duration-200'>
        &rarr;
      </span>
    </button>
  );
};
export default TertiaryButton;
