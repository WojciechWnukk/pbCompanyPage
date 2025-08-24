import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST!,
  port: Number(process.env.SMTP_PORT || 587),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
})

export async function sendMail(opts: { subject: string; html: string; replyTo?: string }) {
  const from = process.env.CONTACT_FROM || process.env.SMTP_USER!
  const to = process.env.CONTACT_TO || process.env.SMTP_USER!
  await transporter.sendMail({ from, to, subject: opts.subject, html: opts.html, replyTo: opts.replyTo })
}
