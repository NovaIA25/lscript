import '@/styles/globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Lscript — Apprendre le développement simplement',
    template: '%s | Lscript'
  },
  description: 'Blog pédagogique pour apprendre le développement web et mobile. Explications simples, sans jargon, pour débutants.',
  keywords: ['développement web', 'apprendre à coder', 'programmation débutant', 'javascript', 'html css'],
  authors: [{ name: 'Lscript' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Lscript',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
