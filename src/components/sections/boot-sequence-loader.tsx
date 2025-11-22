"use client";

import { EyeOff } from "lucide-react";
import { useEffect, useState } from "react";

const bootLines = [
  { time: "09:55:14", text: "BIOS DATE 11/19/25 14:22:54 VER 1.8.4" },
  { time: "09:55:14", text: "RAM: 64GB SYSTEM MEMORY OK" },
  { time: "09:55:14", text: "INITIALIZING KERNEL..." },
  { time: "09:55:14", text: "LOADING MODULES: [REACT] [TAILWIND] [MOTION]" },
  { time: "09:55:14", text: "ESTABLISHING SECURE CONNECTION..." },
  { time: "09:55:14", text: "OPTIMIZING NEURAL PATHWAYS..." },
  { time: "09:55:14", text: "SYSTEM INTEGRITY CHECK: PASSED" },
  { time: "09:55:14", text: "MOUNTING FILE SYSTEM..." },
  { time: "09:55:14", text: "BOOT SEQUENCE COMPLETE.", isFaded: true },
];

const BootSequenceLoader = () => {
  const [visibleLines, setVisibleLines] = useState<typeof bootLines>([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < bootLines.length) {
        setVisibleLines((prev) => [...prev, bootLines[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black text-[#00ff00] font-mono flex items-center justify-center z-[10000] selection:bg-[#00ff00]/30">
      <div className="absolute top-4 left-6 right-6 text-sm flex justify-between">
        <span>SAMIN_OS v1.0</span>
        <span>MEM: 64/64GB OK</span>
      </div>

      <div className="w-full max-w-3xl px-4">
        <div className="h-[240px]">
          {visibleLines.filter(Boolean).map((line, index) => (
            <div
              key={index}
              className={`flex gap-4 text-sm mb-1 animate-fade-in ${line?.isFaded ? "opacity-50" : ""
                }`}
            >
              <span>[{line.time}]</span>
              <p>
                {line.text.includes("LOADING MODULES:") ? (
                  <>
                    {line.text.split(": ")[0]}:{" "}
                    <span className="font-bold">{line.text.split(": ")[1]}</span>
                  </>
                ) : (
                  line.text
                )}
              </p>
            </div>
          ))}
        </div>

        {visibleLines.length === bootLines.length && (
          <div className="mt-8 animate-fade-in">
            <div className="flex items-end gap-4">
              <div className="w-full">
                <p className="text-xs uppercase tracking-[0.2em] mb-2">
                  SYSTEM LOAD
                </p>
                <div className="w-full h-1 bg-[#00ff00]/20">
                  <div
                    className="w-[98%] h-full bg-[#00ff00]"
                    style={{ boxShadow: "0 0 8px #00ff00" }}
                  ></div>
                </div>
              </div>
              <span className="text-lg font-bold">98%</span>
            </div>
          </div>
        )}
      </div>


    </div>
  );
};

export default BootSequenceLoader;