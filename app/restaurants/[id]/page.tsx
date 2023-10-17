import { RESTAURANTS } from '@/data/dummy-data';
import BookingCard from './components/BookingCard';
import RestaurantDetail from './components/RestaurantDetail';

const getRestaurant = (restaurantId: string) =>
  RESTAURANTS.find(({ id }) => id === restaurantId);

const RestaurangeDetail = ({ params }: { params: { id: string } }) => {
  const restaurant = getRestaurant(params.id);

  if (!restaurant) return <div>Not found</div>;
  return (
    <div className='w-[90%] md:w-[80%] lg:w-2/3 mx-auto grid grid-rows-2 md:grid-cols-[2fr_1fr] my-20 md:my-24 gap-y-4 md:gap-y-4 md:gap-x-2'>
      <RestaurantDetail
        image={restaurant.image}
        name={restaurant.name}
        rating={restaurant.rating}
        reviews={restaurant.reviews}
      />
      <div>
        <BookingCard />
      </div>
    </div>
  );
};
export default RestaurangeDetail;
