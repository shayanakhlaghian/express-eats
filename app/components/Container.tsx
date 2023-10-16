const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='py-8 md:py-16 px-4 w-full md:w-2/3 mx-auto [&>*]:mb-4 last:mb-0'>
      {children}
    </div>
  );
};
export default Container;
