import { ShimmerThumbnail } from 'react-shimmer-effects';

const RestaurantLoadingCard = () => {
  return (
    <div className='h-72 overflow-hidden rounded-xl border-2 border-gray-100 grid gap-y-1 grid-rows-[3fr_1fr_1fr] group cursor-pointer'>
      <div className='relative w-full h-full grayscale group-hover:grayscale-0 duration-200'>
        <ShimmerThumbnail height={100} />
      </div>
      <div className='flex items-center flex-col'>
        <ShimmerThumbnail height={20} width={100} />
        <ShimmerThumbnail height={20} width={80} />
      </div>
    </div>
  );
};
export default RestaurantLoadingCard;
