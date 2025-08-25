import React from "react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <a
        href="https://wa.me/51945241682"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-300 dark:bg-green-600 dark:hover:bg-green-500 animate-bounce hover:animate-pulse"
        aria-label="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.004 2.003c-5.522 0-9.997 4.475-9.997 9.997 0 1.762.468 3.484 1.355 4.995l-1.438 5.263 5.395-1.417c1.471.805 3.13 1.162 4.685 1.162 5.522 0 9.997-4.475 9.997-9.997s-4.475-9.997-9.997-9.997zm0 18.163c-1.419 0-2.813-.376-4.033-1.088l-.289-.17-3.203.842.853-3.124-.188-.321c-.84-1.434-1.285-3.073-1.285-4.747 0-4.411 3.586-7.997 7.997-7.997s7.997 3.586 7.997 7.997-3.586 7.997-7.997 7.997zm4.309-6.099c-.236-.118-1.396-.688-1.612-.767-.216-.079-.373-.118-.53.118-.157.236-.609.767-.747.924-.138.157-.275.177-.511.059-.236-.118-.996-.366-1.897-1.167-.701-.625-1.175-1.397-1.313-1.633-.138-.236-.015-.363.104-.48.107-.106.236-.275.354-.413.119-.138.158-.236.237-.393.079-.157.04-.295-.02-.413-.059-.118-.53-1.279-.726-1.75-.192-.462-.387-.399-.53-.406-.138-.007-.295-.009-.452-.009-.157 0-.413.059-.629.295-.216.236-.827.809-.827 1.974s.847 2.292.965 2.451c.118.157 1.667 2.548 4.043 3.463.566.195 1.007.312 1.352.399.568.144 1.085.124 1.495.075.456-.055 1.396-.571 1.594-1.123.197-.552.197-1.025.138-1.123-.059-.098-.216-.157-.452-.275z" />
        </svg>
      </a>
      <span className="bg-white dark:bg-gray-900 text-green-700 dark:text-green-400 px-4 py-2 rounded-lg shadow-lg font-semibold animate-fade-in-up transition-opacity duration-700 opacity-90 text-sm border border-green-200 dark:border-green-700">
        ¿Tienes dudas? ¡Escríbenos por WhatsApp!
      </span>
      <style jsx>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease;
        }
      `}</style>
    </div>
  );
}
