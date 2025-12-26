import Link from 'next/link';
import type { Chapter } from '@/lib/chapters';

interface ChapterNavProps {
  prev: Chapter | null;
  next: Chapter | null;
  currentIndex: number;
  total: number;
}

export default function ChapterNav({ prev, next, currentIndex, total }: ChapterNavProps) {
  return (
    <div className="chapter-nav">
      {/* Progress indicator */}
      <div className="chapter-progress">
        <div className="chapter-progress-bar">
          <div 
            className="chapter-progress-fill"
            style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
          />
        </div>
        <span className="chapter-progress-text">
          Chapitre {currentIndex + 1} sur {total}
        </span>
      </div>

      {/* Navigation buttons */}
      <div className="chapter-nav-buttons">
        {prev ? (
          <Link href={`/guide/${prev.slug}`} className="chapter-nav-btn chapter-nav-prev">
            <span className="chapter-nav-label">← Précédent</span>
            <span className="chapter-nav-title">{prev.title}</span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link href={`/guide/${next.slug}`} className="chapter-nav-btn chapter-nav-next">
            <span className="chapter-nav-label">Suivant →</span>
            <span className="chapter-nav-title">{next.title}</span>
          </Link>
        ) : (
          <Link href="/guide" className="chapter-nav-btn chapter-nav-next">
            <span className="chapter-nav-label">Terminé ! 🎉</span>
            <span className="chapter-nav-title">Retour au sommaire</span>
          </Link>
        )}
      </div>
    </div>
  );
}
