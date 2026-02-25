import { motion } from "framer-motion";
import { Code2, Cpu, CircuitBoard, Shield, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Enterprise ERP systems, high-performance web & mobile applications, and intelligent automation software tailored to your business.",
    features: ["ERP Systems", "Web & Mobile Apps", "Automation"],
    color: "indigo",
  },
  {
    icon: Cpu,
    title: "Internet of Things",
    description:
      "Connecting the physical to the digital — smart home/office solutions, Industrial IoT monitoring, and GPS-based asset tracking.",
    features: ["Smart Solutions", "Industrial IIoT", "Asset Tracking"],
    color: "violet",
  },
  {
    icon: CircuitBoard,
    title: "Electronics & Embedded",
    description:
      "Custom PCB design & prototyping, microcontroller programming (Arduino, ESP32, ARM), and consumer electronics assembly.",
    features: ["PCB Design", "MCU Coding", "Smart Gadgets"],
    color: "blue",
  },
  {
    icon: Shield,
    title: "IT Infrastructure",
    description:
      "Network security, cloud integration, and strategic tech consultancy — the backbone for modern business operations.",
    features: ["Security", "Cloud Setup", "Consultancy"],
    color: "slate",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32 bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-indigo-50/30 dark:bg-indigo-900/5 blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400 mb-4 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800/40">
            Core Expertise
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
            Four Pillars of <span className="text-gradient">Innovation</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From embedded systems to enterprise software — we deliver integrated
            solutions that bridge the gap between hardware and software.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative glass-card p-8 hover-lift border-indigo-100/50 dark:border-white/5"
            >
              {/* Card top flare */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center mb-8 border border-indigo-100 dark:border-indigo-800/30 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <service.icon size={26} className="text-indigo-600 dark:text-indigo-400 group-hover:text-white transition-colors" />
                </div>

                <h3 className="font-display text-xl font-bold mb-4 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-[0.95rem] leading-relaxed mb-8 min-h-[5rem]">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="text-[10px] font-bold uppercase tracking-wider rounded-md bg-slate-50 dark:bg-slate-900/50 px-2.5 py-1 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/40">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn about this
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
