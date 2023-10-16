'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import Toggle from './Toggle';
import PrimaryHeading from '@/components/PrimaryHeading';
import Navigation from './Navigation';
import Backdrop from '@/components/Backdrop';
import RegisterButtons from './RegisterButtons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY >= 100);
    });
  }

  const handleNavToggle = () => setIsNavOpen((isNavOpen) => !isNavOpen);

  return (
    <header
      className={`w-full h-[4.5rem] fixed top-0 left-0 bg-transparent z-30 shadow-md 
        flex justify-between items-center px-2 md:px-4 lg:px-6 duration-200
      ${isScrolled ? 'bg-white' : 'bg-transparent'} 
      ${isScrolled ? 'shadow-md' : 'shadow-none'}`}
    >
      <div className='flex items-center [&>*]:mr-6 last:mr-0'>
        <Toggle isNavOpen={isNavOpen} onClick={handleNavToggle} />
        <Link href='/'>
          <PrimaryHeading>express eats</PrimaryHeading>
        </Link>
      </div>
      <AnimatePresence>
        {isNavOpen && <Backdrop onClick={handleNavToggle} />}
      </AnimatePresence>
      <AnimatePresence>{isNavOpen && <Navigation />}</AnimatePresence>
      <div className='hidden md:inline-block'>
        <RegisterButtons />
      </div>
    </header>
  );
};
export default Header;
