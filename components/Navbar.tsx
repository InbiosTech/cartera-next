export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white dark:bg-gray-950 dark:text-gray-100 px-6 py-4 flex items-center justify-between">
      <h2 className="text-xl font-bold tracking-wide">InbiosTech</h2>
      <ul className="flex gap-6 text-base">
        <li><a href="#servicios" className="hover:text-blue-400 dark:hover:text-blue-300 transition">Servicios</a></li>
        <li><a href="#portafolio" className="hover:text-blue-400 dark:hover:text-blue-300 transition">Portafolio</a></li>
        <li><a href="#testimonios" className="hover:text-blue-400 dark:hover:text-blue-300 transition">Testimonios</a></li>
        <li><a href="#contacto" className="hover:text-blue-400 dark:hover:text-blue-300 transition">Contacto</a></li>
      </ul>
    </nav>
  );
}
