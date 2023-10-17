const FilterSelect = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => {
  return (
    <div className='flex flex-col items-center border-b border-gray-700  pb-2 w-[60%] md:w-1/2'>
      <h4 className='font-bold mb-2 capitalize'>{name}</h4>
      <select
        name={name}
        id={name}
        className='px-8 py-1 rounded-md font-sans bg-transparent text-center cursor-pointer'
      >
        {children}
      </select>
    </div>
  );
};
export default FilterSelect;
