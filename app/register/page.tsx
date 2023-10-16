'use client';
import Form from '@/components/Form';

const Register = () => {
  const handleLogin = (username: string, password: string) => {
    console.log(`Logging ${username} with the password of ${password} in...`);
  };

  const handleSignup = (username: string, password: string) => {
    console.log(`Signing ${username} with the password of ${password} up...`);
  };

  return <Form onLogin={handleLogin} onSignup={handleSignup} />;
};
export default Register;
