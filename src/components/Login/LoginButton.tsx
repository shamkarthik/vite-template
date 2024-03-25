import { useAuth0 } from '@auth0/auth0-react';
import { Button, UnstyledButton } from '@mantine/core';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <UnstyledButton onClick={() => loginWithRedirect()}>Log In</UnstyledButton>;
};

export default LoginButton;
