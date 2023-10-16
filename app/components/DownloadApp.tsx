import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container';
import SecondaryHeading from '@/components/SecondaryHeading';

const Badge = ({
  image,
  name,
  href,
}: {
  image: string;
  name: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className='w-32 h-14 relative md:mr-4 md:last:mr-0 mb-[-.5rem] last:mb-0'
    >
      <Image src={image} alt={name} fill className='object-cover' />
    </Link>
  );
};

const DownloadApp = () => {
  return (
    <Container>
      <div className='w-full h-80 relative rounded-xl overflow-hidden'>
        <div className='w-full h-full bg-gradient-to-b md:bg-gradient-to-r from-gray-900 to-transparent relative z-[4]' />
        <Image src='/ad-1.jpg' alt='Ad Image' fill className='object-cover' />
        <div className='z-10 absolute top-10 left-5'>
          <SecondaryHeading>
            Better On
            <br className='mb-1'></br>
            App
          </SecondaryHeading>
        </div>
        <div className='absolute z-10 bottom-5 left-5 flex flex-col md:flex-row h-fit'>
          <Badge
            name='Google Play'
            image='/google-play-badge.png'
            href='https://play.google.com'
          />
          <Badge
            name='App Store'
            image='/app-store-badge.png'
            href='https://apple.com/app-store'
          />
        </div>
      </div>
    </Container>
  );
};
export default DownloadApp;
