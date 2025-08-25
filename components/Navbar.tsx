import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-8 bg-black shadow-xl">
      <div className="text-2xl font-bold text-white tracking-wide">Cartera Devs</div>
      <div className="space-x-6">
        <Link href="#servicios" className="text-white hover:text-gray-400 transition">Servicios</Link>
        <Link href="#portafolio" className="text-white hover:text-gray-400 transition">Portafolio</Link>
        <Link href="#contacto" className="text-white hover:text-gray-400 transition">Contacto</Link>
      </div>
    </nav>
  );
}
