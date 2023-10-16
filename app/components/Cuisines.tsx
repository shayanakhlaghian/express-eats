import { CUISINES } from '@/data/dummy-data';
import Container from '@/components/Container';
import PrimaryHeading from '@/components/PrimaryHeading';
import CuisineCard from './CuisineCard';

const Cuisines = () => {
  return (
    <Container>
      <PrimaryHeading>Cuisines</PrimaryHeading>
      <ul className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-8 lg:gap-x-12'>
        {CUISINES.map(({ id, image, name }) => (
          <CuisineCard key={id} image={image} name={name} />
        ))}
      </ul>
    </Container>
  );
};
export default Cuisines;
