const SecondaryHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className='capitalize text-3xl font-bold text-primary md:text-4xl lg:text-5xl'>
      {children}
    </h2>
  );
};
export default SecondaryHeading;
