import 'assets/sass/style.scss';
import { useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useLangSwitcherContext } from 'contexts/LangSwitcherContext';
import { useActions } from 'hooks/useActions';
import { messages } from 'lang/languages';
import { LoginPage } from 'pages/LoginPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { PostsPage } from 'pages/PostsPage';
import { UsersPage } from 'pages/UsersPage';

import { Layout } from './Layout';

export const App = () => {
  const { getPostsWithUsers } = useActions();
  const { lang } = useLangSwitcherContext();

  useEffect(() => {
    getPostsWithUsers();
  }, []);

  const message =
    messages[lang.language as keyof typeof messages] || messages['en'];

  return (
    <IntlProvider locale={lang.locale} messages={message}>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </IntlProvider>
  );
};
