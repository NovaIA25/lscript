import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Une question ? Une suggestion ? Contacte l\'équipe Lscript.',
};

export default function ContactPage() {
  return (
    <div className="page-content">
      <div className="container">
        <div style={{ maxWidth: '600px' }}>
          <h1>Contact</h1>
          <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
            Une question, une suggestion d'article ou juste un message ? 
            Remplis le formulaire ci-dessous.
          </p>

          <form 
            action="https://formspree.io/f/your-form-id" 
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div>
              <label 
                htmlFor="name" 
                style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: 500 
                }}
              >
                Ton prénom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: 'var(--color-surface)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--color-text)',
                  fontSize: '1rem',
                }}
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: 500 
                }}
              >
                Ton email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: 'var(--color-surface)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--color-text)',
                  fontSize: '1rem',
                }}
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: 500 
                }}
              >
                Ton message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: 'var(--color-surface)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--color-text)',
                  fontSize: '1rem',
                  resize: 'vertical',
                }}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Envoyer le message
            </button>
          </form>

          <p style={{ marginTop: '2rem', color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            📧 Tu peux aussi écrire directement à : contact@lscript.fr
          </p>
        </div>
      </div>
    </div>
  );
}
