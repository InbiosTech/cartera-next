import React, { useRef, useEffect, useState } from "react";

// Simple Pong Game
const width = 400;
const height = 300;
const paddleHeight = 60;
const paddleWidth = 10;
const ballSize = 12;
const speed = 4;

export default function HeroGamePong() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let paddleY = height / 2 - paddleHeight / 2;
    let ball = { x: width / 2, y: height / 2, dx: speed, dy: speed };
    let running = true;
    let animationId: number;

    function draw() {
      ctx!.fillStyle = "#1e293b";
      ctx!.fillRect(0, 0, width, height);
      // Paddle
      ctx!.fillStyle = "#38bdf8";
      ctx!.fillRect(10, paddleY, paddleWidth, paddleHeight);
      // Ball
      ctx!.fillStyle = "#22c55e";
      ctx!.fillRect(ball.x, ball.y, ballSize, ballSize);
      // Score
      ctx!.font = "16px monospace";
      ctx!.fillStyle = "#fff";
      ctx!.fillText(`Puntos: ${score}`, 10, 20);
    }

    function update() {
      if (!running) return;
      ball.x += ball.dx;
      ball.y += ball.dy;
      // Rebote arriba/abajo
      if (ball.y < 0 || ball.y + ballSize > height) ball.dy *= -1;
      // Rebote paddle
      if (
        ball.x < 20 + paddleWidth &&
        ball.y + ballSize > paddleY &&
        ball.y < paddleY + paddleHeight
      ) {
        ball.dx *= -1;
        setScore((s) => s + 1);
      }
      // Game over
      if (ball.x < 0) {
        running = false;
        setGameOver(true);
      }
      // Rebote derecha
      if (ball.x + ballSize > width) ball.dx *= -1;
    }

    function loop() {
      update();
      draw();
      if (running) animationId = window.setTimeout(loop, 16);
    }
    loop();

    function handleMouse(e: MouseEvent) {
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
      const mouseY = e.clientY - rect.top;
      paddleY = Math.max(0, Math.min(height - paddleHeight, mouseY - paddleHeight / 2));
    }
    canvas.addEventListener("mousemove", handleMouse);

    return () => {
      running = false;
      window.clearTimeout(animationId);
      canvas.removeEventListener("mousemove", handleMouse);
    };
  }, [score]);

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="block rounded-lg shadow-lg border border-blue-400"
        style={{ background: "#1e293b" }}
      />
      <div className="absolute z-10 w-full text-center top-8">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2 text-white drop-shadow-lg">¡Juega Pong!</h1>
        <p className="text-lg md:text-xl font-medium mb-4 text-white drop-shadow">Mueve el mouse para controlar la paleta. ¿Cuántos puntos logras?</p>
        <a href="#servicios" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition">Ver servicios</a>
        {gameOver && (
          <div className="mt-6 text-red-400 font-bold text-xl animate-bounce">¡Game Over! Recarga para jugar de nuevo.</div>
        )}
      </div>
    </div>
  );
}
