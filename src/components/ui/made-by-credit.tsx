"use client";

import { useEffect, useState } from "react";

export default function MadeByCredit() {
    const [binaryText, setBinaryText] = useState("01001101 01100001 01100100 01100101");
    const text = "Made By Samin";

    useEffect(() => {
        const interval = setInterval(() => {
            // Generate random binary string
            const randomBinary = Array.from({ length: 35 }, () =>
                Math.random() > 0.5 ? '1' : '0'
            ).join('').match(/.{1,8}/g)?.join(' ') || '';

            setBinaryText(randomBinary);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed bottom-6 left-6 z-50 pointer-events-none select-none">
            <div className="relative">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 blur-xl rounded-lg"></div>

                {/* Main container */}
                <div className="relative backdrop-blur-md bg-black/60 border border-green-500/30 rounded-lg px-4 py-3 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                    {/* Binary text - animated */}
                    <div className="font-mono text-[10px] text-green-400/40 mb-1 overflow-hidden h-3">
                        <div className="animate-pulse">{binaryText}</div>
                    </div>

                    {/* Main text */}
                    <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                        <span className="font-mono text-sm font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient">
                            {text}
                        </span>
                    </div>

                    {/* Scanning line effect */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent animate-scan"></div>
                </div>

                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-green-500/50"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-500/50"></div>
            </div>

            <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
        </div>
    );
}
