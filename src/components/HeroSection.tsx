import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Cpu, Globe, Wifi } from "lucide-react";
import wfLogo from "@/assets/wf-logo.png";

// ── Typewriter hook ───────────────────────────────────────────────────
function useTypewriter(words: string[], speed = 85, pause = 2400) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const cur = words[wordIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx < cur.length) t = setTimeout(() => setCharIdx(c => c + 1), speed);
    else if (!deleting && charIdx === cur.length) t = setTimeout(() => setDeleting(true), pause);
    else if (deleting && charIdx > 0) t = setTimeout(() => setCharIdx(c => c - 1), speed / 2.2);
    else { setDeleting(false); setWordIdx(i => (i + 1) % words.length); }
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  useEffect(() => setDisplayed(words[wordIdx].slice(0, charIdx)), [charIdx, wordIdx, words]);
  return displayed;
}

// ── Animated wireframe globe ──────────────────────────────────────────
function TechGlobe() {
  const r = 140;           // globe radius
  const cx = 160; const cy = 160; // svg centre
  const lat = [-60, -30, 0, 30, 60];   // latitude circles
  const lng = [0, 30, 60, 90, 120, 150]; // longitude half-circles

  // Build latitude ellipse params (projected onto screen)
  const latLines = lat.map(deg => {
    const rad = (deg * Math.PI) / 180;
    const y = cy + Math.sin(rad) * r;
    const rx = Math.cos(rad) * r;
    return { cy: y, rx, ry: rx * 0.28 };
  });

  // Orbiting dots data
  const dots = [
    { r: r + 28, speed: 14, offset: 0, size: 6, color: "#6366f1" },
    { r: r + 50, speed: 22, offset: 1.6, size: 5, color: "#8b5cf6" },
    { r: r + 68, speed: 32, offset: 3.1, size: 4, color: "#a78bfa" },
  ];

  return (
    <div className="relative flex items-center justify-center"
      style={{ width: 320, height: 320 }}
    >
      {/* Ambient glow behind globe */}
      <div className="absolute inset-0 rounded-full
        bg-indigo-400/20 dark:bg-indigo-500/20 blur-[60px] scale-75"
      />

      {/* Outer halo rings */}
      {[1, 1.25, 1.5].map((s, i) => (
        <motion.div key={i}
          className="absolute inset-0 rounded-full border border-indigo-300/20 dark:border-indigo-500/15"
          animate={{ scale: [s, s * 1.04, s], opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 4 + i * 1.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
        />
      ))}

      {/* Globe SVG */}
      <motion.svg
        width={320} height={320}
        viewBox="0 0 320 320"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <defs>
          <radialGradient id="globeGlow" cx="42%" cy="38%" r="60%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
          </radialGradient>
          <clipPath id="globeClip">
            <circle cx={cx} cy={cy} r={r} />
          </clipPath>
        </defs>

        {/* Globe base fill */}
        <circle cx={cx} cy={cy} r={r} fill="url(#globeGlow)" />
        <circle cx={cx} cy={cy} r={r}
          fill="none" stroke="currentColor"
          strokeOpacity={0.18} strokeWidth={1}
          className="text-indigo-400 dark:text-indigo-500"
        />

        {/* Latitude lines */}
        <g clipPath="url(#globeClip)">
          {latLines.map((l, i) => (
            <ellipse key={i} cx={cx} cy={l.cy} rx={l.rx} ry={l.ry}
              fill="none" stroke="currentColor"
              strokeOpacity={0.2} strokeWidth={0.9}
              className="text-indigo-400 dark:text-indigo-500"
            />
          ))}

          {/* Longitude arcs */}
          {lng.map((deg, i) => {
            const a = (deg * Math.PI) / 180;
            // Vertical great-circle projected as a path
            const pts = Array.from({ length: 37 }, (_, k) => {
              const phi = (k / 36) * Math.PI * 2;
              const x = cx + Math.cos(a) * Math.cos(phi) * r;
              const y = cy + Math.sin(phi) * r;
              return `${k === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
            });
            return (
              <path key={i} d={pts.join(" ")}
                fill="none" stroke="currentColor"
                strokeOpacity={0.15} strokeWidth={0.9}
                className="text-indigo-400 dark:text-indigo-500"
              />
            );
          })}
        </g>

        {/* Highlight specular */}
        <ellipse cx={cx - 42} cy={cy - 44} rx={38} ry={28}
          fill="white" fillOpacity={0.07}
        />
      </motion.svg>

      {/* Orbiting dots (separate so they don't co-rotate with globe) */}
      {dots.map((dot, i) => (
        <motion.div key={i}
          className="absolute"
          style={{ width: dot.size, height: dot.size }}
          animate={{ rotate: 360 }}
          transition={{ duration: dot.speed, repeat: Infinity, ease: "linear", delay: dot.offset }}
        >
          <div
            className="absolute rounded-full shadow-lg"
            style={{
              width: dot.size, height: dot.size,
              background: dot.color,
              top: "50%", left: "50%",
              transform: `translate(-50%, -50%) translateX(${dot.r}px)`,
              boxShadow: `0 0 8px 2px ${dot.color}88`,
            }}
          />
        </motion.div>
      ))}

      {/* Central glowing core */}
      <motion.div
        className="relative z-10 w-14 h-14 rounded-full
          bg-gradient-to-br from-indigo-400 to-violet-500
          flex items-center justify-center shadow-xl"
        animate={{
          scale: [1, 1.08, 1], boxShadow: [
            "0 0 0 0 rgba(99,102,241,0.5)",
            "0 0 0 14px rgba(99,102,241,0)",
            "0 0 0 0 rgba(99,102,241,0)",
          ]
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={wfLogo} alt="WF Logo" className="w-10 h-10 object-contain rounded-lg" />
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
const HeroSection = () => {
  const shouldReduce = useReducedMotion();
  const typeText = useTypewriter(
    ["IoT Solutions.", "Embedded Systems.", "Custom Software.", "IT Infrastructure."],
    82, 2200
  );

  const stats = [
    { icon: Cpu, value: "50+", label: "IoT Builds" },
    { icon: Globe, value: "100+", label: "Projects" },
    { icon: Wifi, value: "30+", label: "Clients" },
  ];

  return (
    <section id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Clean gradient background ─────────────────────────── */}
      <div className="absolute inset-0
        bg-gradient-to-br from-slate-50 via-indigo-50/60 to-violet-50/40
        dark:from-[#0a0c14] dark:via-[#0d1022] dark:to-[#0e0b1a]"
      />

      {/* ── Subtle grid overlay ──────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgb(99 102 241 / 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgb(99 102 241 / 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── Soft ambient colour blobs ─────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={shouldReduce ? {} : { scale: [1, 1.15, 1], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-24 w-[600px] h-[600px] rounded-full
            bg-indigo-300/30 dark:bg-indigo-700/20 blur-[120px]"
        />
        <motion.div
          animate={shouldReduce ? {} : { scale: [1, 1.2, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-24 right-0 w-[650px] h-[650px] rounded-full
            bg-violet-300/30 dark:bg-violet-800/20 blur-[130px]"
        />
        <motion.div
          animate={shouldReduce ? {} : { scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full
            bg-sky-200/25 dark:bg-sky-900/15 blur-[100px]"
        />
      </div>

      {/* ── Main two-column layout ────────────────────────────── */}
      <div className="container relative mx-auto px-6 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-6">

          {/* ── LEFT: Text content ─────────────────────────────── */}
          <div className="flex-1 max-w-2xl">

            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5
                bg-white/80 dark:bg-white/5 backdrop-blur-md
                border border-indigo-200/50 dark:border-indigo-700/40
                shadow-sm shadow-indigo-100 dark:shadow-none
                text-xs font-semibold text-indigo-600 dark:text-indigo-300"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-indigo-500 opacity-60" />
                  <span className="relative rounded-full h-2 w-2 bg-indigo-500" />
                </span>
                Chattogram, Bangladesh · Full-service Tech Studio
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-7 font-display font-bold tracking-tight leading-[1.06]
                text-[2.6rem] sm:text-5xl lg:text-[3.75rem]"
            >
              <span className="text-foreground">Where Hardware</span>
              <br />
              <span className="text-foreground">Meets Software —</span>
              <br />
              <span className="text-gradient">Seamlessly.</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 flex items-baseline gap-2"
            >
              <span className="text-muted-foreground text-sm font-medium">Delivering</span>
              <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 min-w-[170px]">
                {typeText}
                <span className="inline-block w-px h-[1.1em] bg-indigo-500 align-middle ml-0.5"
                  style={{ animation: "typewriter-cursor 1s step-end infinite" }} />
              </span>
            </motion.div>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-5 text-muted-foreground text-base sm:text-[1.05rem] leading-[1.75] max-w-lg"
            >
              Work Force Technology is a full-service engineering studio. We build
              intelligent IoT systems, custom electronics, and enterprise software —
              bridging the physical and digital worlds with precision and care.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.46 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a href="#services"
                className="group inline-flex items-center gap-2 rounded-xl
                  bg-indigo-600 dark:bg-indigo-500
                  text-white text-sm font-semibold
                  px-6 py-3.5
                  transition-all duration-300
                  hover:bg-indigo-700 dark:hover:bg-indigo-400
                  hover:shadow-xl hover:shadow-indigo-500/30
                  hover:-translate-y-0.5
                  active:translate-y-0"
              >
                Explore Services
                <ArrowRight size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 rounded-xl
                  bg-white/70 dark:bg-white/5
                  border border-slate-200 dark:border-white/10
                  text-foreground text-sm font-semibold
                  px-6 py-3.5 backdrop-blur-sm
                  transition-all duration-300
                  hover:border-indigo-300 dark:hover:border-indigo-700
                  hover:bg-indigo-50/60 dark:hover:bg-indigo-900/20
                  hover:-translate-y-0.5 shadow-sm"
              >
                Talk to Us
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-12 flex items-center gap-8"
            >
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-3">
                  {i > 0 && <div className="h-8 w-px bg-border/60" />}
                  <div>
                    <div className="font-display text-2xl font-bold text-foreground">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                      <s.icon size={10} className="text-indigo-400" />
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Globe visual ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex flex-1 items-center justify-center"
          >
            <TechGlobe />
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-1"
      >
        <span className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/50 font-medium">
          scroll
        </span>
        <motion.div
          animate={shouldReduce ? {} : { y: [0, 5, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-muted-foreground/40" />
        </motion.div>
      </motion.div>

      {/* ── Bottom fade ───────────────────────────────────────────── */}
      <div className="absolute bottom-0 inset-x-0 h-32
        bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
