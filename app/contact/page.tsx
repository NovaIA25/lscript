import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Lscript',
  description: 'Une question ? Une suggestion d\'article ? Contacte-moi ! Je réponds à tous les messages sous 24-48h.',
  openGraph: {
    title: 'Contact — Lscript',
    description: 'Une question ? Une suggestion d\'article ? Contacte-moi !',
  },
};

export default function ContactPage() {
  return (
    <div className="page-content">
      <div className="container">
        {/* Hero Section */}
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <div style={{ fontSize: '4rem', marginBottom: 'var(--space-4)' }}>💬</div>
          <h1
            style={{
              fontSize: 'var(--text-5xl)',
              fontWeight: 'var(--weight-bold)',
              marginBottom: 'var(--space-4)',
              lineHeight: 'var(--leading-tight)',
            }}
          >
            Une question ? Écris-moi !
          </h1>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-muted)',
              lineHeight: 'var(--leading-relaxed)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Que ce soit une suggestion d'article, une question technique ou juste pour dire bonjour —
            je lis et réponds à <strong style={{ color: 'var(--color-text)' }}>tous les messages</strong> personnellement.
          </p>
        </div>

        {/* Main Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-10)',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {/* Contact Form */}
          <div style={{ gridColumn: 'span 1' }}>
            <ContactForm />
          </div>

          {/* Sidebar Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            {/* Quick Info */}
            <div
              className="card-premium"
              style={{
                padding: 'var(--space-6)',
              }}
            >
              <h3
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--weight-bold)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                📬 Infos pratiques
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)',
                }}
              >
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <span style={{ fontSize: '1.5rem' }}>⏱️</span>
                  <div>
                    <strong style={{ display: 'block', marginBottom: 'var(--space-1)' }}>
                      Temps de réponse
                    </strong>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                      24-48 heures (souvent moins !)
                    </span>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <span style={{ fontSize: '1.5rem' }}>✉️</span>
                  <div>
                    <strong style={{ display: 'block', marginBottom: 'var(--space-1)' }}>
                      Email direct
                    </strong>
                    <a
                      href="mailto:contact@lscript.fr"
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-accent)',
                        textDecoration: 'none',
                      }}
                    >
                      contact@lscript.fr
                    </a>
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <span style={{ fontSize: '1.5rem' }}>🌍</span>
                  <div>
                    <strong style={{ display: 'block', marginBottom: 'var(--space-1)' }}>
                      Langue
                    </strong>
                    <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                      Français ou Anglais
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* FAQ Contact */}
            <div
              className="card-premium"
              style={{
                padding: 'var(--space-6)',
              }}
            >
              <h3
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--weight-bold)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                💡 Questions fréquentes
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div>
                  <strong
                    style={{
                      display: 'block',
                      marginBottom: 'var(--space-2)',
                      fontSize: 'var(--text-sm)',
                    }}
                  >
                    Puis-je suggérer un article ?
                  </strong>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-muted)',
                      lineHeight: 'var(--leading-relaxed)',
                      margin: 0,
                    }}
                  >
                    Absolument ! J'adore recevoir des suggestions. Dis-moi quel sujet tu aimerais voir expliqué.
                  </p>
                </div>
                <div>
                  <strong
                    style={{
                      display: 'block',
                      marginBottom: 'var(--space-2)',
                      fontSize: 'var(--text-sm)',
                    }}
                  >
                    Tu réponds vraiment à tout le monde ?
                  </strong>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-muted)',
                      lineHeight: 'var(--leading-relaxed)',
                      margin: 0,
                    }}
                  >
                    Oui ! Chaque message est lu et reçoit une réponse personnelle. Pas de robots ici.
                  </p>
                </div>
                <div>
                  <strong
                    style={{
                      display: 'block',
                      marginBottom: 'var(--space-2)',
                      fontSize: 'var(--text-sm)',
                    }}
                  >
                    Je peux poser une question technique ?
                  </strong>
                  <p
                    style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-muted)',
                      lineHeight: 'var(--leading-relaxed)',
                      margin: 0,
                    }}
                  >
                    Bien sûr ! Si ta question peut aider d'autres débutants, elle deviendra peut-être un article.
                  </p>
                </div>
              </div>
            </div>

            {/* Alternative Contact */}
            <div
              style={{
                padding: 'var(--space-5)',
                background: 'var(--color-accent-subtle)',
                border: '2px solid var(--color-accent-muted)',
                borderRadius: 'var(--radius-lg)',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-muted)',
                  marginBottom: 'var(--space-3)',
                  lineHeight: 'var(--leading-relaxed)',
                }}
              >
                Pas fan des formulaires ?
              </p>
              <a
                href="mailto:contact@lscript.fr?subject=Contact depuis Lscript.fr"
                className="btn btn-primary"
                style={{
                  display: 'inline-block',
                  textDecoration: 'none',
                }}
              >
                📧 Envoyer un email direct
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
