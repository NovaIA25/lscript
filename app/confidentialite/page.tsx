import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
};

export default function ConfidentialitePage() {
  return (
    <div className="page-content">
      <div className="container">
        <div style={{ maxWidth: '700px' }} className="article-content">
          <h1>Politique de confidentialité</h1>
          
          <h2>Collecte des données</h2>
          <p>
            Lscript.fr collecte uniquement les données que vous nous transmettez 
            volontairement via le formulaire de contact (prénom, email, message).
          </p>

          <h2>Utilisation des données</h2>
          <p>
            Vos données sont utilisées uniquement pour répondre à vos messages.
            Elles ne sont jamais vendues ni partagées avec des tiers.
          </p>

          <h2>Cookies et Publicité</h2>
          <p>
            Ce site utilise des cookies techniques essentiels au fonctionnement.
          </p>
          <p>
            Nous utilisons également Google AdSense pour diffuser des publicités. Google utilise des cookies pour diffuser des annonces basées sur vos visites antérieures sur ce site ou sur d'autres sites Web.
          </p>
          <p>
            Vous pouvez contrôler l'utilisation des cookies publicitaires dans vos paramètres Google ou en utilisant notre bandeau de consentement en bas de page.
          </p>

          <h2>Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification 
            et de suppression de vos données. Pour exercer ces droits, 
            contactez-nous à : contact@lscript.fr
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question relative à cette politique, 
            vous pouvez nous contacter à : contact@lscript.fr
          </p>
        </div>
      </div>
    </div>
  );
}
