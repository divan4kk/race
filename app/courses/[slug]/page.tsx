'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useParams } from 'next/navigation';

const courses = {
  einsteiger: { name: 'Einsteiger', price: 99, description: '2 Stunden Training für Anfänger' },
  fortgeschritten: { name: 'Fortgeschritten', price: 179, description: '4 Stunden Training für Fortgeschrittene' },
  profi: { name: 'Profi', price: 299, description: '8 Stunden Training für Profis' }
};

export default function CoursePage() {
  const params = useParams();
  const slug = params?.slug as keyof typeof courses;
  const course = courses[slug];

  const [form, setForm] = useState({ phone: '', email: '', card: '' });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validEmail = /^\S+@\S+\.\S+$/.test(form.email);
  const validPhone = /^\+49 \d{3,}$/.test(form.phone);
  const validCard = /^\d{4} \d{4} \d{4} \d{4}$/.test(form.card);

  const valid = validEmail && validPhone && validCard;

  const handleBuy = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!valid) return;
    setShowModal(true);
  };

  if (!course) return <p>Kurs nicht gefunden.</p>;

  const total = (course.price * 1.19).toFixed(2);

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
        <input name="card" placeholder="💳 XXXX XXXX XXXX XXXX" value={form.card} onChange={handleChange} maxLength={19} />
        <button type="submit" disabled={!valid}>
          Kaufen ({total}€ inkl. MwSt)
        </button>
      </form>

      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Danke für deinen Kauf!</h2>
            <p>{course.name} für {total}€ wurde erfolgreich gebucht.</p>
            <button onClick={() => setShowModal(false)}>Schließen</button>
          </div>
        </div>
      )}

      <p style={{ fontSize: '0.875rem', textAlign: 'center', color: '#aaa' }}>
        Basispreis: {course.price}€ + 19% MwSt
      </p>
    </div>
  );
}
