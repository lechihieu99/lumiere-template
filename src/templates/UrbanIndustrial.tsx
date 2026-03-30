import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from './shared/data';
import { Countdown } from './shared/Countdown';
import { Zap, MapPin, Gift, ShoppingBag, Plane, Heart } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Gift,
  ShoppingBag,
  Plane
};

export function UrbanIndustrial() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#E0E0E0] font-sans selection:bg-[#FF4500] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-6 px-12 flex justify-between items-center bg-[#1A1A1A]/90 backdrop-blur-md border-b border-white/10">
        <div className="text-2xl font-black tracking-tighter uppercase text-white">
          {weddingData.bride[0]}<span className="text-[#FF4500]">X</span>{weddingData.groom[0]}
        </div>
        <div className="hidden md:flex space-x-8 text-xs font-bold tracking-[0.2em] uppercase">
          <a href="#story" className="hover:text-[#FF4500] transition-colors">Story</a>
          <a href="#gallery" className="hover:text-[#FF4500] transition-colors">Gallery</a>
          <a href="#details" className="hover:text-[#FF4500] transition-colors">Details</a>
          <a href="#travel" className="hover:text-[#FF4500] transition-colors">Travel</a>
          <a href="#registry" className="hover:text-[#FF4500] transition-colors">Registry</a>
          <a href="#rsvp" className="hover:text-[#FF4500] transition-colors">RSVP</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop" 
            alt="Urban Industrial Background" 
            className="w-full h-full object-cover opacity-50 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1A]/80 to-[#1A1A1A]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center flex flex-col items-center"
        >
          <div className="text-sm font-bold tracking-[0.5em] uppercase mb-6 text-[#FF4500]">Save the Date</div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-4 uppercase leading-none">
            {weddingData.bride} <br/>
            <span className="text-[#FF4500] text-5xl md:text-7xl">&</span> <br/>
            {weddingData.groom}
          </h1>
          <div className="w-24 h-2 bg-[#FF4500] my-8" />
          <div className="text-xl font-bold tracking-[0.2em] uppercase text-white mb-12 bg-black/50 px-6 py-3 border border-white/20">
            {weddingData.dateString} <span className="text-[#FF4500] mx-4">|</span> {weddingData.location}
          </div>
          <Countdown className="text-white font-mono" />
        </motion.div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6 text-center bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <Heart className="w-12 h-12 mx-auto text-[#FF4500] mb-8" />
          <p className="text-3xl md:text-5xl font-black uppercase text-white leading-tight tracking-tighter">
            "{weddingData.quotes[0].split('-')[0].trim()}"
          </p>
          <div className="w-16 h-1 bg-[#FF4500] mx-auto my-8" />
          <p className="text-lg font-bold tracking-widest uppercase text-gray-500">
            {weddingData.quotes[0].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section id="story" className="py-32 px-6 max-w-5xl mx-auto">
        <div className="flex items-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter">Our Story</h2>
          <div className="flex-1 h-px bg-white/20 ml-8" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {weddingData.story.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-l-4 border-[#FF4500] pl-8 py-4 bg-white/5"
            >
              <div className="text-2xl font-black tracking-widest text-[#FF4500] mb-2">{item.year}</div>
              <h3 className="text-3xl font-bold uppercase mb-4 text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-24 bg-black border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {weddingData.funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-white/10 bg-[#1A1A1A] hover:border-[#FF4500] transition-colors"
              >
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF4500] mb-4">{fact.label}</div>
                <div className="text-xl font-black uppercase text-white">{fact.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter">Visuals</h2>
            <div className="flex-1 h-px bg-white/20 ml-8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {weddingData.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-[#FF4500]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                <img src={img} alt="Gallery" className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section id="details" className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-16 justify-end">
            <div className="flex-1 h-px bg-white/20 mr-8" />
            <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter">The Details</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {weddingData.events.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#1A1A1A] p-10 border border-white/10 hover:border-[#FF4500] transition-colors group"
              >
                <Zap className="w-8 h-8 text-white/20 group-hover:text-[#FF4500] transition-colors mb-6" />
                <span className="block text-xl font-mono text-[#FF4500] mb-4">{event.time}</span>
                <span className="block text-3xl font-black uppercase text-white mb-4">{event.title}</span>
                <span className="flex items-start text-gray-400">
                  <MapPin className="w-5 h-5 mr-2 shrink-0 mt-1" />
                  {event.location}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section id="travel" className="py-32 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center mb-16 justify-end">
            <div className="flex-1 h-px bg-white/20 mr-8" />
            <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter">Logistics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-black p-10 border border-white/10">
              <h3 className="text-3xl font-black uppercase mb-8 text-[#FF4500] flex items-center">
                <span className="w-8 h-1 bg-[#FF4500] mr-4" />
                Basecamp
              </h3>
              <div className="space-y-8">
                {weddingData.travel.accommodations.map((hotel, index) => (
                  <div key={index} className="border-l-2 border-white/20 pl-6">
                    <h4 className="text-xl font-bold uppercase text-white mb-2">{hotel.name}</h4>
                    <p className="text-gray-400 mb-4">{hotel.description}</p>
                    <a href={hotel.link} className="inline-block px-6 py-2 border border-[#FF4500] text-xs font-bold tracking-widest uppercase text-[#FF4500] hover:bg-[#FF4500] hover:text-white transition-colors">Book Now</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-black p-10 border border-white/10">
              <h3 className="text-3xl font-black uppercase mb-8 text-[#FF4500] flex items-center">
                <span className="w-8 h-1 bg-[#FF4500] mr-4" />
                Transit
              </h3>
              <div className="space-y-8">
                {weddingData.travel.airports.map((airport, index) => (
                  <div key={index} className="border-l-2 border-white/20 pl-6">
                    <h4 className="text-xl font-bold uppercase text-white mb-2">{airport.name}</h4>
                    <p className="text-gray-400">{airport.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code & Registry */}
      <section id="registry" className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 border-4 border-[#FF4500] translate-x-4 translate-y-4" />
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop" 
              alt="Wedding Details" 
              className="relative z-10 w-full h-[600px] object-cover grayscale"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-5xl font-black uppercase mb-6 text-white tracking-tighter">Protocol</h2>
            <h3 className="text-2xl font-bold uppercase text-[#FF4500] mb-4">{weddingData.dressCode.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-16">
              {weddingData.dressCode.description}
            </p>
            
            <h2 className="text-5xl font-black uppercase mb-8 text-white tracking-tighter">Registry</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following places:
            </p>
            <div className="flex flex-wrap gap-4">
              {weddingData.registry.map((item, index) => {
                const Icon = iconMap[item.icon] || Gift;
                return (
                  <a 
                    key={index} 
                    href={item.link}
                    className="flex items-center space-x-3 px-8 py-4 bg-[#1A1A1A] border border-white/10 hover:border-[#FF4500] transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-gray-500 group-hover:text-[#FF4500] transition-colors" />
                    <span className="text-sm font-bold tracking-widest uppercase text-white">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="py-32 px-6 text-center bg-[#1A1A1A]">
        <div className="max-w-2xl mx-auto bg-black p-12 border-4 border-[#FF4500]">
          <h2 className="text-6xl font-black uppercase tracking-tighter mb-4 text-white">RSVP</h2>
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-10">Don't miss the party</p>
          <form className="space-y-8 text-left">
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Name</label>
              <input type="text" className="w-full bg-[#1A1A1A] border-b-2 border-white/20 py-4 px-4 text-white focus:outline-none focus:border-[#FF4500] transition-colors font-mono" placeholder="JOHN DOE" />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Status</label>
              <select className="w-full bg-[#1A1A1A] border-b-2 border-white/20 py-4 px-4 text-white focus:outline-none focus:border-[#FF4500] transition-colors font-mono uppercase">
                <option>Hell Yes</option>
                <option>Can't Make It</option>
              </select>
            </div>
            <button type="button" className="w-full py-6 mt-8 bg-[#FF4500] text-white text-xl font-black tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
