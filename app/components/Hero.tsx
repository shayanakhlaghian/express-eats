import Image from 'next/image';

import Search from './Search';

const Hero = () => {
  return (
    <div className='w-full min-h-screen relative'>
      <div className='absolute top-0 left-0 w-full h-full z-[2] bg-gradient-to-b from-transparent to-gray-800' />
      <Image
        src='/hero.jpg'
        alt='Hero Image'
        fill
        className='object-cover relative z-[1]'
      />
      <div className='absolute z-[3] bottom-[20%] left-1/2 translate-x-[-50%]'>
        <Search />
      </div>
    </div>
  );
};
export default Hero;
