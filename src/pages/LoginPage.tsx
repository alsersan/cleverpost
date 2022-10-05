import './page.scss';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="page">
      <h2 className="page__title">Login page</h2>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
};
