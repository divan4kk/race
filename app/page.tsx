export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans flex flex-col items-center">
      {/* Hero */}
      <header className="text-center mt-20 px-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 drop-shadow-lg">
          Rennsport Coaching mit Divan4kk
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Top 1% iRacing Driver. Lerne meine Methoden und werde schneller –
          egal ob Anfänger oder Profi.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="#kurse"
            className="px-8 py-4 text-lg font-semibold rounded-xl bg-red-600 hover:bg-red-700 transition"
          >
            Kurse ansehen
          </a>
          <a
            href="#kontakt"
            className="px-8 py-4 text-lg font-semibold rounded-xl border border-gray-500 hover:bg-gray-800 transition"
          >
            Kontakt
          </a>
        </div>
      </header>

      {/* Kurse */}
      <main id="kurse" className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full px-6">
        <div className="rounded-2xl shadow-lg border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-center hover:scale-105 transition-transform">
          <h2 className="text-3xl font-bold text-red-500">Basic Kurs</h2>
          <p className="mt-4 text-gray-300">
            Voller Zugang zu meinem Fahrtraining, Tipps & Setups für mehr Pace.
          </p>
          <p className="mt-6 text-4xl font-extrabold">$99</p>
          <a
            href="#kontakt"
            className="mt-6 inline-block px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-semibold transition"
          >
            Jetzt starten
          </a>
        </div>

        <div className="rounded-2xl shadow-lg border-2 border-yellow-500 bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-center hover:scale-105 transition-transform">
          <h2 className="text-3xl font-bold text-yellow-400">Premium Kurs</h2>
          <p className="mt-4 text-gray-300">
            Alles aus dem Basic Kurs + individuelle 1:1 Calls mit mir für dein
            persönliches Coaching.
          </p>
          <p className="mt-6 text-4xl font-extrabold">$199</p>
          <a
            href="#kontakt"
            className="mt-6 inline-block px-6 py-3 bg-yellow-500 text-black hover:bg-yellow-400 rounded-xl font-semibold transition"
          >
            Premium buchen
          </a>
        </div>
      </main>

      {/* Kontakt */}
      <section id="kontakt" className="mt-28 mb-20 text-center max-w-2xl px-6">
        <h3 className="text-3xl font-bold">Kontakt aufnehmen</h3>
        <p className="mt-4 text-gray-300">
          Schreib mir und sichere dir deinen Platz im Coaching. Gemeinsam
          entwickeln wir deine Geschwindigkeit.
        </p>
        <a
          href="mailto:divan4kk@example.com"
          className="mt-6 inline-block px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl font-semibold transition"
        >
          Jetzt Mail senden
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-sm text-gray-500 flex flex-col items-center gap-2">
        <p>© {new Date().getFullYear()} Divan4kk – All Rights Reserved.</p>
        <div className="text-xs text-gray-400">
          <p>Email: divan4kk@example.com</p>
          <p>Discord: Divan4kk#1234</p>
          <p>Instagram: @divan4kk</p>
        </div>
      </footer>
    </div>
  );
}
