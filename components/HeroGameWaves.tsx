import React, { useRef, useEffect } from "react";

export default function HeroGameWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width = window.innerWidth;
    const h = canvas.height = 400;
    let animationId: number;
    let t = 0;

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      for (let i = 0; i < 3; i++) {
        ctx!.beginPath();
        for (let x = 0; x < w; x += 2) {
          const y = h/2 + Math.sin((x/40) + t + i) * (30 + i*20) + Math.cos((x/60) - t - i) * (10 + i*8);
          if (x === 0) ctx!.moveTo(x, y);
          else ctx!.lineTo(x, y);
        }
        ctx!.strokeStyle = `rgba(${60+i*60},${120+i*40},255,${0.3 + i*0.2})`;
        ctx!.lineWidth = 3-i;
        ctx!.stroke();
      }
      t += 0.03;
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-[400px] block" />
      <div className="absolute z-10 w-full text-center top-24">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">Bienvenido a InbiosTech</h1>
        <p className="text-lg md:text-2xl font-medium mb-6 text-white drop-shadow">Innovación y tecnología a tu alcance</p>
        <a href="#servicios" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition">Ver servicios</a>
      </div>
    </div>
  );
}
