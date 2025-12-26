import { NextResponse } from 'next/server';

// Resend API integration for newsletter
// Get your API key at: https://resend.com/api-keys

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Check if Resend API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      // Still return success for now (dev mode)
      return NextResponse.json({ success: true, message: 'Email enregistré (dev mode)' });
    }

    // Send welcome email via Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Lscript <newsletter@lscript.fr>',
        to: [email],
        subject: '🎉 Bienvenue sur Lscript !',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <h1 style="color: #1a1a1a; font-size: 28px; margin-bottom: 20px;">
              Bienvenue sur Lscript ! 🚀
            </h1>
            <p style="color: #555; font-size: 16px; line-height: 1.6;">
              Merci de t'être inscrit(e) à la newsletter Lscript !
            </p>
            <p style="color: #555; font-size: 16px; line-height: 1.6;">
              Tu recevras nos nouveaux articles directement dans ta boîte mail.
              On publie du contenu pour apprendre le développement web et mobile, 
              sans jargon, adapté aux débutants.
            </p>
            <a href="https://lscript.fr/guide" 
               style="display: inline-block; margin-top: 20px; padding: 12px 24px; 
                      background: #ea580c; color: white; text-decoration: none; 
                      border-radius: 8px; font-weight: 600;">
              Commencer le guide →
            </a>
            <p style="color: #888; font-size: 14px; margin-top: 30px;">
              À bientôt !<br/>
              L'équipe Lscript
            </p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'inscription' },
        { status: 500 }
      );
    }

    // Log the subscription (you could also save to a database here)
    console.log(`New newsletter signup: ${email}`);

    return NextResponse.json({ 
      success: true, 
      message: 'Inscription réussie !' 
    });

  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
