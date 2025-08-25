import React, { useRef, useEffect } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
}

interface Ship {
  x: number;
  y: number;
  dx: number;
  dy: number;
}

function AnimatedTitle({ text }: { text: string }) {
  return (
    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
      {text.split("").map((letter, index) => (
        <span key={index} className="inline-block float-letter">
          {letter}
        </span>
      ))}
    </h1>
  );
}

export default function HeroGameShip() {
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
  let ship: Ship = { x: -60, y: h / 2, dx: 0.8, dy: 0 };
    let frame = 0;

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

    function resize() {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight < 500 ? window.innerHeight * 0.45 : 400;
      mouse = { x: w / 2, y: h / 2 };
      createStars();
      ship.y = h / 2;
    }
    window.addEventListener("resize", resize);

    canvas.addEventListener("mousemove", e => {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
    });

    function drawShip(s: Ship) {
      ctx!.save();
      ctx!.translate(s.x, s.y);
      ctx!.rotate(Math.sin(frame/30) * 0.1);
      // Cuerpo principal
      ctx!.beginPath();
      ctx!.moveTo(0, 0);
      ctx!.lineTo(40, 12);
      ctx!.lineTo(40, -12);
      ctx!.closePath();
      ctx!.fillStyle = "#38bdf8";
      ctx!.shadowColor = "#38bdf8";
      ctx!.shadowBlur = 12;
      ctx!.fill();
      ctx!.shadowBlur = 0;
      // Cabina
      ctx!.beginPath();
      ctx!.arc(30, 0, 6, 0, Math.PI * 2);
      ctx!.fillStyle = "#fff";
      ctx!.fill();
      // Alas
      ctx!.beginPath();
      ctx!.moveTo(10, 0);
      ctx!.lineTo(18, 16);
      ctx!.lineTo(18, -16);
      ctx!.closePath();
      ctx!.fillStyle = "#0ea5e9";
      ctx!.fill();
      ctx!.restore();
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      // Estrellas y constelaciones
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
      // Nave
      drawShip(ship);
      frame++;
      animationId = requestAnimationFrame(draw);
    }

    function updateShip() {
      // Movimiento horizontal
      ship.x += ship.dx;
      // Movimiento vertical esquivando estrellas
      let closest = stars.reduce((acc, s) => {
        const dist = Math.abs(s.x - ship.x);
        return dist < acc.dist ? { star: s, dist } : acc;
      }, { star: null as Star | null, dist: 9999 });
      if (closest.star && closest.dist < 50) {
        if (ship.y < closest.star.y) ship.y -= 2;
        else ship.y += 2;
      } else {
        // Oscilación suave
        ship.y += Math.sin(frame/20) * 1.2;
      }
      // Reiniciar nave al salir
      if (ship.x > w + 60) {
        ship.x = -60;
        ship.y = h / 2;
      }
    }

    function loop() {
      updateShip();
      draw();
      animationId = requestAnimationFrame(loop);
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowUp") ship.y -= 10;
      if (e.key === "ArrowDown") ship.y += 10;
    }
    window.addEventListener("keydown", handleKey);
    // Controles táctiles para móvil
    let touchStartY: number | null = null;
    canvas.addEventListener("touchstart", e => {
      if (e.touches.length === 1) {
        touchStartY = e.touches[0].clientY;
      }
    });
    canvas.addEventListener("touchmove", e => {
      if (touchStartY !== null && e.touches.length === 1) {
        const deltaY = e.touches[0].clientY - touchStartY;
        ship.y += deltaY * 0.3; // sensibilidad táctil
        touchStartY = e.touches[0].clientY;
      }
    });
    canvas.addEventListener("touchend", () => {
      touchStartY = null;
    });
  loop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", handleKey);
      canvas.removeEventListener("touchstart", () => {});
      canvas.removeEventListener("touchmove", () => {});
      canvas.removeEventListener("touchend", () => {});
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-[400px] block cursor-pointer" />
      <div className="absolute z-10 w-full text-center top-24 flex justify-center">
        <AnimatedTitle text="Bienvenido a InbiosTech" />
        <style jsx>{`
          .float-letter {
            display: inline-block;
            animation: float-h 2.5s infinite ease-in-out;
          }
          @keyframes float-h {
            0% { transform: translateX(0); }
            20% { transform: translateX(-12px); }
            40% { transform: translateX(0); }
            60% { transform: translateX(12px); }
            80% { transform: translateX(0); }
            100% { transform: translateX(0); }
          }
        `}</style>
      </div>
      <div className="absolute z-10 w-full text-center top-24">
        <p className="text-lg md:text-2xl font-medium mb-6 text-white drop-shadow">Nave espacial esquivando constelaciones</p>
        <a href="#servicios" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition">Ver servicios</a>
      </div>
    </div>
  );
}
