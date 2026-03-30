import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from './shared/data';
import { Countdown } from './shared/Countdown';
import { Moon, Star, Gift, ShoppingBag, Plane, Heart } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Gift,
  ShoppingBag,
  Plane
};

export function CelestialNight() {
  return (
    <div className="min-h-screen bg-[#0B132B] text-[#EAEAEA] font-sans selection:bg-[#5BC0BE] selection:text-[#0B132B]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-6 px-12 flex justify-between items-center bg-[#0B132B]/80 backdrop-blur-md border-b border-white/10">
        <div className="text-xl tracking-[0.3em] uppercase text-[#5BC0BE]">{weddingData.bride[0]} & {weddingData.groom[0]}</div>
        <div className="hidden md:flex space-x-8 text-xs tracking-[0.2em] uppercase">
          <a href="#story" className="hover:text-[#5BC0BE] transition-colors">Our Story</a>
          <a href="#gallery" className="hover:text-[#5BC0BE] transition-colors">Gallery</a>
          <a href="#details" className="hover:text-[#5BC0BE] transition-colors">Details</a>
          <a href="#travel" className="hover:text-[#5BC0BE] transition-colors">Travel</a>
          <a href="#registry" className="hover:text-[#5BC0BE] transition-colors">Registry</a>
          <a href="#rsvp" className="hover:text-[#5BC0BE] transition-colors">RSVP</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop" 
            alt="Celestial Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 text-center flex flex-col items-center"
        >
          <Moon className="w-12 h-12 text-[#5BC0BE] mb-8" />
          <div className="text-sm tracking-[0.4em] uppercase mb-6 text-[#5BC0BE]">Written in the stars</div>
          <h1 className="text-6xl md:text-8xl font-light tracking-widest mb-8 text-white uppercase">
            {weddingData.bride} <br/><span className="text-[#5BC0BE]">&</span><br/> {weddingData.groom}
          </h1>
          <div className="text-lg tracking-[0.2em] uppercase text-white/80 mb-12">
            {weddingData.dateString}
          </div>
          <Countdown className="text-[#5BC0BE]" />
        </motion.div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6 text-center bg-[#1C2541]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <Heart className="w-8 h-8 mx-auto text-[#5BC0BE] mb-8" />
          <p className="text-2xl md:text-4xl font-light italic text-white leading-relaxed">
            "{weddingData.quotes[1].split('-')[0].trim()}"
          </p>
          <p className="mt-6 text-sm tracking-widest uppercase text-[#5BC0BE]">
            - {weddingData.quotes[1].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section id="story" className="py-32 px-6 max-w-4xl mx-auto text-center">
        <Star className="w-8 h-8 mx-auto text-[#5BC0BE] mb-8" />
        <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase mb-16 text-white">Our Universe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {weddingData.story.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#1C2541] p-10 rounded-lg border border-white/5 hover:border-[#5BC0BE]/50 transition-colors"
            >
              <div className="text-sm tracking-[0.2em] text-[#5BC0BE] mb-4">{item.year}</div>
              <h3 className="text-2xl font-light tracking-wide mb-4 text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-24 bg-[#0B132B]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {weddingData.funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 border border-white/5 rounded-2xl bg-[#1C2541]"
              >
                <div className="text-sm tracking-widest uppercase text-[#5BC0BE] mb-3">{fact.label}</div>
                <div className="text-xl font-light text-white">{fact.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 bg-[#1C2541]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase mb-4 text-white">Constellations</h2>
            <p className="text-sm tracking-[0.2em] uppercase text-gray-400">Our favorite memories</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingData.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl border border-white/10"
              >
                <img src={img} alt="Gallery" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-1000 opacity-80 hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section id="details" className="py-32 px-6 bg-[#1C2541]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light tracking-widest uppercase mb-16 text-white">The Details</h2>
          <div className="space-y-12">
            {weddingData.events.map((event, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center justify-center md:space-x-12 border-b border-white/10 pb-12">
                <span className="text-xl tracking-[0.2em] text-[#5BC0BE] mb-4 md:mb-0 w-48 text-right">{event.time}</span>
                <div className="w-px h-12 bg-white/20 hidden md:block" />
                <div className="text-center md:text-left w-64">
                  <span className="block text-2xl font-light text-white mb-2">{event.title}</span>
                  <span className="block text-gray-400 font-light">{event.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section id="travel" className="py-32 bg-[#0B132B]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light tracking-widest uppercase mb-4 text-white">Travel & Stay</h2>
            <p className="text-sm tracking-[0.2em] uppercase text-gray-400">For our traveling stars</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-[#1C2541] p-10 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-light tracking-widest uppercase mb-8 text-[#5BC0BE] border-b border-white/10 pb-4">Accommodations</h3>
              <div className="space-y-8">
                {weddingData.travel.accommodations.map((hotel, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-light text-white mb-2">{hotel.name}</h4>
                    <p className="text-gray-400 mb-3 font-light">{hotel.description}</p>
                    <a href={hotel.link} className="text-sm tracking-widest uppercase text-[#5BC0BE] hover:text-white transition-colors">Book a Room →</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1C2541] p-10 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-light tracking-widest uppercase mb-8 text-[#5BC0BE] border-b border-white/10 pb-4">Airports</h3>
              <div className="space-y-8">
                {weddingData.travel.airports.map((airport, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-light text-white mb-2">{airport.name}</h4>
                    <p className="text-gray-400 font-light">{airport.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code & Registry */}
      <section id="registry" className="py-32 bg-[#1C2541]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-light tracking-widest uppercase mb-6 text-white">Dress Code</h2>
            <h3 className="text-2xl font-light text-[#5BC0BE] mb-4">{weddingData.dressCode.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-12 font-light">
              {weddingData.dressCode.description}
            </p>
            
            <h2 className="text-4xl font-light tracking-widest uppercase mb-8 text-white">Gift Registry</h2>
            <p className="text-gray-400 leading-relaxed mb-8 font-light">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following places:
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {weddingData.registry.map((item, index) => {
                const Icon = iconMap[item.icon] || Gift;
                return (
                  <a 
                    key={index} 
                    href={item.link}
                    className="flex items-center space-x-3 px-6 py-3 border border-white/10 rounded hover:border-[#5BC0BE] hover:text-[#5BC0BE] transition-all duration-300 group bg-[#0B132B]"
                  >
                    <Icon className="w-4 h-4 text-white group-hover:text-[#5BC0BE] transition-colors" />
                    <span className="text-sm tracking-widest uppercase text-white group-hover:text-[#5BC0BE]">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 border border-[#5BC0BE]/30 rounded-full translate-x-4 translate-y-4 mix-blend-screen" />
            <img 
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop" 
              alt="Wedding Details" 
              className="relative z-10 w-full h-[600px] object-cover rounded-full opacity-80"
            />
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="py-32 px-6 text-center">
        <div className="max-w-xl mx-auto bg-[#1C2541] p-12 rounded-2xl border border-[#5BC0BE]/30 shadow-[0_0_30px_rgba(91,192,190,0.1)]">
          <h2 className="text-4xl font-light tracking-widest uppercase mb-4 text-white">RSVP</h2>
          <p className="text-sm tracking-[0.2em] uppercase text-gray-400 mb-10">Join our orbit</p>
          <form className="space-y-6 text-left">
            <div>
              <input type="text" placeholder="Full Name" className="w-full bg-[#0B132B] border border-white/10 p-4 text-white focus:outline-none focus:border-[#5BC0BE] transition-colors rounded" />
            </div>
            <div>
              <select className="w-full bg-[#0B132B] border border-white/10 p-4 text-white focus:outline-none focus:border-[#5BC0BE] transition-colors rounded">
                <option>Joyfully Accept</option>
                <option>Regretfully Decline</option>
              </select>
            </div>
            <button type="button" className="w-full py-4 mt-4 bg-[#5BC0BE] text-[#0B132B] text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors rounded">
              Confirm
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
