import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-8 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 shadow-xl">
      <div className="text-2xl font-bold text-white tracking-wide">Cartera Devs</div>
      <div className="space-x-6">
        <Link href="#servicios" className="text-white hover:text-pink-300 transition">Servicios</Link>
        <Link href="#portafolio" className="text-white hover:text-pink-300 transition">Portafolio</Link>
        <Link href="#contacto" className="text-white hover:text-pink-300 transition">Contacto</Link>
      </div>
    </nav>
  );
}
