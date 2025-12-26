import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo">
          L<span>script</span>
        </Link>
        
        <nav className="nav">
          <Link href="/commencer">Commencer</Link>
          <Link href="/blog">Articles</Link>
          <Link href="/categories">Catégories</Link>
          <Link href="/a-propos">À propos</Link>
        </nav>
      </div>
    </header>
  );
}
