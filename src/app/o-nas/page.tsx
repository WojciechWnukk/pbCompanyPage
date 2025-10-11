import type { Metadata } from 'next'
import Script from 'next/script'
import { Reveal } from '@/app/ui/motion'
import Counter from '@/app/ui/counter'
import {
  Factory, Building2, Radio, Leaf,
  CheckCircle2, Users2, ClipboardList, Cog, Truck, Handshake
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'O nas – PB PROJEKT',
  description:
    'Od 2015 roku projektujemy rozwiązania dla energetyki, teletechniki, telekomunikacji i OZE. Doświadczeni projektanci i pełne wsparcie inwestora – od koncepcji po dokumentację.',
}

export default function AboutPage() {
  return (
    <main>
      <section className="subhero">
        <div className="wrap">
          <span className="kicker">Poznaj nas</span>
          <h1 className="h1 mt-2">O nas</h1>
          <p className="lead mt-3 max-w-3xl">
            Projektujemy niezawodne rozwiązania inżynierskie i prowadzimy inwestora przez cały proces – od pierwszego szkicu do finalnej dokumentacji.
          </p>
        </div>
      </section>

      <section className="section after-hero">
        <div className="wrap max-w-4xl">
          <Reveal trigger="mount">
            <h2 className="h2">
              Od 2015 roku projektujemy rozwiązania, które urzeczywistniają pomysły inwestorów.
            </h2>
          </Reveal>
          <Reveal trigger="mount" delay={0.05}>
            <p className="p mt-4">
              Nasze biuro projektowe powstało w 2015 roku, ale nasze doświadczenie w branży sięga ponad dekadę.
              Realizujemy projekty elektroenergetyczne, telekomunikacyjne, teletechniczne oraz związane z odnawialnymi źródłami energii.
              Zaufali nam inwestorzy, operatorzy sieci i przedsiębiorcy w całej Polsce — doceniając naszą rzetelność,
              terminowość i pełne wsparcie na każdym etapie inwestycji.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="wrap grid gap-6 md:grid-cols-4">
          <Reveal trigger="mount"><Stat n={<Counter value={10} suffix="+" />} t="lat doświadczenia" /></Reveal>
          <Reveal trigger="mount" delay={0.05}><Stat n={<Counter value={1000} suffix="+" />} t="zrealizowanych projektów" /></Reveal>
          <Reveal trigger="mount" delay={0.1}><Stat n="50+ MW" t="mocy w projektach OZE" /></Reveal>
          <Reveal trigger="mount" delay={0.15}><Stat n="4" t="kluczowe obszary: elektroenergetyka, telekomunikacja, teletechnika, OZE" /></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid md:grid-cols-2 gap-10">
          <Reveal trigger="mount">
            <div>
              <h2 className="h2">Zakres realizacji</h2>
              <ul className="list-icon mt-4">
                <li><Factory /> Obiekty kubaturowe: przemysłowe, magazynowe, biurowe</li>
                <li><Building2 /> Sieci energetyczne dla operatorów sieci dystrybucyjnych (OSD)</li>
                <li><Radio /> Sieci i instalacje telekomunikacyjne dla przedsiębiorców telekomunikacyjnych</li>
                <li><Leaf /> Farmy fotowoltaiczne i wiatrowe</li>
              </ul>
            </div>
          </Reveal>

          <Reveal trigger="mount" delay={0.05}>
            <aside className="card p-6 md:p-8">
              <h2 className="h2 mb-2">Oferujemy pełny zakres usług projektowych</h2>
              <p className="p">
                Obsługujemy cały proces inwestycyjny – od pierwszego szkicu po gotową dokumentację.
              </p>
              <ul className="list-icon mt-4">
                <li><CheckCircle2 /> Opracowanie koncepcji i studiów wykonalności</li>
                <li><CheckCircle2 /> Projekty budowlane, wykonawcze i techniczne</li>
                <li><CheckCircle2 /> Specyfikacje Techniczne Wykonania i Odbioru Robót (STWiOR)</li>
                <li><CheckCircle2 /> Kosztorysy inwestorskie</li>
                <li><CheckCircle2 /> Instrukcje współpracy ruchowej</li>
                <li><CheckCircle2 /> Instrukcje eksploatacji instalacji i urządzeń</li>
              </ul>
              <a href="/kontakt" className="btn btn-primary mt-6 w-fit">Skontaktuj się z nami</a>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="wrap">
          <h3 className="h2">Siła naszej firmy tkwi w ludziach, którzy ją tworzą</h3>
          <p className="p mt-3 max-w-4xl">
            Nasz zespół tworzą specjaliści najwyższej klasy – doświadczeni projektanci z uprawnieniami budowlanymi,
            którzy odpowiadają za opracowanie kompleksowej dokumentacji technicznej. To właśnie ich wiedza i doświadczenie
            stanowią fundament naszej działalności.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <TeamCard icon={<Users2 />} title="Projektanci" text="Uprawnienia budowlane, kierowanie opracowaniami, odpowiedzialność merytoryczna." />
            <TeamCard icon={<ClipboardList />} title="Asystenci" text="Wsparcie koncepcji, opracowania techniczne, kompletowanie materiałów." />
            <TeamCard icon={<Cog />} title="Back-office" text="Obieg dokumentów, formalności, administracja projektu." />
            <TeamCard icon={<Truck />} title="Logistyka i teren" text="Kierowcy, logistycy i negocjatorzy – kontakt z właścicielami nieruchomości, sprawy bieżące." />
          </div>

          <p className="p mt-6 max-w-4xl">
            Dzięki tak zorganizowanej strukturze każda inwestycja jest prowadzona sprawnie, terminowo i z dbałością o każdy szczegół – od pierwszego kontaktu z inwestorem po finalną dokumentację.
          </p>

          <div className="card p-6 md:p-8 mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold text-lg">Zleć nam projekt i zyskaj pewność, że Twoja inwestycja będzie dopracowana w każdym detalu.</h3>
              <p className="p">Zaprojektujemy Twoją inwestycję od pierwszego szkicu po gotową dokumentację.</p>
            </div>
            <a href="/kontakt" className="btn btn-primary">Skontaktuj się z nami</a>
          </div>
        </div>
      </section>

      <Script id="ld-breadcrumbs-about" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://pbprojekt.lublin.pl/' },
              { '@type': 'ListItem', position: 2, name: 'O nas', item: 'https://pbprojekt.lublin.pl/o-nas' },
            ],
          }),
        }}
      />
    </main>
  )
}

function Stat({ n, t }: { n: React.ReactNode; t: string }) {
  return (
    <div className="card p-6 text-center">
      <div className="text-3xl font-semibold">{n}</div>
      <div className="p mt-2">{t}</div>
    </div>
  )
}

function TeamCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="card p-5">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-brand">{icon}</div>
        <div>
          <div className="font-semibold">{title}</div>
          <p className="p">{text}</p>
        </div>
      </div>
    </div>
  )
}
