'use server'

import { sendMail } from '../lib/mail'

const esc = (s: string) => s.replace(/[<>&'"]/g, c => ({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&#39;','"':'&quot;'}[c]!))

export async function sendContact(prevState: any, formData: FormData) {
  if (String(formData.get('website') || '').trim()) return { ok: true }

  const name = String(formData.get('name') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const message = String(formData.get('message') || '').trim()

  const errors: Record<string, string> = {}
  if (name.length < 2) errors.name = 'Podaj imię i nazwisko.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Podaj poprawny e-mail.'
  if (message.length < 10) errors.message = 'Wiadomość jest za krótka.'

  if (Object.keys(errors).length) return { ok: false, errors }

  const html = `
    <h2>Nowe zapytanie ze strony PB PROJEKT</h2>
    <p><strong>Imię i nazwisko:</strong> ${esc(name)}</p>
    <p><strong>E-mail:</strong> ${esc(email)}</p>
    <p><strong>Wiadomość:</strong></p>
    <p>${esc(message).replace(/\n/g, '<br/>')}</p>
  `

  try {
    await sendMail({ subject: `Zapytanie – ${name}`, html, replyTo: email })
    return { ok: true }
  } catch (e) {
    console.error(e)
    return { ok: false, errors: { _form: 'Nie udało się wysłać wiadomości. Spróbuj ponownie.' } }
  }
}
