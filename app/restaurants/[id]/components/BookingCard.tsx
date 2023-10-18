import BookingSelect from './BookingSelect';
import BookingCardButton from './BookingCardButton';

const people: { id: string; text: string }[] = [
  {
    id: 'p1',
    text: '1 person',
  },
  {
    id: 'p2',
    text: '2 people',
  },
  {
    id: 'p3',
    text: '3 people',
  },
];

const BookingCard = () => {
  return (
    <div className='w-full p-2 rounded-md bg-white shadow-lg border border-gray-200 flex flex-col items-center'>
      <div className='py-2 w-4/5 text-center mb-4 md:text-lg'>
        <h3>Make a Reservation</h3>
      </div>
      <BookingSelect name='Party Size'>
        {people.map(({ id, text }) => (
          <option key={id}>{text}</option>
        ))}
      </BookingSelect>
      <BookingSelect name='Date' dateSelect={true} />
      <BookingCardButton>Reserve</BookingCardButton>
    </div>
  );
};
export default BookingCard;
