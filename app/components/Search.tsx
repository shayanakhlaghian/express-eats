import SecondaryHeading from '@/components/SecondaryHeading';

const Search = () => {
  return (
    <form className='flex flex-col'>
      <div className='mb-2 md:mb-4'>
        <SecondaryHeading>Order Now.</SecondaryHeading>
      </div>
      <div className='flex flex-col md:flex-row text-lg md:text-xl'>
        <input
          type='text'
          placeholder='Find your eats'
          className='px-4 py-2 md:px-8 md:py-4 rounded-sm'
        />
        <button className='bg-primary hover:bg-primary-dark duration-100 mt-2 md:mt-0 md:ml-2 px-4 py-1 md:px-6 text-gray-100 rounded-sm'>
          Search
        </button>
      </div>
    </form>
  );
};
export default Search;
