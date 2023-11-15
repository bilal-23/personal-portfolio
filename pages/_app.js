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
        <link rel="shortcut icon" href="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Ctext%20y%3D%22.9em%22%20font-size%3D%2290%22%3E%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB%3C%2Ftext%3E%3C%2Fsvg%3E" type="image/svg+xml"></link>
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
