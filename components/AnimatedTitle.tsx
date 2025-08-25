import React from "react";

interface AnimatedTitleProps {
  text: string;
  animationType?: "vertical" | "horizontal";
}

export default function AnimatedTitle({
  text,
  animationType = "vertical",
}: AnimatedTitleProps) {
  // Letras normales, sin desorden ni rebote
  return (
    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
      {text}
    </h1>
  );
}
