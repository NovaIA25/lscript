'use client';

import { useState } from 'react';
import Link from 'next/link';

const steps = [
  {
    id: 1,
    title: 'Tu tapes l\'URL',
    description: 'Tu écris "google.com" dans la barre de ton navigateur et tu appuies sur Entrée.',
    active: 'browser',
  },
  {
    id: 2,
    title: 'Requête envoyée',
    description: 'Ton navigateur envoie une demande au serveur : "Donne-moi cette page s\'il te plaît."',
    active: 'request',
  },
  {
    id: 3,
    title: 'Le serveur traite',
    description: 'Le serveur reçoit la demande, cherche les fichiers correspondants (HTML, CSS, JS).',
    active: 'server',
  },
  {
    id: 4,
    title: 'Réponse envoyée',
    description: 'Le serveur renvoie tous les fichiers nécessaires à ton navigateur.',
    active: 'response',
  },
  {
    id: 5,
    title: 'Page affichée',
    description: 'Ton navigateur assemble les fichiers et affiche la page. C\'est terminé !',
    active: 'complete',
  },
];

export default function WebVisualization() {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];

  return (
    <div className="page-content">
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/visualisations" style={{ color: 'var(--color-text-muted)' }}>
            ← Retour aux visualisations
          </Link>
        </div>

        <h1 style={{ marginBottom: '0.5rem' }}>🌐 Comment fonctionne le web</h1>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
          Comprendre ce qui se passe quand tu visites un site internet.
        </p>

        {/* Visualization Area */}
        <div 
          style={{
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2rem',
            marginBottom: '2rem',
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Browser */}
          <div 
            style={{
              width: '120px',
              height: '100px',
              background: step.active === 'browser' || step.active === 'complete' 
                ? 'var(--color-accent)' 
                : 'var(--color-secondary)',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              transform: step.active === 'browser' ? 'scale(1.1)' : 'scale(1)',
              boxShadow: step.active === 'browser' ? '0 0 30px rgba(255, 107, 53, 0.5)' : 'none',
            }}
          >
            <span style={{ fontSize: '2rem' }}>🖥️</span>
            <span style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>Navigateur</span>
          </div>

          {/* Arrow: Request */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <div 
              style={{
                width: '100px',
                height: '4px',
                background: step.active === 'request' 
                  ? 'var(--color-accent)' 
                  : 'var(--color-secondary)',
                borderRadius: '2px',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  right: '-8px',
                  top: '-6px',
                  width: 0,
                  height: 0,
                  borderLeft: `12px solid ${step.active === 'request' ? 'var(--color-accent)' : 'var(--color-secondary)'}`,
                  borderTop: '8px solid transparent',
                  borderBottom: '8px solid transparent',
                  transition: 'all 0.3s ease',
                }}
              />
            </div>
            <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>
              Requête HTTP
            </span>

            {/* Arrow: Response */}
            <div 
              style={{
                width: '100px',
                height: '4px',
                background: step.active === 'response' 
                  ? '#22c55e' 
                  : 'var(--color-secondary)',
                borderRadius: '2px',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  left: '-8px',
                  top: '-6px',
                  width: 0,
                  height: 0,
                  borderRight: `12px solid ${step.active === 'response' ? '#22c55e' : 'var(--color-secondary)'}`,
                  borderTop: '8px solid transparent',
                  borderBottom: '8px solid transparent',
                  transition: 'all 0.3s ease',
                }}
              />
            </div>
            <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>
              Réponse
            </span>
          </div>

          {/* Server */}
          <div 
            style={{
              width: '120px',
              height: '100px',
              background: step.active === 'server' 
                ? '#22c55e' 
                : 'var(--color-secondary)',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              transform: step.active === 'server' ? 'scale(1.1)' : 'scale(1)',
              boxShadow: step.active === 'server' ? '0 0 30px rgba(34, 197, 94, 0.5)' : 'none',
            }}
          >
            <span style={{ fontSize: '2rem' }}>🗄️</span>
            <span style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>Serveur</span>
          </div>
        </div>

        {/* Step Description */}
        <div 
          style={{
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            marginBottom: '1.5rem',
            borderLeft: '4px solid var(--color-accent)',
          }}
        >
          <h3 style={{ marginBottom: '0.5rem' }}>
            Étape {step.id} : {step.title}
          </h3>
          <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
            {step.description}
          </p>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            className="btn btn-secondary"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            style={{ opacity: currentStep === 0 ? 0.5 : 1 }}
          >
            ← Précédent
          </button>
          
          <div style={{ 
            display: 'flex', 
            gap: '0.5rem', 
            alignItems: 'center' 
          }}>
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentStep(i)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: i === currentStep ? 'var(--color-accent)' : 'var(--color-surface)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              />
            ))}
          </div>

          <button 
            className="btn btn-primary"
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
            style={{ opacity: currentStep === steps.length - 1 ? 0.5 : 1 }}
          >
            Suivant →
          </button>
        </div>

        {/* Related Article CTA */}
        <div 
          style={{ 
            marginTop: '3rem', 
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center'
          }}
        >
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
            Tu veux en savoir plus ?
          </p>
          <Link href="/blog/comment-fonctionne-site-internet" className="btn btn-secondary">
            Lire l'article complet →
          </Link>
        </div>
      </div>
    </div>
  );
}
