import Image from 'next/image';

import PrimaryHeading from '@/components/PrimaryHeading';

const RestaurantCard = ({
  image,
  name,
  cuisine,
  reviews,
  rating,
}: {
  image: string;
  name: string;
  cuisine: string;
  reviews: number;
  rating: number;
}) => {
  return (
    <div className='h-72 overflow-hidden rounded-xl border-2 border-gray-100 grid gap-y-1 grid-rows-[3fr_1fr_1fr] group cursor-pointer'>
      <div className='relative w-full h-full grayscale group-hover:grayscale-0 duration-200'>
        <Image src={image} alt={name} fill className='object-cover' />
      </div>
      <div className='px-4 flex flex-col items-center line-clamp-1'>
        <PrimaryHeading>{name}</PrimaryHeading>
        <p className='text-sm font-light capitalize'>{cuisine} cuisine</p>
      </div>
      <div className='px-4 flex justify-center items-center'>
        <p className='text-sm font-light line-clamp-1'>
          <span className='mx-2 font-bold text-primary'>{rating}/10</span>
          from
          <span className='mx-2 font-bold text-primary'>{reviews}</span>
          reviews
        </p>
      </div>
    </div>
  );
};
export default RestaurantCard;
