const proyectos = [
  {
    nombre: 'Landing Creativa',
    descripcion: 'Página de presentación con animaciones y diseño moderno.',
    url: '#'
  },
  {
    nombre: 'E-commerce Next.js',
    descripcion: 'Tienda online rápida y segura, optimizada para SEO.',
    url: '#'
  },
  {
    nombre: 'Dashboard Interactivo',
    descripcion: 'Panel de control con gráficos y datos en tiempo real.',
    url: '#'
  }
];

export default function Portafolio() {
  return (
    <section id="portafolio" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Portafolio</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {proyectos.map((proyecto, idx) => (
          <a key={idx} href={proyecto.url} className="w-80 p-8 bg-white rounded-xl shadow-lg hover:shadow-pink-400 hover:scale-105 transition block">
            <h3 className="text-2xl font-semibold mb-4 text-purple-900">{proyecto.nombre}</h3>
            <p className="text-lg text-gray-700 mb-2">{proyecto.descripcion}</p>
            <span className="text-pink-600 font-bold">Ver proyecto</span>
          </a>
        ))}
      </div>
    </section>
  );
}
