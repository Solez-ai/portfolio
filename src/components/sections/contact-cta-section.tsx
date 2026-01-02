"use client";

import { ArrowRight, Github, Mail, MessageSquare, Twitter } from 'lucide-react';
import React from 'react';
import ScrollFloat from '@/components/ui/scroll-float';

const ContactCtaSection = () => {
  return (
    <section className="relative overflow-hidden bg-black selection:bg-cyan-500/30 py-16 md:py-24 px-4 sm:px-6">
      {/* Background Effects */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c3d501c7-7f70-468c-819f-358ed29ca72e-gaurav-mahto-replit-app/assets/images/noise-1.svg')`,
        }}
      />
      <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-cyan/10 rounded-full blur-[150px] opacity-50 pointer-events-none -z-10" />
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px] opacity-40 pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] opacity-30 pointer-events-none -z-10" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Get In Touch */}
        <div className="max-w-2xl mx-auto mb-12">
          <ScrollFloat
            containerClassName="!my-0 mb-4"
            textClassName="!text-3xl md:!text-4xl font-display font-bold text-white !leading-tight"
            animationDuration={1.2}
            ease="back.inOut(1.5)"
            scrollStart="top bottom-=20%"
            scrollEnd="center center"
            stagger={0.02}
          >
            Let's Build Something Amazing
          </ScrollFloat>
          <p className="text-lg text-muted-foreground">
            Looking for a web developer who can bring your ideas to life? Let's connect and discuss your next project.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="mb-24 flex flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/Solez-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider overflow-hidden rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <span className="relative flex items-center justify-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </span>
          </a>
          <a
            href="mailto:sheditzofficial918@gmail.com"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 text-white font-bold text-sm uppercase tracking-wider overflow-hidden rounded-lg hover:scale-105 hover:border-red-500/50 transition-all duration-300"
          >
            <span className="relative flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              Email Me
            </span>
          </a>
          <a
            href="https://wa.me/8801975757115"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-white font-bold text-sm uppercase tracking-wider overflow-hidden rounded-lg hover:scale-105 hover:border-green-500/50 transition-all duration-300"
          >
            <span className="relative flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </span>
          </a>
          <a
            href="https://x.com/Solez_None"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-white font-bold text-sm uppercase tracking-wider overflow-hidden rounded-lg hover:scale-105 hover:border-blue-500/50 transition-all duration-300"
          >
            <span className="relative flex items-center justify-center gap-2">
              <Twitter className="w-4 h-4" />
              X (Twitter)
            </span>
          </a>
        </div>

        {/* Ready to Collaborate */}
        <div className="max-w-4xl mx-auto">
          <ScrollFloat
            containerClassName="!my-0 mb-6"
            textClassName="!text-7xl lg:!text-9xl font-display font-extrabold tracking-tighter !leading-none font-mono text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/60"
            animationDuration={1.5}
            ease="back.inOut(2)"
            scrollStart="top bottom-=10%"
            scrollEnd="center center+=20%"
            stagger={0.04}
          >
            READY TO BUILD?
          </ScrollFloat>
          <p className="text-xl md:text-2xl font-medium text-white/80 max-w-3xl mx-auto mb-6">
            From concept to deployment, I'll help you create exceptional web experiences that your users will love.
          </p>
          <p className="text-base text-white/60 max-w-2xl mx-auto">
            Specializing in modern web development with React, Next.js, and cutting-edge technologies. Let's turn your vision into reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCtaSection;