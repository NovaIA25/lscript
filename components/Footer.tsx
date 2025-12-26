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
    
    // Simulate API call - replace with actual service (Mailchimp, ConvertKit, etc.)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For now, just show success (in production, connect to email service)
    setStatus('success');
    setEmail('');
  };

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
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-3)' }}>
                  Reçois les nouveaux articles directement dans ta boîte mail.
                </p>
                <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: 'var(--space-2)' }}>
                  <input
                    type="email"
                    placeholder="ton@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      flex: 1,
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
                      transition: 'all 0.2s'
                    }}
                  >
                    {status === 'loading' ? '...' : 'OK'}
                  </button>
                </form>
              </>
            )}

            {/* Social Links */}
            <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
              <a 
                href="https://twitter.com/lscript_fr" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  width: '40px', 
                  height: '40px', 
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-muted)',
                  transition: 'all var(--duration-fast)'
                }}
                aria-label="Twitter"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/NovaIA25/lscript" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  width: '40px', 
                  height: '40px', 
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-muted)',
                  transition: 'all var(--duration-fast)'
                }}
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
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
