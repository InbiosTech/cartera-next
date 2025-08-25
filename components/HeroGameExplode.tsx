import React, { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  color: string;
  life: number;
}

export default function HeroGameExplode() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width = window.innerWidth;
    const h = canvas.height = 400;
    let animationId: number;
    let particles: Particle[] = [];

    function explode(x: number, y: number) {
      for (let i = 0; i < 40; i++) {
        const angle = (Math.PI * 2 * i) / 40;
        const speed = 2 + Math.random() * 2;
        particles.push({
          x,
          y,
          r: 4 + Math.random() * 3,
          dx: Math.cos(angle) * speed,
          dy: Math.sin(angle) * speed,
          color: `hsl(${Math.random() * 360}, 80%, 60%)`,
          life: 60 + Math.random() * 30,
        });
      }
    }

    canvas.addEventListener("click", e => {
      const rect = canvas.getBoundingClientRect();
      explode(e.clientX - rect.left, e.clientY - rect.top);
    });

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      particles.forEach((p, idx) => {
        p.x += p.dx;
        p.y += p.dy;
        p.r *= 0.98;
        p.life--;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = p.color;
        ctx!.globalAlpha = Math.max(0, p.life / 80);
        ctx!.fill();
        ctx!.globalAlpha = 1;
      });
      particles = particles.filter(p => p.life > 0 && p.r > 0.5);
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-[400px] block cursor-pointer" />
      <div className="absolute z-10 w-full text-center top-24">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">Bienvenido a InbiosTech</h1>
        <p className="text-lg md:text-2xl font-medium mb-6 text-white drop-shadow">Haz clic para ver partículas explotar</p>
        <a href="#servicios" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition">Ver servicios</a>
      </div>
    </div>
  );
}
