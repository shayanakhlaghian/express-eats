import { CUISINES } from '@/data/dummy-data';
import FilterSelect from './FilterSelect';

const FilterCuisines = () => {
  return (
    <FilterSelect name='cuisines'>
      {CUISINES.map(({ id, name }) => (
        <option key={id} value={name}>
          {name}
        </option>
      ))}
    </FilterSelect>
  );
};
export default FilterCuisines;
