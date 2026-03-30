import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from './shared/data';
import { Countdown } from './shared/Countdown';
import { Palette, Heart, Flower2, Gift, ShoppingBag, Plane } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Gift,
  ShoppingBag,
  Plane
};

export function PastelDream() {
  return (
    <div className="min-h-screen bg-[#FDF6F5] text-[#5A4B4B] font-serif selection:bg-[#FFB6C1] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-6 px-12 flex justify-between items-center bg-white/60 backdrop-blur-md border-b border-[#FFB6C1]/30">
        <div className="text-2xl font-script text-[#FFB6C1]">{weddingData.bride[0]} & {weddingData.groom[0]}</div>
        <div className="hidden md:flex space-x-8 text-xs font-sans tracking-[0.2em] uppercase text-[#5A4B4B]">
          <a href="#story" className="hover:text-[#FFB6C1] transition-colors">Our Story</a>
          <a href="#gallery" className="hover:text-[#FFB6C1] transition-colors">Gallery</a>
          <a href="#details" className="hover:text-[#FFB6C1] transition-colors">Details</a>
          <a href="#travel" className="hover:text-[#FFB6C1] transition-colors">Travel</a>
          <a href="#registry" className="hover:text-[#FFB6C1] transition-colors">Registry</a>
          <a href="#rsvp" className="hover:text-[#FFB6C1] transition-colors">RSVP</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FDF6F5] via-[#E6E6FA]/30 to-[#FFB6C1]/20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?q=80&w=2072&auto=format&fit=crop" 
            alt="Pastel Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-multiply"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 text-center flex flex-col items-center bg-white/40 backdrop-blur-sm p-16 rounded-[3rem] shadow-sm border border-white/50"
        >
          <Flower2 className="w-12 h-12 text-[#FFB6C1] mb-6" />
          <div className="text-sm tracking-[0.3em] uppercase mb-6 font-sans text-[#5A4B4B]">We are getting married</div>
          <h1 className="text-6xl md:text-8xl font-script text-[#5A4B4B] mb-8">
            {weddingData.bride} & {weddingData.groom}
          </h1>
          <div className="text-lg tracking-[0.2em] uppercase font-sans text-[#5A4B4B]/80 mb-12">
            {weddingData.dateString} <span className="mx-4">|</span> {weddingData.location}
          </div>
          <Countdown className="text-[#5A4B4B]" />
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
          <Heart className="w-8 h-8 mx-auto text-[#FFB6C1] mb-8" />
          <p className="text-3xl md:text-5xl font-script text-[#5A4B4B] leading-relaxed">
            "{weddingData.quotes[0].split('-')[0].trim()}"
          </p>
          <p className="mt-6 text-sm font-sans tracking-widest uppercase text-[#FFB6C1]">
            - {weddingData.quotes[0].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section id="story" className="py-32 px-6 max-w-4xl mx-auto text-center">
        <Palette className="w-8 h-8 mx-auto text-[#E6E6FA] mb-8" />
        <h2 className="text-5xl md:text-6xl font-script mb-16 text-[#FFB6C1]">Our Love Story</h2>
        <div className="space-y-16">
          {weddingData.story.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-[#FFB6C1]/20 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFB6C1]/50 to-[#E6E6FA]/50" />
              <div className="text-sm font-sans tracking-widest text-[#FFB6C1] mb-2">{item.year}</div>
              <h3 className="text-3xl font-script mb-4 text-[#5A4B4B]">{item.title}</h3>
              <p className="text-[#5A4B4B]/80 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-24 bg-white border-y border-[#FFB6C1]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {weddingData.funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-[#FFB6C1]/20 rounded-[2rem] bg-[#FDF6F5]"
              >
                <div className="text-xs font-sans tracking-widest uppercase text-[#FFB6C1] mb-3">{fact.label}</div>
                <div className="text-2xl font-script text-[#5A4B4B]">{fact.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 bg-[#FDF6F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-script mb-4 text-[#FFB6C1]">Sweet Memories</h2>
            <p className="text-sm font-sans tracking-widest uppercase text-[#5A4B4B]/60">Moments we cherish</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingData.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`overflow-hidden rounded-[2rem] shadow-sm border border-white ${index % 2 === 0 ? 'mt-0 lg:mt-12' : 'mt-0'}`}
              >
                <img src={img} alt="Gallery" className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section id="details" className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-script mb-16 text-[#FFB6C1]">The Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {weddingData.events.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center p-10 bg-[#FDF6F5] rounded-[2rem] border border-[#FFB6C1]/20"
              >
                <span className="text-sm font-sans tracking-widest text-[#FFB6C1] mb-4">{event.time}</span>
                <span className="text-3xl font-script mb-4 text-[#5A4B4B]">{event.title}</span>
                <span className="text-[#5A4B4B]/70 italic text-center">{event.location}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section id="travel" className="py-32 bg-[#FDF6F5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-script mb-4 text-[#FFB6C1]">Travel & Stay</h2>
            <p className="text-sm font-sans tracking-widest uppercase text-[#5A4B4B]/60">Information for our out-of-town guests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-[#FFB6C1]/20">
              <h3 className="text-3xl font-script mb-8 text-[#FFB6C1] border-b border-[#FFB6C1]/20 pb-4">Accommodations</h3>
              <div className="space-y-8">
                {weddingData.travel.accommodations.map((hotel, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-serif text-[#5A4B4B] mb-2">{hotel.name}</h4>
                    <p className="text-[#5A4B4B]/70 mb-3 font-serif">{hotel.description}</p>
                    <a href={hotel.link} className="text-xs font-sans tracking-widest uppercase text-[#FFB6C1] hover:text-[#5A4B4B] transition-colors">Book a Room →</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-[#FFB6C1]/20">
              <h3 className="text-3xl font-script mb-8 text-[#FFB6C1] border-b border-[#FFB6C1]/20 pb-4">Airports</h3>
              <div className="space-y-8">
                {weddingData.travel.airports.map((airport, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-serif text-[#5A4B4B] mb-2">{airport.name}</h4>
                    <p className="text-[#5A4B4B]/70 font-serif">{airport.description}</p>
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
            <h2 className="text-5xl font-script mb-6 text-[#FFB6C1]">Dress Code</h2>
            <h3 className="text-2xl font-serif text-[#5A4B4B] mb-4">{weddingData.dressCode.title}</h3>
            <p className="text-[#5A4B4B]/70 leading-relaxed mb-12 font-serif">
              {weddingData.dressCode.description}
            </p>
            
            <h2 className="text-5xl font-script mb-8 text-[#FFB6C1]">Registry</h2>
            <p className="text-[#5A4B4B]/70 leading-relaxed mb-8 font-serif">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following places:
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {weddingData.registry.map((item, index) => {
                const Icon = iconMap[item.icon] || Gift;
                return (
                  <a 
                    key={index} 
                    href={item.link}
                    className="flex items-center space-x-3 px-6 py-3 border border-[#FFB6C1]/30 rounded-full hover:bg-[#FFB6C1] hover:text-white transition-all duration-300 group bg-[#FDF6F5]"
                  >
                    <Icon className="w-4 h-4 text-[#FFB6C1] group-hover:text-white transition-colors" />
                    <span className="text-xs font-sans tracking-widest uppercase text-[#5A4B4B] group-hover:text-white">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 border-2 border-[#FFB6C1]/30 rounded-[3rem] translate-x-4 translate-y-4" />
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop" 
              alt="Wedding Details" 
              className="relative z-10 w-full h-[600px] object-cover rounded-[3rem]"
            />
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="py-32 px-6 text-center bg-gradient-to-t from-[#FDF6F5] to-white">
        <div className="max-w-xl mx-auto bg-white p-16 rounded-[3rem] shadow-lg border border-[#E6E6FA]/50">
          <Heart className="w-10 h-10 mx-auto text-[#FFB6C1] mb-6" />
          <h2 className="text-5xl font-script mb-4 text-[#5A4B4B]">RSVP</h2>
          <p className="text-sm font-sans tracking-widest uppercase text-[#5A4B4B]/60 mb-10">Kindly reply by August 1st</p>
          <form className="space-y-6 text-left">
            <div>
              <label className="block text-xs font-sans tracking-widest uppercase text-[#5A4B4B] mb-2">Full Name</label>
              <input type="text" className="w-full border-b border-[#FFB6C1]/50 py-3 bg-transparent focus:outline-none focus:border-[#FFB6C1] transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-sans tracking-widest uppercase text-[#5A4B4B] mb-2">Will you attend?</label>
              <select className="w-full border-b border-[#FFB6C1]/50 py-3 bg-transparent focus:outline-none focus:border-[#FFB6C1] transition-colors text-[#5A4B4B]">
                <option>Joyfully Accept</option>
                <option>Regretfully Decline</option>
              </select>
            </div>
            <button type="button" className="w-full py-4 mt-8 bg-[#FFB6C1] text-white text-sm font-sans tracking-widest uppercase hover:bg-[#FF91A4] transition-colors rounded-full shadow-md">
              Send Reply
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
