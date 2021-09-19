import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,shrink-to-fit=no"
        />
        <meta name="Bilal Mansuri" content="Frontend developer, React Developer, Javascript Developer" />
        <meta name="Md Bilal Mansuri" content="Frontend developer, React Developer, Javascript Developer" />
        <meta name="Bilal" content="portfolio, javascript, developer" />
        <title>Bilal Mansuri</title>
      </Head>
      <Component {...pageProps} />
    </>)
}

export default MyApp
