export default function Contacto() {
  return (
  <section id="contacto" className="py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Contacto</h2>
      <form className="max-w-xl mx-auto flex flex-col gap-6 bg-gray-800 p-8 rounded-xl shadow-lg">
        <input type="text" placeholder="Nombre" className="p-4 rounded bg-gray-900 text-white" required />
        <input type="email" placeholder="Email" className="p-4 rounded bg-gray-900 text-white" required />
        <textarea placeholder="Mensaje" className="p-4 rounded bg-gray-900 text-white" rows={4} required />
        <button type="submit" className="px-8 py-4 bg-gray-700 text-white rounded-full font-bold shadow-lg hover:bg-gray-600 transition">Enviar</button>
      </form>
    </section>
  );
}
