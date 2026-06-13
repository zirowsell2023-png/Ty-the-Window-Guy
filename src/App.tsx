import { Phone, MessageSquare, CheckCircle, MapPin, Calendar, Sparkles, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const SERVICES = [
  {
    title: "Interior & Exterior",
    description: "Full service cleaning for both sides of your glass, ensuring a streak-free view from inside and out.",
    icon: <Sparkles className="w-6 h-6 text-sky-500" />
  },
  {
    title: "Screens & Tracks",
    description: "I don't just do the glass. I deep clean your screens and vacuum/wipe the tracks for a complete refresh.",
    icon: <ShieldCheck className="w-6 h-6 text-sky-500" />
  },
  {
    title: "Eco-Friendly Solution",
    description: "My optimal anti-chemical solution is safe for your family, pets, and garden while delivering peak clarity.",
    icon: <CheckCircle className="w-6 h-6 text-sky-500" />
  },
  {
    title: "Traditional Techniques",
    description: "Classic squeegee and ladder work for that professional, hand-detailed finish that machines can't match.",
    icon: <Clock className="w-6 h-6 text-sky-500" />
  }
];

const FEATURES = [
  "Reliable",
  "Professional",
  "Quick",
  "Local to Cranston & Riverstone"
];

const Logo = ({ className = "", isDark = false }: { className?: string; isDark?: boolean }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative group/logo">
      <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-sky-200/20 overflow-hidden">
        {/* Abstract Window/Squeegee SVG */}
        <svg viewBox="0 0 40 40" className="w-full h-full p-2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="2.5" />
          <path d="M6 20H34" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
          <path d="M20 6V34" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
          {/* Squeegee Stroke */}
          <motion.path 
            d="M8 8L32 32" 
            stroke="white" 
            strokeWidth="4" 
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
          />
        </svg>
        <motion.div 
          className="absolute top-1 right-1 text-yellow-300"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles size={16} fill="currentColor" />
        </motion.div>
      </div>
    </div>
    <div className="flex flex-col text-left">
      <h1 className={`font-black text-xl tracking-tighter leading-none transition-colors ${
        isDark ? "text-white" : "text-slate-900 group-hover/logo:text-sky-600"
      }`}>
        Ty <span className={isDark ? "text-sky-400" : "text-sky-500"}>the</span>
      </h1>
      <p className={`font-bold text-sm tracking-tight leading-none ${
        isDark ? "text-slate-400" : "text-slate-500"
      }`}>Window Guy</p>
    </div>
  </div>
);

export default function App() {
  const phone = "587-435-6383";
  const phoneLink = "tel:5874356383";

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-800 font-sans cursor-default selection:bg-sky-100 selection:text-sky-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <a 
              href={phoneLink} 
              id="header-phone-link"
              className="hidden md:flex items-center gap-2 text-slate-600 hover:text-sky-600 font-medium transition-colors"
            >
              <Phone size={18} />
              {phone}
            </a>
            <a 
              href={phoneLink}
              id="header-cta-btn"
              className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg active:scale-95 text-sm sm:text-base"
            >
              Free Quote
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky-900/20 via-slate-900 to-slate-900"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl mx-auto lg:mx-0"
            >
              <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-100 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-sky-500/30">
                <MapPin size={14} />
                Serving Cranston & Riverstone
              </div>
              <h2 className="text-5xl sm:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
                Your Local Choice for <br />
                <span className="text-sky-400">Crystal Clear</span> Windows.
              </h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Reliable, professional, and quick window cleaning for your home. I use my optimal anti-chemical solution to keep your family safe and your view perfect.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <a 
                  href={phoneLink}
                  id="hero-call-cta"
                  className="group flex items-center justify-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-sky-50 transition-all shadow-2xl active:scale-95"
                >
                  <Phone className="text-sky-600 transition-transform group-hover:rotate-12" size={24} />
                  Call Now
                </a>
                <a 
                  href={`sms:${phone.replace(/-/g, '')}`}
                  id="hero-text-cta"
                  className="flex items-center justify-center gap-3 bg-sky-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-sky-700 transition-all shadow-2xl active:scale-95 border border-sky-500/50"
                >
                  <MessageSquare size={24} />
                  Text for Quote
                </a>
              </div>
              
              <div className="mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-80">
                {FEATURES.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90 font-semibold text-sm">
                    <CheckCircle size={18} className="text-sky-400" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Decorative glass elements */}
          <div className="absolute top-1/4 -right-20 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20 space-y-4">
              <h3 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Complete Window Care</h3>
              <p className="text-slate-500 max-w-xl mx-auto text-lg">Professional techniques and eco-friendly solutions for every part of your window.</p>
              <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-3xl bg-[#F8FAFC] border border-slate-100 hover:border-sky-200 hover:bg-white hover:shadow-2xl hover:shadow-sky-600/5 transition-all group"
                >
                  <div className="p-4 bg-white rounded-2xl shadow-sm w-fit mb-8 group-hover:scale-110 group-hover:bg-sky-50 transition-all">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                  <Calendar className="text-sky-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Book Ahead</h3>
                <p className="text-slate-600 leading-relaxed">
                  My schedule fills up fast! Reach out today to secure your preferred slot and keep your windows looking great year-round.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <ShieldCheck className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Community Trust</h3>
                <p className="text-slate-600 leading-relaxed">
                  Based locally in Cranston. I treat every home with the same care and attention as my own. No shortcuts, just quality.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Sparkles className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">Eco-Friendly</h3>
                <p className="text-slate-600 leading-relaxed">
                  I use an optimal anti-chemical solution that's safe for your family, pets, and landscaping while providing a superior shine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Hero Banner */}
        <section className="py-24 bg-sky-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
          </div>
          <div className="max-w-5xl mx-auto px-4 text-center text-white space-y-12 relative z-10">
            <div className="space-y-4">
              <h3 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">Ready for a Clearer View?</h3>
              <p className="text-xl sm:text-2xl text-sky-100 opacity-95 max-w-2xl mx-auto font-medium">
                Get your free quote today. Call or text and I'll get back to you immediately.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-4">
              <a 
                href={phoneLink}
                id="footer-call-cta-btn"
                className="group flex flex-col items-center gap-1 bg-white text-sky-600 px-12 py-6 rounded-[2rem] hover:scale-105 transition-all shadow-2xl active:scale-95"
              >
                <div className="flex items-center gap-4">
                  <Phone className="group-hover:animate-bounce" size={32} />
                  <span className="font-black text-3xl sm:text-4xl tracking-tighter">{phone}</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider opacity-60">Click to Call</span>
              </a>
              <div className="flex flex-col items-center sm:items-start gap-4">
                <a 
                   href={`sms:${phone.replace(/-/g, '')}`}
                   id="footer-sms-cta-btn"
                   className="flex items-center gap-3 bg-sky-500 text-white px-8 py-4 rounded-2xl font-bold text-xl hover:bg-sky-400 transition-all border border-sky-400"
                >
                  <MessageSquare size={24} />
                  Send a Text
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-900">
            <div className="space-y-6 lg:col-span-2">
              <div className="flex items-center gap-3 text-white">
                <Logo isDark={true} />
              </div>
              <p className="text-lg leading-relaxed max-w-sm">
                Dedicated to keeping the windows of Cranston and Riverstone clean and clear using eco-friendly methods.
              </p>
              <div className="flex gap-4">
                {FEATURES.slice(0, 3).map((f, i) => (
                  <span key={i} className="text-[10px] font-bold uppercase tracking-widest bg-slate-900 text-slate-400 px-3 py-1 rounded-full border border-slate-800">
                    {f}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h5 className="text-white font-black uppercase text-xs tracking-[0.2em]">Contact Us</h5>
              <ul className="space-y-4 font-medium">
                <li>
                  <a href={phoneLink} className="hover:text-sky-400 transition-colors flex items-center gap-3">
                    <Phone size={16} />
                    {phone}
                  </a>
                </li>
                <li>
                  <a href={`sms:${phone.replace(/-/g, '')}`} className="hover:text-sky-400 transition-colors flex items-center gap-3">
                    <MessageSquare size={16} />
                    Text Messaging Available
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h5 className="text-white font-black uppercase text-xs tracking-[0.2em]">My Patch</h5>
              <ul className="space-y-4 font-medium">
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-sky-500" />
                  Cranston, AB
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-sky-500" />
                  Riverstone, AB
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-semibold tracking-tight">
            <p>© 2026 Ty the Window Guy. Professional Window Cleaning.</p>
            <div className="flex items-center gap-8">
              <p className="text-slate-700">Eco-Friendly Guaranteed</p>
              <p>Made for the neighborhood 🩵</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
