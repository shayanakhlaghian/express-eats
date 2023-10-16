'use client';
import Form from '@/components/Form';

const RegisterDeliverers = () => {
  const handleLogin = (username: string, password: string) => {
    console.log(
      `[deliverer] Logging ${username} with the password of ${password} in...`
    );
  };

  const handleSignup = (username: string, password: string) => {
    console.log(
      `[deliverer] Signing ${username} with the password of ${password} up...`
    );
  };

  return <Form onLogin={handleLogin} onSignup={handleSignup} />;
};
export default RegisterDeliverers;
