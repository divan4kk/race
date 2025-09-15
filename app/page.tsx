import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white font-sans flex flex-col items-center justify-between p-8">
      {/* Hero Section */}
      <header className="flex flex-col items-center gap-6 text-center mt-20 relative">
        <div className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-3xl" />
        <h1 className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-lg">
          Willkommen, ich bin Divan
        </h1>
        <p className="max-w-2xl text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Dies ist meine persönliche Homepage – modern, minimalistisch und schön gestaltet.
        </p>
        <div className="flex gap-6 mt-6">
          <button className="px-8 py-4 text-lg rounded-2xl shadow-lg bg-blue-600 text-white hover:bg-blue-700 transition-all">
            Über mich
          </button>
          <button className="px-8 py-4 text-lg rounded-2xl border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all">
            Kontakt
          </button>
        </div>
      </header>

      {/* Content Section */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-28 max-w-6xl w-full">
        <div className="rounded-2xl shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Über mich</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Ich bin Divan – leidenschaftlich in Technik, Design und Rennsport.
          </p>
        </div>

        <div className="rounded-2xl shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Projekte</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Hier findest du meine aktuellen und zukünftigen Projekte – modern, innovativ und spannend.
          </p>
        </div>

        <div className="rounded-2xl shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 hover:scale-105 transition-transform">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600 dark:text-pink-400">Kontakt</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Du kannst mich jederzeit erreichen, um über Ideen und Projekte zu sprechen.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-28 text-sm text-gray-600 dark:text-gray-400 flex flex-col items-center gap-4">
        <div className="flex gap-8">
          <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-blue-600 transition-colors">GitHub</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Impressum</a>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} Divan – Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

