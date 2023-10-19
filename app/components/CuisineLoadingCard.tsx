import { ShimmerThumbnail } from 'react-shimmer-effects';

const CuisineLoadingCard = () => {
  return (
    <li className='h-24 md:h-28 lg:h-36 border-4 border-white shadow-md rounded-md overflow-hidden duration-200 cursor-pointer hover:shadow-xl'>
      <div className='w-full h-full relative z-[5]'>
        <ShimmerThumbnail height={100} />
      </div>
    </li>
  );
};
export default CuisineLoadingCard;
