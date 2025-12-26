interface CalloutProps {
  type: 'tip' | 'warning' | 'summary';
  title?: string;
  children: React.ReactNode;
}

const icons = {
  tip: '💡',
  warning: '⚠️',
  summary: '🧭',
};

const defaultTitles = {
  tip: 'À retenir',
  warning: 'Erreur fréquente',
  summary: 'En résumé',
};

export default function Callout({ type, title, children }: CalloutProps) {
  return (
    <div className={`callout callout-${type}`}>
      <div className="callout-title">
        <span>{icons[type]}</span>
        <span>{title || defaultTitles[type]}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}
