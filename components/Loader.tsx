import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-green-700 dark:text-green-400 font-semibold text-lg animate-pulse">Cargando...</span>
      </div>
    </div>
  );
}
