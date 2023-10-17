import { RESTAURANTS } from '@/data/dummy-data';
import Hero from './components/Hero';
import Card from './components/Card';
import Filter from './components/Filter';

const Restaurants = () => {
  return (
    <>
      <Hero />
      <div className='w-5/6 md:w-2/3 mx-auto mt-10 mb-20 px-4 grid grid-cols-restaurants justify-center gap-x-4 gap-y-8'>
        {RESTAURANTS.map(({ id, image, name, cuisine, rating, reviews }) => (
          <Card
            key={id}
            id={id}
            image={image}
            name={name}
            cuisine={cuisine}
            rating={rating}
            reviews={reviews}
          />
        ))}
      </div>
      <Filter />
    </>
  );
};
export default Restaurants;
