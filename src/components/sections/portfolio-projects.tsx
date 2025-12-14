"use client";

import {
  Upload,
  Scale,
  ExternalLink,
  Github,
  Sparkles,
  MessageSquare,
  FileText,
  Download,
  BarChart3,
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
  {
    icon: MessageSquare,
    tag: "Real-Time Chat App",
    title: "Dark Chat",
    description:
      "A real-time chatting application built with Encore.ts leveraging bidirectional streaming for instant message delivery. Dark Chat uses Encore.ts's built-in streaming API to create persistent connections between clients and server, enabling real-time message broadcasting without external dependencies like WebSocket libraries or message queues.",
    features: [
      "⚡ Bidirectional Streaming — Persistent type-safe connections using Encore.ts streaming API",
      "📡 Real-Time Broadcasting — Messages instantly broadcast to all connected clients",
      "🎨 Color-Coded Users — Random color assignment for easy user identification",
      "🔒 Type-Safe Communication — Fully typed message streams using TypeScript interfaces",
      "📱 Responsive Design — Seamless experience on desktop, tablet, and mobile",
      "🔄 Auto-Scroll — Chat window automatically scrolls to newest messages",
      "📊 Connection Status — Real-time monitoring with visual indicators",
      "🚀 No External Dependencies — Real-time functionality built directly into Encore.ts",
    ],
    tech: ["Encore.ts", "React", "TypeScript", "Vite", "Tailwind CSS v4", "Lucide React"],
    liveUrl: "https://dark-chat-now.vercel.app/",
    githubUrl: "",
  },
  {
    icon: FileText,
    tag: "Invoice Generator",
    title: "Paper Trail",
    description:
      "PaperTrail is a powerful, privacy-first invoice generator that runs entirely in your browser. All your data stays local—no server required, no data transmitted, complete control. Create professional invoices with beautiful templates, manage clients, track payments, and export to PDF with ease.",
    features: [
      "📄 Invoice Management — Create, edit, delete with auto-save and duplication",
      "👥 Client Management — Save client info and auto-populate in invoices",
      "🎨 Professional Templates — Three beautiful templates: Minimal, Professional, Modern",
      "💰 Flexible Line Items — Unlimited items with percentage/fixed discounts",
      "⚙️ Customization — Custom branding, multiple currencies, payment terms",
      "🔒 Complete Privacy — Runs entirely in browser with LocalStorage persistence",
      "📊 Smart Features — Advanced search, filtering, sorting by date/amount/status",
      "📱 Responsive Design — Optimized for desktop and mobile with dark/light themes",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Hook Form", "Zod", "Radix UI"],
    liveUrl: "https://make-invoice.vercel.app/",
    githubUrl: "https://github.com/Solez-ai/PaperTrail",
  },
  {
    icon: Download,
    tag: "REST API",
    title: "web-dlp API",
    description:
      "web-dlp API is a production-grade REST API for downloading YouTube videos and extracting audio, built with FastAPI and yt-dlp. It features an asynchronous job queue system, real-time progress tracking, and automatic resource management, deployed on Railway with Docker containerization.",
    features: [
      "🌐 RESTful Architecture — Clean FastAPI with OpenAPI/Swagger docs and custom interactive documentation",
      "⚙️ Async Job Processing — Thread-based queue with status tracking and progress updates",
      "📊 Real-time Monitoring — Polling-based status endpoint with live download progress (0-100%)",
      "🧹 Auto Resource Cleanup — Background thread purging expired downloads every 5 minutes",
      "🎵 Format Flexibility — MP3 (audio) and MP4 (video) downloads with quality optimization",
      "🛡️ Rate Limiting — IP-based throttling (5 req/min) to prevent abuse",
      "🐳 Docker Containerization — Multi-stage Dockerfile with FFmpeg integration",
      "🔄 Production Deployment — Automated CI/CD with Railway, health checks, and error handling",
    ],
    tech: ["FastAPI", "yt-dlp", "Docker", "Railway", "Python", "FFmpeg"],
    liveUrl: "https://web-dlp-api-production.up.railway.app/static/example.html",
    githubUrl: "https://github.com/Solez-ai/web-dlp-api",
  },
  {
    icon: BarChart3,
    tag: "AI Data Visualization",
    title: "EasyGraph",
    description:
      "EasyGraph is an AI-powered data visualization platform that transforms complex chart creation into an intuitive workflow. Using Google's Gemini AI, it generates publication-ready charts from natural language, file uploads, or visual style transfer—reducing chart creation time from minutes to seconds while maintaining professional quality.",
    features: [
      "🗣️ Natural Language Input — Describe charts conversationally, AI handles the configuration",
      "📁 Multi-Modal Data Import — CSV/TXT upload with intelligent delimiter and type detection",
      "🎨 Visual Style Transfer — Upload reference images to replicate chart aesthetics automatically",
      "🤖 Smart Chart Selection — AI recommends optimal visualization based on data characteristics",
      "💬 Context-Aware Iteration — Refine charts through conversational feedback without re-uploading",
      "📊 Professional Rendering — Chart.js-powered with responsive design and dark mode support",
      "💾 Project Management — Multiple projects with auto-save and localStorage persistence",
      "📤 High-Quality Export — PNG/JPEG export with configurable backgrounds for presentations",
    ],
    tech: ["React", "TypeScript", "Vite", "Chart.js", "Gemini AI", "Tailwind CSS"],
    liveUrl: "https://make-graph-easily.vercel.app/",
    githubUrl: "https://github.com/Solez-ai/easy-graph-v1",
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
    <div className="group relative border border-white/10 bg-[rgba(0,0,0,0.4)] rounded-xl overflow-hidden transition-all duration-300 hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:scale-[1.02]" style={{ transform: 'perspective(1000px) rotateX(0deg)', transformStyle: 'preserve-3d' }}>
      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 bg-[linear-gradient(135deg,transparent,rgba(34,197,94,0.3),transparent)]"></div>
      <div className="relative h-full p-6 flex flex-col z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-white/5 text-white group-hover:text-green-400 transition-colors group-hover:scale-110 duration-300">
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
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-3 py-2 rounded transition-all text-xs font-medium text-white/70 hover:text-white"
              >
                <Github className="w-3 h-3" />
                GitHub
              </a>
            )}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
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