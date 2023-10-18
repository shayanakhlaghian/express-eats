const RestaurantDetailStats = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className='font-bold bg-gradient-to-r from-primary to-primary-dark px-2 py-1 text-slate-50'>
      {children}
    </p>
  );
};
export default RestaurantDetailStats;
