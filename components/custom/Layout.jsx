import Link from 'next/link'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

import Banner from './Banner'
import Nav from './Nav'
import Footer from './Footer'
import siteConfig from '../config/siteConfig'

export default function Layout({ children, title='' }) {
  return (
    <>
      <NextSeo
        title={title}
        />
      <Head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Banner />
      <Nav />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
