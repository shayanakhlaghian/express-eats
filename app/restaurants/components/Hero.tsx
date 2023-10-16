import TertiaryHeading from '@/components/TertiaryHeading';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='w-screen h-[25vh] relative'>
      <div className='absolute top-0 left-0 w-full h-full z-[2] bg-gradient-to-t from-black to-transparent' />
      <div className='absolute left-1/2 translate-x-[-50%] bottom-5 md:bottom-7 z-[3]'>
        <TertiaryHeading>Discover Eats.</TertiaryHeading>
      </div>
      <Image
        src='/restaurants-hero.jpg'
        alt='Restaurants Hero'
        fill
        className='object-cover z-[1]'
      />
    </div>
  );
};
export default Hero;
