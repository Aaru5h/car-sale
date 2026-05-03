"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = [
      "rgba(238, 63, 44, 0.6)",
      "rgba(255, 180, 168, 0.4)",
      "rgba(255, 85, 64, 0.5)",
      "rgba(255, 255, 255, 0.15)",
      "rgba(172, 136, 131, 0.3)",
    ];

    // Initialize particles
    const count = Math.min(80, Math.floor(window.innerWidth / 20));
    for (let i = 0; i < count; i++) {
      particlesRef.current.push(createParticle(canvas));
    }

    function createParticle(canvas: HTMLCanvasElement): Particle {
      const maxLife = 200 + Math.random() * 400;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -0.2 - Math.random() * 0.5,
        size: 1 + Math.random() * 2.5,
        opacity: 0,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife,
      };
    }

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, i) => {
        p.life++;

        // Fade in / out
        if (p.life < 30) {
          p.opacity = p.life / 30;
        } else if (p.life > p.maxLife - 30) {
          p.opacity = (p.maxLife - p.life) / 30;
        } else {
          p.opacity = 0.7 + Math.sin(p.life * 0.02) * 0.3;
        }

        // Mouse interaction — subtle attraction
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 200;
          p.vx += (dx / dist) * force * 0.01;
          p.vy += (dy / dist) * force * 0.01;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Damping
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Reset if dead or out of bounds
        if (
          p.life > p.maxLife ||
          p.y < -10 ||
          p.x < -10 ||
          p.x > canvas.width + 10
        ) {
          particlesRef.current[i] = createParticle(canvas);
          particlesRef.current[i].y = canvas.height + 10;
        }

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(
          /[\d.]+\)$/,
          `${p.opacity * 0.6})`
        );
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(
          /[\d.]+\)$/,
          `${p.opacity * 0.1})`
        );
        ctx.fill();
      });

      // Draw subtle connections
      particlesRef.current.forEach((a, i) => {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const b = particlesRef.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(238, 63, 44, ${
              ((120 - dist) / 120) * 0.06
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
