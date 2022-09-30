import { useEffect } from 'react';
import { useActions } from 'hooks/useActions';
import 'assets/sass/style.scss';
import { Layout } from './Layout';

const App = () => {
  const { getPostsWithUsers } = useActions();

  useEffect(() => {
    getPostsWithUsers();
  }, []);

  return (
    <Layout>
      <h1>CleverPost</h1>
    </Layout>
  );
};

export default App;
