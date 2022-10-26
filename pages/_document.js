import Document, { Html, Head, Main, NextScript} from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script rel="text/javascript" href="/js/newrelic.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
