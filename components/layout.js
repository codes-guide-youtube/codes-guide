import Navbar from './Navbar'
import Footer from './Footer'
import NextNProgress from 'nextjs-progressbar'
import layout from '../styles/Layout.module.css'
export default function Layout({ children }) {
  return (
    <div className={layout.container}>

      <Navbar />
      <NextNProgress height={5} color="#84cc16" options={{showSpinner: false}} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}