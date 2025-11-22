"use client";

import {
  Lightbulb,
  Palette,
  Code,
  TestTube,
  Rocket,
  IterationCw,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "Analyze requirements and user needs. Understand the business goals, target audience, and technical constraints to build the right solution.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Design",
    description: "Create UI/UX mockups and system architecture. Plan the visual design, user flows, and technical stack for optimal performance.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Development",
    description: "Build with modern frameworks and best practices. Write clean, maintainable code using React, Next.js, TypeScript, and cutting-edge tools.",
    icon: Code,
  },
  {
    number: "04",
    title: "Testing",
    description: "Ensure quality and responsiveness across devices. Test functionality, performance, accessibility, and user experience thoroughly.",
    icon: TestTube,
  },
  {
    number: "05",
    title: "Deploy",
    description: "Ship to production with CI/CD pipelines. Deploy to cloud platforms like Vercel, AWS, or GCP with automated workflows.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Iterate",
    description: "Gather feedback and continuously improve. Monitor analytics, collect user insights, and refine features based on real-world usage.",
    icon: IterationCw,
  },
];

const WorkflowProcess = () => {
  return (
    <section id="process" className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden bg-black/20">
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
              How I Work
            </span>
            <span className="inline-block w-3 h-8 bg-green-500 ml-2 align-middle animate-pulse"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-white/70">
            A systematic approach to building exceptional web applications
          </p>
        </div>

        <div className="relative mt-16 md:mt-24">
          <div className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-500 via-green-500/50 to-transparent"></div>
          <div>
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = (index + 1) % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={cn(
                    "relative flex flex-col items-start pb-16 pl-20 lg:pl-0",
                    isEven && "lg:text-right lg:items-end lg:pr-0"
                  )}
                >
                  <div
                    className={cn(
                      "absolute top-0 text-7xl font-bold font-mono text-white/5 filter blur-[1px] left-0 lg:left-auto",
                      isEven ? "lg:right-0" : "lg:left-0"
                    )}
                  >
                    {step.number}
                  </div>

                  <div className="absolute left-[28px] lg:left-1/2 lg:-translate-x-1/2 top-6 w-5 h-5 rounded-full bg-background border-2 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)] z-10"></div>

                  <div
                    className="absolute left-[20px] lg:left-1/2 lg:-translate-x-1/2 top-0 w-12 h-12 bg-[#052e16]/80 backdrop-blur-sm border-2 border-green-500/30 rounded-full flex items-center justify-center text-green-400 z-10 transition-all duration-300 hover:scale-125 hover:border-green-500/60 hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]"
                    style={{ transform: 'perspective(500px) rotateY(0deg)', transformStyle: 'preserve-3d' }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div
                    className={cn(
                      "ml-0 max-w-md transition-all duration-300 hover:translate-x-2",
                      isEven && "lg:hover:-translate-x-2 lg:ml-auto"
                    )}
                  >
                    <h3 className="mb-2 text-2xl font-bold text-green-400">{step.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}</div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowProcess;