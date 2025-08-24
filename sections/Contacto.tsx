export default function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Contacto</h2>
      <form className="max-w-xl mx-auto flex flex-col gap-6 bg-white bg-opacity-10 p-8 rounded-xl shadow-lg">
        <input type="text" placeholder="Nombre" className="p-4 rounded bg-white bg-opacity-80 text-gray-900" required />
        <input type="email" placeholder="Email" className="p-4 rounded bg-white bg-opacity-80 text-gray-900" required />
        <textarea placeholder="Mensaje" className="p-4 rounded bg-white bg-opacity-80 text-gray-900" rows={4} required />
        <button type="submit" className="px-8 py-4 bg-pink-600 text-white rounded-full font-bold shadow-lg hover:bg-pink-400 transition">Enviar</button>
      </form>
    </section>
  );
}
