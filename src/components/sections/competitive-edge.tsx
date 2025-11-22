"use client";

import { useState } from "react";
import { Code2, Sparkles, Layers, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Edge = {
  icon: React.ComponentType<LucideProps>;
  title: string;
  subtitle: string;
  description: string;
  details?: string[];
  accentClasses: {
    gradientFrom: string;
    iconBg: string;
    iconBorder: string;
    iconText: string;
  };
};

const edgeData: Edge[] = [
  {
    icon: Code2,
    title: "Advanced Web Development",
    subtitle: "Full-Stack Expertise",
    description: "I build complete web applications from front to back, leveraging modern frameworks and best practices to deliver scalable, maintainable solutions.",
    details: [
      "Frontend: React, Next.js, TypeScript with responsive design",
      "Backend: Node.js, serverless architectures, RESTful APIs",
      "Databases: Supabase, Firebase, Convex for real-time data",
      "Cloud: Deployment on Vercel, AWS, and GCP",
    ],
    accentClasses: {
      gradientFrom: "from-cyan-500/50",
      iconBg: "bg-cyan-950/20",
      iconBorder: "border-cyan-500/20",
      iconText: "text-cyan-400",
    },
  },
  {
    icon: Sparkles,
    title: "Advanced Vibe Coding",
    subtitle: "AI-Assisted Development",
    description: "I leverage cutting-edge AI-powered development tools to build faster and smarter, using modern vibe coding platforms that enhance productivity and code quality.",
    details: [
      "Replit, Lovable, Cursor for rapid prototyping",
      "Antigravity, Google AI Studio for AI integration",
      "Chef by Convex, Leap by Encore for backend",
      "MCPs and modern AI workflows for efficiency",
    ],
    accentClasses: {
      gradientFrom: "from-purple-500/50",
      iconBg: "bg-purple-950/20",
      iconBorder: "border-purple-500/20",
      iconText: "text-purple-400",
    },
  },
];

const EdgeCard = ({ edge }: { edge: Edge }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { icon: Icon, title, subtitle, description, details, accentClasses } = edge;

  return (
    <div className="group/card" onClick={() => setIsExpanded(!isExpanded)}>
      <div
        className={cn(
          "relative w-full rounded-xl p-px transition-all duration-300 before:pointer-events-none before:absolute before:-left-1 before:-top-1 before:h-[calc(100%_+_4px)] before:w-[calc(100%_+_4px)] before:rounded-xl before:bg-gradient-to-br before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 group-hover/card:before:opacity-100 hover:scale-[1.02]",
          accentClasses.gradientFrom
        )}
        style={{ transform: 'perspective(1000px) rotateX(0deg)', transformStyle: 'preserve-3d' }}
      >
        <div className="relative h-full w-full cursor-pointer overflow-hidden rounded-[11px] border border-white/10 bg-card p-6 transition-all duration-300 group-hover/card:border-transparent group-hover/card:shadow-2xl">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "p-3 rounded-lg border transition-transform duration-300 group-hover/card:scale-110",
                  accentClasses.iconBg,
                  accentClasses.iconBorder,
                  accentClasses.iconText
                )}
              >
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-sm text-muted-foreground">{subtitle}</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-white/70 mb-4">{description}</p>

          <div
            className="grid transition-all duration-300 ease-in-out"
            style={{
              gridTemplateRows: isExpanded ? "1fr" : "0fr",
              opacity: isExpanded ? 1 : 0,
            }}
          >
            <div className="overflow-hidden">
              <div className="mt-4 space-y-2">
                {details?.map((detail, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className={cn("mt-1.5 h-1.5 w-1.5 rounded-full", accentClasses.iconBg)}></div>
                    <p className="text-xs text-white/60">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {!isExpanded && (
            <div className="mt-4 text-xs font-mono text-white/40">
              Click to expand
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TechStackSection = () => {
  const techCategories = [
    {
      title: "Languages & Frameworks",
      techs: [
        { name: "HTML", url: "https://skillicons.dev/icons?i=html" },
        { name: "CSS", url: "https://skillicons.dev/icons?i=css" },
        { name: "JavaScript", url: "https://skillicons.dev/icons?i=js" },
        { name: "TypeScript", url: "https://skillicons.dev/icons?i=typescript" },
        { name: "React", url: "https://skillicons.dev/icons?i=react" },
        { name: "Next.js", url: "https://skillicons.dev/icons?i=nextjs&theme=light" },
        { name: "Tailwind", url: "https://skillicons.dev/icons?i=tailwind" },
        { name: "Python", url: "https://skillicons.dev/icons?i=python" },
        { name: "Node.js", url: "https://skillicons.dev/icons?i=nodejs" },
      ],
    },
    {
      title: "Databases",
      techs: [
        { name: "Supabase", url: "https://skillicons.dev/icons?i=supabase" },
        { name: "Firebase", url: "https://skillicons.dev/icons?i=firebase" },
        { name: "PostgreSQL", url: "https://skillicons.dev/icons?i=postgresql" },
      ],
    },
    {
      title: "Cloud & DevOps",
      techs: [
        { name: "AWS", url: "https://skillicons.dev/icons?i=aws&theme=light" },
        { name: "GCP", url: "https://skillicons.dev/icons?i=gcp" },
        { name: "Vercel", url: "https://skillicons.dev/icons?i=vercel&theme=light" },
        { name: "Docker", url: "https://skillicons.dev/icons?i=docker" },
      ],
    },
  ];

  return (
    <div className="mt-16 relative group">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-cyan-500/5 to-purple-500/5 blur-3xl opacity-50 pointer-events-none"></div>

      <div className="relative p-8 md:p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 via-black/60 to-black/40 backdrop-blur-sm overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>

        <div className="relative z-10">
          <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <Layers className="w-8 h-8 text-green-400 animate-pulse" />
            <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h3>

          <div className="space-y-10">
            {techCategories.map((category, idx) => (
              <div key={idx} className="transform transition-all duration-300 hover:scale-[1.01]">
                <h4 className="text-sm font-bold text-green-400/80 uppercase tracking-wider mb-6 flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
                  <span>{category.title}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
                </h4>

                <div className="flex flex-wrap gap-8 justify-center items-center">
                  {category.techs.map((tech, i) => (
                    <div
                      key={i}
                      className="group/tech relative"
                      style={{
                        perspective: '1000px',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      {/* 3D Container */}
                      <div
                        className="relative flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-green-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] cursor-pointer"
                        style={{
                          transform: 'rotateX(0deg) rotateY(0deg)',
                          transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                        }}
                        onMouseMove={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const x = e.clientX - rect.left;
                          const y = e.clientY - rect.top;
                          const centerX = rect.width / 2;
                          const centerY = rect.height / 2;
                          const rotateX = ((y - centerY) / centerY) * -10;
                          const rotateY = ((x - centerX) / centerX) * 10;
                          e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.1)`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
                        }}
                      >
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/0 via-cyan-500/0 to-green-500/0 opacity-0 group-hover/tech:opacity-20 blur-xl transition-opacity duration-500"></div>

                        {/* Icon */}
                        <div className="relative z-10 w-12 h-12 flex items-center justify-center">
                          <Image
                            src={tech.url}
                            alt={tech.name}
                            width={48}
                            height={48}
                            className="transition-all duration-500 group-hover/tech:drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]"
                            style={{
                              filter: 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.2))',
                            }}
                          />
                        </div>

                        {/* Name */}
                        <span className="relative z-10 text-xs text-white/70 font-medium group-hover/tech:text-white transition-colors duration-300 text-center">
                          {tech.name}
                        </span>

                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-500/0 group-hover/tech:border-green-500/60 transition-colors duration-300"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500/0 group-hover/tech:border-cyan-500/60 transition-colors duration-300"></div>
                      </div>

                      {/* Floating particles effect */}
                      <div className="absolute inset-0 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
                        <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
      </div>
    </div>
  );
};

export default function CompetitiveEdge() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-white">
        My Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {edgeData.map((edge) => (
          <EdgeCard key={edge.title} edge={edge} />
        ))}
      </div>
      <TechStackSection />
    </section>
  );
}