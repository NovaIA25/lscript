'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Ton prénom est requis';
        if (value.trim().length < 2) return 'Ton prénom doit faire au moins 2 caractères';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Ton email est requis';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email invalide';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Un message est requis';
        if (value.trim().length < 10) return 'Le message doit faire au moins 10 caractères';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate on change if field was already touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error !== undefined)) {
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/xqekawgy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTouched({});
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'var(--color-success-light)',
          border: '2px solid var(--color-success)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-8)',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }}>✅</div>
        <h3
          style={{
            fontSize: 'var(--text-2xl)',
            fontWeight: 'var(--weight-bold)',
            color: 'var(--color-success)',
            marginBottom: 'var(--space-3)',
          }}
        >
          Message envoyé !
        </h3>
        <p
          style={{
            fontSize: 'var(--text-base)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-6)',
            lineHeight: 'var(--leading-relaxed)',
          }}
        >
          Merci pour ton message ! Je te répondrai dans les plus brefs délais (généralement sous 24-48h).
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn btn-primary"
          style={{ margin: '0 auto' }}
        >
          Envoyer un autre message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)',
      }}
    >
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'var(--color-warning-light)',
            border: '1px solid var(--color-warning)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-4)',
            fontSize: 'var(--text-sm)',
            color: 'var(--color-warning)',
          }}
        >
          ⚠️ Une erreur est survenue. Réessaie ou écris à contact@lscript.fr
        </motion.div>
      )}

      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          style={{
            display: 'block',
            marginBottom: 'var(--space-2)',
            fontWeight: 'var(--weight-semibold)',
            fontSize: 'var(--text-base)',
            color: 'var(--color-text)',
          }}
        >
          Ton prénom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Marie"
          style={{
            width: '100%',
            padding: 'var(--space-4)',
            background: 'var(--color-surface)',
            border: `2px solid ${
              errors.name && touched.name ? 'var(--color-error)' : 'var(--color-border)'
            }`,
            borderRadius: 'var(--radius-md)',
            color: 'var(--color-text)',
            fontSize: 'var(--text-base)',
            outline: 'none',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          onFocus={(e) => {
            if (!errors.name) {
              e.target.style.borderColor = 'var(--color-accent)';
              e.target.style.boxShadow = '0 0 0 3px rgba(234, 88, 12, 0.1)';
            }
          }}
          onBlurCapture={(e) => {
            if (!errors.name) {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
        />
        {errors.name && touched.name && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              marginTop: 'var(--space-2)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-error)',
            }}
          >
            {errors.name}
          </motion.p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          style={{
            display: 'block',
            marginBottom: 'var(--space-2)',
            fontWeight: 'var(--weight-semibold)',
            fontSize: 'var(--text-base)',
            color: 'var(--color-text)',
          }}
        >
          Ton email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="marie@example.com"
          style={{
            width: '100%',
            padding: 'var(--space-4)',
            background: 'var(--color-surface)',
            border: `2px solid ${
              errors.email && touched.email ? 'var(--color-error)' : 'var(--color-border)'
            }`,
            borderRadius: 'var(--radius-md)',
            color: 'var(--color-text)',
            fontSize: 'var(--text-base)',
            outline: 'none',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          onFocus={(e) => {
            if (!errors.email) {
              e.target.style.borderColor = 'var(--color-accent)';
              e.target.style.boxShadow = '0 0 0 3px rgba(234, 88, 12, 0.1)';
            }
          }}
          onBlurCapture={(e) => {
            if (!errors.email) {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
        />
        {errors.email && touched.email && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              marginTop: 'var(--space-2)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-error)',
            }}
          >
            {errors.email}
          </motion.p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          style={{
            display: 'block',
            marginBottom: 'var(--space-2)',
            fontWeight: 'var(--weight-semibold)',
            fontSize: 'var(--text-base)',
            color: 'var(--color-text)',
          }}
        >
          Ton message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={6}
          placeholder="J'aimerais te suggérer un article sur..."
          style={{
            width: '100%',
            padding: 'var(--space-4)',
            background: 'var(--color-surface)',
            border: `2px solid ${
              errors.message && touched.message ? 'var(--color-error)' : 'var(--color-border)'
            }`,
            borderRadius: 'var(--radius-md)',
            color: 'var(--color-text)',
            fontSize: 'var(--text-base)',
            outline: 'none',
            resize: 'vertical',
            fontFamily: 'inherit',
            lineHeight: 'var(--leading-relaxed)',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          onFocus={(e) => {
            if (!errors.message) {
              e.target.style.borderColor = 'var(--color-accent)';
              e.target.style.boxShadow = '0 0 0 3px rgba(234, 88, 12, 0.1)';
            }
          }}
          onBlurCapture={(e) => {
            if (!errors.message) {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
        />
        {errors.message && touched.message && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              marginTop: 'var(--space-2)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-error)',
            }}
          >
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
        whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
        className="btn btn-primary"
        style={{
          opacity: status === 'loading' ? 0.7 : 1,
          cursor: status === 'loading' ? 'wait' : 'pointer',
          fontSize: 'var(--text-lg)',
          padding: 'var(--space-4) var(--space-6)',
        }}
      >
        {status === 'loading' ? '📤 Envoi en cours...' : '📨 Envoyer le message'}
      </motion.button>
    </motion.form>
  );
}
