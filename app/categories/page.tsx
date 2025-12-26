import Link from 'next/link';
import { getAllCategories } from '@/lib/articles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catégories — Développement Web, Mobile et Bases du Code',
  description: 'Explore toutes les catégories : bases de la programmation, développement web, applications mobiles, JavaScript et carrière. Articles gratuits pour débutants.',
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div className="page-content">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'left', marginBottom: '3rem' }}>
          <h1>Apprendre le développement par catégorie</h1>
          <p style={{ maxWidth: '600px' }}>
            Choisis un domaine qui t'intéresse : bases, web ou mobile. Chaque catégorie contient des articles progressifs pour débutants.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <Link 
              href={`/categories/${category.slug}`} 
              key={category.slug} 
              className="card category-card"
            >
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
