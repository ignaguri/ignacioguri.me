import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);

    // @ts-expect-error TS(2580): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
    const isProduction = process.env.NODE_ENV === 'production';

    return {
      ...initialProps,
      isProduction,
    };
  }

  render() {
    return (
      // @ts-expect-error TS(2749): 'Html' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Html lang="en">
        <Head>
          // @ts-expect-error TS(2304): Cannot find name 'link'.
          <link
            // @ts-expect-error TS(2304): Cannot find name 'rel'.
            rel="apple-touch-icon"
            // @ts-expect-error TS(2304): Cannot find name 'sizes'.
            sizes="180x180"
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href="/apple-touch-icon.png"
          />
          // @ts-expect-error TS(2304): Cannot find name 'link'.
          <link
            // @ts-expect-error TS(2304): Cannot find name 'rel'.
            rel="icon"
            // @ts-expect-error TS(2304): Cannot find name 'type'.
            type="image/png"
            // @ts-expect-error TS(2304): Cannot find name 'sizes'.
            sizes="32x32"
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href="/favicon-32x32.png"
          />
          // @ts-expect-error TS(2304): Cannot find name 'link'.
          <link
            // @ts-expect-error TS(2304): Cannot find name 'rel'.
            rel="icon"
            // @ts-expect-error TS(2304): Cannot find name 'type'.
            type="image/png"
            // @ts-expect-error TS(2304): Cannot find name 'sizes'.
            sizes="16x16"
            // @ts-expect-error TS(2304): Cannot find name 'href'.
            href="/favicon-16x16.png"
          />
          // @ts-expect-error TS(2304): Cannot find name 'link'.
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        // @ts-expect-error TS(2304): Cannot find name 'body'.
        <body>
          // @ts-expect-error TS(2749): 'Main' refers to a value, but is being used as a t... Remove this comment to see the full error message
          <Main />
          // @ts-expect-error TS(2362): The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
          <NextScript />
        </body>
      </Html>
    );
  }
}
