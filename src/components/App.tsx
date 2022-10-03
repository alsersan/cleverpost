import 'assets/sass/style.scss';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useActions } from 'hooks/useActions';
import { PostsPage } from 'pages/PostsPage';

import { UsersPage } from '../pages/UsersPage';
import { Layout } from './Layout';

const App = () => {
  const { getPostsWithUsers } = useActions();

  useEffect(() => {
    getPostsWithUsers();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
