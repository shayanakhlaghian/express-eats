import Link from 'next/link';

import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

const RegisterButtons = () => {
  return (
    <div className='flex [&>*]:mr-2 items-center'>
      <Link href='/register?isLogin=true'>
        <PrimaryButton>Login</PrimaryButton>
      </Link>
      <Link href='/register?isLogin=false'>
        <SecondaryButton>Sign up</SecondaryButton>
      </Link>
    </div>
  );
};
export default RegisterButtons;
