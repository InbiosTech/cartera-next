import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-900 text-white dark:bg-gray-950 dark:text-gray-100 px-8 py-5 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-5">
        <img
          src="/inbiostech-logo.svg"
          alt="InbiosTech Logo"
          className="w-16 h-16 drop-shadow-lg animate-spin-slow"
        />
        <h2 className="text-3xl font-extrabold tracking-wide text-gradient bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
          InbiosTech
        </h2>
      </div>
      <button
        className="md:hidden block text-white focus:outline-none ml-auto"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
          <rect y="6" width="24" height="2" rx="1" fill="currentColor" />
          <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
          <rect y="16" width="24" height="2" rx="1" fill="currentColor" />
        </svg>
      </button>
      <ul className="hidden md:flex gap-8 text-lg">
        <li>
          <a
            href="#servicios"
            className="hover:text-blue-400 dark:hover:text-blue-300 transition"
          >
            Servicios
          </a>
        </li>
        <li>
          <a
            href="#portafolio"
            className="hover:text-blue-400 dark:hover:text-blue-300 transition"
          >
            Portafolio
          </a>
        </li>
        <li>
          <a
            href="#testimonios"
            className="hover:text-blue-400 dark:hover:text-blue-300 transition"
          >
            Testimonios
          </a>
        </li>
        <li>
          <a
            href="#contacto"
            className="hover:text-blue-400 dark:hover:text-blue-300 transition"
          >
            Contacto
          </a>
        </li>
      </ul>
      {/* Menú móvil */}
      {open && (
        <ul className="absolute top-20 left-0 w-full bg-gray-900 dark:bg-gray-950 text-white dark:text-gray-100 flex flex-col items-center gap-8 py-10 shadow-2xl z-50 animate-fade-in">
          <li>
            <a
              href="#servicios"
              className="hover:text-blue-400 dark:hover:text-blue-300 transition"
              onClick={() => setOpen(false)}
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#portafolio"
              className="hover:text-blue-400 dark:hover:text-blue-300 transition"
              onClick={() => setOpen(false)}
            >
              Portafolio
            </a>
          </li>
          <li>
            <a
              href="#testimonios"
              className="hover:text-blue-400 dark:hover:text-blue-300 transition"
              onClick={() => setOpen(false)}
            >
              Testimonios
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="hover:text-blue-400 dark:hover:text-blue-300 transition"
              onClick={() => setOpen(false)}
            >
              Contacto
            </a>
          </li>
        </ul>
      )}
      <style jsx>{`
        @media (max-width: 768px) {
          nav {
            flex-direction: row;
            justify-content: flex-start;
          }
          .flex.items-center.gap-5 {
            gap: 1rem;
          }
          img {
            width: 2.5rem;
            height: 2.5rem;
          }
          h2 {
            font-size: 1.5rem;
          }
          button.md\:hidden {
            margin-left: auto;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease;
        }
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }
        .text-gradient {
          background: linear-gradient(90deg, #3b82f6, #06b6d4, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </nav>
  );
}
