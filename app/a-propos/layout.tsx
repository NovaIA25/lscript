import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos de Lscript — Apprendre le développement simplement',
  description: 'Découvre la mission de Lscript : rendre le développement web et mobile accessible à tous les débutants, sans jargon et 100% gratuit.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}