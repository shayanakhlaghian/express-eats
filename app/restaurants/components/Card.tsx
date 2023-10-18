import Image from 'next/image';
import Link from 'next/link';

import CardHeading from './CardHeading';

const Card = ({
  id,
  image,
  name,
  cuisine,
  rating,
  reviews,
}: {
  id: string;
  image: string;
  name: string;
  cuisine: string;
  rating: number;
  reviews: number;
}) => {
  return (
    <Link href={`/restaurants/${id}`} className='w-full h-full'>
      <div className='overflow-hidden h-72 rounded-lg border border-gray-200 shadow-lg grid grid-rows-8 cursor-pointer hover:shadow-xl duration-200'>
        <div className='row-start-1 row-end-5 relative w-full h-full'>
          <Image src={image} alt={name} fill className='object-cover' />
        </div>
        <div className='flex justify-center items-center'>
          <CardHeading>{name}</CardHeading>
        </div>
        <div className='flex justify-center items-center'>
          <p className='capitalize'>{cuisine} cuisine</p>
        </div>
        <div className='flex items-center px-4 font-bold justify-around'>
          <p>{rating}/10</p>
          <p>{reviews} reviews</p>
        </div>
      </div>
    </Link>
  );
};
export default Card;
