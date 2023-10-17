'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { Settings } from 'react-slick';
import Slider from 'react-slick';
import Link from 'next/link';

import { RESTAURANTS } from '@/data/dummy-data';
import PrimaryHeading from '@/components/PrimaryHeading';
import Container from '@/components/Container';
import RestaurantCard from './RestaurantCard';
import TertiaryButton from '@/components/TertiaryButton';

const settings: Settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 2500,

  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Restaurants = () => {
  return (
    <Container>
      <PrimaryHeading>Restaurants</PrimaryHeading>
      <Slider {...settings}>
        {RESTAURANTS.map(({ id, image, name, cuisine, reviews, rating }) => (
          <RestaurantCard
            key={id}
            id={id}
            image={image}
            name={name}
            cuisine={cuisine}
            reviews={reviews}
            rating={rating}
          />
        ))}
      </Slider>
      <div className='mt-10 flex justify-center items-center md:justify-start'>
        <Link href='/restaurants'>
          <TertiaryButton>Discover more</TertiaryButton>
        </Link>
      </div>
    </Container>
  );
};
export default Restaurants;
