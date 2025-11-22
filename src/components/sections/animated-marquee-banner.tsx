"use client";

import React from 'react';

const AnimatedMarqueeBanner = () => {
  const words = ["BUILD", "SHIP", "SCALE"];

  const MarqueeContent = () => (
    <div className="flex shrink-0 items-center gap-10 text-[12vw] md:text-[8vw] font-black font-display leading-none">
      {[...words, ...words, ...words].map((word, index) => (
        <span
          key={index}
          className="group/word relative inline-block cursor-pointer transition-all duration-500"
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Main text - white by default, purple gradient on hover */}
          <span className="relative block text-white group-hover/word:text-transparent group-hover/word:bg-clip-text group-hover/word:bg-gradient-to-br group-hover/word:from-purple-400 group-hover/word:via-pink-300 group-hover/word:to-purple-400 transition-all duration-500 group-hover/word:scale-110"
            style={{
              transform: 'translateZ(0px)',
              transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateZ(30px) rotateY(5deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateZ(0px) rotateY(0deg)';
            }}
          >
            {word}
          </span>

          {/* 3D Glow layers - only visible on hover */}
          <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover/word:opacity-100 blur-xl transition-all duration-500 pointer-events-none"
            aria-hidden="true"
          >
            {word}
          </span>

          {/* Secondary glow */}
          <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover/word:opacity-70 blur-2xl transition-all duration-700 pointer-events-none"
            aria-hidden="true"
            style={{ transform: 'scale(1.2)' }}
          >
            {word}
          </span>

          {/* Shimmer effect */}
          <span className="absolute inset-0 opacity-0 group-hover/word:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover/word:animate-shimmer"></span>
          </span>

          {/* Edge highlight */}
          <span className="absolute -inset-1 opacity-0 group-hover/word:opacity-100 transition-opacity duration-500 pointer-events-none">
            <span className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 blur-md rounded-lg"></span>
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <section className="py-8 overflow-hidden relative border-y border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 flex w-full whitespace-nowrap">
          <div className="animate-marquee">
            <MarqueeContent />
          </div>
          <div className="animate-marquee" aria-hidden="true">
            <MarqueeContent />
          </div>
        </div>
      </div>
      <div className="h-20 md:h-32 w-full" />

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default AnimatedMarqueeBanner;