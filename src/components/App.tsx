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
      <PostsPage />
    </Layout>
  );
};

export default App;
