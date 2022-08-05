import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Layout from '../components/layout'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
     <Component {...pageProps} />
    </Layout>)
}

export default MyApp
