import { NextResponse } from 'next/server';

// Email templates for drip campaign
const emailTemplates = {
  welcome: {
    subject: '🎉 Bienvenue sur Lscript !',
    html: (email: string) => `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #ffffff;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #ea580c; font-size: 32px; margin: 0;">Lscript</h1>
          <p style="color: #888; margin: 5px 0 0;">Apprendre à coder, simplement</p>
        </div>
        
        <h2 style="color: #1a1a1a; font-size: 24px; margin-bottom: 20px;">
          Bienvenue ! 🚀
        </h2>
        
        <p style="color: #555; font-size: 16px; line-height: 1.7;">
          Merci de t'être inscrit(e) à la newsletter Lscript !
        </p>
        
        <p style="color: #555; font-size: 16px; line-height: 1.7;">
          Tu recevras nos nouveaux articles directement dans ta boîte mail.
          On publie du contenu pour apprendre le développement web et mobile, 
          sans jargon, adapté aux débutants.
        </p>

        <div style="background: #f8f9fa; border-radius: 12px; padding: 20px; margin: 30px 0;">
          <h3 style="color: #1a1a1a; font-size: 18px; margin: 0 0 15px;">
            Par où commencer ?
          </h3>
          <ul style="margin: 0; padding-left: 20px; color: #555; line-height: 1.8;">
            <li><a href="https://lscript.fr/blog/cest-quoi-programmer" style="color: #ea580c;">C'est quoi programmer ?</a></li>
            <li><a href="https://lscript.fr/guide" style="color: #ea580c;">Le guide complet pour débutants</a></li>
            <li><a href="https://lscript.fr/visualisations" style="color: #ea580c;">Visualisations interactives</a></li>
          </ul>
        </div>
        
        <a href="https://lscript.fr/guide" 
           style="display: inline-block; padding: 14px 28px; 
                  background: #ea580c; color: white; text-decoration: none; 
                  border-radius: 8px; font-weight: 600; font-size: 16px;">
          Commencer le guide →
        </a>
        
        <p style="color: #888; font-size: 14px; margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px;">
          À bientôt !<br/>
          L'équipe Lscript
        </p>
      </div>
    `,
  },

  day3: {
    subject: '📚 3 articles pour bien débuter en programmation',
    html: (email: string) => `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #ffffff;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #ea580c; font-size: 32px; margin: 0;">Lscript</h1>
        </div>
        
        <h2 style="color: #1a1a1a; font-size: 24px; margin-bottom: 20px;">
          Tu as commencé à apprendre ? 🎯
        </h2>
        
        <p style="color: #555; font-size: 16px; line-height: 1.7;">
          Salut ! C'est Lscript. Tu t'es inscrit(e) il y a quelques jours.
        </p>
        
        <p style="color: #555; font-size: 16px; line-height: 1.7;">
          Voici <strong>3 articles essentiels</strong> pour bien démarrer :
        </p>

        <div style="margin: 30px 0;">
          <div style="background: #f8f9fa; border-radius: 12px; padding: 20px; margin-bottom: 15px; border-left: 4px solid #ea580c;">
            <h3 style="color: #1a1a1a; font-size: 18px; margin: 0 0 8px;">
              <a href="https://lscript.fr/blog/comment-apprendre-a-coder-2025" style="color: #1a1a1a; text-decoration: none;">
                1. Comment apprendre à coder en 2025
              </a>
            </h3>
            <p style="color: #666; margin: 0; font-size: 14px;">
              Le guide complet pour organiser ton apprentissage
            </p>
          </div>

          <div style="background: #f8f9fa; border-radius: 12px; padding: 20px; margin-bottom: 15px; border-left: 4px solid #2563eb;">
            <h3 style="color: #1a1a1a; font-size: 18px; margin: 0 0 8px;">
              <a href="https://lscript.fr/blog/quel-langage-programmation-choisir-guide-2025" style="color: #1a1a1a; text-decoration: none;">
                2. Quel langage choisir ?
              </a>
            </h3>
            <p style="color: #666; margin: 0; font-size: 14px;">
              Python, JavaScript, Java... On t'aide à choisir
            </p>
          </div>

          <div style="background: #f8f9fa; border-radius: 12px; padding: 20px; border-left: 4px solid #16a34a;">
            <h3 style="color: #1a1a1a; font-size: 18px; margin: 0 0 8px;">
              <a href="https://lscript.fr/blog/creer-premier-site-web-tutoriel" style="color: #1a1a1a; text-decoration: none;">
                3. Créer ton premier site web
              </a>
            </h3>
            <p style="color: #666; margin: 0; font-size: 14px;">
              Tuto pas à pas, de A à Z
            </p>
          </div>
        </div>
        
        <p style="color: #555; font-size: 16px; line-height: 1.7;">
          <strong>Conseil :</strong> Lis un article par jour, et pratique 20 minutes après chaque lecture. 
          C'est la clé pour vraiment progresser ! 💪
        </p>
        
        <a href="https://lscript.fr/blog" 
           style="display: inline-block; padding: 14px 28px; 
                  background: #ea580c; color: white; text-decoration: none; 
                  border-radius: 8px; font-weight: 600; font-size: 16px; margin-top: 20px;">
          Voir tous les articles →
        </a>
        
        <p style="color: #888; font-size: 14px; margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px;">
          Bon courage !<br/>
          L'équipe Lscript
        </p>
        
        <p style="color: #aaa; font-size: 12px; margin-top: 20px;">
          Tu ne veux plus recevoir ces emails ? <a href="https://lscript.fr" style="color: #aaa;">Se désinscrire</a>
        </p>
      </div>
    `,
  },

  day7: {
    subject: '🚀 Tu as fait des progrès cette semaine ?',
    html: (email: string) => `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #ffffff;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #ea580c; font-size: 32px; margin: 0;">Lscript</h1>
        </div>
        
        <h2 style="color: #1a1a1a; font-size: 24px; margin-bottom: 20px;">
          1 semaine déjà ! 🎉
        </h2>
        
        <p style="color: #555; font-size: 16px; line-height: 1.7;">
          Ça fait une semaine que tu as rejoint Lscript. Comment ça se passe ?
        </p>
        
        <p style="color: #555; font-size: 16px; line-height: 1.7;">
          Si tu as commencé à apprendre, <strong>bravo</strong> ! Le plus dur, c'est de se lancer.
        </p>
        
        <p style="color: #555; font-size: 16px; line-height: 1.7;">
          Si tu n'as pas encore commencé, pas de stress. Voici un plan simple :
        </p>

        <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 12px; padding: 25px; margin: 30px 0;">
          <h3 style="color: #92400e; font-size: 18px; margin: 0 0 15px;">
            🗓️ Plan de la semaine prochaine
          </h3>
          <ol style="margin: 0; padding-left: 20px; color: #78350f; line-height: 2;">
            <li><strong>Lundi</strong> : Lis "C'est quoi le code ?"</li>
            <li><strong>Mercredi</strong> : Essaie la visualisation "Comment fonctionne le web"</li>
            <li><strong>Vendredi</strong> : Crée ta première page HTML (20 min)</li>
          </ol>
        </div>
        
        <p style="color: #555; font-size: 16px; line-height: 1.7;">
          <strong>Rappel :</strong> 20 minutes par jour, c'est suffisant pour progresser. 
          Pas besoin de plus au début.
        </p>
        
        <a href="https://lscript.fr/visualisations" 
           style="display: inline-block; padding: 14px 28px; 
                  background: #ea580c; color: white; text-decoration: none; 
                  border-radius: 8px; font-weight: 600; font-size: 16px; margin-top: 20px;">
          Voir les visualisations →
        </a>
        
        <p style="color: #888; font-size: 14px; margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px;">
          À bientôt !<br/>
          L'équipe Lscript
        </p>
      </div>
    `,
  },
};

// Helper function to send email via Resend
async function sendEmail(to: string, template: keyof typeof emailTemplates) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log(`[DEV] Would send ${template} email to ${to}`);
    return { success: true, dev: true };
  }

  const emailTemplate = emailTemplates[template];
  
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Lscript <newsletter@lscript.fr>',
      to: [to],
      subject: emailTemplate.subject,
      html: emailTemplate.html(to),
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(JSON.stringify(error));
  }

  return { success: true };
}

// This endpoint can be called by a cron job to send drip emails
// In production, you'd store subscriber data with signup dates in a database
export async function GET(request: Request) {
  return NextResponse.json({ 
    message: 'Drip campaign templates ready',
    templates: Object.keys(emailTemplates),
    usage: 'POST /api/drip with { email, template } to send a specific email'
  });
}

export async function POST(request: Request) {
  try {
    const { email, template } = await request.json();

    if (!email || !template) {
      return NextResponse.json(
        { error: 'Email and template required' },
        { status: 400 }
      );
    }

    if (!emailTemplates[template as keyof typeof emailTemplates]) {
      return NextResponse.json(
        { error: 'Invalid template', available: Object.keys(emailTemplates) },
        { status: 400 }
      );
    }

    await sendEmail(email, template as keyof typeof emailTemplates);

    return NextResponse.json({ 
      success: true, 
      message: `${template} email sent to ${email}` 
    });

  } catch (error) {
    console.error('Drip email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
