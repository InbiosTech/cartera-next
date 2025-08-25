import { Html, Head, Main, NextScript } from 'next/document';
import { DocumentProps } from 'next/document';
import { DocumentContext } from 'next/document';
import Document from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
