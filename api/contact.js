/**
 * Vercel Serverless Function — POST /api/contact
 * Receives form data and sends an email via Resend.
 *
 * Environment variable required (set in Vercel dashboard):
 *   RESEND_API_KEY  — your Resend API key (re_xxxxxxxxxx)
 *
 * IMPORTANT — Resend sender address:
 *   • Free plan / no verified domain → use "onboarding@resend.dev"
 *     (delivers only to the email registered in your Resend account for testing)
 *   • Production → verify systemis.site in Resend and change FROM_ADDRESS below
 *     to something like "contacto@systemis.site"
 */

const { Resend } = require('resend');

const TO_ADDRESS   = 'systemis.ia@gmail.com';
const FROM_ADDRESS = 'Systemis AI <onboarding@resend.dev>'; // ← update to e.g. contacto@systemis.site after Resend domain verification

module.exports = async function handler(req, res) {
  /* Only allow POST */
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, role, email, phone, company, message } = req.body || {};

  /* Server-side validation */
  if (!name || !role || !email || !phone || !company || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from:    FROM_ADDRESS,
    to:      [TO_ADDRESS],
    replyTo: email,
    subject: `[Systemis] Nuevo contacto: ${name} — ${company}`,
    html: `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#0F172A;color:#E5E7EB;padding:32px;border-radius:16px;border:1px solid rgba(255,255,255,0.08);">
        <h2 style="color:#60a5fa;margin-top:0;">Nuevo mensaje de contacto</h2>

        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:10px 0;color:#9CA3AF;width:140px;">Nombre</td>   <td style="padding:10px 0;color:#F9FAFB;font-weight:500;">${escHtml(name)}</td></tr>
          <tr><td style="padding:10px 0;color:#9CA3AF;">Cargo</td>       <td style="padding:10px 0;color:#F9FAFB;">${escHtml(role)}</td></tr>
          <tr><td style="padding:10px 0;color:#9CA3AF;">Email</td>       <td style="padding:10px 0;"><a href="mailto:${escHtml(email)}" style="color:#60a5fa;">${escHtml(email)}</a></td></tr>
          <tr><td style="padding:10px 0;color:#9CA3AF;">Teléfono</td>    <td style="padding:10px 0;color:#F9FAFB;">${escHtml(phone)}</td></tr>
          <tr><td style="padding:10px 0;color:#9CA3AF;">Empresa</td>     <td style="padding:10px 0;color:#F9FAFB;">${escHtml(company)}</td></tr>
        </table>

        <div style="margin-top:20px;padding:16px;background:rgba(255,255,255,0.04);border-radius:10px;border:1px solid rgba(255,255,255,0.07);">
          <p style="margin:0 0 8px;color:#9CA3AF;font-size:13px;text-transform:uppercase;letter-spacing:.06em;">Mensaje</p>
          <p style="margin:0;color:#F9FAFB;white-space:pre-wrap;">${escHtml(message)}</p>
        </div>

        <p style="margin-top:24px;font-size:12px;color:#4B5563;">
          Enviado desde el formulario de contacto de systemisAI.
        </p>
      </div>
    `,
  });

  if (error) {
    console.error('[contact] Resend error:', JSON.stringify(error));
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }

  console.log('[contact] Email sent, id:', data.id);
  return res.status(200).json({ ok: true, id: data.id });
};

/** Basic HTML entity escaping to prevent injection in the email body */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
