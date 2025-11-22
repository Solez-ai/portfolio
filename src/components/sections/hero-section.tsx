"use client";

import Image from "next/image";
import {
  ArrowRight,
  MessageSquare,
  Mail,
  Github,
  Twitter,
  Code2,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const particleCount = 150; // Increased for more depth

    class Particle {
      x: number;
      y: number;
      z: number; // Add depth
      vx: number;
      vy: number;
      radius: number;
      baseRadius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * 2; // Depth layer
        this.vx = (Math.random() - 0.5) * 0.5 * (1 + this.z);
        this.vy = (Math.random() - 0.5) * 0.5 * (1 + this.z);
        this.baseRadius = Math.random() * 1.5;
        this.radius = this.baseRadius * (0.5 + this.z);
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        const opacity = 0.3 + this.z * 0.3;
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-background px-4 pb-10 pt-16 md:pt-20 selection:bg-cyan-500/30 md:px-6">
      <div className="absolute inset-0 z-0 bg-black"></div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 h-full w-full pointer-events-none mix-blend-screen"
      ></canvas>
      <div className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 opacity-30 blur-[120px]"></div>
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 opacity-20 blur-[120px]"></div>
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c3d501c7-7f70-468c-819f-358ed29ca72e-gaurav-mahto-replit-app/assets/images/noise-1.svg')",
        }}
      ></div>

      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="relative z-20 flex h-full flex-col justify-center space-y-10 py-10 text-center lg:text-left">
          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-white/70">
                Identity: Samin Yeasar (Solez-ai)
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="font-display text-4xl font-bold leading-[0.9] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block font-mono">Web Developer</span>
              <span className="-mb-4 block bg-gradient-to-b from-white via-white/90 to-white/40 bg-clip-text pb-4 pr-2 text-transparent">
                <span className="block text-sm md:text-base lg:text-lg font-sans tracking-normal">Full Stack + Vibe Coder</span>
              </span>
            </h1>

            <div className="relative">
              <div className="absolute -inset-4 rounded-lg bg-cyan-500/5 opacity-50 blur-2xl"></div>
              <div className="group relative mx-auto max-w-2xl overflow-hidden rounded-lg border border-cyan-500/20 bg-cyan-950/10 p-6 backdrop-blur-sm lg:mx-0 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                <div className="absolute left-0 top-0 h-full w-1 bg-cyan-500/50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-md border border-cyan-500/20 bg-cyan-500/10 p-2">
                    <Sparkles className="h-5 w-5 animate-pulse text-cyan-400" />
                  </div>
                  <div className="space-y-2 text-left">
                    <h2 className="text-xl font-bold leading-tight text-white md:text-2xl">
                      Building Amazing Sites
                    </h2>
                    <p className="text-sm font-medium leading-relaxed text-white/70 md:text-base">
                      I'm a passionate and curious developer who brings a unique blend of creativity and technical skill to every project I touch. From building slick front-end interfaces to experimenting with emerging tech, I'm always chasing new ideas and better ways to solve problems. Whether I'm coding solo or collaborating with a team, I believe great work comes from{" "}
                      <span className="text-cyan-300">
                        keeping things simple, clean, and a little unexpected.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-wrap justify-center gap-4 pt-2 sm:flex-row lg:justify-start">
            <a
              href="https://github.com/Solez-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-none bg-white px-6 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <div className="absolute inset-0 bg-cyan-400 opacity-0 mix-blend-overlay transition-opacity group-hover:opacity-20"></div>
              <span className="relative flex items-center justify-center gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </span>
            </a>
            <a
              href="https://wa.me/8801975757115"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-none border border-white/20 bg-black/40 px-6 py-4 text-sm font-medium uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              <span className="flex items-center justify-center gap-2">
                <MessageSquare className="h-4 w-4 text-green-500" />
                WhatsApp
              </span>
            </a>
            <a
              href="https://x.com/Solez_None"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-none border border-white/20 bg-black/40 px-6 py-4 text-sm font-medium uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              <span className="flex items-center justify-center gap-2">
                <Twitter className="h-4 w-4 text-blue-400" />
                X (Twitter)
              </span>
            </a>
            <a
              href="mailto:sheditzofficial918@gmail.com"
              className="group rounded-none border border-white/20 bg-black/40 px-6 py-4 text-sm font-medium uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              <span className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4 text-red-400" />
                Email
              </span>
            </a>
          </div>
        </div>

        <div className="relative flex h-auto md:h-[500px] lg:h-[600px] items-center justify-center mt-8 lg:mt-0">
          <div className="absolute bottom-0 left-1/2 h-[100px] w-[300px] -translate-x-1/2 rounded-[100%] bg-cyan-500/5 blur-2xl"></div>
          <div className="absolute bottom-20 left-1/2 h-px w-[200px] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>
          <div className="absolute bottom-20 left-1/2 h-[400px] w-[200px] -translate-x-1/2 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-50"></div>
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] group/card">
            <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-black/40 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.1)] transition-all duration-500 group-hover/card:shadow-[0_0_80px_rgba(6,182,212,0.2)] group-hover/card:scale-[1.02]" style={{ transform: 'perspective(1000px) rotateY(0deg)', transformStyle: 'preserve-3d' }}>
              <div className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c3d501c7-7f70-468c-819f-358ed29ca72e-gaurav-mahto-replit-app/assets/images/noise-1.svg')" }}></div>
              <div className="pointer-events-none absolute inset-0 h-[200%] w-full animate-scan bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
              <div className="flex items-center justify-between border-b border-cyan-500/10 bg-cyan-950/10 p-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-cyan-500/30">
                    <Image src="/me.jpg" alt="Samin Yeasar" fill className="h-full w-full object-cover" priority />
                  </div>
                  <div>
                    <div className="font-mono text-xs tracking-wider text-cyan-400">WEB_DEVELOPER</div>
                    <div className="text-sm font-bold text-white">Samin Yeasar</div>
                  </div>
                </div>
                <Code2 className="h-5 w-5 text-cyan-500/50" />
              </div>
              <div className="space-y-1 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-white/40">SKILLSET_PROTOCOL</span>
                  <Sparkles className="h-3 w-3 animate-pulse text-cyan-500" />
                </div>
                <div className="relative border-l border-white/10 pb-6 pl-4 last:pb-0">
                  <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full border border-cyan-500/50 bg-black"></div>
                  <div className="mb-1.5 flex items-center gap-2">
                    <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500"></div>
                    <h4 className="text-xs font-bold tracking-wide text-white">ADVANCED_WEB_DEV</h4>
                  </div>
                </div>
                <div className="relative border-l border-white/10 pb-6 pl-4 last:pb-0">
                  <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full border border-cyan-500/50 bg-black"></div>
                  <div className="mb-1.5 flex items-center gap-2">
                    <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-green-400 to-emerald-500"></div>
                    <h4 className="text-xs font-bold tracking-wide text-white">VIBE_CODING</h4>
                  </div>
                </div>
                <div className="relative border-l border-white/10 pb-6 pl-4 last:pb-0">
                  <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full border border-cyan-500/50 bg-black"></div>
                  <div className="mb-1.5 flex items-center gap-2">
                    <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-purple-400 to-pink-500"></div>
                    <h4 className="text-xs font-bold tracking-wide text-white">FULL_STACK_EXPERTISE</h4>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-cyan-500/10 bg-cyan-950/20 p-4">
                <div className="font-mono text-[10px] text-cyan-400">STATUS: AVAILABLE</div>
                <div className="text-xs font-bold text-white">Open to Projects</div>
              </div>
            </div>
            <div className="absolute -left-2 -top-2 h-4 w-4 rounded-tl-lg border-l-2 border-t-2 border-cyan-500/50"></div>
            <div className="absolute -bottom-2 -right-2 h-4 w-4 rounded-br-lg border-b-2 border-r-2 border-cyan-500/50"></div>
            <div className="absolute -right-4 top-1/2 h-12 w-1 rounded-full bg-cyan-500/20 blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}