'use client';
import Form from '@/components/Form';

const RegisterRestaurants = () => {
  const handleLogin = (username: string, password: string) => {
    console.log(
      `[restaurants] Logging ${username} with the password of ${password} in...`
    );
  };

  const handleSignup = (username: string, password: string) => {
    console.log(
      `[restaurants] Signing ${username} with the password of ${password} up...`
    );
  };

  return <Form onLogin={handleLogin} onSignup={handleSignup} />;
};
export default RegisterRestaurants;
