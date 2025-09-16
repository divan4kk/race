'use client';
import { useState, ChangeEvent, FormEvent } from 'react';

const courses = {
  einsteiger: { name: 'Einsteiger', price: 99, description: '2 Stunden Training für Anfänger' },
  fortgeschritten: { name: 'Fortgeschritten', price: 179, description: '4 Stunden Training für Fortgeschrittene' },
  profi: { name: 'Profi', price: 299, description: '8 Stunden Training für Profis' },
};

interface FormState {
  phone: string;
  email: string;
  card: string;
}

interface CoursePageProps {
  params: { slug: keyof typeof courses };
}

export default function CoursePage({ params }: CoursePageProps) {
  const { slug } = params;
  const course = courses[slug];
  const [form, setForm] = useState<FormState>({ phone: '', email: '', card: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const valid = form.phone && form.email && form.card;

  const handleBuy = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!valid) return;
    alert(`Danke für den Kauf von ${course.name} (${course.price}€ + 19% MwSt)`);
  };

  return (
    <div className="container">
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}>{course.name}</h1>
      <p style={{ textAlign: 'center', margin: '1rem 0' }}>{course.description}</p>

      <form
        style={{ maxWidth: '400px', margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}
        onSubmit={handleBuy}
      >
        <input name="phone" placeholder="📞 +49 XXX XXXXXXX" value={form.phone} onChange={handleChange} />
        <input name="email" placeholder="✉️ Email" value={form.email} onChange={handleChange} />
        <input
          name="card"
          placeholder="💳 XXXX XXXX XXXX XXXX"
          value={form.card}
          onChange={handleChange}
          maxLength={19}
        />
        <button disabled={!valid} style={{ backgroundColor: valid ? '#e3342f' : '#666', color: 'white' }}>
          Kaufen
        </button>
      </form>

      <p style={{ fontSize: '0.875rem', textAlign: 'center', color: '#aaa' }}>
        Basispreis: {course.price}€ + 19% MwSt
      </p>
    </div>
  );
}
