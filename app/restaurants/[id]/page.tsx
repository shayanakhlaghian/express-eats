import { notFound } from 'next/navigation';

import delay from '@/lib/delay';
import { RESTAURANTS } from '@/data/dummy-data';
import BookingCard from './components/BookingCard';
import RestaurantDetail from './components/RestaurantDetail';

const getRestaurant = (restaurantId: string) =>
  RESTAURANTS.find(({ id }) => id === restaurantId);

const RestaurangeDetail = async ({ params }: { params: { id: string } }) => {
  const data = await delay(2000, () => getRestaurant(params.id));

  if (!data) return notFound();
  return (
    <div className='w-[90%] md:w-[80%] lg:w-2/3 mx-auto grid grid-rows-[1fr_auto] md:grid-rows-1 md:grid-cols-[2fr_1fr] my-20 md:my-24 gap-y-4 md:gap-y-4 md:gap-x-2'>
      <RestaurantDetail
        image={data.image}
        name={data.name}
        rating={data.rating}
        reviews={data.reviews}
      />
      <div>
        <BookingCard />
      </div>
    </div>
  );
};
export default RestaurangeDetail;
