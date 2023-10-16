const PrimaryHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className='text-xl md:text-2xl font-bold line-clamp-1'>{children}</h1>
  );
};
export default PrimaryHeading;
