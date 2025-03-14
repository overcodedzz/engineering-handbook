import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  // description: 'Make beautiful websites with Next.js & MDX.',
  // metadataBase: new URL('https://nextra.site'),
  keywords: [
    'OverCoded',
    'Engineering',
    'Handbook',
  ],
  applicationName: 'OverCoded Engineering Handbook',
  appleWebApp: {
    title: 'OverCoded Engineering Handbook'
  },
  title: {
    default: 'OverCoded Engineering Handbook',
    template: '%s | OverCoded Engineering Handbook'
  },
  // openGraph: {
  //   // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
  //   url: './',
  //   siteName: 'Nextra',
  //   locale: 'en_US',
  //   type: 'website'
  // },
  other: {
    'msapplication-TileColor': '#fff'
  },
  // twitter: {
  //   site: 'https://nextra.site'
  // },
  // alternates: {
  //   // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
  //   canonical: './'
  // }
}

const banner = <Banner storageKey="1.0-release">Version 1.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>OverCoded Engineering Handbook</b>}
    projectLink='https://github.com/overcodedzz/engineering-handbook'
    // ... Your additional navbar options
  />
)
const footer = (
  <Footer>
    <div style={{display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100%"}}>
      <div>{new Date().getFullYear()} © OverCoded.</div>
      <div>Created with Nextra and ☕</div>
    </div>
  </Footer>
  )
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
