import '../styles/globals.css'
import Layout from '../Components/Layout/Layout'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css'; 

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp