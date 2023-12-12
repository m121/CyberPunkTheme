import { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
   
    <Head>
       
        <meta charSet="utf-8" />
        <title>Cyberpunk City Theme </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="favicon.png" type="image/png" sizes="16x16" />

        <meta name="title" content="web title" />
        <meta name="description" content="Cyberpunk City Theme | Mateo Pérez" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mateo perez" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://web.vercel.app/" />
        <meta property="og:title" content="Cyberpunk City Theme" />
        <meta property="og:description" content="Cyberpunk City Theme" />
        <meta
          property="og:image"
          content="https://web.app/thumb.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://web.app/"
        />
        <meta property="twitter:title" content="Cyberpunk City Theme" />
        <meta property="twitter:description" content="Cyberpunk City Theme" />
        <meta
          property="twitter:image"
          content="https://web.app/thumb.png"
        />
      </Head>
   
      <Component {...pageProps} />
    </>
  );
};

export default App;
