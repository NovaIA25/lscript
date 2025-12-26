'use client';

import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function FloatingTOC() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Get all H2 and H3 headings from article content
    const article = document.querySelector('.article-content');
    if (!article) return;

    const elements = article.querySelectorAll('h2, h3');
    const items: Heading[] = [];

    elements.forEach((el, index) => {
      const id = el.id || `heading-${index}`;
      if (!el.id) el.id = id;
      
      items.push({
        id,
        text: el.textContent || '',
        level: el.tagName === 'H2' ? 2 : 3,
      });
    });

    setHeadings(items);

    // Intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="floating-toc">
      <div className="floating-toc-title">Dans ce chapitre</div>
      <ul className="floating-toc-list">
        {headings.map((heading) => (
          <li 
            key={heading.id}
            className={`floating-toc-item ${heading.level === 3 ? 'floating-toc-sub' : ''}`}
          >
            <a 
              href={`#${heading.id}`}
              className={activeId === heading.id ? 'active' : ''}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
