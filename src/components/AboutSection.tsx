import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap, Users, Target } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Integrated Approach",
    desc: "We bridge Hardware (IoT/Electronics) and Software (Web/Mobile), ensuring seamless end-to-end communication.",
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-900/10",
  },
  {
    icon: Award,
    title: "Global Standards",
    desc: "Based in Chattogram, we understand local market challenges while maintaining international engineering quality.",
    color: "text-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-900/10",
  },
  {
    icon: Target,
    title: "Full Customization",
    desc: "Every solution is built to your exact specifications — bespoke R&D for mission-critical industrial needs.",
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/10",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    desc: "Continuous lifecycle support from initial concept and prototyping to post-deployment maintenance.",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/10",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 bg-slate-50/50 dark:bg-[#080a14]/50 overflow-hidden">
      {/* Decorative dot grid */}
      <div className="absolute top-0 right-0 w-96 h-96 dot-grid opacity-40 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-indigo-100 dark:border-indigo-800/40">
              Why WF Technology
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-8 tracking-tight leading-tight text-foreground">
              Bridging the gap between the <span className="text-gradient">Physical</span> and <span className="text-gradient">Digital</span> worlds.
            </h2>

            <div className="space-y-6 max-w-xl">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Work Force Technology (WF Technology) is more than just a software firm or an electronics shop.
                We are a <span className="text-foreground font-semibold">Specialized R&D Hub</span> founded to solve complex integration challenges that ordinary agencies shy away from.
              </p>

              <div className="p-6 rounded-2xl bg-white dark:bg-card border border-indigo-100/50 dark:border-white/5 shadow-xl shadow-indigo-500/5">
                <p className="text-muted-foreground leading-relaxed italic">
                  "Our mission is to empower businesses with cutting-edge, integrated
                  solutions that simplify complex problems and foster sustainable growth."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/20 to-transparent" />
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">Core Mission</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group glass-card p-6 flex flex-col gap-5 hover-lift relative overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full ${r.bg} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className={`w-12 h-12 rounded-xl ${r.bg} flex items-center justify-center ${r.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <r.icon size={24} />
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg mb-2 text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-20 transition-opacity">
                  <CheckCircle2 size={40} className={r.color} />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
