import Link from 'next/link';

const FooterItem = ({ children, href }: { children: string; href: string }) => {
  return (
    <li className='hover:translate-x-2 duration-200 relative group'>
      <span className='w-3 h-[3px] inline-block bg-white rounded-full absolute top-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-[-1rem] duration-200' />
      <Link href={href} className='text-xs font-bold md:text-sm'>
        {children}
      </Link>
    </li>
  );
};
export default FooterItem;
