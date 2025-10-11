'use client'

import { useActionState, useEffect, useRef } from 'react'
import { sendContact } from '@/app/actions/contact'

type State = { ok: boolean; errors?: Record<string, string> }
const initial: State = { ok: false, errors: {} }

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.ok) formRef.current?.reset()
  }, [state.ok])

  return (
    <form ref={formRef} action={action} className="card p-6 md:p-8" noValidate>
      <h3 className="font-semibold text-lg">Formularz kontaktowy</h3>

      <div className="mt-4 grid gap-4">
        {/* honeypot (anty-spam) */}
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

        <div>
          <input name="name" required placeholder="Imię i nazwisko"
                 className="border rounded-xl px-4 py-3 w-full" />
          {state.errors?.name && <p className="text-sm text-red-600 mt-1">{state.errors.name}</p>}
        </div>

        <div>
          <input name="email" required type="email" placeholder="E-mail"
                 className="border rounded-xl px-4 py-3 w-full" />
          {state.errors?.email && <p className="text-sm text-red-600 mt-1">{state.errors.email}</p>}
        </div>

        <div>
          <textarea name="message" required placeholder="Wiadomość"
                    className="border rounded-xl px-4 py-3 min-h-[120px] w-full" />
          {state.errors?.message && <p className="text-sm text-red-600 mt-1">{state.errors.message}</p>}
        </div>
      </div>

      {state.errors?._form && (
        <p className="p text-sm mt-3 text-red-600">{state.errors._form}</p>
      )}
      {state.ok && (
        <div className="mt-3 rounded-xl bg-green-50 text-green-800 px-4 py-3">
          Dziękujemy! Odezwiemy się wkrótce.
        </div>
      )}

      <button className="btn btn-primary mt-4" type="submit" disabled={pending}>
        {pending ? 'Wysyłanie…' : 'Wyślij'}
      </button>

      <p className="p text-sm mt-3">
        Wysyłając formularz wyrażasz zgodę na kontakt w sprawie zapytania.
      </p>
    </form>
  )
}
