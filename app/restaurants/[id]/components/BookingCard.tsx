import BookingSelect from './BookingSelect';

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
      <button className='bg-primary text-slate-50 rounded-md hover:bg-primary-dark duration-100 py-2 mt-4 text-lg font-bold w-full'>
        Reserve
      </button>
    </div>
  );
};
export default BookingCard;
