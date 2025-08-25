import React, { useRef, useEffect } from "react";

export default function HeroGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId: number;
    let particles: any[] = [];
    const w = canvas.width = window.innerWidth;
    const h = canvas.height = 400;

    // Ajustar el canvas para mantener la nitidez en modo móvil
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Crear partículas
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 3 + Math.random() * 3,
        dx: (Math.random() - 0.5) * 2.2, // velocidad aumentada
        dy: (Math.random() - 0.5) * 2.2, // velocidad aumentada
        color: `hsl(${Math.random() * 360}, 80%, 60%)`
      });
    }

    function draw(mouseX: number, mouseY: number) {
      ctx!.clearRect(0, 0, w, h);
      particles.forEach(p => {
        // Movimiento
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
        // Interacción con mouse
        const dist = Math.hypot(p.x - mouseX, p.y - mouseY);
        if (dist < 80) {
          ctx!.beginPath();
          ctx!.moveTo(p.x, p.y);
          ctx!.lineTo(mouseX, mouseY);
          ctx!.strokeStyle = p.color;
          ctx!.lineWidth = 1.5;
          ctx!.stroke();
        }
        // Dibuja partícula
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = p.color;
        ctx!.fill();
      });
    }

    let mouse = { x: w / 2, y: h / 2 };
    canvas.addEventListener("mousemove", e => {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
    });

    function animate() {
      draw(mouse.x, mouse.y);
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
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
