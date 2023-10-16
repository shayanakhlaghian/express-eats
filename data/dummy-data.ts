enum Cuisine {
  chinese = 'chinese',
  korean = 'korean',
  indian = 'indian',
  italian = 'italian',
  mexican = 'mexican',
  american = 'american',
}

export const CUISINES: {
  id: string;
  name: Cuisine;
  image: string;
}[] = [
  {
    id: 'cuisine-1',
    name: Cuisine.chinese,
    image: '/chinese-cuisine.jpg',
  },
  {
    id: 'cuisine-2',
    name: Cuisine.korean,
    image: '/korean-cuisine.jpg',
  },
  {
    id: 'cuisine-3',
    name: Cuisine.indian,
    image: '/indian-cuisine.jpg',
  },
  {
    id: 'cuisine-4',
    name: Cuisine.italian,
    image: '/italian-cuisine.jpg',
  },
  {
    id: 'cuisine-5',
    name: Cuisine.mexican,
    image: '/mexican-cuisine.jpg',
  },
  {
    id: 'cuisine-6',
    name: Cuisine.american,
    image: '/american-cuisine.jpg',
  },
];

export const RESTAURANTS: {
  id: string;
  name: string;
  image: string;
  reviews: number;
  rating: number;
  cuisine: Cuisine;
}[] = [
  {
    id: 'restaurant-1',
    name: 'Casa Italiana',
    image: '/restaurant-1.jpg',
    reviews: 548,
    rating: 5,
    cuisine: Cuisine.italian,
  },
  {
    id: 'restaurant-2',
    name: 'Minami',
    image: '/restaurant-2.jpg',
    reviews: 52,
    rating: 8,
    cuisine: Cuisine.american,
  },
  {
    id: 'restaurant-3',
    name: 'Cano',
    image: '/restaurant-3.jpg',
    reviews: 436,
    rating: 9.5,
    cuisine: Cuisine.italian,
  },
  {
    id: 'restaurant-4',
    name: 'Terroni',
    image: '/restaurant-4.jpg',
    reviews: 268,
    rating: 9,
    cuisine: Cuisine.italian,
  },
  {
    id: 'restaurant-5',
    name: 'Stock Bar',
    image: '/restaurant-5.jpg',
    reviews: 122,
    rating: 6.5,
    cuisine: Cuisine.american,
  },
  {
    id: 'restaurant-6',
    name: 'Blu',
    image: '/restaurant-6.jpg',
    reviews: 68,
    rating: 10,
    cuisine: Cuisine.indian,
  },
  {
    id: 'restaurant-7',
    name: 'TOCA',
    image: '/restaurant-7.jpg',
    reviews: 1022,
    rating: 7.5,
    cuisine: Cuisine.korean,
  },
  {
    id: 'restaurant-8',
    name: 'Fox on John',
    image: '/restaurant-8.jpg',
    reviews: 44,
    rating: 10,
    cuisine: Cuisine.american,
  },
  {
    id: 'restaurant-9',
    name: 'Taline',
    image: '/restaurant-9.jpg',
    reviews: 924,
    rating: 7,
    cuisine: Cuisine.italian,
  },
];
