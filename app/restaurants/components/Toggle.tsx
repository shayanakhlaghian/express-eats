const Toggle = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className='cursor-pointer flex flex-col items-center'
      onClick={onClick}
    >
      <span className='bg-gray-700 w-10 h-[3px] rounded-full inline-block mb-1' />
      <span className='bg-gray-700 w-6 h-[3px] rounded-full inline-block' />
    </button>
  );
};

export default Toggle;
