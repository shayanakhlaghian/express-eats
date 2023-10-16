import { ButtonHTMLAttributes } from 'react';

const SecondaryButton = ({
  children,
  onClick,
  disabled = false,
  type = 'button',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className='bg-transparent border-2 border-primary text-primary capitalize font-bold tracking-wide px-4 py-1 md:px-5 lg:px-6 rounded-full hover:bg-primary hover:text-white text-sm md:text-base duration-100 disabled:border-gray-400 disabled:text-gray-400 disabled:hover:bg-transparent disabled:cursor-not-allowed'
    >
      {children}
    </button>
  );
};
export default SecondaryButton;
