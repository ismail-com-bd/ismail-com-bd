import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Github, Linkedin, Mail, Phone, 
  ChevronRight, Send, Zap, Cpu, Wrench,
  Settings2, Terminal, Shield, Gauge, Binary,
  HardHat, Layout, Layers, Workflow, CheckCircle2, Loader2, Info, AlertTriangle,
  Download, FileText
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { SKILL_GROUPS, EXPERIENCES, PROJECTS } from './constants';

const FrameMarkers = () => (
  <>
    <div className="absolute top-0 left-0 w-6 md:w-8 h-[2px] bg-[#00C8FF] shadow-[0_0_10px_#00C8FF]" />
    <div className="absolute top-0 left-0 w-[2px] h-6 md:h-8 bg-[#00C8FF] shadow-[0_0_10px_#00C8FF]" />
    <div className="absolute bottom-0 right-0 w-6 md:w-8 h-[2px] bg-[#BC00FF] shadow-[0_0_10px_#BC00FF]" />
    <div className="absolute bottom-0 right-0 w-[2px] h-6 md:h-8 bg-[#BC00FF] shadow-[0_0_10px_#BC00FF]" />
  </>
);

const GlowText = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <span className={`bg-gradient-to-r from-[#00C8FF] via-[#BC00FF] to-[#00C8FF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow font-black ${className}`}>
    {children}
  </span>
);

const Preloader = () => (
  <motion.div 
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[10000] bg-[#05070A] flex flex-col items-center justify-center overflow-hidden"
  >
    <div className="scanner-line" />
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-center relative z-10 px-6"
    >
      <div className="mb-8 flex justify-center">
        <div className="w-16 h-16 md:w-24 md:h-24 industrial-panel flex items-center justify-center border-[#00C8FF]/50 shadow-[0_0_50px_rgba(0,200,255,0.2)]">
          <Settings2 size={40} className="text-[#00C8FF] animate-spin-slow" />
        </div>
      </div>
      <h2 className="text-xl md:text-4xl font-black tracking-[0.4em] text-white uppercase mb-4">ENGINEERING BOOT</h2>
      <div className="flex gap-1.5 md:gap-2 justify-center mb-6">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ height: [10, 30, 10], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
            className="w-1 md:w-1.5 bg-gradient-to-t from-[#00C8FF] to-[#BC00FF]"
          />
        ))}
      </div>
      <p className="tech-data uppercase tracking-[0.2em] text-[#00C8FF] font-bold animate-pulse text-[8px] md:text-[10px]">Initializing Operational Matrix...</p>
    </motion.div>
  </motion.div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const navLinks = [
    { label: 'VISION', href: '#vision' },
    { label: 'SKILLS', href: '#capabilities' },
    { label: 'WORK', href: '#operations' },
    { label: 'PROJECTS', href: '#cases' },
  ];

  const handleNav = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 400);
  };

  return (
    <>
      <nav className={`fixed w-full z-[5000] transition-all duration-500 ${scrolled ? 'py-3 bg-[#05070A]/95 backdrop-blur-xl border-b border-white/5' : 'py-5 md:py-8 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 md:gap-3 group relative z-[5001]">
            <div className="w-9 h-9 md:w-11 md:h-11 industrial-panel flex items-center justify-center bg-gradient-to-br from-[#00C8FF]/10 to-[#BC00FF]/5 border-[#00C8FF]/30 group-hover:rotate-12 transition-transform">
              <Cpu className="text-[#00C8FF] group-hover:text-[#BC00FF] transition-colors" size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-tighter text-white uppercase leading-none">
                ISMAIL<span className="text-[#00C8FF]">.</span>ME
              </span>
              <span className="text-[6px] md:text-[8px] font-black tracking-[0.3em] text-gray-500 uppercase mt-1">Reliability Systems</span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map(link => (
              <button 
                key={link.label} 
                onClick={() => handleNav(link.href)}
                className="text-[10px] xl:text-[11px] font-black tracking-[0.4em] text-gray-400 hover:text-[#00C8FF] transition-all relative group uppercase"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00C8FF] to-[#BC00FF] transition-all group-hover:w-full" />
              </button>
            ))}
            <button onClick={() => handleNav('#engagement')} className="px-6 py-3 bg-gradient-to-r from-[#00C8FF] to-[#BC00FF] text-white text-[10px] font-black uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,200,255,0.2)]">
              DEPLOY COMMS
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="lg:hidden relative z-[6000]">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 text-white active:scale-90 transition-all rounded-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-[5500] bg-[#05070A] overflow-hidden nav-gradient-bg"
          >
            <div className="absolute inset-0 tactical-grid-overlay opacity-30" />
            <div className="h-full flex flex-col justify-center px-8 relative z-10">
              <motion.div 
                initial="closed"
                animate="open"
                className="space-y-6 sm:space-y-8"
              >
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                  >
                    <button 
                      onClick={() => handleNav(link.href)}
                      className="group flex items-end gap-3 text-left"
                    >
                      <span className="text-[10px] font-black text-[#00C8FF]/40 mb-2 font-mono">0{idx + 1}_</span>
                      <span className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter group-hover:text-[#BC00FF] glitch-hover transition-all leading-none">
                        {link.label}
                      </span>
                    </button>
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-10"
                >
                  <button 
                    onClick={() => handleNav('#engagement')}
                    className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black uppercase text-lg tracking-[0.2em] shadow-[0_0_30px_rgba(255,255,255,0.1)] active:bg-[#00C8FF] active:text-white transition-all"
                  >
                    DEPLOY COMMS
                  </button>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-8 left-8 right-8 flex justify-between items-end border-t border-white/5 pt-6"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[8px] font-black text-gray-600 uppercase tracking-[0.3em]">Direct Signal</span>
                  <div className="flex gap-4 text-gray-400">
                    <Linkedin size={18} />
                    <Github size={18} />
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[8px] font-black text-[#00C8FF] uppercase tracking-[0.2em] block">Status: Active</span>
                  <span className="text-[8px] font-black text-gray-800 uppercase tracking-[0.2em] block">CORE_v2.0.1</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SectionHeading = ({ sub, title }: { sub: string, title: string }) => (
  <div className="mb-12 md:mb-24 relative">
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: '80px' }}
      viewport={{ once: true }}
      className="h-[2px] bg-gradient-to-r from-[#00C8FF] to-transparent mb-4"
    />
    <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] text-[#00C8FF] mb-3 block">{sub}</span>
    <h2 className="text-fluid-heading font-black text-white uppercase tracking-tighter leading-[0.9] overflow-hidden">
      {title.split(' ').map((word, i) => (
        <motion.span 
          key={i} 
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={i % 2 !== 0 ? 'text-transparent stroke-text opacity-30 block sm:inline' : 'block sm:inline mr-4 md:mr-8'}
        >
          {word}{" "}
        </motion.span>
      ))}
    </h2>
  </div>
);

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#05070A]">
      {/* Parallax Background Pattern */}
      <motion.div 
        style={{ y: parallaxY }}
        className="absolute inset-0 industrial-pattern opacity-10 pointer-events-none z-0"
      />
      
      {/* Decorative Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[#00C8FF]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-10 inline-flex items-center gap-3 px-5 md:px-8 py-2 md:py-3 border border-[#00C8FF]/20 bg-[#00C8FF]/5 industrial-panel rounded-full"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#00C8FF] animate-ping" />
          <span className="text-[8px] md:text-[11px] font-black uppercase tracking-[0.3em] text-[#00C8FF]">Core System Active</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-fluid-hero font-black text-white leading-[0.85] mb-8 md:mb-14 tracking-tighter uppercase"
        >
          <span className="block">INDUSTRIAL</span>
          <GlowText className="block">RELIABILITY</GlowText>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-4xl mx-auto text-gray-500 text-sm sm:text-lg md:text-2xl lg:text-3xl font-light mb-12 md:mb-20 leading-relaxed uppercase tracking-wide"
        >
          Optimizing industrial assets through <span className="text-white font-bold">mechanical precision</span> and <span className="text-[#BC00FF] font-bold">PLC logic integration</span>.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-5 md:gap-8 items-center"
        >
          <button onClick={() => document.querySelector('#engagement')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-12 md:px-20 py-5 md:py-7 bg-[#00C8FF] text-black font-black uppercase tracking-[0.2em] text-base md:text-xl hover:bg-white transition-all active:scale-95 shadow-[0_0_40px_rgba(0,200,255,0.2)]">
            DEPLOY COMMS <ChevronRight className="inline ml-2 group-hover:translate-x-1" size={20} />
          </button>
          <div className="w-full sm:w-auto p-5 md:p-6 industrial-panel flex items-center justify-center gap-4 border-white/5 group cursor-default">
            <Terminal size={22} className="text-[#BC00FF]" />
            <div className="text-left">
              <span className="block text-[8px] md:text-[10px] text-gray-600 font-black uppercase tracking-widest leading-none mb-1">Access ID</span>
              <span className="block text-sm md:text-xl text-white font-black uppercase leading-none">ISMAIL_HOSSEN</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Capabilities = () => (
  <section id="capabilities" className="py-24 md:py-48 bg-[#0F1218] relative">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading sub="Capability Matrix" title="Technical Domains." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
        {SKILL_GROUPS.map((group, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="industrial-panel p-8 md:p-12 group hover:border-[#00C8FF]/50 transition-all border-[#BC00FF]/10"
          >
            <FrameMarkers />
            <div className="mb-8 md:mb-12 p-4 w-fit industrial-panel bg-[#00C8FF]/10 text-[#00C8FF] group-hover:bg-[#00C8FF] group-hover:text-black transition-all">
              {group.icon === 'wrench' && <Wrench size={26} />}
              {group.icon === 'cpu' && <Cpu size={26} />}
              {group.icon === 'zap' && <Zap size={26} />}
              {group.icon === 'code' && <Binary size={26} />}
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white mb-6 md:mb-8 uppercase tracking-tighter group-hover:text-[#00C8FF] transition-colors">{group.category}</h3>
            <ul className="space-y-3.5 md:space-y-5">
              {group.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-500 group-hover:text-white transition-colors">
                  <div className="w-1.5 h-1.5 bg-[#BC00FF] shadow-[0_0_8px_#BC00FF] shrink-0" />
                  <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.1em] leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const OperationsRecord = () => (
  <section id="operations" className="py-24 md:py-48 bg-[#05070A] relative">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeading sub="Operations Log" title="Professional Track." />
      <div className="space-y-6 md:space-y-10 mt-16 md:mt-24">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="industrial-panel p-8 md:p-14 hover:bg-white/5 border-white/5 group transition-all"
          >
            <div className="grid lg:grid-cols-12 gap-8 md:gap-14 items-start">
              <div className="lg:col-span-4">
                <span className="inline-block px-3 py-1.5 border border-[#00C8FF]/30 text-[#00C8FF] text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] mb-4">{exp.period}</span>
                <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter group-hover:text-[#BC00FF] transition-colors leading-tight">{exp.company}</h3>
                <h4 className="text-sm md:text-xl font-bold text-gray-500 mt-2 uppercase tracking-widest">{exp.role}</h4>
              </div>
              <div className="lg:col-span-8 lg:border-l border-white/10 lg:pl-14">
                <ul className="space-y-4 md:space-y-6">
                  {exp.description.map((point, idx) => (
                    <li key={idx} className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 font-medium uppercase leading-relaxed tracking-wide flex gap-4 md:gap-6">
                      <span className="text-[#00C8FF] font-black shrink-0">>></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudies = () => (
  <section id="cases" className="py-24 md:py-48 bg-[#0F1218]">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading sub="Tactical Output" title="Project Records." />
      <div className="grid lg:grid-cols-2 gap-6 md:gap-10">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="industrial-panel p-10 md:p-20 bg-[#05070A] hover:bg-gradient-to-br hover:from-[#00C8FF]/10 hover:to-[#BC00FF]/5 group border-white/5 transition-all"
          >
            <div className="flex justify-between items-start mb-10 md:mb-16">
              <div className="w-16 h-16 md:w-24 md:h-24 industrial-panel flex items-center justify-center bg-white/5 group-hover:bg-[#BC00FF] group-hover:text-black transition-all">
                {project.icon === 'wrench' && <Wrench size={32} />}
                {project.icon === 'cpu' && <Gauge size={32} />}
                {project.icon === 'shield' && <Shield size={32} />}
                {project.icon === 'zap' && <Zap size={32} />}
              </div>
              <Binary className="text-[#00C8FF]/20 group-hover:text-[#00C8FF] transition-colors" size={36} />
            </div>
            <h3 className="text-2xl md:text-5xl font-black text-white mb-6 md:mb-10 uppercase tracking-tighter leading-none">{project.title}</h3>
            <p className="text-gray-500 text-sm md:text-xl font-light mb-10 md:mb-16 uppercase leading-relaxed tracking-wide">{project.description}</p>
            <div className="flex flex-wrap gap-3 md:gap-6 pt-8 md:pt-14 border-t border-white/10">
              {project.tags.map(tag => (
                <span key={tag} className="text-[9px] md:text-[12px] font-black text-[#00C8FF] uppercase tracking-[0.3em]">#{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const EngagementTerminal = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const targetEmail = "engr.ismail.me@gmail.com";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      // Direct API Call to FormSubmit
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
        // Feedback stays longer so they can read the warning
        setTimeout(() => setFormStatus('idle'), 15000);
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      console.error("Form transmission failure", err);
      setFormStatus('error');
    }
  };

  return (
    <section id="engagement" className="py-24 md:py-48 bg-[#05070A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <SectionHeading sub="Contact Node" title="Direct Access." />
            <div className="space-y-8 md:space-y-14">
              {[
                { icon: <Mail size={22} />, label: "Email Terminal", val: targetEmail, href: `mailto:${targetEmail}` },
                { icon: <Phone size={22} />, label: "Direct Signal", val: "+8801890-878216", href: "tel:+8801890878216" },
                { icon: <Linkedin size={22} />, label: "LinkedIn Network", val: "Md Ismail Hossen", href: "https://linkedin.com/in/ismail-hossen-engineer" },
                { icon: <Github size={22} />, label: "Code Repository", val: "Ismail-Engr", href: "https://github.com/Ismail-Engr" },
              ].map((item, i) => (
                <motion.a 
                  key={i} 
                  href={item.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 md:gap-12 group"
                >
                  <div className="w-14 h-14 md:w-24 md:h-24 industrial-panel flex items-center justify-center bg-white/5 text-gray-500 group-hover:bg-[#00C8FF] group-hover:text-black group-hover:scale-105 transition-all shrink-0">
                    {item.icon}
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[9px] md:text-[12px] font-black uppercase tracking-[0.4em] text-[#00C8FF]/60 block mb-1">_{item.label}</span>
                    <p className="text-base sm:text-xl md:text-3xl font-black text-white uppercase tracking-tight group-hover:text-[#BC00FF] transition-colors truncate">{item.val}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="industrial-panel p-8 md:p-16 lg:p-20 bg-[#0F1218]/50 border-[#BC00FF]/20 relative">
              <FrameMarkers />
              <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-10 md:mb-16">SEND DATA PACKET</h3>
              
              <form className="space-y-10 md:space-y-16" onSubmit={handleSubmit}>
                 {/* Configuration for FormSubmit - These fields help prevent spam and format the email */}
                 <input type="hidden" name="_subject" value="URGENT: New System Message from Portfolio" />
                 <input type="hidden" name="_template" value="table" />
                 <input type="hidden" name="_captcha" value="false" />
                 <input type="hidden" name="_honey" style={{ display: 'none' }} />

                 <div className="grid sm:grid-cols-2 gap-10 md:gap-16">
                    <div className="relative group">
                      <input 
                        name="Full Name"
                        type="text" 
                        className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-[#00C8FF] text-white font-bold uppercase tracking-widest transition-all" 
                        required 
                      />
                      <span className="absolute left-0 top-4 text-[10px] md:text-[12px] font-black text-gray-600 uppercase tracking-[0.3em] pointer-events-none transition-all group-focus-within:-top-6 group-focus-within:text-[#00C8FF]">Entity ID (Name)</span>
                    </div>
                    <div className="relative group">
                      <input 
                        name="Email Address"
                        type="email" 
                        className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-[#BC00FF] text-white font-bold uppercase tracking-widest transition-all" 
                        required 
                      />
                      <span className="absolute left-0 top-4 text-[10px] md:text-[12px] font-black text-gray-600 uppercase tracking-[0.3em] pointer-events-none transition-all group-focus-within:-top-6 group-focus-within:text-[#BC00FF]">Comms Node (Email)</span>
                    </div>
                 </div>
                 <div className="relative group">
                   <textarea 
                     name="Message Content"
                     rows={2} 
                     className="w-full bg-transparent border-b-2 border-white/10 py-4 outline-none focus:border-[#00C8FF] text-white font-bold uppercase tracking-widest transition-all resize-none" 
                     required 
                   />
                   <span className="absolute left-0 top-4 text-[10px] md:text-[12px] font-black text-gray-600 uppercase tracking-[0.3em] pointer-events-none transition-all group-focus-within:-top-6 group-focus-within:text-[#00C8FF]">Directive Data (Message)</span>
                 </div>
                 
                 <div className="flex flex-col gap-6">
                    <button 
                      disabled={formStatus === 'sending'}
                      className={`w-full py-6 md:py-10 text-xl md:text-2xl font-black uppercase transition-all active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.05)] flex items-center justify-center gap-4 ${
                        formStatus === 'success' ? 'bg-[#22C55E] text-white' : 
                        formStatus === 'error' ? 'bg-[#EF4444] text-white' : 
                        'bg-white text-black hover:bg-[#00C8FF] hover:text-white'
                      }`}
                    >
                      {formStatus === 'idle' && (
                        <>INITIATE TRANSMISSION <Send size={20} /></>
                      )}
                      {formStatus === 'sending' && (
                        <>TRANSMITTING... <Loader2 size={24} className="animate-spin" /></>
                      )}
                      {formStatus === 'success' && (
                        <>SUCCESSFULLY DEPLOYED <CheckCircle2 size={24} /></>
                      )}
                      {formStatus === 'error' && (
                        <>TRANSMISSION FAILED - RETRY</>
                      )}
                    </button>

                    {formStatus === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }} 
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-6 bg-[#00C8FF]/10 border-2 border-[#00C8FF]/40 rounded-sm"
                      >
                        <div className="flex gap-4 items-start mb-4">
                           <AlertTriangle className="text-[#00C8FF] shrink-0" size={24} />
                           <h4 className="text-[#00C8FF] font-black uppercase text-sm tracking-widest">CRITICAL STEP REQUIRED</h4>
                        </div>
                        <p className="text-[11px] md:text-[13px] text-gray-300 font-bold uppercase tracking-wider leading-relaxed">
                          আপনার মেইলে (<span className="text-white">{targetEmail}</span>) একটি কনফার্মেশন মেইল পাঠানো হয়েছে। 
                          <br /><br />
                          ১. আপনার <span className="text-[#00C8FF]">Inbox</span> অথবা <span className="text-[#BC00FF]">Spam/Junk</span> ফোল্ডার চেক করুন। 
                          <br />
                          ২. মেইলে থাকা <span className="text-white font-black underline">"ACTIVATE FORM"</span> বাটনে ক্লিক করুন। 
                          <br /><br />
                          <span className="text-gray-500 italic">একবার কনফার্ম করার পর থেকে সব মেসেজ সরাসরি আপনার ইনবক্সে আসবে।</span>
                        </p>
                      </motion.div>
                    )}
                    
                    {formStatus === 'error' && (
                      <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] font-black uppercase tracking-widest">
                        Node Rejection. Please check your internet or try again later.
                      </div>
                    )}
                 </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-16 md:py-32 bg-[#05070A] border-t border-white/5 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16 mb-16 md:mb-24">
        <div>
          <span className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase block leading-none">
            ISMAIL<span className="text-[#00C8FF]">.</span>ENG
          </span>
          <span className="text-[9px] md:text-[12px] font-black uppercase tracking-[0.5em] text-gray-700 mt-3 block">Industrial Intelligence Platform</span>
          
          <div className="mt-12 md:mt-20">
             <a 
               href="#" 
               download="CV_Md_Ismail_Hossen.pdf"
               className="inline-flex items-center gap-6 px-8 md:px-12 py-5 md:py-7 industrial-panel border-[#00C8FF]/30 group hover:border-[#00C8FF] hover:bg-[#00C8FF]/5 transition-all relative overflow-hidden active:scale-95"
             >
                <FrameMarkers />
                <div className="p-3 bg-[#00C8FF]/10 text-[#00C8FF] rounded-none group-hover:bg-[#00C8FF] group-hover:text-black transition-all">
                   <Download size={24} />
                </div>
                <div className="text-left">
                  <span className="block text-[8px] md:text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-1">Asset Acquisition</span>
                  <span className="block text-lg md:text-2xl font-black text-white uppercase tracking-tighter group-hover:text-[#00C8FF]">DOWNLOAD CV</span>
                </div>
                <div className="ml-4 md:ml-8 hidden sm:block">
                   <FileText className="text-white/5 group-hover:text-[#00C8FF]/20 transition-all" size={40} />
                </div>
             </a>
          </div>
        </div>
        
        <div className="flex gap-16 md:gap-24 w-full md:w-auto justify-between md:justify-start">
          <div className="flex flex-col gap-4 md:gap-6">
            <span className="text-[10px] font-black text-[#BC00FF] uppercase tracking-[0.4em]">Systems</span>
            {['Vision', 'Skills', 'Ops', 'Cases'].map(link => (
              <button key={link} onClick={() => document.querySelector(`#${link.toLowerCase() === 'ops' ? 'operations' : link.toLowerCase() === 'vision' ? 'vision' : link.toLowerCase() === 'skills' ? 'capabilities' : 'cases'}`)?.scrollIntoView({ behavior: 'smooth' })} className="text-left text-[11px] font-bold text-gray-500 hover:text-white transition-all uppercase tracking-widest">{link}</button>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:gap-6 text-right md:text-left">
            <span className="text-[10px] font-black text-[#00C8FF] uppercase tracking-[0.4em]">Node Connect</span>
            <a href="https://linkedin.com/in/ismail-hossen-engineer" target="_blank" rel="noreferrer" className="text-[11px] font-bold text-gray-500 hover:text-white transition-all uppercase tracking-widest">LinkedIn</a>
            <a href="https://github.com/Ismail-Engr" target="_blank" rel="noreferrer" className="text-[11px] font-bold text-gray-500 hover:text-white transition-all uppercase tracking-widest">GitHub</a>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center pt-12 md:pt-16 border-t border-white/5 gap-8">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 tech-data text-gray-800 uppercase font-black text-[9px] md:text-[11px]">
          <span>[ WELDING NTVQF L1 ]</span>
          <span>[ AUTO MECHANICS L1 ]</span>
          <span>[ ICT CERTIFIED ]</span>
        </div>
        <p className="text-[9px] md:text-[11px] text-gray-800 font-black uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} ISMAIL HOSSEN. BUILT FOR MAX UPTIME.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#05070A] text-white selection:bg-[#BC00FF] selection:text-white w-full">
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>
      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <motion.div 
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00C8FF] to-[#BC00FF] z-[10000] origin-left"
            style={{ scaleX }}
          />
          <Navbar />
          <Hero />
          
          <section id="vision" className="py-24 md:py-48 bg-[#05070A] border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
               <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
                  <div>
                    <SectionHeading sub="Engineering Vision" title="Operational Uptime." />
                    <div className="space-y-8 md:space-y-12 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-400 uppercase leading-relaxed tracking-wide">
                      <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="border-l-4 border-[#00C8FF] pl-8 md:pl-12 py-6 md:py-10 bg-white/5 text-white font-bold"
                      >
                        "Designing industrial infrastructure through system maintenance and automated control integrity."
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        With a deep foundation in <span className="text-white">Mechanical Engineering</span> and hands-on expertise at Agility Power System, I bridge machines and automation.
                      </motion.p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 md:gap-8">
                    {[
                      { icon: <Workflow size={40} />, label: "Workflow", color: "#BC00FF" },
                      { icon: <Layers size={40} />, label: "Integrity", color: "#00C8FF", mt: true },
                      { icon: <Layout size={40} />, label: "Logic", color: "#00C8FF" },
                      { icon: <HardHat size={40} />, label: "Safety", color: "#BC00FF", mt: true }
                    ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`industrial-panel p-8 md:p-14 flex flex-col items-center text-center group hover:bg-white/5 transition-all ${item.mt ? 'mt-8 md:mt-16' : ''}`}
                      >
                         <div style={{ color: item.color }} className="mb-6 md:mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                           {item.icon}
                         </div>
                         <span className="text-[9px] md:text-[12px] font-black uppercase tracking-[0.4em]">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
               </div>
            </div>
          </section>

          <Capabilities />
          <OperationsRecord />
          <CaseStudies />
          <EngagementTerminal />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}