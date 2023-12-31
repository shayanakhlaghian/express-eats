import TertiaryHeading from './TertiaryHeading';
import Container from './Container';
import FooterItem from './FooterItem';

const footerItems: { id: string; href: string; name: string }[] = [
  {
    id: 'i1',
    href: '/#',
    name: 'About us',
  },
  {
    id: 'i2',
    href: '/#',
    name: 'Careers',
  },
  {
    id: 'i3',
    href: '/#',
    name: 'Blog',
  },
  {
    id: 'i4',
    href: '/#',
    name: 'Privacy',
  },
  {
    id: 'i5',
    href: '/#',
    name: 'FAQs',
  },
  {
    id: 'i6',
    href: '/#',
    name: 'Contact',
  },
  {
    id: 'i7',
    href: '/#',
    name: 'Members',
  },
];

const Footer = () => {
  return (
    <footer className='bg-gray-700 text-gray-100 w-screen mt-12'>
      <Container>
        <div className='text-center pb-5'>
          <TertiaryHeading>
            express eats <span className='text-base'>&#8482;</span>
          </TertiaryHeading>
        </div>
        <ul className='grid grid-cols-2 place-items-center items-center gap-2 w-5/6 md:w-1/2 lg:w-1/3 mx-auto'>
          {footerItems.map(({ id, name, href }) => (
            <FooterItem key={id} href={href}>
              {name}
            </FooterItem>
          ))}
        </ul>
      </Container>
    </footer>
  );
};
export default Footer;
