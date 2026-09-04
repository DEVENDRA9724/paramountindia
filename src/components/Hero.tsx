import React, { useEffect, useRef } from 'react';
import { Navbar } from './Navbar';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
  onOpenLearningModal: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenLearningModal }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Interactive Particle Constellation Canvas Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = { x: null as number | null, y: null as number | null, radius: 160 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
      alpha: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 1.8 + 0.8;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.color = Math.random() > 0.72 ? 'rgba(255, 92, 122, ' : 'rgba(99, 102, 241, ';
        this.alpha = Math.random() * 0.4 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= Math.cos(angle) * force * 2.5;
            this.y -= Math.sin(angle) * force * 2.5;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.alpha + ')';
        ctx.fill();
      }
    }

    const particleCount = Math.min(Math.floor((width * height) / 14000), 55);
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.18 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col overflow-hidden" style={{ background: '#f7f9fc' }}>

      {/* Interactive Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(49,94,251,0.18) 0%, rgba(255,92,122,0.1) 45%, transparent 80%)' }} />

      <div className="hero-aurora hero-aurora--one" aria-hidden="true" />
      <div className="hero-aurora hero-aurora--two" aria-hidden="true" />

      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px z-10"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(49,94,251,0.30), rgba(255,92,122,0.24), transparent)' }} />

      <Navbar onNavigate={onNavigate} onOpenLearningModal={onOpenLearningModal} activePage="home" />

      {/* Full-width edge-to-edge landing banner */}
      <div className="home-banner-stage relative z-10 flex-1 w-full p-0">
        <div className="home-banner-frame animate-page-entry w-full">
          <img
            src="/og.png"
            alt="Paramount India Technologies — Engineering Without Limits"
            className="home-banner-image w-full"
          />
          <h1 className="sr-only">Paramount India Technologies — Engineering Without Limits</h1>
          <div className="home-banner-actions">
            <button onClick={() => onNavigate('contact')} className="btn-primary">
              Start Your Build <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => onNavigate('services')} className="home-banner-secondary">
              Explore Services
            </button>
          </div>
        </div>

        <div className="home-banner-proof animate-page-entry w-full max-w-6xl mx-auto px-4 my-6" aria-label="Company highlights">
          <span><strong>14+</strong> Core capabilities</span>
          <span><strong>24/7</strong> SLA support</span>
          <span><strong>99.9%</strong> Uptime target</span>
          <span><strong>India</strong> Global delivery</span>
        </div>
      </div>

    </section>
  );
};
