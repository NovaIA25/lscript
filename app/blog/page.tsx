import { getAllArticles } from '@/lib/articles';
import BlogClient from '@/components/BlogClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Tous les articles pour apprendre le développement web et mobile, expliqués simplement. Filtres par catégorie et recherche.',
};

export default async function BlogPage() {
  const articles = await getAllArticles();

  return <BlogClient articles={articles} />;
}