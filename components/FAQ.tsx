import React, { useState } from "react";

const faqs = [
  {
    pregunta: "¿Qué servicios ofrecen?",
    respuesta: "Nuestra experiencia abarca software empresarial, hospitales, centros médicos, laboratorios clínicos y todo tipo de negocio. Si puedes imaginarlo, lo hacemos realidad: desarrollo web, diseño UI/UX, consultoría tecnológica y soluciones a medida para tu empresa.",
  },
  {
    pregunta: "¿Cómo puedo solicitar una cotización?",
    respuesta: "Puedes contactarnos a través del formulario de contacto o por WhatsApp. Te responderemos en menos de 24 horas.",
  },
  {
    pregunta: "¿Trabajan con empresas fuera de Perú?",
    respuesta: "Sí, trabajamos con clientes de todo el mundo. Adaptamos nuestros servicios a tus necesidades y ubicación.",
  },
  {
    pregunta: "¿Qué tecnologías utilizan?",
    respuesta: "Utilizamos tecnologías modernas como React, Next.js, Node.js y Tailwind CSS para garantizar calidad y rendimiento.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-green-200 dark:border-green-700 rounded-lg overflow-hidden shadow-sm">
              <button
                className={`w-full text-left px-6 py-4 font-semibold flex justify-between items-center focus:outline-none transition-colors duration-300 ${open === idx ? 'bg-green-100 dark:bg-green-900' : 'bg-white dark:bg-gray-800'}`}
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <span>{faq.pregunta}</span>
                <span className={`ml-4 transform transition-transform duration-300 ${open === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <div
                className={`px-6 pb-4 text-gray-700 dark:text-gray-300 transition-all duration-300 ${open === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
                style={{
                  transitionProperty: 'max-height, opacity',
                }}
              >
                {faq.respuesta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
