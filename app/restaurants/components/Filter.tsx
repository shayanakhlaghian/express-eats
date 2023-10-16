'use client';
import { useState } from 'react';

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFiltersToggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <div
      className={`fixed left-1/2 translate-x-[-50%] ${
        isOpen ? 'bottom-0' : 'bottom-[-15rem]'
      } w-full md:w-1/3 bg-primary border border-primary-light z-10 rounded-t-3xl shadow-lg h-72 text-gray-100 pb-2 flex flex-col duration-500`}
    >
      <button className='h-10 text-lg capitalize' onClick={handleFiltersToggle}>
        {isOpen ? 'close filters' : 'open filters'}
      </button>
    </div>
  );
};
export default Filter;
