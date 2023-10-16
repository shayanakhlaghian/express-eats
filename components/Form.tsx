'use client';
import type { SubmitHandler } from 'react-hook-form';
import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

import TertiaryHeading from '@/components/TertiaryHeading';
import SecondaryButton from '@/components/SecondaryButton';
import TertiaryButton from '@/components/TertiaryButton';

interface Inputs {
  username: string;
  password: string;
}

const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <label className='absolute peer-placeholder-shown:left-1/4 peer-placeholder-shown:top-1/3 translate-y-[-50%] bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent top-[-25%] left-1 peer-placeholder-shown:opacity-0 opacity-100  duration-300 text-sm md:text-sm'>
      {children}
    </label>
  );
};

const Form = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, formState } = useForm<Inputs>();

  const handleLoginSwitch = () => setIsLogin((isLogin) => !isLogin);

  const onSubmit: SubmitHandler<Inputs> = ({ username, password }) => {
    console.log(username, password);
  };

  return (
    <form
      className='bg-white w-full md:w-2/3 border border-gray-200 mx-auto p-4 rounded-xl shadow-md [&>*]:mb-6 md:px-5 lg:px-10 text-center'
      onSubmit={handleSubmit(onSubmit)}
    >
      <TertiaryHeading>{isLogin ? 'Login' : 'Sign up'}</TertiaryHeading>
      <div className='relative'>
        <input
          {...register('username', { required: true })}
          type='text'
          placeholder='John Doe'
          className='w-full bg-gray-100 rounded-sm py-2 px-4 peer duration-200 outline-none focus:shadow-md'
        />
        <Label>Username</Label>
      </div>
      <div className='relative'>
        <input
          {...register('password', { required: true })}
          type='password'
          placeholder='*****'
          className='w-full bg-gray-100 rounded-sm py-2 px-4 peer duration-200 outline-none focus:shadow-md'
        />
        <Label>Password</Label>
      </div>
      <SecondaryButton disabled={!formState.isValid}>
        {isLogin ? 'Get into your account' : 'Create an account'}
      </SecondaryButton>
      <TertiaryButton onClick={handleLoginSwitch}>
        {isLogin ? "don't have an account?" : 'already have an account?'}
      </TertiaryButton>
    </form>
  );
};
export default Form;
