import { useState } from "react";

const proyectos = [
  {
    nombre: "Landing Creativa",
    descripcion: "Página de presentación con animaciones y diseño moderno.",
    tipo: "Web",
    url: "#",
  },
  {
    nombre: "E-commerce Next.js",
    descripcion: "Tienda online rápida y segura, optimizada para SEO.",
    tipo: "E-commerce",
    url: "#",
  },
  {
    nombre: "Dashboard Interactivo",
    descripcion: "Panel de control con gráficos y datos en tiempo real.",
    tipo: "Dashboard",
    url: "#",
  },
  {
    nombre: "Blog Personal",
    descripcion: "Blog moderno y optimizado para SEO.",
    tipo: "Web",
    url: "#",
  },
  {
    nombre: "Tienda de Ropa",
    descripcion: "E-commerce con catálogo y pagos integrados.",
    tipo: "E-commerce",
    url: "#",
  },
];

const tipos = ["Todos", ...Array.from(new Set(proyectos.map((p) => p.tipo)))];

export default function Portafolio() {
  const [filtro, setFiltro] = useState("Todos");
  const filtrados =
    filtro === "Todos"
      ? proyectos
      : proyectos.filter((p) => p.tipo === filtro);

  return (
    <section
      id="portafolio"
      data-aos="fade-left"
      className="py-16 bg-gray-50 text-gray-800"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Portafolio</h2>
        <div className="flex justify-center gap-4 mb-8">
          {tipos.map((tipo) => (
            <button
              key={tipo}
              onClick={() => setFiltro(tipo)}
              className={`px-4 py-2 rounded-full border font-semibold transition-all duration-300 ${
                filtro === tipo
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-blue-600 border-blue-300 hover:bg-blue-100"
              }`}
            >
              {tipo}
            </button>
          ))}
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtrados.map((p, i) => (
            <li
              key={i}
              className="bg-white rounded-lg shadow p-6 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:bg-blue-50 transition duration-500"
            >
              <h3 className="text-lg font-semibold mb-2">{p.nombre}</h3>
              <p className="mb-2">{p.descripcion}</p>
              <span className="inline-block px-3 py-1 text-xs rounded bg-blue-100 text-blue-600 mb-2">
                {p.tipo}
              </span>
              <a
                href={p.url}
                className="text-blue-600 hover:underline font-medium"
              >
                Ver proyecto
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
