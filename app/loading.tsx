'use client';
import { Oval } from 'react-loader-spinner';
import PrimaryHeading from '@/components/PrimaryHeading';

const Loading = () => {
  return (
    <div className='flex justify-center items-center w-full min-h-screen'>
      <div className='flex flex-col items-center [&>*]:mb-6'>
        <Oval
          height={75}
          width={75}
          color='#4fa94d'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor='#44F373'
          strokeWidth={4}
          strokeWidthSecondary={3}
        />
        <PrimaryHeading>Loading...</PrimaryHeading>
      </div>
    </div>
  );
};
export default Loading;
