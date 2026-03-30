import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from './shared/data';
import { Countdown } from './shared/Countdown';
import { Gift, ShoppingBag, Plane } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Gift,
  ShoppingBag,
  Plane
};

export function LuxuryGold() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-serif selection:bg-[#D4AF37] selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-8 px-12 flex justify-between items-center bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#D4AF37]/20">
        <div className="text-2xl font-display text-[#D4AF37] tracking-widest uppercase">{weddingData.bride[0]}&{weddingData.groom[0]}</div>
        <div className="hidden md:flex space-x-12 text-xs font-sans tracking-[0.3em] uppercase text-gray-400">
          <a href="#story" className="hover:text-[#D4AF37] transition-colors">Story</a>
          <a href="#party" className="hover:text-[#D4AF37] transition-colors">Party</a>
          <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Gallery</a>
          <a href="#details" className="hover:text-[#D4AF37] transition-colors">Details</a>
          <a href="#travel" className="hover:text-[#D4AF37] transition-colors">Travel</a>
          <a href="#registry" className="hover:text-[#D4AF37] transition-colors">Registry</a>
          <a href="#rsvp" className="hover:text-[#D4AF37] transition-colors">RSVP</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=2071&auto=format&fit=crop" 
            alt="Luxury Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center max-w-5xl px-6 border border-[#D4AF37]/30 p-16 md:p-24 bg-[#0A0A0A]/40 backdrop-blur-sm"
        >
          <div className="text-sm font-sans tracking-[0.4em] uppercase text-[#D4AF37] mb-8">You are invited</div>
          <h1 className="text-6xl md:text-8xl font-display font-light tracking-tight mb-12 leading-tight">
            {weddingData.bride} <br />
            <span className="text-4xl md:text-6xl italic text-gray-400">&</span> <br />
            {weddingData.groom}
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm font-sans tracking-[0.3em] uppercase text-gray-300 mb-12">
            <span>{weddingData.dateString}</span>
            <span className="hidden md:block w-1 h-1 bg-[#D4AF37] rounded-full" />
            <span>{weddingData.location}</span>
          </div>
          <Countdown />
        </motion.div>
      </section>

      {/* Quote 1 */}
      <section className="py-32 px-6 bg-[#0A0A0A] border-t border-[#D4AF37]/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-3xl md:text-5xl font-display font-light text-[#D4AF37] leading-tight italic">
            "{weddingData.quotes[0].split('-')[0].trim()}"
          </p>
          <p className="mt-8 text-xs font-sans tracking-[0.3em] uppercase text-gray-400">
            - {weddingData.quotes[0].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section id="story" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display text-[#D4AF37] mb-24">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {weddingData.story.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col items-center p-8 border border-white/10 hover:border-[#D4AF37]/50 transition-colors bg-white/5"
              >
                <div className="text-2xl font-display text-[#D4AF37] mb-6">{item.year}</div>
                <h3 className="text-xl font-sans tracking-widest uppercase mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-32 bg-[#111] border-t border-[#D4AF37]/20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display text-[#D4AF37] mb-24 text-center">The Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-center">
            {weddingData.funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-8 border border-white/5 bg-[#0A0A0A]"
              >
                <div className="text-xs font-sans tracking-[0.2em] uppercase text-gray-400 mb-4">{fact.label}</div>
                <div className="text-xl font-display text-[#D4AF37]">{fact.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Party */}
      <section id="party" className="py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display text-[#D4AF37] mb-24 text-center">Wedding Party</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Bridesmaids */}
            <div>
              <h3 className="text-2xl font-sans tracking-widest uppercase text-center mb-16 text-white">The Bridesmaids</h3>
              <div className="space-y-12">
                {weddingData.weddingParty.bridesmaids.map((person, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-center space-x-8"
                  >
                    <div className="w-24 h-24 overflow-hidden shrink-0 border border-[#D4AF37]/50 p-1">
                      <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-xl font-display text-[#D4AF37] mb-1">{person.name}</div>
                      <div className="text-xs font-sans tracking-[0.2em] uppercase text-gray-400">{person.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Groomsmen */}
            <div>
              <h3 className="text-2xl font-sans tracking-widest uppercase text-center mb-16 text-white">The Groomsmen</h3>
              <div className="space-y-12">
                {weddingData.weddingParty.groomsmen.map((person, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-center space-x-8 lg:flex-row-reverse lg:space-x-reverse lg:text-right"
                  >
                    <div className="w-24 h-24 overflow-hidden shrink-0 border border-[#D4AF37]/50 p-1">
                      <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-xl font-display text-[#D4AF37] mb-1">{person.name}</div>
                      <div className="text-xs font-sans tracking-[0.2em] uppercase text-gray-400">{person.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 px-6 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-[#D4AF37] mb-24 text-center">Captured Moments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingData.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="relative group overflow-hidden aspect-[3/4]"
              >
                <img src={img} alt="Gallery" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4AF37]/50 transition-colors duration-500 m-4" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details & RSVP */}
      <section id="details" className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="border border-[#D4AF37]/20 p-12 md:p-16 relative flex flex-col">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#0A0A0A] px-6 text-2xl font-display text-[#D4AF37]">Itinerary</div>
            <div className="space-y-12 mt-8 flex-grow">
              {weddingData.events.map((event, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-baseline border-b border-white/10 pb-6">
                  <span className="text-lg font-display text-[#D4AF37] md:w-32 shrink-0 mb-2 md:mb-0">{event.time}</span>
                  <div>
                    <span className="block text-xl font-sans tracking-widest uppercase mb-1">{event.title}</span>
                    <span className="block text-gray-400 italic">{event.location}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-64 mt-12 border border-[#D4AF37]/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.262529815858!2d9.18241681557112!3d45.88599997910803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47868c227e1f4d3d%3A0x6c6e75294025f0!2sLake%20Como!5e0!3m2!1sen!2sus!4v1625581234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) contrast(120%)' }} 
                allowFullScreen 
                loading="lazy"
              />
            </div>
          </div>
          
          <div id="rsvp" className="border border-[#D4AF37]/20 p-12 md:p-16 relative bg-[#D4AF37]/5">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#0A0A0A] px-6 text-2xl font-display text-[#D4AF37]">RSVP</div>
            <form className="space-y-8 mt-8">
              <div>
                <label className="block text-xs font-sans tracking-[0.2em] uppercase text-gray-400 mb-3">Name</label>
                <input type="text" className="w-full border-b border-white/20 py-3 bg-transparent focus:outline-none focus:border-[#D4AF37] transition-colors text-white" />
              </div>
              <div>
                <label className="block text-xs font-sans tracking-[0.2em] uppercase text-gray-400 mb-3">Email</label>
                <input type="email" className="w-full border-b border-white/20 py-3 bg-transparent focus:outline-none focus:border-[#D4AF37] transition-colors text-white" />
              </div>
              <div>
                <label className="block text-xs font-sans tracking-[0.2em] uppercase text-gray-400 mb-3">Attendance</label>
                <select className="w-full border-b border-white/20 py-3 bg-transparent focus:outline-none focus:border-[#D4AF37] transition-colors text-white appearance-none">
                  <option value="yes" className="text-black">Accepts with Pleasure</option>
                  <option value="no" className="text-black">Declines with Regret</option>
                </select>
              </div>
              <button type="button" className="w-full py-5 mt-12 bg-[#D4AF37] text-black text-sm font-sans tracking-[0.3em] uppercase hover:bg-white transition-colors">
                Confirm
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section id="travel" className="py-32 bg-[#111] border-t border-[#D4AF37]/20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display text-[#D4AF37] mb-24 text-center">Travel & Stay</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="p-12 border border-white/10 bg-[#0A0A0A]">
              <h3 className="text-2xl font-sans tracking-widest uppercase mb-12 text-white border-b border-[#D4AF37]/20 pb-6">Accommodations</h3>
              <div className="space-y-12">
                {weddingData.travel.accommodations.map((hotel, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-display text-[#D4AF37] mb-3">{hotel.name}</h4>
                    <p className="text-gray-400 font-serif mb-6 leading-relaxed">{hotel.description}</p>
                    <a href={hotel.link} className="text-xs font-sans tracking-[0.2em] uppercase text-white hover:text-[#D4AF37] transition-colors">Book a Room</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-12 border border-white/10 bg-[#0A0A0A]">
              <h3 className="text-2xl font-sans tracking-widest uppercase mb-12 text-white border-b border-[#D4AF37]/20 pb-6">Airports</h3>
              <div className="space-y-12">
                {weddingData.travel.airports.map((airport, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-display text-[#D4AF37] mb-3">{airport.name}</h4>
                    <p className="text-gray-400 font-serif leading-relaxed">{airport.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code & Registry */}
      <section id="registry" className="py-32 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="p-12 border border-[#D4AF37]/20 relative bg-[#D4AF37]/5">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#0A0A0A] px-6 text-2xl font-display text-[#D4AF37]">Dress Code</div>
            <div className="mt-8">
              <h3 className="text-3xl font-display text-white mb-6 text-center">{weddingData.dressCode.title}</h3>
              <p className="text-gray-400 font-serif leading-relaxed text-center">
                {weddingData.dressCode.description}
              </p>
            </div>
          </div>
          
          <div className="p-12 border border-[#D4AF37]/20 relative bg-[#D4AF37]/5">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#0A0A0A] px-6 text-2xl font-display text-[#D4AF37]">Gift Registry</div>
            <div className="mt-8">
              <p className="text-gray-400 font-serif leading-relaxed mb-10 text-center">
                Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following places:
              </p>
              <div className="flex flex-col space-y-4">
                {weddingData.registry.map((item, index) => {
                  const Icon = iconMap[item.icon] || Gift;
                  return (
                    <a 
                      key={index} 
                      href={item.link}
                      className="flex items-center justify-between px-8 py-6 bg-[#0A0A0A] border border-white/10 hover:border-[#D4AF37] transition-colors group"
                    >
                      <span className="text-sm font-sans tracking-[0.2em] uppercase text-white">{item.name}</span>
                      <Icon className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote 2 */}
      <section className="py-32 px-6 bg-[#111] text-center border-t border-[#D4AF37]/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-3xl md:text-5xl font-display font-light text-[#D4AF37] leading-tight italic">
            "{weddingData.quotes[1].split('-')[0].trim()}"
          </p>
          <p className="mt-8 text-xs font-sans tracking-[0.3em] uppercase text-gray-400">
            - {weddingData.quotes[1].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-24 text-center border-t border-white/10">
        <h2 className="text-4xl font-display text-[#D4AF37] mb-8">{weddingData.bride} & {weddingData.groom}</h2>
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-gray-500 mb-12">{weddingData.dateString}</p>
        <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-gray-600">
          © 2026 {weddingData.bride} & {weddingData.groom}.
        </div>
      </footer>
    </div>
  );
}
