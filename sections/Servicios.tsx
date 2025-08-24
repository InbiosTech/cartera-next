const servicios = [
  {
    titulo: 'Desarrollo Web',
    descripcion: 'Sitios modernos, rápidos y responsivos con tecnologías de vanguardia.'
  },
  {
    titulo: 'Aplicaciones a Medida',
    descripcion: 'Soluciones personalizadas para tu negocio, desde cero.'
  },
  {
    titulo: 'Consultoría Técnica',
    descripcion: 'Te ayudamos a elegir la mejor arquitectura y stack tecnológico.'
  }
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-white text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">Servicios</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {servicios.map((servicio, idx) => (
          <div key={idx} className="w-80 p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">{servicio.titulo}</h3>
            <p className="text-lg text-gray-700">{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
