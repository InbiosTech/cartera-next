const equipo = [
  {
    nombre: "Cesar Perez",
        rol: "Desarrollador Frontend",
        foto: "/team/cesar.jpg",
        descripcion: "Especialista en React y animaciones modernas.",
  },
  {
    nombre: "Annder G Perez",
        rol: "Diseñador UI/UX",
        foto: "/team/annder.jpg",
        descripcion: "Apasionado por la experiencia de usuario y el diseño responsivo.",
  },
  {
    nombre: "Nikauleth Perez",
        rol: "Desarrolladora Backend",
        foto: "/team/nikauleth.jpg",
        descripcion: "Experta en Node.js y arquitecturas escalables.",
  }
];

export default function Equipo() {
  return (
    <section id="equipo" data-aos="zoom-in-up" className="py-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Equipo</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipo.map((m, i) => (
            <li key={i} className="bg-blue-50 rounded-lg shadow p-6 text-center transform transition duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:bg-blue-100">
              <img src={m.foto} alt={m.nombre} className="mx-auto mb-4 rounded-full w-24 h-24 object-cover border-4 border-blue-200 transition duration-500 hover:scale-110" />
              <h3 className="text-lg font-semibold mb-1">{m.nombre}</h3>
              <span className="block text-blue-600 font-medium mb-2">{m.rol}</span>
              <p className="text-sm mb-2">{m.descripcion}</p>
            </li>
          ))}
        </ul>
        </div>
    </section>
    );
}
    
