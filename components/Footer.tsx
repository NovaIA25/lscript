'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    setStatus('loading');
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--space-8)',
          marginBottom: 'var(--space-10)'
        }}>
          {/* À propos */}
          <div>
            <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)', color: 'var(--color-text)', fontWeight: 'var(--weight-bold)' }}>
              📚 Lscript
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)' }}>
              Apprends le développement web et mobile avec des explications simples et sans jargon. 100% gratuit, pour débutants.
            </p>
          </div>

          {/* Parcours */}
          <div>
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-bold)', marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
              Parcours
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <Link href="/commencer" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>
                  🚀 Commencer ici
                </Link>
              </li>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <Link href="/guide" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>
                  📖 Guide complet
                </Link>
              </li>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <Link href="/visualisations" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>
                  🌐 Visualisations 3D
                </Link>
              </li>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <Link href="/blog" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>
                  ✍️ Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-bold)', marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
              Ressources
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <Link href="/categories/bases" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>
                  Bases
                </Link>
              </li>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <Link href="/categories/web" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>
                  Web
                </Link>
              </li>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <Link href="/categories/backend" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>
                  Backend
                </Link>
              </li>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <Link href="/categories/carriere" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>
                  Carrière
                </Link>
              </li>
            </ul>
          </div>

          {/* Aide */}
          <div>
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-bold)', marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
              Aide
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <Link href="/a-propos" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>
                  À propos
                </Link>
              </li>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <Link href="/contact" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-bold)', marginBottom: 'var(--space-4)', color: 'var(--color-text)' }}>
              📧 Newsletter
            </h4>

            {status === 'success' ? (
              <div style={{
                padding: 'var(--space-4)',
                background: '#dcfce7',
                borderRadius: 'var(--radius-lg)',
                color: '#15803d',
                fontSize: 'var(--text-sm)',
                fontWeight: 'var(--weight-medium)'
              }}>
                ✅ Merci ! Tu recevras les prochains articles.
              </div>
            ) : (
              <>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-3)', lineHeight: 'var(--leading-relaxed)' }}>
                  Reçois les nouveaux articles directement dans ta boîte mail.
                </p>
                <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  <input
                    type="email"
                    placeholder="ton@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: 'var(--space-3)',
                      fontSize: 'var(--text-sm)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-surface)',
                      color: 'var(--color-text)',
                      outline: 'none'
                    }}
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    style={{
                      padding: 'var(--space-3) var(--space-4)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 'var(--weight-semibold)',
                      borderRadius: 'var(--radius-md)',
                      border: 'none',
                      background: 'var(--color-accent)',
                      color: 'white',
                      cursor: status === 'loading' ? 'wait' : 'pointer',
                      opacity: status === 'loading' ? 0.7 : 1,
                      transition: 'all 0.2s',
                      width: '100%'
                    }}
                  >
                    {status === 'loading' ? '...' : "S'inscrire"}
                  </button>
                </form>
              </>
            )}


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
              <Link href="/cgu" style={{ color: 'var(--color-text-muted)' }}>
                CGU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
