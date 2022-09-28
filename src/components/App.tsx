import { Provider } from 'react-redux';
import { store } from 'state';

const App = () => {
  return (
    <Provider store={store}>
      <h1>CleverPost</h1>
    </Provider>
  );
};

export default App;
