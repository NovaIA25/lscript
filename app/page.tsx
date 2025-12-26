import Link from 'next/link';
import StructuredData, { createFAQSchema, createWebsiteSchema } from '@/components/StructuredData';

const faqs = [
  {
    question: "C'est quoi coder ?",
    answer: "Coder, c'est écrire des instructions dans un langage que l'ordinateur comprend pour lui dire quoi faire. C'est comme donner une recette de cuisine très précise à une machine."
  },
  {
    question: "Par où commencer pour apprendre à coder ?",
    answer: "Commencez par comprendre les bases : qu'est-ce qu'un langage de programmation, comment fonctionne un site web. Ensuite, choisissez un premier langage simple comme Python ou JavaScript et pratiquez avec des petits projets."
  },
  {
    question: "Combien de temps faut-il pour apprendre à coder ?",
    answer: "Les bases peuvent être acquises en quelques semaines à 3 mois. Pour devenir autonome sur des projets réels, comptez 6 mois à 1 an de pratique régulière. L'apprentissage est continu tout au long de la carrière."
  },
  {
    question: "Quel langage de programmation choisir pour débuter ?",
    answer: "Python est idéal pour les débutants grâce à sa syntaxe simple et lisible. JavaScript est parfait si vous voulez créer des sites web. Les deux sont très demandés sur le marché du travail."
  },
  {
    question: "Faut-il être bon en maths pour coder ?",
    answer: "Non, pas pour la plupart des développements web et mobile. Les maths de base suffisent. La logique et la capacité à résoudre des problèmes sont plus importantes que les mathématiques avancées."
  },
  {
    question: "Peut-on apprendre à coder gratuitement ?",
    answer: "Oui, absolument ! Lscript.fr propose des articles 100% gratuits pour apprendre le développement. Il existe aussi des ressources comme freeCodeCamp, MDN, et de nombreux tutoriels en ligne gratuits."
  }
];

export default async function HomePage() {

  return (
    <>
      {/* Schema.org Structured Data */}
      <StructuredData data={createWebsiteSchema()} />
      <StructuredData data={createFAQSchema(faqs)} />

      {/* Hero Section - Apple Premium */}
      <section className="hero-premium hero-accent" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="hero-premium-content">
            <h1 className="hero-premium-title">
              Apprendre à coder.
              <br />
              Simplement.
            </h1>

            <div className="section-separator" />

            <p className="hero-premium-subtitle">
              Des explications claires pour les débutants.
              <br />
              Sans jargon. Sans prérequis. Gratuit.
            </p>

            <div className="hero-premium-cta">
              <Link href="/commencer" className="btn-premium">
                Commencer maintenant
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Premium Section — Apple-style */}
      <section className="section-premium-strata">
        <div className="container">
          <div className="section-premium-header">
            <h2>Commence par les bases</h2>
            <p>Trois articles essentiels pour débuter sereinement.</p>
          </div>

          <div className="cards-premium-grid">
            <Link href="/blog/cest-quoi-programmer" className="card-premium">
              <h3>C'est quoi programmer ?</h3>
              <p>Comprends ce que fait vraiment un développeur et pourquoi tu peux y arriver.</p>
            </Link>

            <Link href="/blog/apprendre-coder-sans-diplome" className="card-premium">
              <h3>Apprendre sans diplôme</h3>
              <p>Pas de diplôme en informatique ? Pas de problème. Voici la réalité.</p>
            </Link>

            <Link href="/blog/cest-quoi-le-code" className="card-premium">
              <h3>C'est quoi le code ?</h3>
              <p>Une explication simple, sans jargon technique. Comme une recette de cuisine.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA — Apple-style */}
      <section className="section-premium-cta">
        <div className="container">
          <div className="cta-premium-content">
            <h2>Prêt à commencer ?</h2>
            <p>Explore tous les articles et apprends à ton rythme.</p>
            <Link href="/blog" className="btn-premium">
              Voir tous les articles
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section — Simplified */}
      <section className="section-premium-faq">
        <div className="container">
          <div className="section-premium-header">
            <h2>Questions fréquentes</h2>
          </div>
          <div className="faq-premium-container">
            {faqs.map((faq, index) => (
              <details key={index} className="faq-premium-item">
                <summary className="faq-premium-question">
                  {faq.question}
                  <span style={{ marginLeft: 'var(--space-2)' }}>+</span>
                </summary>
                <div style={{
                  padding: '0 var(--space-4) var(--space-4)',
                  color: 'var(--color-text-muted)',
                  lineHeight: 'var(--leading-relaxed)'
                }}>
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <h2>Prêt à commencer ?</h2>
          <p>
            Explore les articles et apprends le développement à ton rythme.
          </p>
          <Link href="/blog" className="btn btn-primary">
            Découvrir les articles →
          </Link>
        </div>
      </section>
    </>
  );
}

