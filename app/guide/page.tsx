import Link from 'next/link';
import type { Metadata } from 'next';
import { chapters } from '@/lib/chapters';

export const metadata: Metadata = {
  title: 'Le Guide du Développement',
  description: 'Le guide ultime pour comprendre le développement informatique, de A à Z.',
};

export default function GuidePage() {
  return (
    <div className="page-content">
      <div className="container">
        <div className="guide-index">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1>📖 Le Guide du Développement</h1>
            <p style={{ 
              fontSize: 'var(--text-lg)', 
              maxWidth: '500px', 
              margin: '1rem auto 0',
              color: 'var(--color-text-secondary)'
            }}>
              Tout ce que tu dois savoir pour comprendre le monde du développement.
              Un guide complet, progressif, sans jargon.
            </p>
          </div>

          {/* Progress info */}
          <div className="callout callout-tip" style={{ marginBottom: '2rem' }}>
            <div className="callout-title">
              <span>💡</span>
              <span>Comment lire ce guide ?</span>
            </div>
            <p style={{ margin: 0 }}>
              Lis les chapitres dans l'ordre. Chaque concept s'appuie sur le précédent.
              Prends ton temps — il n'y a pas de rush.
            </p>
          </div>

          {/* Chapters list */}
          <div style={{ marginTop: '2rem' }}>
            {chapters.map((chapter) => (
              <Link 
                key={chapter.slug} 
                href={`/guide/${chapter.slug}`}
                className="guide-chapter-card"
              >
                <div className="guide-chapter-number">
                  {chapter.id === 0 ? '👋' : chapter.id}
                </div>
                <div className="guide-chapter-info">
                  <h3>{chapter.title}</h3>
                  <p>{chapter.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/guide/introduction" className="btn btn-primary">
              Commencer le guide →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
