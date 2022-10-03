import 'assets/sass/style.scss';
import { useEffect } from 'react';

import { useActions } from 'hooks/useActions';
import { PostsPage } from 'pages/PostsPage';

import { Layout } from './Layout';

const App = () => {
  const { getPostsWithUsers } = useActions();

  useEffect(() => {
    getPostsWithUsers();
  }, []);

  return (
    <Layout>
      <PostsPage />
    </Layout>
  );
};

export default App;
