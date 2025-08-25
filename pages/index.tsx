import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import Portafolio from "../components/Portafolio";
import Equipo from "../components/Equipo";
import Testimonios from "../components/Testimonios";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Loader from "../components/Loader";
import FAQ from "../components/FAQ";

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
        <Navbar />
        <Hero />
        <Servicios />
        <Portafolio />
        <Equipo />
        <Testimonios />
        <Contacto />
        <FAQ />
        <Footer />
        {/* Botón flotante de WhatsApp */}
        <WhatsAppButton />
      </main>
    </>
  );
}
