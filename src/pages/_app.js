import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import '@/styles/components/NavigationBar.scss';
import ProductForm from './products';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
