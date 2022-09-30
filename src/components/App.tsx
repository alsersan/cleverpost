import { useEffect } from 'react';
import { useActions } from 'hooks/useActions';
import 'assets/sass/style.scss';

const App = () => {
  const { getPostsWithUsers } = useActions();

  useEffect(() => {
    getPostsWithUsers();
  }, []);

  return <h1>CleverPost</h1>;
};

export default App;
