"use client";

import {
  Upload,
  Scale,
  ExternalLink,
  Github,
  Sparkles,
} from "lucide-react";
import React, { useState } from "react";

type Project = {
  icon: React.ElementType;
  tag: string;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    icon: Upload,
    tag: "File Sharing App",
    title: "Send It",
    description:
      "SendIT was created to solve a common problem in modern file sharing. Many existing platforms require users to sign up, verify email addresses, install applications, or deal with restrictive limits on file size and transfer speed. SendIT removes this friction completely.",
    features: [
      "⚡ Instant Sharing — Upload and share files with a short one-time code",
      "📦 Up to 10GB — Large transfers made easy",
      "🔐 Optional Protection — Password-protected transfers",
      "⏱ Auto-Cleanup — Temporary storage with expiry",
      "📱 PWA-Ready — Installable on desktop and mobile",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Supabase", "PWA"],
    liveUrl: "https://sendit-now.vercel.app/",
    githubUrl: "https://github.com/Solez-ai/sendit",
  },
  {
    icon: Scale,
    tag: "AI-Powered Platform",
    title: "Speak Legal",
    description:
      "SpeakLegal is an AI-powered platform designed to make legal documents simple and accessible for everyone. Legal language is often dense, complex, and difficult to understand, creating barriers for individuals, small businesses, and students. SpeakLegal leverages Google Gemini AI to parse, analyze, and simplify legal documents.",
    features: [
      "📄 Dual-Pane Viewer — Original text alongside simplified explanations",
      "🔍 Clause Breakdown — Each clause analyzed and tagged for risk level",
      "📊 Executive Summaries — AI generates concise document summaries",
      "💬 Context-Aware Chatbot — Ask questions about the document",
      "🔑 Custom API Support — Use your own Gemini API key",
      "💾 User Dashboard — Save and manage analyzed documents",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Supabase", "Gemini AI"],
    liveUrl: "https://speak-legal.vercel.app/",
    githubUrl: "https://github.com/Solez-ai/SpeakLegal",
  },
];

const ProjectCard = ({
  icon: Icon,
  tag,
  title,
  description,
  features,
  tech,
  liveUrl,
  githubUrl,
}: Project) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative border border-white/10 bg-[rgba(0,0,0,0.4)] rounded-xl overflow-hidden transition-all duration-300 hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:scale-[1.02] active:scale-[1.01] active:border-green-500/20 md:active:scale-100" style={{ transform: 'perspective(1000px) rotateX(0deg)', transformStyle: 'preserve-3d', WebkitTapHighlightColor: 'transparent' }}>
      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 bg-[linear-gradient(135deg,transparent,rgba(34,197,94,0.3),transparent)]"></div>
      <div className="relative h-full p-6 flex flex-col z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-white/5 text-white group-hover:text-green-400 group-active:text-green-400 transition-colors group-hover:scale-110 group-active:scale-110 duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-xs font-mono text-muted-foreground border border-white/10 px-2 py-1 rounded bg-black/50">
            {tag}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>

        {isExpanded && (
          <div className="mb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
            <h4 className="text-xs font-bold text-white/80 uppercase tracking-wider">Features</h4>
            {features.map((feature, i) => (
              <p key={i} className="text-xs text-white/60 leading-relaxed">
                {feature}
              </p>
            ))}
          </div>
        )}

        <div className="mt-auto">
          <div className="pt-4 border-t border-white/5 flex items-center justify-between mb-3">
            <div className="flex gap-2 flex-wrap">
              {tech.slice(0, 4).map((t, i) => (
                <span
                  key={i}
                  className="text-[10px] bg-white/5 px-2 py-1 rounded text-muted-foreground"
                >
                  {t}
                </span>
              ))}
              {tech.length > 4 && (
                <span className="text-[10px] bg-white/5 px-2 py-1 rounded text-muted-foreground">
                  +{tech.length - 4}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 hover:border-green-500/50 px-3 py-2 rounded transition-all text-xs font-medium text-green-400 hover:text-green-300"
            >
              <ExternalLink className="w-3 h-3" />
              Live Demo
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-3 py-2 rounded transition-all text-xs font-medium text-white/70 hover:text-white"
            >
              <Github className="w-3 h-3" />
              GitHub
            </a>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-2 text-xs text-white/40 hover:text-white/60 transition-colors font-mono"
          >
            {isExpanded ? "▲ Show Less" : "▼ Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

const PortfolioProjects = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="mb-12 text-left">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
            Featured Projects
          </span>
          <span className="inline-block w-3 h-8 bg-green-500 ml-2 align-middle animate-pulse"></span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-0">
          Showcasing real-world applications built with modern web technologies
          and innovative solutions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="group relative border-dashed border-2 border-white/20 bg-transparent rounded-xl flex items-center justify-center p-12 hover:border-green-500/30 transition-all duration-300 hover:bg-green-500/5">
        <div className="text-center">
          <Sparkles className="w-12 h-12 text-green-400/50 mx-auto mb-4 group-hover:text-green-400 transition-colors" />
          <h3 className="text-2xl font-medium text-white/80 mb-2">
            More Projects Coming Soon
          </h3>
          <p className="text-white/50 text-sm">
            Currently working on exciting new applications
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioProjects;