'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const steps = [
  {
    id: 1,
    title: 'Create — Créer',
    description: 'Tu ajoutes de nouvelles données dans la base. Exemple : créer un nouvel utilisateur.',
    detail: 'En SQL : INSERT INTO users VALUES (...). L\'opération ajoute une nouvelle ligne dans la table.',
    active: 'create',
    operation: 'CREATE',
    color: '#22c55e',
  },
  {
    id: 2,
    title: 'Read — Lire',
    description: 'Tu récupères des données existantes. Exemple : afficher la liste des utilisateurs.',
    detail: 'En SQL : SELECT * FROM users. C\'est l\'opération la plus fréquente en général.',
    active: 'read',
    operation: 'READ',
    color: '#3b82f6',
  },
  {
    id: 3,
    title: 'Update — Modifier',
    description: 'Tu modifies des données existantes. Exemple : changer l\'email d\'un utilisateur.',
    detail: 'En SQL : UPDATE users SET email = ... WHERE id = ...',
    active: 'update',
    operation: 'UPDATE',
    color: '#f59e0b',
  },
  {
    id: 4,
    title: 'Delete — Supprimer',
    description: 'Tu supprimes des données. Exemple : supprimer un compte utilisateur.',
    detail: 'En SQL : DELETE FROM users WHERE id = ... Attention, c\'est irréversible !',
    active: 'delete',
    operation: 'DELETE',
    color: '#ef4444',
  },
  {
    id: 5,
    title: 'CRUD complet',
    description: 'Voilà ! Ces 4 opérations sont la base de toutes les interactions avec une base de données.',
    detail: 'Dans une vraie app, tu fais ces opérations via ton langage de programmation (Node.js, Python, etc.).',
    active: 'complete',
    operation: 'CRUD',
    color: '#8b5cf6',
  },
];

export default function DatabaseCRUDVisualization() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [dataItems, setDataItems] = useState([
    { id: 1, name: 'Alice', status: 'existing' },
    { id: 2, name: 'Bob', status: 'existing' },
  ]);
  const step = steps[currentStep];

  // Simulate CRUD operations on data
  useEffect(() => {
    if (step.active === 'create') {
      setTimeout(() => {
        setDataItems(prev => [...prev, { id: 3, name: 'Charlie', status: 'new' }]);
      }, 500);
    } else if (step.active === 'read') {
      setDataItems(prev => prev.map(item => ({ ...item, status: 'reading' })));
    } else if (step.active === 'update') {
      setDataItems(prev => prev.map(item =>
        item.id === 2 ? { ...item, name: 'Bob ✏️', status: 'updated' } : item
      ));
    } else if (step.active === 'delete') {
      setTimeout(() => {
        setDataItems(prev => prev.filter(item => item.id !== 3));
      }, 500);
    } else if (step.active === 'complete') {
      setDataItems([
        { id: 1, name: 'Alice', status: 'existing' },
        { id: 2, name: 'Bob', status: 'existing' },
      ]);
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
    setDataItems([
      { id: 1, name: 'Alice', status: 'existing' },
      { id: 2, name: 'Bob', status: 'existing' },
    ]);
    setIsAutoPlaying(true);
  };

  const getItemColor = (status: string) => {
    switch (status) {
      case 'new': return '#22c55e';
      case 'reading': return '#3b82f6';
      case 'updated': return '#f59e0b';
      default: return 'rgba(255,255,255,0.1)';
    }
  };

  return (
    <div className="page-content">
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/visualisations" style={{ color: 'var(--color-text-muted)' }}>
            ← Retour aux visualisations
          </Link>
        </div>

        <h1 style={{ marginBottom: '0.5rem' }}>🗄️ Base de données et CRUD</h1>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
          Comprendre les 4 opérations essentielles sur une base de données.
        </p>

        {/* Visualization Area */}
        <div
          style={{
            background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-secondary) 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2rem',
            marginBottom: '2rem',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
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

          {/* Operation Badge */}
          <div
            style={{
              background: step.color || 'var(--color-secondary)',
              padding: '1rem 2rem',
              borderRadius: 'var(--radius-lg)',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'white',
              boxShadow: `0 0 40px ${step.color}66`,
              transition: 'all 0.4s ease',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {step.operation}
          </div>

          {/* Database Table */}
          <div
            style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
              minWidth: '320px',
              position: 'relative',
              zIndex: 2,
              border: '2px solid rgba(255,255,255,0.1)',
            }}
          >
            {/* Table Header */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '1rem',
              paddingBottom: '0.75rem',
              borderBottom: '2px solid rgba(255,255,255,0.2)',
              fontWeight: 600,
              fontSize: '0.9rem',
            }}>
              <div style={{ flex: '0 0 60px' }}>ID</div>
              <div style={{ flex: '1' }}>Nom</div>
            </div>

            {/* Table Rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {dataItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '0.75rem',
                    background: getItemColor(item.status),
                    borderRadius: 'var(--radius-sm)',
                    transition: 'all 0.4s ease',
                    border: item.status !== 'existing' ? `2px solid ${step.color}` : '2px solid transparent',
                    transform: item.status === 'new' ? 'scale(1.05)' : 'scale(1)',
                  }}
                >
                  <div style={{ flex: '0 0 60px', fontWeight: 600 }}>{item.id}</div>
                  <div style={{ flex: '1' }}>{item.name}</div>
                </div>
              ))}
            </div>

            {/* Empty state for delete */}
            {step.active === 'delete' && dataItems.length === 2 && (
              <div style={{
                textAlign: 'center',
                padding: '1rem',
                color: 'var(--color-text-muted)',
                fontSize: '0.9rem',
                marginTop: '1rem',
              }}>
                Suppression de Charlie...
              </div>
            )}
          </div>

          {/* Database icon */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            fontSize: '4rem',
            opacity: 0.1,
          }}>
            🗄️
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
            borderLeft: `4px solid ${step.color}`,
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
                  background: i === currentStep ? steps[i].color : 'var(--color-surface)',
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
              background: isAutoPlaying ? step.color : 'var(--color-surface)',
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
          <Link href="/guide/database" className="btn btn-secondary">
            Lire le chapitre complet →
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(10deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
