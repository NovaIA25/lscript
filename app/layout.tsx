import '@/styles/globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import StructuredData, { createWebsiteSchema } from '@/components/StructuredData';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lscript.fr'),
  title: {
    default: 'Apprendre à coder simplement | Lscript — Débutants & reconversions',
    template: '%s | Lscript'
  },
  description: 'Découvre le développement web et mobile sans jargon technique. Articles simples, progressifs et gratuits pour débutants. Guide complet, visualisations 3D et parcours pédagogique. Commence maintenant.',
  keywords: ['apprendre à coder', 'développement web débutant', 'programmation pour débutants', 'apprendre programmation', 'javascript débutant', 'html css', 'développement mobile', 'reconversion développeur', 'cours développement gratuit'],
  authors: [{ name: 'Lscript' }],
  icons: {
    icon: '/lscript32.png',
    shortcut: '/lscript32.png',
    apple: '/lscript32.png',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.lscript.fr',
    siteName: 'Lscript',
    description: 'Apprends le développement web et mobile avec des explications simples. 100% gratuit, sans jargon, pour débutants.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lscript - Apprends à coder gratuitement',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lscript — Apprendre à coder simplement',
    description: 'Apprends le développement web et mobile avec des explications simples. 100% gratuit.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = createWebsiteSchema();

  return (
    <html lang="fr">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PQQRJZPF');`,
          }}
        />
        {/* AdSense Validation Code */}
        <meta name="google-adsense-account" content="ca-pub-6312231252684715" />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6312231252684715"
          crossOrigin="anonymous"
        ></script>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <StructuredData data={websiteSchema} />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQQRJZPF"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

