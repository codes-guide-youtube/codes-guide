import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
  <NextNProgress height={5} color="#84cc16" options={{showSpinner: false}} />
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
