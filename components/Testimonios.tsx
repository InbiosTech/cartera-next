const testimonios = [
  {
    nombre: 'Juan Pérez',
    foto: 'https://ui-avatars.com/api/?name=Juan+Pérez&background=0D8ABC&color=fff',
    texto: 'Excelente servicio y atención.',
    calificacion: 5
  },
  {
    nombre: 'María Torres',
    foto: 'https://ui-avatars.com/api/?name=Maria+Torres&background=0D8ABC&color=fff',
    texto: 'Resultados profesionales y rápidos.',
    calificacion: 5
  },
  {
    nombre: 'Carlos Rivas',
    foto: 'https://ui-avatars.com/api/?name=Carlos+Rivas&background=0D8ABC&color=fff',
    texto: 'Soporte técnico siempre disponible.',
    calificacion: 4
  }
];

export default function Testimonios() {
  return (
    <section id="testimonios" data-aos="fade-up" className="py-16 bg-blue-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonios</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((t, i) => (
            <li key={i} className="bg-white rounded-lg shadow p-6 text-center transform transition duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:bg-blue-100">
              <img src={t.foto} alt={t.nombre} className="mx-auto mb-4 rounded-full w-20 h-20 object-cover border-4 border-blue-200" />
              <p className="italic mb-2">"{t.texto}"</p>
              <span className="block font-semibold mb-2">{t.nombre}</span>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} className={`w-5 h-5 ${idx < t.calificacion ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.174 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
