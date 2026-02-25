import { motion } from "framer-motion";
import { Linkedin, Mail, Quote, Shield } from "lucide-react";
import ceoPortrait from "@/assets/ceo-portrait.jpg";

const FounderSection = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Background visual flairs */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-indigo-50/20 dark:bg-indigo-900/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">

          {/* Left Side: Editorial Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-8 border border-indigo-100 dark:border-indigo-800/40">
              <Shield size={12} />
              Leadership
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
              Leading the <span className="text-gradient">Local Tech</span> Revolution
            </h2>

            <div className="mt-8 mb-10">
              <h3 className="font-display text-2xl font-bold text-foreground">
                Shiful Islam <span className="text-indigo-600 dark:text-indigo-400 font-medium italic">(Shayel)</span>
              </h3>
              <p className="text-muted-foreground font-medium mt-1">
                Founder & CEO, WF Technology
              </p>
            </div>

            <div className="relative mb-12 group">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full" />
              <Quote size={28} className="text-indigo-200 dark:text-indigo-900 absolute -top-4 -right-2 rotate-180 -z-10 group-hover:scale-125 transition-transform duration-500" />
              <p className="text-xl sm:text-2xl font-display italic text-foreground leading-relaxed pl-4">
                "Technology serves as a tireless extension of human capability.
                Our mission at WF Technology is to ensure every solution
                we build amplifies the potential of the people who use it."
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-[1.05rem]">
              <p>
                With a deep-rooted passion for electronics and software
                architecture, Shiful Islam established WF Technology to create a
                local powerhouse of innovation from the heart of <span className="text-foreground font-semibold">Chattogram, Bangladesh</span>.
              </p>
              <p>
                Under his visionary guidance, we have evolved from a specialized
                R&D hub into a versatile tech firm. We pride ourselves on
                <span className="text-foreground font-semibold italic"> efficiency</span> — ensuring
                that the hardware and software we create works as hard as the mission-critical
                businesses they serve.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <a
                href="mailto:saifulislamshayel1992@gmail.com"
                className="inline-flex items-center gap-2.5 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5"
              >
                <Mail size={16} />
                Send Message
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-xl border border-indigo-200 dark:border-indigo-800/40 px-6 py-3 text-sm font-bold text-muted-foreground hover:text-indigo-600 hover:border-indigo-400 transition-all hover:-translate-y-0.5"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right Side: Visual Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Artistic frame */}
            <div className="absolute -inset-8 rounded-full bg-indigo-500/5 blur-[80px] -z-10" />
            <div className="relative group">
              {/* Outer stroke animation (pseudo-border) */}
              <div className="absolute -inset-px rounded-[2.5rem] bg-gradient-to-tr from-indigo-500 via-transparent to-violet-500 opacity-20 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative bg-white dark:bg-[#0d1022] p-4 rounded-[2.5rem] shadow-2xl overflow-hidden">
                <img
                  src={ceoPortrait}
                  alt="Shiful Islam (Shayel) — Founder & CEO of WF Technology"
                  className="w-full h-auto rounded-[2rem] object-cover aspect-[4/5] grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
                />

                {/* Floating identity tag */}
                <div className="absolute bottom-10 left-10 right-10 p-6 glass-card border-white/20 dark:border-white/10 shadow-2xl backdrop-blur-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display font-bold text-xl mb-0.5">Shiful Islam</p>
                      <p className="text-xs font-bold text-indigo-500 dark:text-indigo-400 tracking-widest uppercase">Founder & CEO</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg">
                      <Quote size={18} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
