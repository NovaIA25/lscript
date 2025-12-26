'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AnimatedLogo from './AnimatedLogo';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/guide') return pathname.startsWith('/guide');
    return pathname === path;
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Skip to main content link for keyboard accessibility */}
      <a href="#main-content" className="skip-to-content">
        Aller au contenu principal
      </a>

      <header className="header" role="banner">
        <div className="header-inner">
          <AnimatedLogo size="md" animate={pathname === '/'} />

          {/* Desktop Navigation */}
          <nav className="nav nav-desktop" role="navigation" aria-label="Navigation principale">
            <Link href="/guide" className={isActive('/guide') ? 'nav-active' : ''}>
              Guide
            </Link>
            <Link href="/visualisations" className={isActive('/visualisations') ? 'nav-active' : ''}>
              3D
            </Link>
            <Link href="/blog" className={isActive('/blog') ? 'nav-active' : ''}>
              Articles
            </Link>
            <Link href="/a-propos" className={isActive('/a-propos') ? 'nav-active' : ''}>
              À propos
            </Link>

            {/* Theme Toggle (Desktop) */}
            <ThemeToggle />
          </nav>

          {/* Mobile Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            {/* Theme Toggle (Mobile) */}
            <div className="theme-toggle-mobile">
              <ThemeToggle />
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
            >
              <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="mobile-nav-overlay" onClick={closeMenu}>
            <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
              <Link href="/guide" className={isActive('/guide') ? 'nav-active' : ''} onClick={closeMenu}>
                📖 Guide
              </Link>
              <Link href="/visualisations" className={isActive('/visualisations') ? 'nav-active' : ''} onClick={closeMenu}>
                🌐 3D
              </Link>
              <Link href="/blog" className={isActive('/blog') ? 'nav-active' : ''} onClick={closeMenu}>
                ✍️ Articles
              </Link>
              <Link href="/a-propos" className={isActive('/a-propos') ? 'nav-active' : ''} onClick={closeMenu}>
                ℹ️ À propos
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
