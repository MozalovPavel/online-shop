import { Html, Head, Main, NextScript } from "next/document";
import { GAScripts } from "../analytics/GAScripts";

const Document = () => {
  return (
    <Html>
      <Head>
        <meta name="description" content="Online shop" />
        <link href="https://fonts.cdnfonts.com/css/avenir" rel="stylesheet" />
        <GAScripts />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
};

export default Document;