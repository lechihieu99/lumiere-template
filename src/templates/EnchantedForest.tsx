import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from './shared/data';
import { Countdown } from './shared/Countdown';
import { Leaf, Trees, Gift, ShoppingBag, Plane, Heart } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Gift,
  ShoppingBag,
  Plane
};

export function EnchantedForest() {
  return (
    <div className="min-h-screen bg-[#EAE7DC] text-[#2C4C3B] font-serif selection:bg-[#4A5D23] selection:text-[#EAE7DC]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-6 px-12 flex justify-between items-center bg-[#2C4C3B]/90 backdrop-blur-sm text-[#EAE7DC] shadow-md">
        <div className="text-2xl font-script">{weddingData.bride[0]} & {weddingData.groom[0]}</div>
        <div className="hidden md:flex space-x-8 text-sm font-sans tracking-widest uppercase">
          <a href="#story" className="hover:text-[#8A9A86] transition-colors">Our Tale</a>
          <a href="#gallery" className="hover:text-[#8A9A86] transition-colors">Gallery</a>
          <a href="#details" className="hover:text-[#8A9A86] transition-colors">The Gathering</a>
          <a href="#travel" className="hover:text-[#8A9A86] transition-colors">Journey</a>
          <a href="#registry" className="hover:text-[#8A9A86] transition-colors">Registry</a>
          <a href="#rsvp" className="hover:text-[#8A9A86] transition-colors">RSVP</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1447279506476-3faec8071eee?q=80&w=2070&auto=format&fit=crop" 
            alt="Enchanted Forest Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C4C3B] via-[#2C4C3B]/40 to-transparent" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative z-10 text-center flex flex-col items-center"
        >
          <Trees className="w-16 h-16 text-[#EAE7DC] mb-6 opacity-80" />
          <h1 className="text-7xl md:text-9xl font-script text-[#EAE7DC] mb-6 drop-shadow-2xl">
            {weddingData.bride} & {weddingData.groom}
          </h1>
          <div className="text-xl font-serif italic text-[#EAE7DC]/90 mb-12">
            Are tying the knot in the woods
          </div>
          <div className="text-sm tracking-[0.3em] uppercase font-sans text-[#EAE7DC] mb-12 border-y border-[#EAE7DC]/30 py-4 px-8">
            {weddingData.dateString} <span className="mx-4">•</span> {weddingData.location}
          </div>
          <Countdown className="text-[#EAE7DC]" />
        </motion.div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6 text-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <Heart className="w-8 h-8 mx-auto text-[#4A5D23] mb-8" />
          <p className="text-3xl md:text-5xl font-script text-[#2C4C3B] leading-relaxed">
            "{weddingData.quotes[0].split('-')[0].trim()}"
          </p>
          <p className="mt-6 text-sm font-sans tracking-widest uppercase text-[#8A9A86]">
            - {weddingData.quotes[0].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section id="story" className="py-32 px-6 max-w-5xl mx-auto text-center">
        <Leaf className="w-10 h-10 mx-auto text-[#4A5D23] mb-8" />
        <h2 className="text-6xl font-script mb-16 text-[#2C4C3B]">Once Upon a Time</h2>
        <div className="space-y-20 relative before:absolute before:inset-0 before:ml-1/2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[#4A5D23]/20">
          {weddingData.story.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#4A5D23] text-[#EAE7DC] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-lg">
                <Leaf className="w-4 h-4" />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-8 rounded-tr-3xl rounded-bl-3xl bg-white shadow-md border-l-4 border-[#4A5D23] text-left md:group-odd:text-right"
              >
                <div className="text-sm font-sans tracking-widest text-[#4A5D23] mb-2">{item.year}</div>
                <h3 className="text-3xl font-script mb-3 text-[#2C4C3B]">{item.title}</h3>
                <p className="text-[#2C4C3B]/80 leading-relaxed font-serif">{item.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {weddingData.funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-[#4A5D23]/20 rounded-t-full rounded-b-full bg-[#EAE7DC]/30"
              >
                <div className="text-xs font-sans tracking-widest uppercase text-[#8A9A86] mb-3">{fact.label}</div>
                <div className="text-2xl font-script text-[#2C4C3B]">{fact.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 bg-[#EAE7DC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-script mb-4 text-[#2C4C3B]">Enchanted Memories</h2>
            <p className="text-sm font-sans tracking-widest uppercase text-[#8A9A86]">Glimpses of our journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingData.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`overflow-hidden rounded-t-full ${index % 2 === 0 ? 'mt-0 lg:mt-16' : 'mt-0'}`}
              >
                <img src={img} alt="Gallery" className="w-full h-[500px] object-cover hover:scale-110 transition-transform duration-1000" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section id="details" className="py-32 px-6 bg-[#2C4C3B] text-[#EAE7DC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-script mb-16">The Gathering</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {weddingData.events.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center p-8 border border-[#EAE7DC]/20 rounded-t-full"
              >
                <span className="text-sm font-sans tracking-widest text-[#8A9A86] mb-4">{event.time}</span>
                <span className="text-3xl font-script mb-4">{event.title}</span>
                <span className="text-[#EAE7DC]/70 italic font-serif text-center">{event.location}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section id="travel" className="py-32 bg-[#EAE7DC]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-script mb-4 text-[#2C4C3B]">The Journey</h2>
            <p className="text-sm font-sans tracking-widest uppercase text-[#8A9A86]">For travelers from afar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-[#4A5D23]/10">
              <h3 className="text-3xl font-script mb-8 text-[#4A5D23] border-b border-[#4A5D23]/20 pb-4">Resting Places</h3>
              <div className="space-y-8">
                {weddingData.travel.accommodations.map((hotel, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-serif text-[#2C4C3B] mb-2">{hotel.name}</h4>
                    <p className="text-[#2C4C3B]/70 mb-3 font-serif">{hotel.description}</p>
                    <a href={hotel.link} className="text-xs font-sans tracking-widest uppercase text-[#8A9A86] hover:text-[#4A5D23] transition-colors">Book a Room →</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-[#4A5D23]/10">
              <h3 className="text-3xl font-script mb-8 text-[#4A5D23] border-b border-[#4A5D23]/20 pb-4">Arrivals</h3>
              <div className="space-y-8">
                {weddingData.travel.airports.map((airport, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-serif text-[#2C4C3B] mb-2">{airport.name}</h4>
                    <p className="text-[#2C4C3B]/70 font-serif">{airport.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code & Registry */}
      <section id="registry" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl font-script mb-6 text-[#2C4C3B]">Attire</h2>
            <h3 className="text-2xl font-serif text-[#4A5D23] mb-4">{weddingData.dressCode.title}</h3>
            <p className="text-[#2C4C3B]/70 leading-relaxed mb-12 font-serif">
              {weddingData.dressCode.description}
            </p>
            
            <h2 className="text-5xl font-script mb-8 text-[#2C4C3B]">Registry</h2>
            <p className="text-[#2C4C3B]/70 leading-relaxed mb-8 font-serif">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following places:
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {weddingData.registry.map((item, index) => {
                const Icon = iconMap[item.icon] || Gift;
                return (
                  <a 
                    key={index} 
                    href={item.link}
                    className="flex items-center space-x-3 px-6 py-3 border border-[#4A5D23]/30 rounded-full hover:bg-[#4A5D23] hover:text-[#EAE7DC] transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-[#4A5D23] group-hover:text-[#EAE7DC] transition-colors" />
                    <span className="text-xs font-sans tracking-widest uppercase text-[#2C4C3B] group-hover:text-[#EAE7DC]">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 border-2 border-[#4A5D23]/30 rounded-t-full translate-x-4 translate-y-4" />
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop" 
              alt="Wedding Details" 
              className="relative z-10 w-full h-[600px] object-cover rounded-t-full"
            />
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="py-32 px-6 text-center bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]">
        <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-xl border border-[#4A5D23]/30">
          <h2 className="text-6xl font-script mb-4 text-[#2C4C3B]">RSVP</h2>
          <p className="text-sm font-sans tracking-widest uppercase text-[#4A5D23] mb-10">Will you join our fairy tale?</p>
          <form className="space-y-6 text-left">
            <div>
              <label className="block text-sm font-serif text-[#2C4C3B] mb-2">Thy Name</label>
              <input type="text" className="w-full border-b-2 border-[#4A5D23]/30 py-2 bg-transparent focus:outline-none focus:border-[#4A5D23] transition-colors font-serif" />
            </div>
            <div>
              <label className="block text-sm font-serif text-[#2C4C3B] mb-2">Thy Response</label>
              <select className="w-full border-b-2 border-[#4A5D23]/30 py-2 bg-transparent focus:outline-none focus:border-[#4A5D23] transition-colors font-serif">
                <option>Happily Accept</option>
                <option>Sadly Decline</option>
              </select>
            </div>
            <button type="button" className="w-full py-4 mt-8 bg-[#2C4C3B] text-[#EAE7DC] text-sm font-sans tracking-widest uppercase hover:bg-[#4A5D23] transition-colors rounded-lg shadow-md">
              Send by Owl
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
