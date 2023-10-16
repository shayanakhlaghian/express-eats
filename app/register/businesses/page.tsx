'use client';
import Form from '@/components/Form';

const RegisterBusinesses = () => {
  const handleLogin = (username: string, password: string) => {
    console.log(
      `[business] Logging ${username} with the password of ${password} in...`
    );
  };

  const handleSignup = (username: string, password: string) => {
    console.log(
      `[business] Signing ${username} with the password of ${password} up...`
    );
  };

  return <Form onLogin={handleLogin} onSignup={handleSignup} />;
};
export default RegisterBusinesses;
