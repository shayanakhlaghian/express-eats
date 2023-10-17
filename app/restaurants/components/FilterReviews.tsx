import FilterSelect from './FilterSelect';

const items: { id: string; value: string }[] = [
  {
    id: 'i1',
    value: 'less than 50',
  },
  {
    id: 'i2',
    value: '50 to 100',
  },
  {
    id: 'i3',
    value: 'more than 100',
  },
];

const FilterReviews = () => {
  return (
    <FilterSelect name='reviews'>
      {items.map(({ id, value }) => (
        <option key={id} value={value}>
          {value}
        </option>
      ))}
    </FilterSelect>
  );
};
export default FilterReviews;
