export default function Servicios() {
  return (
    <section id="servicios" data-aos="fade-right" className="py-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Servicios</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <li className="bg-blue-50 rounded-lg shadow p-6 text-center transform transition duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:bg-blue-100">
            <h3 className="text-xl font-semibold mb-2">Desarrollo Web Moderno</h3>
            <p>Webs rápidas, seguras y responsivas.</p>
          </li>
          <li className="bg-blue-50 rounded-lg shadow p-6 text-center transform transition duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:bg-blue-100">
            <h3 className="text-xl font-semibold mb-2">Aplicaciones a Medida</h3>
            <p>Soluciones personalizadas para tu negocio.</p>
          </li>
          <li className="bg-blue-50 rounded-lg shadow p-6 text-center transform transition duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:bg-blue-100">
            <h3 className="text-xl font-semibold mb-2">Consultoría Técnica</h3>
            <p>Asesoría en arquitectura y stack tecnológico.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
