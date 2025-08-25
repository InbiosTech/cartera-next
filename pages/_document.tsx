import { Html, Head, Main, NextScript } from 'next/document';
import Document from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>InbiosTech</title>
          <link rel="icon" href="/inbiostech-logo.svg" type="image/svg+xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
