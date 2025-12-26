/**
 * Système de couleurs par catégorie pour les cards
 * Génère automatiquement des gradients cohérents et mémorables
 */

export interface CategoryStyle {
  primary: string;
  secondary: string;
  gradient: string;
  icon: string;
  textColor: string;
}

const categoryStyles: Record<string, CategoryStyle> = {
  'Bases': {
    primary: '#ea580c',
    secondary: '#f97316',
    gradient: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
    icon: '🧱',
    textColor: '#fff',
  },
  'Web': {
    primary: '#2563eb',
    secondary: '#3b82f6',
    gradient: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
    icon: '🌐',
    textColor: '#fff',
  },
  'Mobile': {
    primary: '#7c3aed',
    secondary: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)',
    icon: '📱',
    textColor: '#fff',
  },
  'Backend': {
    primary: '#0f172a',
    secondary: '#1e293b',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
    icon: '⚙️',
    textColor: '#fff',
  },
  'Carrière': {
    primary: '#059669',
    secondary: '#10b981',
    gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
    icon: '💼',
    textColor: '#fff',
  },
  'Outils': {
    primary: '#dc2626',
    secondary: '#ef4444',
    gradient: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
    icon: '🛠️',
    textColor: '#fff',
  },
  'Langages': {
    primary: '#7c3aed',
    secondary: '#a855f7',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    icon: '💻',
    textColor: '#fff',
  },
  'Concepts': {
    primary: '#0891b2',
    secondary: '#06b6d4',
    gradient: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)',
    icon: '🧠',
    textColor: '#fff',
  },
  'Orientation': {
    primary: '#d97706',
    secondary: '#f59e0b',
    gradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
    icon: '🧭',
    textColor: '#fff',
  },
};

// Fallback pour catégories inconnues
const defaultStyle: CategoryStyle = {
  primary: '#6b7280',
  secondary: '#9ca3af',
  gradient: 'linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)',
  icon: '📄',
  textColor: '#fff',
};

/**
 * Récupère le style complet d'une catégorie
 * Gère automatiquement la casse (minuscules/majuscules)
 */
export function getCategoryStyle(category: string): CategoryStyle {
  // Recherche insensible à la casse
  const normalized = category.toLowerCase();
  const matchingKey = Object.keys(categoryStyles).find(
    key => key.toLowerCase() === normalized
  );
  return matchingKey ? categoryStyles[matchingKey] : defaultStyle;
}

/**
 * Récupère uniquement le gradient d'une catégorie
 */
export function getCategoryGradient(category: string): string {
  return getCategoryStyle(category).gradient;
}

/**
 * Récupère l'icône d'une catégorie
 */
export function getCategoryIcon(category: string): string {
  return getCategoryStyle(category).icon;
}

/**
 * Récupère la couleur primaire d'une catégorie
 */
export function getCategoryColor(category: string): string {
  return getCategoryStyle(category).primary;
}

/**
 * Récupère la couleur de texte optimale pour une catégorie
 */
export function getCategoryTextColor(category: string): string {
  return getCategoryStyle(category).textColor;
}

/**
 * Liste toutes les catégories disponibles
 */
export function getAllCategories(): string[] {
  return Object.keys(categoryStyles);
}
