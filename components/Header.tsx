'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AnimatedLogo from './AnimatedLogo';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/guide') return pathname.startsWith('/guide');
    return pathname === path;
  };

  return (
    <header className="header">
      <div className="header-inner">
        <AnimatedLogo size="md" animate={pathname === '/'} />
        
        <nav className="nav">
          <Link 
            href="/guide" 
            className={isActive('/guide') ? 'nav-active' : ''}
          >
            Guide
          </Link>
          <Link 
            href="/visualisations" 
            className={isActive('/visualisations') ? 'nav-active' : ''}
          >
            3D
          </Link>
          <Link 
            href="/blog" 
            className={isActive('/blog') ? 'nav-active' : ''}
          >
            Articles
          </Link>
          <Link 
            href="/a-propos" 
            className={isActive('/a-propos') ? 'nav-active' : ''}
          >
            À propos
          </Link>
        </nav>
      </div>
    </header>
  );
}

