'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const steps = [
  {
    id: 1,
    title: 'L\'utilisateur agit',
    description: 'Tu cliques sur un bouton ou tu soumets un formulaire. Cette action se passe côté Frontend.',
    detail: 'Le Frontend, c\'est tout ce qui tourne dans ton navigateur : HTML, CSS, JavaScript.',
    frontendActive: true,
    backendActive: false,
  },
  {
    id: 2,
    title: 'Le Frontend envoie une requête',
    description: 'Ton navigateur envoie une demande au serveur via une API.',
    detail: 'Une API, c\'est comme un serveur au restaurant : tu passes commande, il va en cuisine.',
    frontendActive: true,
    backendActive: false,
    showRequest: true,
  },
  {
    id: 3,
    title: 'Le Backend traite',
    description: 'Le serveur reçoit la requête, vérifie les données, interroge la base de données.',
    detail: 'Le Backend gère la logique métier : vérification, calculs, accès aux données sensibles.',
    frontendActive: false,
    backendActive: true,
  },
  {
    id: 4,
    title: 'La base de données répond',
    description: 'Le serveur récupère ou enregistre les données nécessaires.',
    detail: 'MySQL, PostgreSQL, MongoDB... stockent toutes les informations de ton application.',
    frontendActive: false,
    backendActive: true,
    showDatabase: true,
  },
  {
    id: 5,
    title: 'Le Backend renvoie la réponse',
    description: 'Le serveur renvoie les données formatées (souvent en JSON) au Frontend.',
    detail: 'JSON est le format standard pour échanger des données entre Frontend et Backend.',
    frontendActive: false,
    backendActive: true,
    showResponse: true,
  },
  {
    id: 6,
    title: 'Le Frontend affiche',
    description: 'Ton navigateur reçoit les données et met à jour l\'interface sans recharger la page.',
    detail: 'C\'est ce qu\'on appelle une application dynamique ou SPA (Single Page Application).',
    frontendActive: true,
    backendActive: false,
    complete: true,
  },
];

export default function FrontendBackendVisualization() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const step = steps[currentStep];

  // Animation progress
  useEffect(() => {
    if (step.showRequest || step.showResponse) {
      const interval = setInterval(() => {
        setAnimationProgress(prev => (prev + 2) % 100);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [step]);

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setTimeout(() => {
        if (currentStep < steps.length - 1) {
          setCurrentStep(prev => prev + 1);
        } else {
          setIsAutoPlaying(false);
        }
      }, 3500);
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

  return (
    <div className="page-content">
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/visualisations" style={{ color: 'var(--color-text-muted)' }}>
            ← Retour aux visualisations
          </Link>
        </div>

        <h1 style={{ marginBottom: '0.5rem' }}>⚙️ Frontend vs Backend</h1>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
          Comprends la différence entre ce qui se passe dans ton navigateur et sur le serveur.
        </p>

        {/* Visualization Area */}
        <div className="viz-area" style={{
          background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem 2rem',
          marginBottom: '2rem',
          minHeight: '400px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Grid background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />

          <div className="viz-main-layout" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}>
            {/* Frontend Side */}
            <div style={{
              flex: 1,
              textAlign: 'center',
              padding: '2rem',
            }}>
              <div style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: step.frontendActive ? '#3b82f6' : 'rgba(255,255,255,0.4)',
                marginBottom: '1rem',
                fontWeight: 600,
              }}>
                Frontend (Client)
              </div>

              {/* Browser */}
              <div style={{
                width: '180px',
                height: '130px',
                margin: '0 auto',
                background: step.frontendActive 
                  ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
                  : '#334155',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.5s ease',
                transform: step.frontendActive ? 'scale(1.05)' : 'scale(1)',
                boxShadow: step.frontendActive 
                  ? '0 0 60px rgba(59, 130, 246, 0.5)' 
                  : '0 4px 20px rgba(0,0,0,0.3)',
              }}>
                <span style={{ fontSize: '3rem' }}>💻</span>
                <span style={{ fontSize: '0.875rem', marginTop: '0.5rem', fontWeight: 600, color: 'white' }}>
                  Navigateur
                </span>
              </div>

              <div style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(59, 130, 246, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(59, 130, 246, 0.2)',
              }}>
                <div style={{ fontSize: '0.75rem', color: '#60a5fa', marginBottom: '0.5rem' }}>
                  Technologies Frontend
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {['HTML', 'CSS', 'JS', 'React'].map(tech => (
                    <span key={tech} style={{
                      padding: '4px 8px',
                      background: 'rgba(59, 130, 246, 0.2)',
                      borderRadius: '4px',
                      fontSize: '0.7rem',
                      color: '#93c5fd',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle - Connection */}
            <div style={{
              flex: 0.8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
            }}>
              {/* Request Arrow */}
              <div style={{ position: 'relative', width: '100%' }}>
                <div style={{
                  height: '4px',
                  background: step.showRequest 
                    ? 'linear-gradient(90deg, #3b82f6, #8b5cf6)' 
                    : 'rgba(255,255,255,0.1)',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                }}>
                  {step.showRequest && (
                    <div style={{
                      position: 'absolute',
                      left: `${animationProgress}%`,
                      top: '-8px',
                      transform: 'translateX(-50%)',
                      background: '#3b82f6',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '0.65rem',
                      whiteSpace: 'nowrap',
                    }}>
                      📤 Requête
                    </div>
                  )}
                </div>
                <div style={{ 
                  textAlign: 'center', 
                  fontSize: '0.7rem', 
                  color: 'rgba(255,255,255,0.4)',
                  marginTop: '0.5rem'
                }}>
                  API Request →
                </div>
              </div>

              {/* API Label */}
              <div style={{
                padding: '0.75rem 1.5rem',
                background: 'rgba(139, 92, 246, 0.2)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '8px',
              }}>
                <span style={{ fontSize: '0.875rem', color: '#a78bfa' }}>🔌 API</span>
              </div>

              {/* Response Arrow */}
              <div style={{ position: 'relative', width: '100%' }}>
                <div style={{
                  height: '4px',
                  background: step.showResponse 
                    ? 'linear-gradient(270deg, #22c55e, #16a34a)' 
                    : 'rgba(255,255,255,0.1)',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                }}>
                  {step.showResponse && (
                    <div style={{
                      position: 'absolute',
                      left: `${100 - animationProgress}%`,
                      top: '-8px',
                      transform: 'translateX(-50%)',
                      background: '#22c55e',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '0.65rem',
                      whiteSpace: 'nowrap',
                    }}>
                      📥 JSON
                    </div>
                  )}
                </div>
                <div style={{ 
                  textAlign: 'center', 
                  fontSize: '0.7rem', 
                  color: 'rgba(255,255,255,0.4)',
                  marginTop: '0.5rem'
                }}>
                  ← Response
                </div>
              </div>
            </div>

            {/* Backend Side */}
            <div style={{
              flex: 1,
              textAlign: 'center',
              padding: '2rem',
            }}>
              <div style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: step.backendActive ? '#22c55e' : 'rgba(255,255,255,0.4)',
                marginBottom: '1rem',
                fontWeight: 600,
              }}>
                Backend (Serveur)
              </div>

              {/* Server */}
              <div style={{
                width: '180px',
                height: '130px',
                margin: '0 auto',
                background: step.backendActive 
                  ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
                  : '#334155',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.5s ease',
                transform: step.backendActive ? 'scale(1.05)' : 'scale(1)',
                boxShadow: step.backendActive 
                  ? '0 0 60px rgba(34, 197, 94, 0.5)' 
                  : '0 4px 20px rgba(0,0,0,0.3)',
              }}>
                <span style={{ fontSize: '3rem' }}>🗄️</span>
                <span style={{ fontSize: '0.875rem', marginTop: '0.5rem', fontWeight: 600, color: 'white' }}>
                  Serveur
                </span>
              </div>

              {/* Database */}
              <div style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: step.showDatabase 
                  ? 'rgba(234, 179, 8, 0.2)'
                  : 'rgba(34, 197, 94, 0.1)',
                borderRadius: '8px',
                border: `1px solid ${step.showDatabase ? 'rgba(234, 179, 8, 0.3)' : 'rgba(34, 197, 94, 0.2)'}`,
                transition: 'all 0.3s ease',
              }}>
                <div style={{ 
                  fontSize: '0.75rem', 
                  color: step.showDatabase ? '#fcd34d' : '#4ade80', 
                  marginBottom: '0.5rem' 
                }}>
                  {step.showDatabase ? '💾 Base de données' : 'Technologies Backend'}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {(step.showDatabase ? ['MySQL', 'MongoDB'] : ['Node.js', 'Python', 'PHP']).map(tech => (
                    <span key={tech} style={{
                      padding: '4px 8px',
                      background: step.showDatabase 
                        ? 'rgba(234, 179, 8, 0.2)'
                        : 'rgba(34, 197, 94, 0.2)',
                      borderRadius: '4px',
                      fontSize: '0.7rem',
                      color: step.showDatabase ? '#fcd34d' : '#86efac',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Celebration */}
          {step.complete && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '4rem',
              animation: 'pulse 1s infinite',
            }}>
              ✨
            </div>
          )}
        </div>

        {/* Step Description */}
        <div style={{
          background: 'var(--color-surface)',
          borderRadius: 'var(--radius-md)',
          padding: '1.5rem',
          marginBottom: '1.5rem',
          borderLeft: `4px solid ${step.frontendActive ? '#3b82f6' : '#22c55e'}`,
        }}>
          <h3 style={{ marginBottom: '0.5rem' }}>
            Étape {step.id} : {step.title}
          </h3>
          <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>
            {step.description}
          </p>
          <p style={{
            marginTop: '1rem',
            padding: '1rem',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '8px',
            fontSize: '0.9rem',
            color: 'var(--color-text-muted)',
          }}>
            💡 {step.detail}
          </p>
        </div>

        {/* Controls */}
        <div className="viz-controls" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <button 
            className="btn btn-secondary"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            style={{ opacity: currentStep === 0 ? 0.5 : 1 }}
          >
            ← Précédent
          </button>
          
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentStep(i)}
                style={{
                  width: i === currentStep ? '24px' : '12px',
                  height: '12px',
                  borderRadius: i === currentStep ? '6px' : '50%',
                  border: 'none',
                  background: i === currentStep 
                    ? (steps[i].frontendActive ? '#3b82f6' : '#22c55e')
                    : 'var(--color-surface)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>

          <button 
            className="btn btn-primary"
            onClick={() => currentStep === steps.length - 1 
              ? (setCurrentStep(0), setIsAutoPlaying(true)) 
              : setCurrentStep(currentStep + 1)}
          >
            {currentStep === steps.length - 1 ? '🔄 Recommencer' : 'Suivant →'}
          </button>

          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            style={{
              background: isAutoPlaying ? '#3b82f6' : 'var(--color-surface)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isAutoPlaying ? '⏸️' : '▶️'}
          </button>
        </div>

        <p style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
          Utilise ← → pour naviguer, Espace pour lecture auto
        </p>

        {/* CTA */}
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
          <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
            Tu veux approfondir ?
          </p>
          <Link href="/blog/frontend-vs-backend" className="btn btn-secondary">
            Lire l'article complet →
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }
      `}</style>
    </div>
  );
}
