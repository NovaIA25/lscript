import Link from 'next/link';

interface NextStepsProps {
  category: string;
  currentSlug: string;
}

const categoryNextSteps: Record<string, { label: string; slug: string }[]> = {
  bases: [
    { label: "C'est quoi une variable ?", slug: 'cest-quoi-une-variable' },
    { label: "C'est quoi programmer ?", slug: 'cest-quoi-programmer' },
  ],
  web: [
    { label: 'HTML ou CSS : quelle différence ?', slug: 'html-ou-css-difference' },
    { label: 'Comment fonctionne un site ?', slug: 'comment-fonctionne-site-internet' },
  ],
  backend: [
    { label: 'Frontend vs Backend', slug: 'frontend-vs-backend' },
  ],
  carriere: [
    { label: 'Par où commencer ?', slug: 'par-ou-commencer-debutant' },
    { label: 'Apprendre sans diplôme', slug: 'apprendre-coder-sans-diplome' },
  ],
};

export default function NextSteps({ category, currentSlug }: NextStepsProps) {
  const suggestions = categoryNextSteps[category] || categoryNextSteps.bases;
  const filtered = suggestions.filter(s => s.slug !== currentSlug).slice(0, 2);

  return (
    <div className="next-steps">
      <h3>📍 Où aller maintenant ?</h3>
      <div className="next-steps-grid">
        <Link href="/commencer" className="next-step-link">
          <small>Si tu débutes</small>
          <span>Commence ici →</span>
        </Link>
        {filtered.map((step) => (
          <Link 
            key={step.slug} 
            href={`/blog/${step.slug}`} 
            className="next-step-link"
          >
            <small>Prochaine étape</small>
            <span>{step.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
