// Chapter data for the guide
export interface Chapter {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export const chapters: Chapter[] = [
  {
    id: 0,
    slug: 'introduction',
    title: 'Introduction',
    description: 'Bienvenue dans ce guide complet.',
    icon: '👋',
  },
  {
    id: 1,
    slug: 'programmer',
    title: "Qu'est-ce que programmer ?",
    description: 'Comprendre ce que signifie vraiment coder.',
    icon: '💻',
  },
  {
    id: 2,
    slug: 'ordinateur',
    title: 'Comment fonctionne un ordinateur ?',
    description: 'Ce qui se passe vraiment dans la machine.',
    icon: '🖥️',
  },
  {
    id: 3,
    slug: 'web',
    title: 'Comprendre le web',
    description: 'Navigateur, serveur, requêtes HTTP.',
    icon: '🌐',
  },
  {
    id: 4,
    slug: 'frontend-backend',
    title: 'Frontend vs Backend',
    description: 'Les deux faces du développement.',
    icon: '⚡',
  },
  {
    id: 5,
    slug: 'javascript',
    title: 'Le rôle de JavaScript',
    description: 'Le langage du web expliqué.',
    icon: '📜',
  },
  {
    id: 6,
    slug: 'backend',
    title: 'Les bases du backend',
    description: 'Serveurs, APIs et bases de données.',
    icon: '⚙️',
  },
  {
    id: 7,
    slug: 'mobile',
    title: 'Le développement mobile',
    description: 'Créer des apps pour iOS et Android.',
    icon: '📱',
  },
  {
    id: 8,
    slug: 'metier',
    title: 'Le métier de développeur',
    description: 'Carrière, salaires et réalité du terrain.',
    icon: '🧭',
  },
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find(c => c.slug === slug);
}

export function getAdjacentChapters(currentSlug: string) {
  const currentIndex = chapters.findIndex(c => c.slug === currentSlug);
  return {
    current: chapters[currentIndex],
    prev: currentIndex > 0 ? chapters[currentIndex - 1] : null,
    next: currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null,
    currentIndex,
    total: chapters.length,
  };
}
