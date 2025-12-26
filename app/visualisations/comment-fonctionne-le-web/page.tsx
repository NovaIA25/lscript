'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const steps = [
  {
    id: 1,
    title: 'Tu tapes l\'URL',
    description: 'Tu écris "google.com" dans la barre de ton navigateur et tu appuies sur Entrée.',
    detail: 'Le navigateur traduit d\'abord le nom de domaine en adresse IP via le DNS.',
    active: 'browser',
  },
  {
    id: 2,
    title: 'Requête envoyée',
    description: 'Ton navigateur envoie une demande au serveur : "Donne-moi cette page s\'il te plaît."',
    detail: 'C\'est une requête HTTP GET. Elle contient des infos sur ton navigateur et ce que tu veux.',
    active: 'request',
  },
  {
    id: 3,
    title: 'Le serveur traite',
    description: 'Le serveur reçoit la demande, cherche les fichiers correspondants (HTML, CSS, JS).',
    detail: 'Le serveur peut aussi interroger une base de données pour afficher du contenu personnalisé.',
    active: 'server',
  },
  {
    id: 4,
    title: 'Réponse envoyée',
    description: 'Le serveur renvoie tous les fichiers nécessaires à ton navigateur.',
    detail: 'Chaque fichier (HTML, CSS, images) voyage en petits paquets sur internet.',
    active: 'response',
  },
  {
    id: 5,
    title: 'Page affichée',
    description: 'Ton navigateur assemble les fichiers et affiche la page. C\'est terminé !',
    detail: 'Le navigateur lit le HTML, applique le CSS, et exécute le JavaScript.',
    active: 'complete',
  },
];

export default function WebVisualization() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [packetPosition, setPacketPosition] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const step = steps[currentStep];

  // Animate packets
  useEffect(() => {
    if (step.active === 'request' || step.active === 'response') {
      const interval = setInterval(() => {
        setPacketPosition(prev => (prev + 1) % 100);
      }, 30);
      return () => clearInterval(interval);
    } else {
      setPacketPosition(0);
    }
  }, [step.active]);

  // Auto-play mode
  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setTimeout(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(prev => prev + 1);
        } else {
          setIsAutoPlaying(false);
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isAutoPlaying, currentStep]);

  // Keyboard controls
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' && currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else if (e.key === 'ArrowLeft' && currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else if (e.key === ' ') {
      e.preventDefault();
      setIsAutoPlaying(prev => !prev);
    }
  }, [currentStep]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const restart = () => {
    setCurrentStep(0);
    setIsAutoPlaying(true);
  };

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
            background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-secondary) 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2rem',
            marginBottom: '2rem',
            minHeight: '320px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          {/* Background grid effect */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />

          {/* Browser */}
          <div 
            style={{
              width: '140px',
              height: '110px',
              background: step.active === 'browser' || step.active === 'complete' 
                ? 'linear-gradient(135deg, var(--color-accent) 0%, #ff8555 100%)' 
                : 'var(--color-secondary)',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: step.active === 'browser' ? 'scale(1.1)' : 'scale(1)',
              boxShadow: step.active === 'browser' 
                ? '0 0 40px rgba(255, 107, 53, 0.6), 0 0 80px rgba(255, 107, 53, 0.3)' 
                : '0 4px 20px rgba(0,0,0,0.3)',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <span style={{ fontSize: '2.5rem' }}>🖥️</span>
            <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontWeight: 600 }}>Navigateur</span>
            {step.active === 'browser' && (
              <div style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                width: '24px',
                height: '24px',
                background: '#22c55e',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                animation: 'pulse 1s infinite',
              }}>
                ✓
              </div>
            )}
          </div>

          {/* Connection area */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              position: 'relative',
              minWidth: '160px',
            }}
          >
            {/* Request arrow */}
            <div style={{ position: 'relative', width: '100%' }}>
              <div 
                style={{
                  width: '100%',
                  height: '6px',
                  background: step.active === 'request' 
                    ? 'linear-gradient(90deg, var(--color-accent), #ff8555)' 
                    : 'var(--color-secondary)',
                  borderRadius: '3px',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  boxShadow: step.active === 'request' ? '0 0 15px rgba(255, 107, 53, 0.5)' : 'none',
                }}
              >
                {/* Animated packet */}
                {step.active === 'request' && (
                  <div style={{
                    position: 'absolute',
                    left: `${packetPosition}%`,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '20px',
                    height: '20px',
                    background: 'var(--color-accent)',
                    borderRadius: '4px',
                    boxShadow: '0 0 20px rgba(255, 107, 53, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.6rem',
                  }}>
                    📤
                  </div>
                )}
                <div 
                  style={{
                    position: 'absolute',
                    right: '-10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: `14px solid ${step.active === 'request' ? 'var(--color-accent)' : 'var(--color-secondary)'}`,
                    borderTop: '10px solid transparent',
                    borderBottom: '10px solid transparent',
                    transition: 'all 0.3s ease',
                  }}
                />
              </div>
              <span style={{ 
                display: 'block', 
                fontSize: '0.75rem', 
                color: step.active === 'request' ? 'var(--color-accent)' : 'var(--color-text-muted)',
                marginTop: '0.5rem',
                textAlign: 'center',
                fontWeight: step.active === 'request' ? 600 : 400,
              }}>
                Requête HTTP →
              </span>
            </div>

            {/* Response arrow */}
            <div style={{ position: 'relative', width: '100%' }}>
              <div 
                style={{
                  width: '100%',
                  height: '6px',
                  background: step.active === 'response' 
                    ? 'linear-gradient(270deg, #22c55e, #4ade80)' 
                    : 'var(--color-secondary)',
                  borderRadius: '3px',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  boxShadow: step.active === 'response' ? '0 0 15px rgba(34, 197, 94, 0.5)' : 'none',
                }}
              >
                {/* Animated packet */}
                {step.active === 'response' && (
                  <div style={{
                    position: 'absolute',
                    left: `${100 - packetPosition}%`,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '20px',
                    height: '20px',
                    background: '#22c55e',
                    borderRadius: '4px',
                    boxShadow: '0 0 20px rgba(34, 197, 94, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.6rem',
                  }}>
                    📥
                  </div>
                )}
                <div 
                  style={{
                    position: 'absolute',
                    left: '-10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 0,
                    height: 0,
                    borderRight: `14px solid ${step.active === 'response' ? '#22c55e' : 'var(--color-secondary)'}`,
                    borderTop: '10px solid transparent',
                    borderBottom: '10px solid transparent',
                    transition: 'all 0.3s ease',
                  }}
                />
              </div>
              <span style={{ 
                display: 'block', 
                fontSize: '0.75rem', 
                color: step.active === 'response' ? '#22c55e' : 'var(--color-text-muted)',
                marginTop: '0.5rem',
                textAlign: 'center',
                fontWeight: step.active === 'response' ? 600 : 400,
              }}>
                ← Réponse (HTML, CSS, JS)
              </span>
            </div>
          </div>

          {/* Server */}
          <div 
            style={{
              width: '140px',
              height: '110px',
              background: step.active === 'server' 
                ? 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)' 
                : 'var(--color-secondary)',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: step.active === 'server' ? 'scale(1.1)' : 'scale(1)',
              boxShadow: step.active === 'server' 
                ? '0 0 40px rgba(34, 197, 94, 0.6), 0 0 80px rgba(34, 197, 94, 0.3)' 
                : '0 4px 20px rgba(0,0,0,0.3)',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <span style={{ fontSize: '2.5rem' }}>🗄️</span>
            <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontWeight: 600 }}>Serveur</span>
            {step.active === 'server' && (
              <div style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                width: '24px',
                height: '24px',
                background: 'var(--color-accent)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.6rem',
                animation: 'spin 1s linear infinite',
              }}>
                ⚙️
              </div>
            )}
          </div>

          {/* Complete celebration */}
          {step.active === 'complete' && (
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}>
              {[...Array(8)].map((_, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  fontSize: '1.5rem',
                  animation: `float ${2 + i * 0.2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                  left: `${15 + i * 10}%`,
                  top: `${20 + (i % 3) * 20}%`,
                }}>
                  ✨
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Step Description */}
        <div 
          style={{
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            marginBottom: '1.5rem',
            borderLeft: `4px solid ${step.active === 'server' || step.active === 'response' ? '#22c55e' : 'var(--color-accent)'}`,
            transition: 'all 0.3s ease',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h3 style={{ marginBottom: '0.5rem' }}>
                Étape {step.id} : {step.title}
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
                {step.description}
              </p>
            </div>
            <button 
              onClick={() => setShowDetail(!showDetail)}
              style={{
                background: 'none',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-muted)',
                transition: 'all 0.2s ease',
              }}
            >
              {showDetail ? '−' : '+'}
            </button>
          </div>
          {showDetail && (
            <p style={{ 
              marginTop: '1rem', 
              padding: '1rem', 
              background: 'rgba(255,255,255,0.03)', 
              borderRadius: '8px',
              color: 'var(--color-text-muted)',
              fontSize: '0.9rem',
            }}>
              💡 {step.detail}
            </p>
          )}
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
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
                  width: i === currentStep ? '24px' : '12px',
                  height: '12px',
                  borderRadius: i === currentStep ? '6px' : '50%',
                  border: 'none',
                  background: i === currentStep ? 'var(--color-accent)' : 'var(--color-surface)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>

          <button 
            className="btn btn-primary"
            onClick={() => currentStep === steps.length - 1 ? restart() : setCurrentStep(currentStep + 1)}
          >
            {currentStep === steps.length - 1 ? '🔄 Recommencer' : 'Suivant →'}
          </button>

          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            style={{
              background: isAutoPlaying ? 'var(--color-accent)' : 'var(--color-surface)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
            }}
            title={isAutoPlaying ? 'Pause' : 'Lecture automatique'}
          >
            {isAutoPlaying ? '⏸️' : '▶️'}
          </button>
        </div>

        {/* Keyboard hint */}
        <p style={{ 
          textAlign: 'center', 
          marginTop: '1rem', 
          color: 'var(--color-text-muted)',
          fontSize: '0.8rem',
        }}>
          Utilise ← → pour naviguer, Espace pour lecture auto
        </p>

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
          <Link href="/guide/web" className="btn btn-secondary">
            Lire le chapitre complet →
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(10deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
