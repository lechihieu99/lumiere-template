import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from './shared/data';
import { Countdown } from './shared/Countdown';
import { Flame, Star, Gift, ShoppingBag, Plane, Heart } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Gift,
  ShoppingBag,
  Plane
};

export function OrientalHeritage() {
  return (
    <div className="min-h-screen bg-[#FFF8DC] text-[#8B0000] font-serif selection:bg-[#FFD700] selection:text-[#8B0000]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-6 px-12 flex justify-between items-center bg-[#8B0000]/90 backdrop-blur-sm border-b-2 border-[#FFD700]/50 shadow-lg">
        <div className="text-2xl font-serif text-[#FFD700] tracking-widest">{weddingData.bride[0]} & {weddingData.groom[0]}</div>
        <div className="hidden md:flex space-x-8 text-sm font-sans tracking-[0.2em] uppercase text-[#FFF8DC]">
          <a href="#story" className="hover:text-[#FFD700] transition-colors">Our Story</a>
          <a href="#gallery" className="hover:text-[#FFD700] transition-colors">Gallery</a>
          <a href="#details" className="hover:text-[#FFD700] transition-colors">Details</a>
          <a href="#travel" className="hover:text-[#FFD700] transition-colors">Travel</a>
          <a href="#registry" className="hover:text-[#FFD700] transition-colors">Registry</a>
          <a href="#rsvp" className="hover:text-[#FFD700] transition-colors">RSVP</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2070&auto=format&fit=crop" 
            alt="Oriental Background" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000] via-[#8B0000]/60 to-transparent" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 text-center flex flex-col items-center bg-[#8B0000]/80 backdrop-blur-sm p-16 border-4 border-[#FFD700] rounded-sm"
        >
          <Flame className="w-12 h-12 text-[#FFD700] mb-6" />
          <div className="text-sm tracking-[0.4em] uppercase mb-6 font-sans text-[#FFD700]">Celebrating Love & Heritage</div>
          <h1 className="text-6xl md:text-8xl font-serif text-[#FFF8DC] mb-8 uppercase tracking-widest">
            {weddingData.bride} <br/><span className="text-[#FFD700] text-4xl">&</span><br/> {weddingData.groom}
          </h1>
          <div className="text-xl tracking-[0.2em] uppercase font-sans text-[#FFF8DC] mb-12 border-y border-[#FFD700]/50 py-4">
            {weddingData.dateString} <span className="mx-4 text-[#FFD700]">|</span> {weddingData.location}
          </div>
          <Countdown className="text-[#FFD700]" />
        </motion.div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6 text-center bg-white border-y-4 border-[#8B0000]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <Heart className="w-12 h-12 mx-auto text-[#FFD700] mb-8" />
          <p className="text-3xl md:text-5xl font-serif text-[#8B0000] leading-relaxed uppercase tracking-widest">
            "{weddingData.quotes[1].split('-')[0].trim()}"
          </p>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto my-8" />
          <p className="text-lg font-sans tracking-widest uppercase text-[#8B0000] font-bold">
            - {weddingData.quotes[1].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section id="story" className="py-32 px-6 max-w-5xl mx-auto text-center">
        <Star className="w-8 h-8 mx-auto text-[#FFD700] mb-8" />
        <h2 className="text-5xl md:text-6xl font-serif mb-16 text-[#8B0000] uppercase tracking-widest">Our Story</h2>
        <div className="space-y-16">
          {weddingData.story.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-10 border-2 border-[#8B0000] shadow-[8px_8px_0px_0px_rgba(139,0,0,1)] relative"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FFD700] border-2 border-[#8B0000]" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#FFD700] border-2 border-[#8B0000]" />
              <div className="text-lg font-sans tracking-widest text-[#8B0000] mb-2 font-bold">{item.year}</div>
              <h3 className="text-3xl font-serif mb-4 text-[#8B0000] uppercase">{item.title}</h3>
              <p className="text-[#8B0000]/80 leading-relaxed text-lg">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-24 bg-[#FFF8DC] border-b-4 border-[#8B0000]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {weddingData.funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border-2 border-[#8B0000] bg-white shadow-[6px_6px_0px_0px_rgba(255,215,0,1)]"
              >
                <div className="text-sm font-sans tracking-widest uppercase text-[#8B0000] mb-3 font-bold">{fact.label}</div>
                <div className="text-2xl font-serif text-[#8B0000] uppercase">{fact.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 bg-[#8B0000]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif mb-4 text-[#FFD700] uppercase tracking-widest">Treasured Moments</h2>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto my-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingData.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="overflow-hidden border-4 border-[#FFD700] bg-white p-2"
              >
                <img src={img} alt="Gallery" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-1000" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section id="details" className="py-32 px-6 bg-[#8B0000] text-[#FFF8DC]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-serif mb-16 text-[#FFD700] uppercase tracking-widest">The Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {weddingData.events.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center p-10 border-2 border-[#FFD700] bg-[#8B0000]"
              >
                <span className="text-lg font-sans tracking-widest text-[#FFD700] mb-4 font-bold">{event.time}</span>
                <span className="text-3xl font-serif mb-4 uppercase">{event.title}</span>
                <span className="text-[#FFF8DC]/80 italic text-center text-lg">{event.location}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section id="travel" className="py-32 bg-[#FFF8DC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif mb-4 text-[#8B0000] uppercase tracking-widest">Travel & Stay</h2>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto my-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-10 border-2 border-[#8B0000] shadow-[8px_8px_0px_0px_rgba(139,0,0,1)]">
              <h3 className="text-3xl font-serif mb-8 text-[#8B0000] border-b-2 border-[#FFD700] pb-4 uppercase">Accommodations</h3>
              <div className="space-y-8">
                {weddingData.travel.accommodations.map((hotel, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-serif text-[#8B0000] mb-2 uppercase font-bold">{hotel.name}</h4>
                    <p className="text-[#8B0000]/80 mb-4 text-lg">{hotel.description}</p>
                    <a href={hotel.link} className="inline-block px-6 py-2 bg-[#8B0000] text-sm font-sans tracking-widest uppercase text-[#FFD700] hover:bg-[#FFD700] hover:text-[#8B0000] transition-colors border-2 border-[#8B0000] font-bold">Book a Room</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 border-2 border-[#8B0000] shadow-[8px_8px_0px_0px_rgba(139,0,0,1)]">
              <h3 className="text-3xl font-serif mb-8 text-[#8B0000] border-b-2 border-[#FFD700] pb-4 uppercase">Airports</h3>
              <div className="space-y-8">
                {weddingData.travel.airports.map((airport, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-serif text-[#8B0000] mb-2 uppercase font-bold">{airport.name}</h4>
                    <p className="text-[#8B0000]/80 text-lg">{airport.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code & Registry */}
      <section id="registry" className="py-32 bg-white border-y-4 border-[#8B0000]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl font-serif mb-6 text-[#8B0000] uppercase tracking-widest">Dress Code</h2>
            <h3 className="text-2xl font-serif text-[#FFD700] mb-4 uppercase">{weddingData.dressCode.title}</h3>
            <p className="text-[#8B0000]/80 leading-relaxed mb-12 text-lg">
              {weddingData.dressCode.description}
            </p>
            
            <h2 className="text-5xl font-serif mb-8 text-[#8B0000] uppercase tracking-widest">Registry</h2>
            <p className="text-[#8B0000]/80 leading-relaxed mb-8 text-lg">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following places:
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {weddingData.registry.map((item, index) => {
                const Icon = iconMap[item.icon] || Gift;
                return (
                  <a 
                    key={index} 
                    href={item.link}
                    className="flex items-center space-x-3 px-8 py-4 border-2 border-[#8B0000] bg-[#FFF8DC] hover:bg-[#8B0000] hover:text-[#FFD700] transition-all duration-300 group shadow-[4px_4px_0px_0px_rgba(255,215,0,1)]"
                  >
                    <Icon className="w-5 h-5 text-[#8B0000] group-hover:text-[#FFD700] transition-colors" />
                    <span className="text-sm font-sans tracking-widest uppercase text-[#8B0000] group-hover:text-[#FFD700] font-bold">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 border-4 border-[#FFD700] translate-x-6 translate-y-6" />
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop" 
              alt="Wedding Details" 
              className="relative z-10 w-full h-[600px] object-cover border-4 border-[#8B0000]"
            />
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="py-32 px-6 text-center bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
        <div className="max-w-xl mx-auto bg-white p-16 border-4 border-[#8B0000] shadow-[12px_12px_0px_0px_rgba(255,215,0,1)]">
          <h2 className="text-5xl font-serif mb-4 text-[#8B0000] uppercase tracking-widest">RSVP</h2>
          <p className="text-sm font-sans tracking-widest uppercase text-[#8B0000]/60 mb-10 font-bold">Kindly reply by August 1st</p>
          <form className="space-y-8 text-left">
            <div>
              <label className="block text-sm font-sans tracking-widest uppercase text-[#8B0000] mb-2 font-bold">Full Name</label>
              <input type="text" className="w-full border-b-2 border-[#8B0000] py-3 bg-transparent focus:outline-none focus:border-[#FFD700] transition-colors text-lg" />
            </div>
            <div>
              <label className="block text-sm font-sans tracking-widest uppercase text-[#8B0000] mb-2 font-bold">Will you attend?</label>
              <select className="w-full border-b-2 border-[#8B0000] py-3 bg-transparent focus:outline-none focus:border-[#FFD700] transition-colors text-lg text-[#8B0000]">
                <option>Joyfully Accept</option>
                <option>Regretfully Decline</option>
              </select>
            </div>
            <button type="button" className="w-full py-5 mt-8 bg-[#8B0000] text-[#FFD700] text-lg font-sans tracking-widest uppercase hover:bg-[#FFD700] hover:text-[#8B0000] transition-colors font-bold border-2 border-[#8B0000]">
              Send Reply
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
