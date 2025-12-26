import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conditions Générales d\'Utilisation',
  description: 'Conditions générales d\'utilisation du site Lscript.fr - Règles d\'utilisation, propriété intellectuelle et responsabilités.',
};

export default function CGUPage() {
  return (
    <div className="page-content" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-24)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ marginBottom: 'var(--space-8)' }}>
          Conditions Générales d'Utilisation
        </h1>

        <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-12)' }}>
          Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div className="legal-content" style={{ lineHeight: '1.8' }}>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
              1. Objet
            </h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités
              et conditions d'utilisation du site <strong>Lscript.fr</strong> (ci-après « le Site »),
              ainsi que les droits et obligations des utilisateurs.
            </p>
            <p>
              L'utilisation du Site implique l'acceptation pleine et entière des présentes CGU.
              Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le Site.
            </p>
          </section>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
              2. Accès au site
            </h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Le Site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet.
              Tous les frais liés à l'accès au Site (matériel informatique, logiciels, connexion Internet, etc.)
              sont à la charge exclusive de l'utilisateur.
            </p>
            <p>
              Lscript.fr met en œuvre tous les moyens raisonnables pour assurer un accès de qualité au Site,
              mais n'est tenu à aucune obligation d'y parvenir. Lscript.fr se réserve le droit d'interrompre,
              suspendre momentanément ou modifier sans préavis l'accès à tout ou partie du Site.
            </p>
          </section>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
              3. Contenu du site
            </h2>

            <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
              3.1. Propriété intellectuelle
            </h3>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              L'ensemble des contenus présents sur le Site (textes, articles, tutoriels, images, graphismes,
              logos, code source, etc.) est la propriété exclusive de Lscript.fr ou de ses partenaires,
              sauf mention contraire.
            </p>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie
              des éléments du Site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf
              autorisation écrite préalable de Lscript.fr.
            </p>

            <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
              3.2. Usage personnel
            </h3>
            <p>
              Le contenu pédagogique du Site est destiné à un usage strictement personnel et non commercial.
              Les utilisateurs sont autorisés à :
            </p>
            <ul style={{ marginLeft: 'var(--space-6)', marginTop: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
              <li>Consulter les articles et tutoriels</li>
              <li>Utiliser les exemples de code fournis dans un cadre d'apprentissage</li>
              <li>Partager les liens vers les articles du Site</li>
            </ul>
            <p>
              Les utilisateurs ne sont <strong>pas autorisés</strong> à :
            </p>
            <ul style={{ marginLeft: 'var(--space-6)', marginTop: 'var(--space-3)' }}>
              <li>Copier, reproduire ou redistribuer le contenu sans autorisation</li>
              <li>Utiliser le contenu à des fins commerciales</li>
              <li>Modifier, adapter ou créer des œuvres dérivées sans autorisation</li>
            </ul>
          </section>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
              4. Utilisation du site
            </h2>

            <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
              4.1. Engagements de l'utilisateur
            </h3>
            <p>
              L'utilisateur s'engage à utiliser le Site de manière loyale et conforme à sa destination.
              Il s'interdit notamment de :
            </p>
            <ul style={{ marginLeft: 'var(--space-6)', marginTop: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
              <li>Porter atteinte aux droits de propriété intellectuelle de Lscript.fr</li>
              <li>Diffuser des contenus illicites, diffamatoires ou contraires aux bonnes mœurs</li>
              <li>Tenter d'accéder de manière frauduleuse au système informatique du Site</li>
              <li>Utiliser le Site pour du spam ou de l'hameçonnage</li>
              <li>Perturber le bon fonctionnement du Site</li>
            </ul>

            <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
              4.2. Newsletter
            </h3>
            <p>
              En vous inscrivant à la newsletter, vous acceptez de recevoir des emails de Lscript.fr
              concernant les nouveaux articles et contenus pédagogiques. Vous pouvez vous désinscrire
              à tout moment via le lien présent dans chaque email.
            </p>
          </section>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
              5. Responsabilités
            </h2>

            <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
              5.1. Contenu pédagogique
            </h3>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Lscript.fr s'efforce de fournir des informations précises et à jour sur le développement web
              et mobile. Toutefois, Lscript.fr ne garantit pas l'exactitude, la complétude ou l'actualité
              des informations diffusées sur le Site.
            </p>
            <p>
              L'utilisation des informations et contenus du Site se fait sous la seule responsabilité de l'utilisateur.
              Lscript.fr ne pourra être tenu responsable des dommages directs ou indirects résultant de
              l'utilisation du Site ou de ses contenus.
            </p>

            <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
              5.2. Liens externes
            </h3>
            <p>
              Le Site peut contenir des liens vers des sites tiers. Lscript.fr n'exerce aucun contrôle
              sur ces sites et décline toute responsabilité quant à leur contenu, leur disponibilité
              ou leurs conditions d'utilisation.
            </p>
          </section>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
              6. Publicité
            </h2>
            <p>
              Le Site peut afficher des annonces publicitaires via Google AdSense ou d'autres régies publicitaires.
              Ces publicités peuvent utiliser des cookies pour personnaliser le contenu affiché.
              Consultez notre <Link href="/confidentialite" style={{ color: 'var(--color-accent)' }}>
              Politique de Confidentialité</Link> pour plus d'informations.
            </p>
          </section>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
              7. Données personnelles
            </h2>
            <p>
              Les informations personnelles collectées sur le Site (email pour la newsletter, formulaire de contact)
              sont traitées conformément au RGPD. Pour plus d'informations, consultez notre{' '}
              <Link href="/confidentialite" style={{ color: 'var(--color-accent)' }}>
                Politique de Confidentialité
              </Link>.
            </p>
          </section>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
              8. Modification des CGU
            </h2>
            <p>
              Lscript.fr se réserve le droit de modifier les présentes CGU à tout moment.
              Les modifications entrent en vigueur dès leur mise en ligne. Il est conseillé de consulter
              régulièrement cette page pour prendre connaissance des éventuelles modifications.
            </p>
          </section>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
              9. Droit applicable et juridiction
            </h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Les présentes CGU sont régies par le droit français. En cas de litige et à défaut
              d'accord amiable, le litige sera porté devant les tribunaux français compétents.
            </p>
          </section>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
              10. Contact
            </h2>
            <p>
              Pour toute question concernant les présentes CGU, vous pouvez nous contacter à l'adresse :{' '}
              <a href="mailto:contact@lscript.fr" style={{ color: 'var(--color-accent)' }}>
                contact@lscript.fr
              </a>
            </p>
          </section>

          <div style={{
            marginTop: 'var(--space-16)',
            padding: 'var(--space-6)',
            background: 'var(--color-accent-subtle)',
            borderLeft: '4px solid var(--color-accent)',
            borderRadius: 'var(--radius-lg)'
          }}>
            <p style={{ margin: 0, fontSize: 'var(--text-sm)' }}>
              📄 <strong>Documents légaux connexes :</strong>
            </p>
            <ul style={{ marginTop: 'var(--space-3)', marginBottom: 0, paddingLeft: 'var(--space-6)' }}>
              <li>
                <Link href="/mentions-legales" style={{ color: 'var(--color-accent)' }}>
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" style={{ color: 'var(--color-accent)' }}>
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
