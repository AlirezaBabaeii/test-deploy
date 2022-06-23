/* eslint-disable @next/next/inline-script-id */
import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-RRW89BKSEL"}
      />
      <Script strategy="lazyOnload">{`
      console.log('test')
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
           
             gtag('config', 'G-RRW89BKSEL');
                `}</Script>
      <Head>
        <title>خضرچوپان مدرسه</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
