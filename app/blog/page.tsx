import { getAllArticles } from '@/lib/articles';
import BlogClient from '@/components/BlogClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles — Apprendre le développement web et mobile',
  description: 'Plus de 30 articles gratuits pour apprendre à coder : développement web, mobile, JavaScript, Python. Explications simples, sans jargon, pour débutants.',
};

export default async function BlogPage() {
  const articles = await getAllArticles();

  return <BlogClient articles={articles} />;
}