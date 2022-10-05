import 'assets/sass/style.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { ProtectedRoute, ProtectedRouteProps } from 'components/ProtectedRoute';
import { useLangSwitcherContext } from 'contexts/LangSwitcherContext';
import { useActions } from 'hooks/useActions';
import { messages } from 'lang/languages';
import { LoginPage } from 'pages/LoginPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { PostsPage } from 'pages/PostsPage';
import { UsersPage } from 'pages/UsersPage';

export const App = () => {
  const { getPostsWithUsers } = useActions();
  const { lang } = useLangSwitcherContext();
  const { isLoading, isAuthenticated } = useAuth0();

  useEffect(() => {
    getPostsWithUsers();
  }, []);

  const message =
    messages[lang.language as keyof typeof messages] || messages['en'];
  const protectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated
  };

  return (
    <IntlProvider locale={lang.locale} messages={message}>
      <Layout>
        {!isLoading && (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute
                  {...protectedRouteProps}
                  outlet={<Navigate to="/posts" />}
                />
              }
            />
            <Route
              path="/posts"
              element={
                <ProtectedRoute
                  {...protectedRouteProps}
                  outlet={<PostsPage />}
                />
              }
            />
            <Route
              path="/users"
              element={
                <ProtectedRoute
                  {...protectedRouteProps}
                  outlet={<UsersPage />}
                />
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="*"
              element={
                <ProtectedRoute
                  {...protectedRouteProps}
                  outlet={<NotFoundPage />}
                />
              }
            />
          </Routes>
        )}
      </Layout>
    </IntlProvider>
  );
};
