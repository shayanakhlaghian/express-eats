'use client';
import { motion } from 'framer-motion';

const Toggle = ({
  isNavOpen,
  onClick,
}: {
  isNavOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button className='flex flex-col z-[100] relative' onClick={onClick}>
      <motion.span
        className='inline-block w-8 h-1 bg-gray-700 rounded-full'
        initial={{ marginBottom: '.25rem' }}
        animate={{
          rotate: isNavOpen ? '45deg' : 0,
          marginBottom: isNavOpen ? 0 : '.25rem',
        }}
      />
      <motion.span
        className='w-8 h-1 bg-gray-700 rounded-full'
        initial={{ display: 'inline-block' }}
        animate={{ display: isNavOpen ? 'none' : 'inline-block' }}
      />
      <motion.span
        className='inline-block w-8 h-1 bg-gray-700 rounded-full'
        initial={{ marginTop: '.25rem' }}
        animate={{
          rotate: isNavOpen ? '-45deg' : 0,
          marginTop: isNavOpen ? '-.25rem' : '.25rem',
        }}
      />
    </button>
  );
};
export default Toggle;
