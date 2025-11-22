"use client";

import { Activity } from "lucide-react";

const NeuralFeedWidget = () => {
  return (
    <div className="fixed bottom-6 left-6 z-40 pointer-events-none hidden md:block">
      <div className="flex flex-col gap-2">
        <div className="mb-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-green-500/50">
          <Activity className="h-3 w-3 animate-pulse" />
          <span>Neural Feed // Live</span>
        </div>
        <div className="relative min-w-[280px] overflow-hidden rounded-lg border border-green-500/20 bg-black/80 p-3 shadow-[0_0_20px_rgba(0,255,0,0.05)] backdrop-blur-md">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] font-bold text-green-400">
                [09:55:18] VOICE
              </span>
              <span className="font-mono text-xs text-white/80">
                Synthesizing audio stream
              </span>
            </div>
            <div className="mt-0.5 whitespace-nowrap font-mono text-[9px] text-green-500/50">
              T: 210ms
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 h-[200%] w-full animate-scan bg-gradient-to-b from-transparent via-green-500/5 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default NeuralFeedWidget;