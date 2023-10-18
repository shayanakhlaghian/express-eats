const BookingCardButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className='bg-primary text-slate-50 rounded-md hover:bg-primary-dark duration-100 py-2 mt-4 text-lg font-bold w-full'>
      {children}
    </button>
  );
};
export default BookingCardButton;
