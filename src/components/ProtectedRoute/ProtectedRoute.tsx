import { Navigate } from 'react-router';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  outlet: JSX.Element;
};

export const ProtectedRoute = ({
  isAuthenticated,
  outlet
}: ProtectedRouteProps) => {
  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to="/login" />;
  }
};
