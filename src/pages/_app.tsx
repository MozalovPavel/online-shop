import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/common/Layout';
import { wrapper } from '../store/store';
import { Provider } from 'react-redux';
import { useRoutesGA } from '../analytics/useRoutesGA';

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  useRoutesGA();

  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
