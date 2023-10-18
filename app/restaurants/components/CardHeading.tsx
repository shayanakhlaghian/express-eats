const CardHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className='bg-gradient-to-r from-primary-light to-primary-dark text-white w-1/2 rounded-sm text-center mt-[-2rem] relative z-[5] px-1 py-2 font-bold tracking-wide line-clamp-1'>
      {children}
    </h3>
  );
};
export default CardHeading;
