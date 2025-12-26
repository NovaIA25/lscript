'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--space-10)',
          marginBottom: 'var(--space-10)'
        }}>
          {/* À propos */}
          <div>
            <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
              Lscript
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)' }}>
              Apprends le développement web et mobile avec des explications simples et sans jargon. 100% gratuit, pour débutants.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-4)', color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <Link href="/guide" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                  Guide complet
                </Link>
              </li>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <Link href="/blog" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                  Tous les articles
                </Link>
              </li>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <Link href="/visualisations" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                  Visualisations 3D
                </Link>
              </li>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <Link href="/a-propos" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-4)', color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)' }}>
              Newsletter
            </h4>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-3)' }}>
              Reçois les nouveaux articles directement par email.
            </p>
            <form style={{ display: 'flex', gap: 'var(--space-2)' }} onSubmit={(e) => { e.preventDefault(); alert('Newsletter à venir !'); }}>
              <input
                type="email"
                placeholder="ton@email.com"
                required
                style={{
                  flex: 1,
                  padding: 'var(--space-2) var(--space-3)',
                  fontSize: 'var(--text-sm)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)'
                }}
              />
              <button type="submit" className="btn btn-primary" style={{ fontSize: 'var(--text-sm)', padding: 'var(--space-2) var(--space-4)' }}>
                S'inscrire
              </button>
            </form>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-placeholder)', marginTop: 'var(--space-2)' }}>
              (À venir — en construction)
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-6)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', margin: 0 }}>
              © {currentYear} Lscript.fr — Apprendre le développement, simplement.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', fontSize: 'var(--text-sm)' }}>
              <Link href="/mentions-legales" style={{ color: 'var(--color-text-muted)' }}>
                Mentions légales
              </Link>
              <Link href="/confidentialite" style={{ color: 'var(--color-text-muted)' }}>
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
