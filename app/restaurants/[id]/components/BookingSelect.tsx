const BookingSelect = ({
  name,
  children,
  dateSelect = false,
}: {
  name: string;
  children?: React.ReactNode;
  dateSelect?: boolean;
}) => {
  return (
    <div className='my-4 w-4/5'>
      <h4 className='capitalize font-bold text-sm'>{name}</h4>
      {dateSelect && (
        <input
          type='date'
          className='bg-transparent border-b border-gray-700 py-1 w-full text-center outline-none'
        />
      )}
      {!dateSelect && (
        <select
          name={name}
          id={name}
          className='bg-transparent border-b border-gray-700 py-1 w-full text-center'
        >
          {children}
        </select>
      )}
    </div>
  );
};
export default BookingSelect;
