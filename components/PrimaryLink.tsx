import Link from 'next/link';

const PrimaryLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className='text-primary font-bold capitalize text-sm md:text-base tracking-wide border-b-2 pb-1 border-primary group'
    >
      {children}
      <span className='font-bold text-xl ml-2 group-hover:ml-4 duration-200'>
        &rarr;
      </span>
    </Link>
  );
};
export default PrimaryLink;
