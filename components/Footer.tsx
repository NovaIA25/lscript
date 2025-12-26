import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Lscript.fr — Apprendre le développement, simplement.
        </p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
          <Link href="/mentions-legales" style={{ marginRight: '1rem' }}>
            Mentions légales
          </Link>
          <Link href="/confidentialite">
            Politique de confidentialité
          </Link>
        </p>
      </div>
    </footer>
  );
}
