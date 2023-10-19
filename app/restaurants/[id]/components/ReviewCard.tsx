const ReviewCard = () => {
  return (
    <div className='w-full p-4 border border-slate-100 shadow-sm rounded-sm grid-cols-[3rem_1fr] grid-rows-2 grid gap-y-2 gap-x-2'>
      <div className='row-start-1 row-end-2 col-start-1 col-end-2 w-9 h-9 md:w-12 md:h-12 bg-primary rounded-full flex justify-center items-center'>
        <p className='font-bold text-xs'>JR</p>
      </div>
      <p className='row-start-2 row-span-full col-start-1 col-end-2 font-bold text-xs md:text-sm'>
        Jordan
      </p>
      <p className='line-clamp-3 row-start-1 row-span-full col-start-2 col-span-full text-xs justify-start '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius natus ut,
        veniam maiores repellendus doloremque dignissimos, qui ipsam omnis quod,
        dolorum odio iure voluptatum? Quae cumque, perferendis a ullam in
        nesciunt quas. Eius voluptas, harum illo expedita aut sed ad
        necessitatibus numquam labore a omnis! Asperiores pariatur nulla fugiat
        eius nisi dolorem dolore culpa consectetur, tempora, harum minus.
      </p>
    </div>
  );
};
export default ReviewCard;
