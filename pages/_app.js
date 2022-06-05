import dynamic from 'next/dynamic'
import Head from 'next/head'

import "../public/css/bootstrap.min.css"
import "../public/css/font-awesome.min.css"
import "../public/css/animate.css"
import "../public/css/owl.carousel.css"
import "../public/css/style.css"

const ExtJS = dynamic(() => import('../components/scripts'))

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Bienvenue sur Growth BTP</title>
      <meta name="description" content="Batisseur et architecte de vos idées"/>
    </Head>
    <div id="preloder">
      <div className="loader"></div>
    </div>
      <Component {...pageProps} />
      <ExtJS/>
    </>
  )
}

export default MyApp
