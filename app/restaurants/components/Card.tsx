import Image from 'next/image';

const Card = ({
  image,
  name,
  cuisine,
  rating,
  reviews,
}: {
  image: string;
  name: string;
  cuisine: string;
  rating: number;
  reviews: number;
}) => {
  return (
    <div className='overflow-hidden h-72 rounded-lg border border-gray-200 shadow-lg grid grid-rows-8 cursor-pointer hover:shadow-xl duration-200'>
      <div className='row-start-1 row-end-5 relative w-full h-full'>
        <Image src={image} alt={name} fill className='object-cover' />
      </div>
      <div className='flex justify-center items-center'>
        <h3 className='bg-gradient-to-r from-primary-light to-primary-dark text-white w-1/2 rounded-sm text-center mt-[-2rem] relative z-10 px-1 py-2 font-bold tracking-wide line-clamp-1'>
          {name}
        </h3>
      </div>
      <div className='flex justify-center items-center'>
        <p className='capitalize'>{cuisine} cuisine</p>
      </div>
      <div className='flex items-center px-4 font-bold justify-around'>
        <p>{rating}/10</p>
        <p>{reviews} reviews</p>
      </div>
    </div>
  );
};
export default Card;
