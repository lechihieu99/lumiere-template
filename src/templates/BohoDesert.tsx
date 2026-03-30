import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from './shared/data';
import { Countdown } from './shared/Countdown';
import { Gift, ShoppingBag, Plane, Heart, Sun } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Gift,
  ShoppingBag,
  Plane
};

export function BohoDesert() {
  return (
    <div className="min-h-screen bg-[#F5EBE6] text-[#5C4033] font-serif selection:bg-[#C87960] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-6 px-12 flex justify-between items-center mix-blend-difference text-white">
        <div className="text-xl tracking-[0.2em] uppercase font-sans">{weddingData.bride[0]} & {weddingData.groom[0]}</div>
        <div className="hidden md:flex space-x-8 text-xs tracking-[0.2em] uppercase font-sans">
          <a href="#story" className="hover:text-[#C87960] transition-colors">Our Story</a>
          <a href="#gallery" className="hover:text-[#C87960] transition-colors">Gallery</a>
          <a href="#details" className="hover:text-[#C87960] transition-colors">Details</a>
          <a href="#travel" className="hover:text-[#C87960] transition-colors">Travel</a>
          <a href="#registry" className="hover:text-[#C87960] transition-colors">Registry</a>
          <a href="#rsvp" className="hover:text-[#C87960] transition-colors">RSVP</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop" 
            alt="Boho Desert Background" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#F5EBE6]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 text-center flex flex-col items-center bg-white/10 backdrop-blur-sm p-12 rounded-full border border-white/20"
        >
          <Sun className="w-8 h-8 text-[#C87960] mb-6" />
          <div className="text-sm tracking-[0.3em] uppercase mb-6 font-sans text-white">We are getting married</div>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 drop-shadow-md">
            {weddingData.bride} & {weddingData.groom}
          </h1>
          <div className="text-lg tracking-[0.2em] uppercase font-sans text-white mb-12">
            {weddingData.dateString} <span className="mx-4">|</span> {weddingData.location}
          </div>
          <Countdown className="text-white" />
        </motion.div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <Heart className="w-8 h-8 mx-auto text-[#C87960] mb-8" />
          <p className="text-2xl md:text-4xl font-serif italic text-[#5C4033] leading-relaxed">
            "{weddingData.quotes[0].split('-')[0].trim()}"
          </p>
          <p className="mt-6 text-sm font-sans tracking-widest uppercase text-[#C87960]">
            - {weddingData.quotes[0].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section id="story" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-serif mb-16 text-[#C87960]">Our Journey</h2>
        <div className="space-y-16">
          {weddingData.story.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-[#C87960]/20"
            >
              <div className="text-sm font-sans tracking-widest text-[#C87960] mb-2">{item.year}</div>
              <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
              <p className="text-[#5C4033]/80 leading-relaxed">{item.description}</p>
            </motion.div>
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
              >
                <div className="text-sm font-sans tracking-widest uppercase text-[#C87960] mb-3">{fact.label}</div>
                <div className="text-xl font-serif text-[#5C4033]">{fact.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 bg-[#F5EBE6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif mb-4 text-[#C87960]">Moments</h2>
            <p className="text-sm font-sans tracking-widest uppercase text-[#5C4033]/60">Captured in time</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingData.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`overflow-hidden rounded-3xl ${index % 2 === 0 ? 'mt-0 lg:mt-12' : 'mt-0'}`}
              >
                <img src={img} alt="Gallery" className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details & RSVP */}
      <section id="details" className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <h2 className="text-4xl font-serif mb-12 text-[#C87960]">The Details</h2>
            <div className="space-y-8 mb-16">
              {weddingData.events.map((event, index) => (
                <div key={index} className="flex flex-col border-b border-[#C87960]/20 pb-6">
                  <span className="text-sm font-sans tracking-widest text-[#C87960] mb-2">{event.time}</span>
                  <span className="text-2xl font-serif mb-1">{event.title}</span>
                  <span className="text-[#5C4033]/70 italic">{event.location}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div id="rsvp" className="bg-[#F5EBE6] p-12 rounded-3xl shadow-sm border border-[#C87960]/20 text-center">
            <h2 className="text-4xl font-serif mb-4 text-[#C87960]">RSVP</h2>
            <p className="text-sm font-sans tracking-widest uppercase text-[#5C4033]/60 mb-10">Kindly reply by August 1st</p>
            <form className="space-y-6 text-left">
              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-[#5C4033] mb-2">Full Name</label>
                <input type="text" className="w-full border-b border-[#C87960]/50 py-2 bg-transparent focus:outline-none focus:border-[#C87960] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-[#5C4033] mb-2">Will you attend?</label>
                <select className="w-full border-b border-[#C87960]/50 py-2 bg-transparent focus:outline-none focus:border-[#C87960] transition-colors">
                  <option>Joyfully Accept</option>
                  <option>Regretfully Decline</option>
                </select>
              </div>
              <button type="button" className="w-full py-4 mt-8 bg-[#C87960] text-white text-sm font-sans tracking-widest uppercase hover:bg-[#A66048] transition-colors rounded-full">
                Send Reply
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section id="travel" className="py-32 bg-[#F5EBE6]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif mb-4 text-[#C87960]">Travel & Stay</h2>
            <p className="text-sm font-sans tracking-widest uppercase text-[#5C4033]/60">Information for our out-of-town guests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-serif mb-8 text-[#5C4033] border-b border-[#C87960]/20 pb-4">Accommodations</h3>
              <div className="space-y-8">
                {weddingData.travel.accommodations.map((hotel, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-serif text-[#5C4033] mb-2">{hotel.name}</h4>
                    <p className="text-[#5C4033]/70 mb-3">{hotel.description}</p>
                    <a href={hotel.link} className="text-sm font-sans tracking-widest uppercase text-[#C87960] hover:text-[#5C4033] transition-colors">Book a Room →</a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-8 text-[#5C4033] border-b border-[#C87960]/20 pb-4">Airports</h3>
              <div className="space-y-8">
                {weddingData.travel.airports.map((airport, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-serif text-[#5C4033] mb-2">{airport.name}</h4>
                    <p className="text-[#5C4033]/70">{airport.description}</p>
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
            <h2 className="text-4xl font-serif mb-6 text-[#C87960]">Dress Code</h2>
            <h3 className="text-2xl font-serif text-[#5C4033] mb-4">{weddingData.dressCode.title}</h3>
            <p className="text-[#5C4033]/70 leading-relaxed mb-12">
              {weddingData.dressCode.description}
            </p>
            
            <h2 className="text-4xl font-serif mb-8 text-[#C87960]">Gift Registry</h2>
            <p className="text-[#5C4033]/70 leading-relaxed mb-8">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following places:
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {weddingData.registry.map((item, index) => {
                const Icon = iconMap[item.icon] || Gift;
                return (
                  <a 
                    key={index} 
                    href={item.link}
                    className="flex items-center space-x-3 px-6 py-3 border border-[#C87960]/30 rounded-full hover:bg-[#C87960] hover:text-white transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-[#C87960] group-hover:text-white transition-colors" />
                    <span className="text-sm font-sans tracking-widest uppercase">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 border border-[#C87960]/30 rounded-3xl translate-x-4 translate-y-4" />
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop" 
              alt="Wedding Details" 
              className="relative z-10 w-full h-[600px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 text-center bg-[#C87960] text-white">
        <h2 className="text-5xl font-serif mb-6">{weddingData.bride} & {weddingData.groom}</h2>
        <p className="text-sm font-sans tracking-widest uppercase opacity-80 mb-12">We can't wait to celebrate with you</p>
      </footer>
    </div>
  );
}
