import Image from 'next/image';

import ReviewCard from './ReviewCard';
import RestaurantDetailStats from './RestaurantDetailStats';

const RestaurantDetail = ({
  image,
  name,
  rating,
  reviews,
}: {
  image: string;
  name: string;
  rating: number;
  reviews: number;
}) => {
  return (
    <div className='bg-white border-gray-200 border shadow-lg  p-4 overflow-hidden'>
      <div className='w-full h-52 relative rounded-lg overflow-hidden'>
        <Image src={image} alt={name} fill className='object-cover' />
      </div>
      <div className='flex flex-col items-start justify-between mt-5 px-2 md:px-10 [&>*]:mb-2 md:[&>*]:mb-0 md:flex-row md:items-end '>
        <h2 className='text-xl'>{name}</h2>
        <RestaurantDetailStats>{rating}/10</RestaurantDetailStats>
        <RestaurantDetailStats>{reviews} reviews</RestaurantDetailStats>
      </div>
      <div className='mt-10 ml-2 md:ml-10 border-t border-slate-200 pt-4 [&>*]:mb-2'>
        <h3 className='text-xl mb-4'>Reviews</h3>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};
export default RestaurantDetail;
