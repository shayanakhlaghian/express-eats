'use client';
import Image from 'next/image';

const CuisineCard = ({ image, name }: { image: string; name: string }) => {
  return (
    <li className='h-24 md:h-28 lg:h-36 border-4 border-white shadow-md rounded-md overflow-hidden duration-200 cursor-pointer hover:shadow-xl'>
      <div className='w-full h-full relative z-[5]'>
        <Image src={image} alt={name} fill className='object-cover' />
        <div className='z-10 absolute bottom-0 left-0 bg-white w-full h-6 md:h-8 rounded-t-2xl flex justify-center items-center'>
          <h3 className='text-xs font-bold md:text-sm capitalize'>{name}</h3>
        </div>
      </div>
    </li>
  );
};
export default CuisineCard;
