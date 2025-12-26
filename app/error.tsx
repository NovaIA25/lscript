'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log l'erreur pour le débogage
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="page-content" style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="container" style={{
        textAlign: 'center',
        maxWidth: '600px',
        padding: 'var(--space-10)'
      }}>
        <div style={{
          fontSize: '4rem',
          marginBottom: 'var(--space-6)'
        }}>
          ⚠️
        </div>

        <h1 style={{
          fontSize: 'var(--text-4xl)',
          marginBottom: 'var(--space-4)',
          fontWeight: 'var(--weight-bold)'
        }}>
          Une erreur s'est produite
        </h1>

        <div className="section-separator" />

        <p style={{
          fontSize: 'var(--text-lg)',
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--space-8)',
          lineHeight: '1.7'
        }}>
          Désolé, quelque chose ne s'est pas passé comme prévu. Ne t'inquiète pas, ça arrive parfois.
        </p>

        {error.message && (
          <div style={{
            marginBottom: 'var(--space-8)',
            padding: 'var(--space-4)',
            background: 'var(--color-bg-subtle)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            fontSize: 'var(--text-sm)',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-mono)',
            textAlign: 'left',
            overflowX: 'auto'
          }}>
            {error.message}
          </div>
        )}

        <div style={{
          display: 'flex',
          gap: 'var(--space-4)',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => reset()}
            className="btn-premium"
            style={{
              cursor: 'pointer'
            }}
          >
            Réessayer
          </button>
          <Link href="/" className="btn btn-secondary">
            Retour à l'accueil
          </Link>
        </div>

        <p style={{
          marginTop: 'var(--space-12)',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-muted)'
        }}>
          Si le problème persiste, n'hésite pas à{' '}
          <Link href="/contact" style={{ color: 'var(--color-accent)' }}>
            nous contacter
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
