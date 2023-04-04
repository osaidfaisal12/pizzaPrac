import '@/styles/globals.css'
import { Store } from '../../data-utils/Store'

export default function App({ Component, pageProps }) {
  return (
  <Store>
  <Component {...pageProps} /></Store>)
}
