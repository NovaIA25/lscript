import '@/styles/globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData, { createWebsiteSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: {
    default: 'Apprendre à coder simplement | Lscript — Débutants & reconversions',
    template: '%s | Lscript'
  },
  description: 'Découvre le développement web et mobile sans jargon technique. Articles simples, progressifs et gratuits pour débutants. Guide complet, visualisations 3D et parcours pédagogique. Commence maintenant.',
  keywords: ['apprendre à coder', 'développement web débutant', 'programmation pour débutants', 'apprendre programmation', 'javascript débutant', 'html css', 'développement mobile', 'reconversion développeur', 'cours développement gratuit'],
  authors: [{ name: 'Lscript' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Lscript',
    description: 'Apprends le développement web et mobile avec des explications simples. 100% gratuit, sans jargon, pour débutants.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <StructuredData data={websiteSchema} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
