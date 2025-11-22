import { CircuitBoard, Users, type LucideIcon } from 'lucide-react';

const labProjects: {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
}[] = [
  {
    icon: CircuitBoard,
    tag: 'R&D',
    title: 'Voice Pipeline R&D',
    description:
      'Architecting a custom stack for natural-sounding, low-latency AI agentic voice calls. Optimizing for sub-second response times and emotional intonation.',
  },
  {
    icon: Users,
    tag: 'Consumer AI',
    title: 'Flatmatch',
    description:
      'AI-powered platform revolutionizing how people find flatmates. Using LLMs to analyze compatibility, lifestyle matching, and trust scoring.',
  },
];

const SideProjectsLab = () => {
  return (
    <section className="py-10 md:py-16 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="mb-12 text-left">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">The Lab</h2>
        <p className="text-muted-foreground max-w-2xl">
          Exploring the bleeding edge of AI. Current side projects focused on voice latency and consumer utility.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {labProjects.map(({ icon: Icon, tag, title, description }, index) => (
          <div key={index} className="group relative border border-white/10 bg-card rounded-xl overflow-hidden">
            <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(400px_circle_at_center,_rgba(6,182,212,0.15),_transparent_80%)]"></div>
            <div className="relative h-full p-6 flex flex-col z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-white/5 text-white group-hover:text-green-400 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-muted-foreground border border-white/10 px-2 py-1 rounded bg-black/50">
                  {tag}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">{title}</h3>
              <div className="flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SideProjectsLab;