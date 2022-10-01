import 'assets/sass/style.scss';
import { useActions } from 'hooks/useActions';
import { useEffect } from 'react';
import { PostsPage } from '../pages/PostsPage';
import { Layout } from './Layout';

const App = () => {
  const { getPostsWithUsers } = useActions();

  useEffect(() => {
    getPostsWithUsers();
  }, []);

  return (
    <Layout>
      <h1>CleverPost</h1>
      <PostsPage />
    </Layout>
  );
};

export default App;
