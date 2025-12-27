import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visualisations 3D — Comprendre le web interactivement',
  description: 'Apprends le développement web avec des visualisations 3D interactives. Comprends comment fonctionne internet, les API et le frontend/backend visuellement.',
};

export default function VisualisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
