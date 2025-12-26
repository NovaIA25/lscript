import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
};

export default function MentionsLegalesPage() {
  return (
    <div className="page-content">
      <div className="container">
        <div style={{ maxWidth: '700px' }} className="article-content">
          <h1>Mentions légales</h1>
          
          <h2>Éditeur du site</h2>
          <p>
            Le site lscript.fr est édité par [Votre nom ou raison sociale].<br />
            Adresse : [Votre adresse]<br />
            Email : contact@lscript.fr
          </p>

          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc.<br />
            440 N Barranca Ave #4133, Covina, CA 91723, USA
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, images, code) 
            sont la propriété exclusive de lscript.fr, sauf mention contraire.
            Toute reproduction sans autorisation est interdite.
          </p>

          <h2>Responsabilité</h2>
          <p>
            Les informations fournies sur ce site sont données à titre indicatif.
            Lscript.fr ne saurait être tenu responsable des erreurs, omissions 
            ou résultats qui pourraient être obtenus par un mauvais usage de ces informations.
          </p>
        </div>
      </div>
    </div>
  );
}
