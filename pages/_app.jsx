/* eslint import/no-default-export: off */
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import Head from 'next/head'
import { Layout } from "../components/Layout";
import { SearchProvider } from "../components/search";
import { siteConfig } from "../config/siteConfig";
import * as gtag from "../lib/gtag";
import "../styles/docsearch.css";
import "../styles/global.css";
import "../styles/prism.css";
import "../styles/swipermin.css";

// ToC: get the html nodelist for headings
function collectHeadings(nodes) {
  const sections = [];

  Array.from(nodes).forEach((node) => {
    const { id, innerText: title, tagName: level } = node;
    if (!(id && title)) {
      return;
    }
    if (level === "H3") {
      const parentSection = sections[sections.length - 1];
      if (parentSection) parentSection.children.push({ id, title });
    } else if (level === "H2") {
      sections.push({ id, title, children: [] });
    }

    sections.push(...collectHeadings(node.children ?? []));
  });

  return sections;
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (siteConfig.analytics) {
      const handleRouteChange = (url) => {
        gtag.pageview(url);
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events]);

  const [tableOfContents, setTableOfContents] = useState([]);

  useEffect(() => {
    const headingNodes = document.querySelectorAll("h2,h3");
    const toc = collectHeadings(headingNodes);
    setTableOfContents(toc ?? []);
  }, [router.asPath]); // update table of contents on route change with next/link

  return (
    
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme={siteConfig.theme.default}
      forcedTheme={siteConfig.theme.default ? null : "light"}
    >
            <Head>
            <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo defaultTitle={siteConfig.title} description={siteConfig.description} {...siteConfig.nextSeo} />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {siteConfig.analytics && (
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics}`}
        />
      )}
      {siteConfig.analytics && (
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${siteConfig.analytics}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      )}
      <SearchProvider searchConfig={siteConfig.search}>
        <Layout title={pageProps.title} tableOfContents={tableOfContents}>
          <Component {...pageProps} />
        </Layout>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default MyApp;
