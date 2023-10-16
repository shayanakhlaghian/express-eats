const TertiaryHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className='text-2xl md:text-3xl bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent'>
      {children}
    </h3>
  );
};
export default TertiaryHeading;
