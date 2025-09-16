'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PhoneIcon, EnvelopeIcon, CreditCardIcon } from '@heroicons/react/24/solid';

const courses = {
  einsteiger: {
    name: 'Einsteiger',
    price: 99,
    description: 'Perfekt für Anfänger! Lerne die Grundlagen, Kurventechnik und sichere Fahrweise.'
  },
  fortgeschritten: {
    name: 'Fortgeschritten',
    price: 179,
    description: 'Für Fahrer mit Erfahrung. Verbessere Geschwindigkeit, Technik und Rennstrategie.'
  },
  profi: {
    name: 'Profi',
    price: 299,
    description: 'Intensives Training für Profis. Fokus auf Starttechnik, Rennstrategie und maximale Performance.'
  }
};

// Маска номера картки
function formatCardNumber(value: string) {
  return value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
}

// Маска телефону
function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '');
  if (digits.startsWith('49')) {
    return '+' + digits;
  } else {
    return '+49 ' + digits;
  }
}

// Просте валідовання форм
function isFormValid({ phone, email, card }: { phone: string; email: string; card: string }) {
  return phone.length > 4 && email.includes('@') && card.replace(/\s/g, '').length === 16;
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const course = courses[slug];
  const router = useRouter();

  const [form, setForm] = useState({ phone: '', email: '', card: '' });

  if (!course) return <p className="text-white text-center mt-20">Kurs nicht gefunden</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (e.target.name === 'card') value = formatCardNumber(value);
    if (e.target.name === 'phone') value = formatPhone(value);
    setForm({ ...form, [e.target.name]: value });
  };

  const handleBuy = () => {
    const totalPrice = (course.price * 1.19).toFixed(2);
    alert(`Kauf abgeschlossen! Preis inkl. MwSt: ${totalPrice}€`);
  };

  const valid = isFormValid(form);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 font-sans">
      <h1 className="text-4xl font-bold mb-4">{course.name}</h1>
      <p className="text-lg mb-6 text-gray-300 max-w-xl text-center">{course.description}</p>
      <p className="text-2xl mb-6 font-semibold">Preis inkl. MwSt: {(course.price * 1.19).toFixed(2)}€</p>

      <form className="flex flex-col gap-4 w-full max-w-md">
        <div className="relative">
          <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          <input
            type="tel"
            name="phone"
            placeholder="+49 XXXX XXXXXXX"
            value={form.phone}
            onChange={handleChange}
            className="pl-10 p-3 rounded-lg text-black bg-gray-200 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
          />
        </div>

        <div className="relative">
          <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="pl-10 p-3 rounded-lg text-black bg-gray-200 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
          />
        </div>

        <div className="relative">
          <CreditCardIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          <input
            type="text"
            name="card"
            placeholder="XXXX XXXX XXXX XXXX"
            value={form.card}
            onChange={handleChange}
            maxLength={19}
            className="pl-10 p-3 rounded-lg text-black bg-gray-200 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
          />
        </div>

        <button
          type="button"
          onClick={handleBuy}
          disabled={!valid}
          className={`py-4 px-6 rounded-lg font-bold text-xl mt-4 transition-transform transform hover:scale-105 w-full ${
            valid ? 'bg-red-600 hover:bg-red-700 cursor-pointer' : 'bg-gray-500 cursor-not-allowed'
          }`}
        >
          Kaufen
        </button>
      </form>

      <p className="mt-4 text-gray-400 text-sm">
        Basispreis: {course.price}€ + 19% MwSt
      </p>

      <button
        onClick={() => router.back()}
        className="mt-6 underline text-gray-300 hover:text-white"
      >
        ← Zurück zu den Kursen
      </button>
    </div>
  );
}
