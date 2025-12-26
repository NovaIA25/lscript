import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  content?: string;
}

export async function getAllArticles(): Promise<Article[]> {
  // Create directory if it doesn't exist
  if (!fs.existsSync(articlesDirectory)) {
    fs.mkdirSync(articlesDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  
  const articles = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Sans titre',
        excerpt: data.excerpt || '',
        category: data.category || 'bases',
        date: data.date || new Date().toISOString(),
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return articles;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark()
    .use(html)
    .process(content);
  
  return {
    slug,
    title: data.title || 'Sans titre',
    excerpt: data.excerpt || '',
    category: data.category || 'bases',
    date: data.date || new Date().toISOString(),
    content: processedContent.toString(),
  };
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
  const articles = await getAllArticles();
  return articles.filter((article) => article.category === category);
}

export function getAllCategories() {
  return [
    { 
      slug: 'bases', 
      name: 'Bases', 
      icon: '🧱', 
      description: 'Les fondamentaux que tout développeur doit connaître.',
      objectif: 'Je comprends ce que je fais.'
    },
    { 
      slug: 'web', 
      name: 'Web', 
      icon: '🌐', 
      description: 'Tout pour créer des sites internet avec HTML, CSS et JavaScript.',
      objectif: 'Je comprends comment un site fonctionne.'
    },
    { 
      slug: 'mobile', 
      name: 'Mobile', 
      icon: '📱', 
      description: 'Créer des applications pour iPhone et Android.',
      objectif: 'Je sais quelles options existent.'
    },
    { 
      slug: 'backend', 
      name: 'Backend', 
      icon: '⚙️', 
      description: 'Serveurs, APIs et bases de données.',
      objectif: 'Je comprends l\'envers du décor.'
    },
    { 
      slug: 'javascript', 
      name: 'JavaScript', 
      icon: '⚡', 
      description: 'Maîtriser le langage le plus utilisé du web.',
      objectif: 'Je maîtrise les bases du langage.'
    },
    { 
      slug: 'carriere', 
      name: 'Carrière', 
      icon: '🧭', 
      description: 'Orientation, métiers et conseils pour devenir développeur.',
      objectif: 'Je sais où je vais.'
    },
  ];
}
