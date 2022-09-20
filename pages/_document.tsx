import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/r/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/r/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/r/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/r/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/r/favicon/safari-pinned-tab.svg" color="#7b5544" />
          <meta name="msapplication-TileColor" content="#7b5544" />
          <meta name="theme-color" content="#ffffff" />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link 
            rel='preconnect' 
            href='https://fonts.gstatic.com' 
            crossOrigin='true' 
          />
          <link 
            href='https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;400;700;900&family=Ubuntu:wght@400;500;700&display=optional' 
            rel='stylesheet' 
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}