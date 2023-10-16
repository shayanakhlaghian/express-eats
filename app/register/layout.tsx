import Image from 'next/image';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative w-screen min-h-screen'>
      <div className='absolute top-0 right-0 w-1/2 h-full hidden md:block'>
        <Image
          src='/register-bg.jpg'
          alt='Register Background'
          fill
          className='object-cover'
        />
      </div>
      <div className='md:bg-gray-100 md:rounded-xl absolute top-[20%] left-1/2 translate-x-[-50%] w-full md:w-2/3 lg:w-1/2 p-4 lg:p-8 md:shadow-md'>
        {children}
      </div>
    </div>
  );
};
export default Layout;
