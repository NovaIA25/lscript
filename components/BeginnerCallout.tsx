import Link from 'next/link';

export default function BeginnerCallout() {
  return (
    <div className="beginner-callout">
      <span className="beginner-callout-icon">🎯</span>
      <p>
        <strong>Nouveau ici ?</strong> Commence par les articles marqués 🧱 Bases, 
        puis progresse vers 🌐 Web. <Link href="/commencer">Voir le parcours →</Link>
      </p>
    </div>
  );
}
