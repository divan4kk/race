'use client';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const kurseRef = useRef<HTMLElement>(null);
  const [mode, setMode] = useState<'dark' | 'light'>('dark');

  const courses = [
    { slug: 'einsteiger', name: 'Einsteiger', duration: '2 Stunden Training', price: 99 },
    { slug: 'fortgeschritten', name: 'Fortgeschritten', duration: '4 Stunden Training', price: 179 },
    { slug: 'profi', name: 'Profi', duration: '8 Stunden Training', price: 299 }
  ];

  const trainers = [
    { name: 'Max Mustermann', role: 'Rennfahrer seit 10 Jahren' },
    { name: 'Anna Fahrerin', role: 'Profifahrerin, Sicherheit & Trainingsmethoden' },
    { name: 'Lukas Speed', role: 'Motorsport-Coach, Starttechnik & Strategie' }
  ];

  const testimonials = [
    { text: 'Tolles Training! Ich fühle mich jetzt viel sicherer auf der Rennstrecke.', name: '- Jonas' },
    { text: 'Die Trainer sind super professionell und geben tolle Tipps.', name: '- Lara' },
    { text: 'Definitiv ein Muss für jeden Motorsport-Fan!', name: '- Tom' }
  ];

  const scrollToKurse = () => kurseRef.current?.scrollIntoView({ behavior: 'smooth' });

  // Body-Klasse setzen für synchronisierten Mode
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  return (
    <main>
      <header style={{ textAlign: 'right', padding: '1rem' }}>
        <button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
          {mode === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      {/* Hero */}
      <section className="hero">
        <h1>🏎️ Rennfahrer-Kurs</h1>
        <p>Lerne, <strong>schnell und sicher</strong> zu fahren! Unsere Kurse bringen dich vom Anfänger zum Profi. 🚦</p>
        <button onClick={scrollToKurse}>Zu den Kursen</button>
      </section>

      {/* Kurse */}
      <section ref={kurseRef} className="container">
        <h2 className="section-title">💰 Unsere Kurse</h2>
        <div className="grid-courses">
          {courses.map(course => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className={`card-link ${course.slug === 'fortgeschritten' ? 'highlight' : ''}`}
            >
              <div className="card">
                <h3>{course.name}</h3>
                <p>{course.duration}</p>
                <p className="price">{course.price}€</p>
                {course.slug === 'fortgeschritten' && <span className="badge">💎 Bestes Angebot</span>}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trainer */}
      <section className="container">
        <h2 className="section-title">👨‍🏫 Unsere Trainer</h2>
        <div className="grid-courses">
          {trainers.map(trainer => (
            <div key={trainer.name} className="card">
              <h3>{trainer.name}</h3>
              <p>{trainer.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container">
        <h2 className="section-title">⭐ Testimonials</h2>
        <div className="grid-courses">
          {testimonials.map((t, i) => (
            <div key={i} className="card testimonial">
              <p>{t.text}</p>
              <p className="author">{t.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

