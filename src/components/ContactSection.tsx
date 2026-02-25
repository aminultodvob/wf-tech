import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 bg-background overflow-hidden">
      {/* Background visual flairs */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      <div className="absolute -bottom-24 -left-20 w-[600px] h-[600px] rounded-full bg-indigo-50/20 dark:bg-indigo-900/5 blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start max-w-6xl mx-auto">

          {/* Left Column: Info */}
          <div className="w-full lg:w-[40%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-indigo-100 dark:border-indigo-800/40">
                Contact Us
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-foreground">
                Let's start your <span className="text-gradient">Innovation Journey</span>.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ready to bridge the gap between your ideas and reality?
                Reach out for consultations, R&D inquiries, or customized project partnerships.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  label: "Studio Location",
                  value: "Chattogram, Bangladesh",
                  sub: "Regional R&D Hub",
                  href: undefined,
                },
                {
                  icon: Phone,
                  label: "Immediate Inquiries",
                  value: "+880 1318-308740",
                  sub: "Available 10 AM — 10 PM",
                  href: "tel:+8801318308740",
                },
                {
                  icon: Mail,
                  label: "Official Correspondence",
                  value: "saifulislamshayel1992@gmail.com",
                  sub: "Average Response: 2 hours",
                  href: "mailto:saifulislamshayel1992@gmail.com",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-card border border-indigo-100 dark:border-white/5 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <item.icon size={20} className="text-indigo-600 dark:text-indigo-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-foreground mb-1">{item.label}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[0.95rem] text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[0.95rem] text-muted-foreground font-medium">{item.value}</p>
                    )}
                    <p className="text-[11px] text-muted-foreground/60 font-medium mt-1 uppercase tracking-wider">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Direct Message Plate */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[60%] relative"
          >
            <div className="glass-card p-8 sm:p-10 shadow-2xl relative z-10 border-indigo-100/50 dark:border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">Direct Inquiry</h3>
                  <p className="text-xs text-muted-foreground">Typically responds within a few hours</p>
                </div>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/5 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-muted-foreground/40 font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/5 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-muted-foreground/40 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message Detail</label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your hardware or software requirements..."
                    className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/5 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-muted-foreground/40 font-medium resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-4 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-xl shadow-indigo-600/20 transition-all hover:shadow-indigo-600/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                  Send Message
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Aesthetic frame offset */}
            <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-dashed border-indigo-200/50 dark:border-indigo-800/30 rounded-2xl -z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
