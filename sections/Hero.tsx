export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] text-center bg-gradient-to-b from-blue-900 via-purple-900 to-pink-900">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 animate-fade-in">Impresiona con tu código</h1>
      <p className="text-xl md:text-2xl text-pink-200 mb-8 animate-fade-in delay-200">Creamos experiencias digitales únicas y profesionales para tu negocio.</p>
      <a href="#contacto" className="px-8 py-4 bg-pink-600 text-white rounded-full font-bold shadow-lg hover:bg-pink-400 transition animate-fade-in delay-400">Contáctanos</a>
    </section>
  );
}
