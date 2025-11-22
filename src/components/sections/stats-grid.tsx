"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

type Stat = {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  unit: string;
  description: string;
  decimals?: number;
};

const statsData: Stat[] = [
  {
    title: "Call Analysis",
    value: 700,
    suffix: "K",
    unit: "/mo",
    description: "Multilingual calls with 95% accuracy",
  },
  {
    title: "Revenue Impact",
    value: 17,
    prefix: "₹",
    suffix: "M",
    unit: "INR",
    description: "Generated via AI growth products",
  },
  {
    title: "Lead Velocity",
    value: 275,
    suffix: "K",
    unit: "Leads",
    description: "Achieved 91.8% reduction in CPL",
  },
  {
    title: "College Ventures",
    value: 2.0,
    prefix: "₹",
    suffix: "M",
    unit: "INR",
    description: "Revenue generated",
    decimals: 1,
  },
];

const StatCard = ({ stat }: { stat: Stat }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getInitialDisplay = (s: Stat) => {
    const value = s.decimals ? (0).toFixed(s.decimals) : '0';
    return `${value}${s.suffix || ''}`;
  }

  return (
    <div ref={ref} className="relative p-6 rounded-xl border border-white/10 bg-card overflow-hidden group hover:border-white/25 transition-colors">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-20 group-hover:opacity-100 transition-opacity"></div>
      <h3 className="text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">{stat.title}</h3>
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-4xl md:text-5xl font-display font-bold text-white group-hover:[text-shadow:0_0_20px_currentColor] transition-all tabular-nums">
          {inView ? (
            <CountUp 
              end={stat.value} 
              duration={2.5} 
              decimals={stat.decimals || 0}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          ) : (
            getInitialDisplay(stat)
          )}
        </span>
        <span className="text-lg text-white/50 font-medium">{stat.unit}</span>
      </div>
      <p className="text-sm text-muted-foreground/70">{stat.description}</p>
    </div>
  );
};

const StatsGrid = () => {
    return (
        <section className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {statsData.map((stat, index) => (
                    <StatCard key={index} stat={stat} />
                ))}
            </div>
        </section>
    );
}

export default StatsGrid;