'use client';
import { Variants, Transition } from 'framer-motion';
import { motion } from 'framer-motion';

const variants: Variants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 0.75,
  },
};

const transition: Transition = { duration: 0.5 };

const Backdrop = ({ onClick }: { onClick?: () => void }) => {
  return (
    <motion.div
      onClick={onClick}
      className='fixed top-0 left-0 z-50 bg-black block w-full h-full'
      variants={variants}
      initial='hide'
      animate='show'
      exit='hide'
      transition={transition}
    />
  );
};
export default Backdrop;
