interface StructuredDataProps {
  data: Record<string, any>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Helper functions pour générer les données structurées

export function createArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  authorName = 'Lscript',
  slug,
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lscript',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.lscript.fr/logo.png', // À adapter
      },
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.lscript.fr/blog/${slug}`,
    },
  };
}

export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createCourseSchema({
  name,
  description,
  provider = 'Lscript',
}: {
  name: string;
  description: string;
  provider?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: name,
    description: description,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
    educationalLevel: 'Débutant',
    inLanguage: 'fr-FR',
    isAccessibleForFree: true,
  };
}

export function createWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lscript',
    description: 'Apprendre le développement web et mobile simplement, sans jargon',
    url: 'https://www.lscript.fr',
    inLanguage: 'fr-FR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.lscript.fr/blog?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function createFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}