import { RESTAURANTS } from '@/data/dummy-data';
import delay from '@/lib/delay';
import Hero from './components/Hero';
import Card from './components/Card';
import Filter from './components/Filter';
import PrimaryHeading from '@/components/PrimaryHeading';

const Restaurants = async () => {
  const data = await delay(2000, () => RESTAURANTS);

  return (
    <>
      <Hero />
      <div className='w-5/6 md:w-2/3 mx-auto mt-10 mb-20 px-4 grid grid-cols-restaurants justify-center gap-x-4 gap-y-8'>
        {data && data.length === 0 && (
          <div className='mt-20'>
            <PrimaryHeading>No restaurants found!</PrimaryHeading>
          </div>
        )}
        {data?.map(({ id, image, name, cuisine, rating, reviews }) => (
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
