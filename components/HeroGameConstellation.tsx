import React, { useRef, useEffect } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
}

export default function HeroGameConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight < 500 ? window.innerHeight * 0.45 : 400;
    let animationId: number;
    let stars: Star[] = [];
    let mouse = { x: w / 2, y: h / 2 };

    function createStars() {
      stars = [];
      for (let i = 0; i < 60; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 1.5 + Math.random() * 1.5,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
        });
      }
    }
    createStars();

    canvas.addEventListener("mousemove", e => {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
    });

    function resize() {
  if (!canvas) return;
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight < 500 ? window.innerHeight * 0.45 : 400;
  mouse = { x: w / 2, y: h / 2 };
  createStars();
    }
    window.addEventListener("resize", resize);

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dist = Math.hypot(stars[i].x - stars[j].x, stars[i].y - stars[j].y);
          if (dist < 80) {
            ctx!.beginPath();
            ctx!.moveTo(stars[i].x, stars[i].y);
            ctx!.lineTo(stars[j].x, stars[j].y);
            ctx!.strokeStyle = "rgba(255,255,255,0.15)";
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
        const distMouse = Math.hypot(stars[i].x - mouse.x, stars[i].y - mouse.y);
        if (distMouse < 120) {
          ctx!.beginPath();
          ctx!.moveTo(stars[i].x, stars[i].y);
          ctx!.lineTo(mouse.x, mouse.y);
          ctx!.strokeStyle = "rgba(255,255,255,0.25)";
          ctx!.lineWidth = 1.5;
          ctx!.stroke();
        }
      }
      stars.forEach(s => {
        s.x += s.dx;
        s.y += s.dy;
        if (s.x < 0 || s.x > w) s.dx *= -1;
        if (s.y < 0 || s.y > h) s.dy *= -1;
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = "#fff";
        ctx!.shadowColor = "#fff";
        ctx!.shadowBlur = 8;
        ctx!.fill();
        ctx!.shadowBlur = 0;
      });
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-[400px] block cursor-pointer" />
      <div className="absolute z-10 w-full text-center top-24">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">Bienvenido a InbiosTech</h1>
        <p className="text-lg md:text-2xl font-medium mb-6 text-white drop-shadow">Constelaciones que siguen tu mouse</p>
        <a href="#servicios" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition">Ver servicios</a>
      </div>
    </div>
  );
}
