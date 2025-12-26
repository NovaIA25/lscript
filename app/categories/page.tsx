import Link from 'next/link';
import { getAllCategories } from '@/lib/articles';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catégories',
  description: 'Explore les différentes catégories d\'articles : bases, web, mobile, JavaScript et carrière.',
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div className="page-content">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'left', marginBottom: '3rem' }}>
          <h1>Catégories</h1>
          <p style={{ maxWidth: '600px' }}>
            Choisis un domaine qui t'intéresse et découvre les articles associés.
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
