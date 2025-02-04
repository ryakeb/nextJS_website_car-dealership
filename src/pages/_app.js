import '@/styles/globals.css'
import Layout from '@/components/layout/layout'
import { store } from '@/redux/store'
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
