import React, { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

interface AudioVisualizerProps {
  audioUrl?: string;
}

export const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ audioUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!audioUrl || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Basic visualization setup
    const drawVisualization = () => {
      ctx.fillStyle = 'rgb(200, 200, 200)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add wave pattern
      ctx.beginPath();
      ctx.strokeStyle = 'rgb(0, 0, 0)';
      ctx.lineWidth = 2;
      
      for (let i = 0; i < canvas.width; i++) {
        const y = canvas.height / 2 + Math.sin(i * 0.05) * 20;
        if (i === 0) {
          ctx.moveTo(i, y);
        } else {
          ctx.lineTo(i, y);
        }
      }
      
      ctx.stroke();
    };

    drawVisualization();
  }, [audioUrl]);

  return (
    <Card className="p-4 w-full max-w-md mx-auto mt-4">
      <canvas
        ref={canvasRef}
        width="400"
        height="100"
        className="w-full rounded-md"
      />
    </Card>
  );
};