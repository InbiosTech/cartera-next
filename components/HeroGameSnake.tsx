import React, { useRef, useEffect, useState } from "react";

// Simple Snake Game
const gridSize = 20;
const tileSize = 20;
const initialSnake = [
  { x: 5, y: 10 },
  { x: 4, y: 10 },
  { x: 3, y: 10 },
];
const directions = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

export default function HeroGameSnake() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let snake = [...initialSnake];
    let direction = directions["ArrowRight"];
    let food = { x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize) };
    let running = true;
    let animationId: number;

    function draw() {
      ctx!.fillStyle = "#1e293b";
      ctx!.fillRect(0, 0, gridSize * tileSize, gridSize * tileSize);
      // Draw food
      ctx!.fillStyle = "#22c55e";
      ctx!.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);
      // Draw snake
      snake.forEach((s, i) => {
        ctx!.fillStyle = i === 0 ? "#38bdf8" : "#fff";
        ctx!.fillRect(s.x * tileSize, s.y * tileSize, tileSize, tileSize);
      });
      // Score
      ctx!.font = "16px monospace";
      ctx!.fillStyle = "#fff";
      ctx!.fillText(`Puntos: ${score}`, 10, 20);
    }

    function update() {
      if (!running) return;
      const newHead = {
        x: (snake[0].x + direction.x + gridSize) % gridSize,
        y: (snake[0].y + direction.y + gridSize) % gridSize,
      };
      // Colisión con sí mismo
      if (snake.some((s) => s.x === newHead.x && s.y === newHead.y)) {
        running = false;
        setGameOver(true);
        return;
      }
      snake.unshift(newHead);
      // Comer comida
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore((s) => s + 1);
        food = { x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize) };
      } else {
        snake.pop();
      }
    }

    function loop() {
      update();
      draw();
  if (running) animationId = window.setTimeout(loop, 100);
    }
    loop();

    function handleKey(e: KeyboardEvent) {
      if (directions[e.key]) {
        direction = directions[e.key];
      }
    }
    window.addEventListener("keydown", handleKey);

    return () => {
      running = false;
      clearTimeout(animationId);
      window.removeEventListener("keydown", handleKey);
    };
  }, [score]);

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        width={gridSize * tileSize}
        height={gridSize * tileSize}
        className="block rounded-lg shadow-lg border border-blue-400"
        style={{ background: "#1e293b" }}
      />
      <div className="absolute z-10 w-full text-center top-8">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2 text-white drop-shadow-lg">¡Juega Snake!</h1>
        <p className="text-lg md:text-xl font-medium mb-4 text-white drop-shadow">Usa las flechas para moverte. ¿Cuántos puntos logras?</p>
        <a href="#servicios" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition">Ver servicios</a>
        {gameOver && (
          <div className="mt-6 text-red-400 font-bold text-xl animate-bounce">¡Game Over! Recarga para jugar de nuevo.</div>
        )}
      </div>
    </div>
  );
}
