import type { Variants, Transition } from 'framer-motion';
import { motion } from 'framer-motion';
import Link from 'next/link';

import NavigationItem from './NavigationItem';
import PrimaryButton from './PrimaryButton';

const variants: Variants = {
  close: {
    left: '-100%',
  },
  open: {
    left: 0,
  },
};

const transition: Transition = { duration: 0.5 };

const Navigation = () => {
  return (
    <motion.nav
      className='fixed top-0 z-[90] bg-white w-5/6 h-full md:w-[30%] lg:w-1/4 shadow-lg'
      variants={variants}
      initial='close'
      animate='open'
      exit='close'
      transition={transition}
    >
      <div className='pl-8 py-20 md:py-24 flex flex-col justify-between w-full h-full'>
        <ul className='w-fit [&>*]:mb-2 last:mb-0'>
          <NavigationItem href='/businesses/panel'>
            Are you a business owner?
          </NavigationItem>
          <NavigationItem href='/restaurants/panel'>
            Are you a restaurant owner?
          </NavigationItem>
          <NavigationItem href='/delivery'>Sign up to deliver</NavigationItem>
        </ul>
        <Link href='/register'>
          <PrimaryButton>Register</PrimaryButton>
        </Link>
      </div>
    </motion.nav>
  );
};
export default Navigation;
