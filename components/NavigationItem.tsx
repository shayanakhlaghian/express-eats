import Link from 'next/link';

const NavigationItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li className='pb-1 border-b-2 border-b-transparent hover:border-b-gray-800 duration-200 line-clamp-1 border-b-'>
      <Link href={href} className='text-sm md:text-base'>
        {children}
      </Link>
    </li>
  );
};
export default NavigationItem;
