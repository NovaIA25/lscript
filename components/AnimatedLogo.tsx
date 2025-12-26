'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

export default function AnimatedLogo({ size = 'md', animate = true }: AnimatedLogoProps) {
  const sizes = {
    sm: { width: 100, fontSize: '1.25rem' },
    md: { width: 140, fontSize: '1.5rem' },
    lg: { width: 200, fontSize: '2rem' },
  };

  const { fontSize } = sizes[size];

  // Path animation variants
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.65, 0, 0.35, 1] as const,
      },
    },
  };

  // Text animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.05,
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const logoText = 'Lscript';

  return (
    <Link href="/" className="animated-logo">
      <motion.div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* SVG Icon */}
        <motion.svg
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
          initial={animate ? 'hidden' : 'visible'}
          animate="visible"
          role="img"
          aria-label="Logo Lscript - Symboles de code avec brackets et slash"
        >
          {/* Code brackets */}
          <motion.path
            d="M10 8L4 16L10 24"
            stroke="var(--color-accent)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
          />
          <motion.path
            d="M22 8L28 16L22 24"
            stroke="var(--color-accent)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
          />
          {/* Slash */}
          <motion.path
            d="M18 6L14 26"
            stroke="var(--color-text)"
            strokeWidth="2"
            strokeLinecap="round"
            variants={pathVariants}
            style={{ opacity: 0.6 }}
          />
        </motion.svg>

        {/* Text */}
        <div style={{ display: 'flex', fontSize, fontWeight: 700 }}>
          {logoText.split('').map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              initial={animate ? 'hidden' : 'visible'}
              animate="visible"
              variants={letterVariants}
              style={{
                color: i === 0 ? 'var(--color-accent)' : 'var(--color-text)',
                display: 'inline-block',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}
