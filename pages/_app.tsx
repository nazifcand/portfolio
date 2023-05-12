import { Provider } from 'react-redux';
import '../styles/main.scss';
import store from '../store';

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
