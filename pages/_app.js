import '../styles/globals.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://114.55.25.180:8000'
axios.defaults.withCredentials = true; //cookie
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
