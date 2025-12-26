import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Fil d'Ariane" style={{ marginBottom: 'var(--space-6)' }}>
      <ol style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        fontSize: 'var(--text-sm)',
        color: 'var(--color-text-muted)'
      }}>
        {items.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            {index > 0 && (
              <span style={{ color: 'var(--color-text-placeholder)' }}>/</span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                style={{
                  color: 'var(--color-text-muted)',
                  transition: 'color var(--duration-fast)'
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: 'var(--color-text)' }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}