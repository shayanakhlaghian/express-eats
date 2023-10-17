'use client';
import type { Transition, Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { useState } from 'react';

import Toggle from './Toggle';
import FilterCuisines from './FilterCuisines';
import FilterReviews from './FilterReviews';
import FilterRating from './FilterRating';

const variants: Variants = {
  close: {
    translateX: '-50%',
    translateY: '90%',
  },
  open: (isOpen) => ({
    translateX: '-50%',
    translateY: isOpen ? 0 : '90%',
  }),
};

const transition: Transition = {
  type: 'just',
  duration: 0.4,
};

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <motion.div
      className='bg-gradient-to-br from-primary-dark to-primary-light w-full md:w-1/3 fixed left-1/2 bottom-0 h-2/3 md:h-1/2 z-10 shadow-xl rounded-t-md flex flex-col items-center justify-between pt-3 pb-12'
      variants={variants}
      initial='close'
      animate='open'
      custom={isOpen}
      transition={transition}
    >
      <div className=''>
        <Toggle onClick={handleToggle} />
      </div>
      <FilterCuisines />
      <FilterReviews />
      <FilterRating />
    </motion.div>
  );
};
export default Filter;
