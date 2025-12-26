'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setShowBanner(false);
    // Enable ads
    window.dispatchEvent(new Event('cookie-consent-given'));
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
      padding: '1rem 1.5rem',
      zIndex: 9999,
      boxShadow: '0 -4px 20px rgba(0,0,0,0.15)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
        flexWrap: 'wrap',
      }}>
        <div style={{ flex: 1, minWidth: '280px' }}>
          <p style={{ 
            margin: 0, 
            fontSize: 'var(--text-sm)', 
            color: 'var(--color-text)',
            lineHeight: 1.5,
          }}>
            🍪 Ce site utilise des cookies pour améliorer ton expérience et afficher des publicités personnalisées. 
            <a href="/confidentialite" style={{ color: 'var(--color-accent)', marginLeft: '4px' }}>
              En savoir plus
            </a>
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
          <button
            onClick={acceptEssential}
            style={{
              padding: '0.6rem 1rem',
              fontSize: 'var(--text-sm)',
              background: 'transparent',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--color-text-muted)',
              cursor: 'pointer',
            }}
          >
            Essentiel uniquement
          </button>
          <button
            onClick={acceptAll}
            style={{
              padding: '0.6rem 1.25rem',
              fontSize: 'var(--text-sm)',
              background: 'var(--color-accent)',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              color: 'white',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Accepter tout
          </button>
        </div>
      </div>
    </div>
  );
}
