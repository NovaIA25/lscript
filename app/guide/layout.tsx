import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guide du Développement — Apprendre à coder de zéro',
  description: 'Un guide complet et progressif pour apprendre le développement de zéro. Chapitres structurés, sans jargon, avec suivi de progression. Gratuit et adapté aux débutants.',
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
