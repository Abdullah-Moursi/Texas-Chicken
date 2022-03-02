import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </>
  ) 
}

export default MyApp
