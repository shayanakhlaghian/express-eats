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

const navItems: { id: string; text: string; href: string }[] = [
  {
    id: 'ni-1',
    text: 'Are you a business owner?',
    href: '#',
  },
  {
    id: 'ni-2',
    text: 'Are you a restaurant owner?',
    href: '#',
  },
  {
    id: 'ni-3',
    text: 'Sign up to deliver',
    href: '#',
  },
];

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
          {navItems.map(({ id, text, href }) => (
            <NavigationItem key={id} href={href}>
              {text}
            </NavigationItem>
          ))}
        </ul>
        <Link href='/register'>
          <PrimaryButton>Register</PrimaryButton>
        </Link>
      </div>
    </motion.nav>
  );
};
export default Navigation;
