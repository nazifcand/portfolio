/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <link rel="stylesheet" href="/fontawesome5/css/all.min.css" />
        <link rel="stylesheet" href="/github-markdown.css" />
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/github.min.css"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5106384346328058"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script
          src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js"
          strategy="afterInteractive"
        />
        <Script id="code-highlight" strategy="lazyOnload">
          {`
            hljs.configure({ ignoreUnescapedHTML: true });
            hljs.highlightAll();
        `}
        </Script>

        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8VRLBB6ZMG"
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8VRLBB6ZMG');
        `}
        </Script> */}

        {/* <Script
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5106384346328058"
          crossOrigin="anonymous"
        ></Script> */}
      </Head>

      <body>
        <Main />
        <NextScript />
        <GoogleAnalytics gaId="G-8VRLBB6ZMG" />
      </body>
    </Html>
  );
}
