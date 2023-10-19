'use client';
import { useQuery } from '@tanstack/react-query';

import delay from '@/lib/delay';
import { CUISINES } from '@/data/dummy-data';
import Container from '@/components/Container';
import PrimaryHeading from '@/components/PrimaryHeading';
import CuisineCard from './CuisineCard';
import CuisineLoadingCard from './CuisineLoadingCard';

const Cuisines = () => {
  const cuisinesQuery = useQuery({
    queryKey: ['cuisines'],
    queryFn: () => delay(5000, () => CUISINES),
  });

  return (
    <Container>
      <PrimaryHeading>Cuisines</PrimaryHeading>
      <ul className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-8 lg:gap-x-12'>
        {cuisinesQuery.isLoading &&
          Array.from(Array(6).keys()).map((_, i) => (
            <CuisineLoadingCard key={i} />
          ))}
        {cuisinesQuery.data?.map(({ id, image, name }) => (
          <CuisineCard key={id} image={image} name={name} />
        ))}
      </ul>
    </Container>
  );
};
export default Cuisines;
