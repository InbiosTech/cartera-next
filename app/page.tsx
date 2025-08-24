import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import Servicios from '../sections/Servicios';
import Portafolio from '../sections/Portafolio';
import Contacto from '../sections/Contacto';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Servicios />
      <Portafolio />
      <Contacto />
      <Footer />
    </div>
  );
}
