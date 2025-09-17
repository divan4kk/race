'use client';
import Link from 'next/link';

export default function Home() {
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

  return (
    <main>
      {/* Hero */}
      <section className="hero" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h1>🏎️ Rennfahrer-Kurs</h1>
        <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
          Lerne, <strong>schnell und sicher</strong> zu fahren!  
          Unsere Kurse bringen dich vom Anfänger zum Profi. 🚦
        </p>
        <a href="#kurse">
          <button style={{ marginTop: '1rem' }}>Zu den Kursen</button>
        </a>
      </section>

      {/* Kurse */}
      <section
        id="kurse"
        className="container"
        style={{ scrollMarginTop: '100px' }}
      >
        <h2 className="section-title">💰 Unsere Kurse</h2>
        <div className="grid">
          {courses.map(course => (
            <Link key={course.slug} href={`/courses/${course.slug}`}>
              <div className={`card ${course.slug === 'fortgeschritten' ? 'highlight' : ''}`}>
                <h3>{course.name}</h3>
                <p>{course.duration}</p>
                <p style={{ fontWeight: 'bold' }}>{course.price}€</p>
                {course.slug === 'fortgeschritten' && <span>💎 Bestes Angebot</span>}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trainer */}
      <section className="container">
        <h2 className="section-title">👨‍🏫 Unsere Trainer</h2>
        <div className="grid">
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
        <div className="grid">
          {testimonials.map((t, i) => (
            <div key={i} className="card">
              <p>{t.text}</p>
              <p style={{ fontWeight: 'bold', marginTop: '1rem' }}>{t.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
