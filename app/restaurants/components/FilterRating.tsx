import FilterSelect from './FilterSelect';

const items: { id: string; value: string }[] = [
  {
    id: 'i1',
    value: 'below 4.0',
  },
  {
    id: 'i2',
    value: '4.0 to 4.5',
  },
  {
    id: 'i3',
    value: 'above 4.5',
  },
];

const FilterRating = () => {
  return (
    <FilterSelect name='rating'>
      {items.map(({ id, value }) => (
        <option key={id} value={value}>
          {value}
        </option>
      ))}
    </FilterSelect>
  );
};
export default FilterRating;
