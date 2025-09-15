/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import GlobeIcon from '../public/globe.svg';
import NextIcon from '../public/next.svg';
import VercelIcon from '../public/vercel.svg';
import FileIcon from '../public/file.svg';
import WindowIcon from '../public/window.svg';

export default function Home() {
  const testimonials = [
    { text: 'Tolles Training! Ich fühle mich jetzt viel sicherer auf der Rennstrecke.', name: '- Jonas' },
    { text: 'Die Trainer sind super professionell und geben tolle Tipps.', name: '- Lara' },
    { text: 'Definitiv ein Muss für jeden Motorsport-Fan!', name: '- Tom' },
  ];

  const features = [
    { icon: '📋', title: 'Kursübersicht', desc: 'Alle Kurse mit Dauer, Preis und Schwierigkeitsgrad auf einen Blick.' },
    { icon: '🎥', title: 'Training Videos', desc: 'Sieh echte Trainingssessions und Tipps unserer Profis.' },
    { icon: '✍️', title: 'Anmeldung', desc: 'Melde dich direkt online für deinen Kurs an – einfach und schnell.' },
  ];

  const trainers = [
    { name: 'Max Mustermann', desc: 'Rennfahrer seit 10 Jahren, Kurventechnik & Geschwindigkeit.', img: FileIcon },
    { name: 'Anna Fahrerin', desc: 'Profifahrerin, Expertin für Sicherheit & Trainingsmethoden.', img: GlobeIcon },
    { name: 'Lukas Speed', desc: 'Motorsport-Coach, spezialisiert auf Starttechnik & Strategie.', img: WindowIcon },
  ];

  return (
    <main className="min-h-screen font-sans text-white bg-gradient-to-b from-gray-900 to-gray-800">
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center px-6">
        <div className="absolute inset-0 bg-[url('/file.svg')] bg-center bg-cover opacity-10"></div>
        <h1 className="text-6xl font-extrabold mb-4">
          🏎️ Rennfahrer-Kurs
        </h1>
        <p className="text-xl max-w-2xl mb-8">
          Lerne, <strong>schnell und sicher</strong> zu fahren! Unsere Kurse bringen dich vom Anfänger zum Profi. 🚦
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg text-xl shadow-lg transition-transform transform hover:scale-105">
          Jetzt Anmelden
        </button>
      </section>

      {/* Kurs Features */}
      <section className="py-16 px-6 grid md:grid-cols-3 gap-10">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform text-center"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Trainer Section */}
      <section className="py-16 px-6 bg-gray-850 text-center">
        <h2 className="text-4xl font-bold mb-12">👨‍🏫 Unsere Trainer</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <div className="mb-4">
                <Image src={trainer.img} alt={trainer.name} width={80} height={80} className="mx-auto rounded-full" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{trainer.name}</h3>
              <p>{trainer.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Preise Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">💰 Preise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Einsteiger</h3>
            <p className="text-xl mb-2">2 Stunden Training</p>
            <p className="text-2xl font-bold">99€</p>
          </div>
          <div className="bg-red-600 p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Fortgeschritten</h3>
            <p className="text-xl mb-2">4 Stunden Training</p>
            <p className="text-2xl font-bold">179€</p>
            <span className="block mt-2 text-lg font-semibold">💎 Bestes Angebot</span>
          </div>
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Profi</h3>
            <p className="text-xl mb-2">8 Stunden Training</p>
            <p className="text-2xl font-bold">299€</p>
          </div>
        </div>
      </section>

      {/* Icons Section */}
      <section className="flex justify-center gap-10 py-12 bg-gray-850">
        {[GlobeIcon, NextIcon, VercelIcon, FileIcon, WindowIcon].map((icon, i) => (
          <Image key={i} src={icon} alt="icon" width={64} height={64} className="hover:scale-110 transition-transform" />
        ))}
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">⭐ Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <p className="italic mb-4">{`"${t.text}"`}</p>
              <p className="font-bold">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <h2 className="text-5xl font-bold mb-6">🚀 Starte jetzt!</h2>
        <p className="mb-6 text-xl">Sichere dir deinen Platz auf der Rennstrecke und werde zum Rennfahrer!</p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg shadow-xl text-2xl transition-transform transform hover:scale-110">
          Jetzt Anmelden
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Rennfahrer-Kurs. Alle Rechte vorbehalten. | 
        <span className="mx-2">🐦</span> <span className="mx-2">📸</span> <span className="mx-2">🔗</span>
      </footer>
    </main>
  );
}
