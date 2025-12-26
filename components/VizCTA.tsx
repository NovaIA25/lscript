import Link from 'next/link';

interface VizCTAProps {
  href: string;
  title: string;
  description?: string;
}

export default function VizCTA({ href, title, description }: VizCTAProps) {
  return (
    <Link href={href} className="viz-cta">
      <span className="viz-cta-icon">🎮</span>
      <div className="viz-cta-content">
        <strong>{title}</strong>
        <p>{description || 'Voir la visualisation interactive'}</p>
      </div>
      <span className="btn btn-primary">Voir →</span>
    </Link>
  );
}
