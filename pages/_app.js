import dynamic from 'next/dynamic'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
  });

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,shrink-to-fit=no"
        />
        <meta name="title" content="Md Bilal Mansuri, Frontend developer, React Developer, Javascript Developer" />
        <meta name="description" content="Frontend developer, React Developer, Javascript Developer" />
        <title>Bilal Mansuri</title>
      </Head>
      <AnimatedCursor
        innerSize={10}
        outerSize={12}
        color='9, 247, 85'
        outerAlpha={0.4}
        innerScale={1.1}
        outerScale={4}
      />
      <Component {...pageProps} />
    </>)
}

export default MyApp
