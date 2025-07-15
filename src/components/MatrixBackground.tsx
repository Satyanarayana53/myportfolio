
import { useEffect, useRef } from 'react';

export const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"\'' + '#&_(),.;:?!\\|{}<>[]^~アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨ';
  
    const charArray = chars.split('');

    const fontSize = 14;
    const columns = canvas.width / fontSize;

    // Drops array
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * canvas.height;
    }

    // Draw function
    const draw = () => {
      // Semi-transparent black background
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff88';
      ctx.font = `${fontSize}px monospace`;

      // Loop through drops
      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full opacity-20 pointer-events-none z-0"
    />
  );
};
