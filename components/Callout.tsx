interface CalloutProps {
  type: 'tip' | 'warning' | 'summary' | 'example' | 'key-point' | 'info';
  title?: string;
  children: React.ReactNode;
  icon?: string;
}

const icons = {
  tip: '💡',
  warning: '⚠️',
  summary: '🧭',
  example: '✨',
  'key-point': '🎯',
  info: 'ℹ️',
};

const defaultTitles = {
  tip: 'À retenir',
  warning: 'Erreur fréquente',
  summary: 'En résumé',
  example: 'Exemple concret',
  'key-point': 'Point clé',
  info: 'Bon à savoir',
};

export default function Callout({ type, title, children, icon }: CalloutProps) {
  const displayIcon = icon || icons[type];
  const displayTitle = title || defaultTitles[type];

  return (
    <div className={`callout callout-${type}`}>
      <div className="callout-title">
        <span style={{ marginRight: 'var(--space-2)' }}>{displayIcon}</span>
        <span>{displayTitle}</span>
      </div>
      <div className="callout-content">{children}</div>
    </div>
  );
}
