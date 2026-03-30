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

export function SunsetBeach() {
  return (
    <div className="min-h-screen bg-[#FFFBF5] text-[#5D4037] font-sans selection:bg-[#FFCC80] selection:text-[#5D4037]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-6 px-8 flex justify-between items-center bg-[#FFFBF5]/80 backdrop-blur-md border-b border-[#FFCC80]/30">
        <div className="text-xl font-display font-medium text-[#E65100] tracking-widest uppercase">{weddingData.bride} & {weddingData.groom}</div>
        <div className="hidden md:flex space-x-10 text-xs font-medium tracking-[0.2em] uppercase text-[#FF9800]">
          <a href="#story" className="hover:text-[#E65100] transition-colors">Our Story</a>
          <a href="#party" className="hover:text-[#E65100] transition-colors">Wedding Party</a>
          <a href="#gallery" className="hover:text-[#E65100] transition-colors">Gallery</a>
          <a href="#details" className="hover:text-[#E65100] transition-colors">Details</a>
          <a href="#travel" className="hover:text-[#E65100] transition-colors">Travel</a>
          <a href="#registry" className="hover:text-[#E65100] transition-colors">Registry</a>
          <a href="#rsvp" className="hover:text-[#E65100] transition-colors">RSVP</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=2070&auto=format&fit=crop" 
            alt="Beach Background" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFBF5] via-[#FFFBF5]/20 to-transparent" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 text-center max-w-4xl px-6"
        >
          <div className="text-sm font-medium tracking-[0.3em] uppercase text-[#E65100] mb-8 bg-white/50 backdrop-blur-sm inline-block px-6 py-2 rounded-full border border-[#FFCC80]/50">Join us by the sea</div>
          <h1 className="text-7xl md:text-9xl font-display font-light text-[#3E2723] mb-8 drop-shadow-md">
            {weddingData.bride} <br />
            <span className="text-5xl md:text-7xl italic text-[#FF9800]">&</span> <br />
            {weddingData.groom}
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm font-medium tracking-[0.2em] uppercase text-[#E65100] bg-white/50 backdrop-blur-sm inline-flex px-8 py-4 rounded-full border border-[#FFCC80]/50 mb-12">
            <span>{weddingData.dateString}</span>
            <span className="hidden md:block w-1 h-1 bg-[#FF9800] rounded-full" />
            <span>{weddingData.location}</span>
          </div>
          <Countdown />
        </motion.div>
      </section>

      {/* Quote 1 */}
      <section className="py-24 px-6 bg-[#FFFBF5] text-center border-t border-[#FFCC80]/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-3xl md:text-5xl font-display font-light text-[#E65100] leading-relaxed italic">
            "{weddingData.quotes[0].split('-')[0].trim()}"
          </p>
          <p className="mt-8 text-xs font-medium tracking-widest uppercase text-[#FF9800]">
            - {weddingData.quotes[0].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section id="story" className="py-32 px-6 bg-gradient-to-b from-[#FFFBF5] to-[#FFE0B2]/20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-display font-light text-[#E65100] mb-20">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {weddingData.story.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-10 rounded-3xl shadow-lg border border-[#FFCC80]/30 hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl font-display font-light text-[#FF9800] mb-6">{item.year}</div>
                <h3 className="text-xl font-medium tracking-widest uppercase text-[#E65100] mb-4">{item.title}</h3>
                <p className="text-[#5D4037] leading-relaxed text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-24 bg-[#FFE0B2]/20 border-y border-[#FFCC80]/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {weddingData.funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-md border border-[#FFCC80]/30"
              >
                <div className="text-xs font-medium tracking-widest uppercase text-[#FF9800] mb-4">{fact.label}</div>
                <div className="text-xl font-display font-medium text-[#E65100]">{fact.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Party */}
      <section id="party" className="py-32 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-light text-[#E65100] mb-6">Wedding Party</h2>
            <p className="text-sm font-medium tracking-widest uppercase text-[#FF9800]">The people we love most</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Bridesmaids */}
            <div>
              <h3 className="text-3xl font-display font-light text-center mb-16 text-[#E65100] border-b border-[#FFCC80]/50 pb-4 inline-block mx-auto block w-max">The Bridesmaids</h3>
              <div className="space-y-12">
                {weddingData.weddingParty.bridesmaids.map((person, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-8 bg-white p-6 rounded-3xl shadow-md border border-[#FFCC80]/30"
                  >
                    <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover shadow-sm" />
                    <div>
                      <div className="text-2xl font-display font-medium text-[#E65100] mb-2">{person.name}</div>
                      <div className="text-xs font-medium tracking-widest uppercase text-[#FF9800]">{person.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Groomsmen */}
            <div>
              <h3 className="text-3xl font-display font-light text-center mb-16 text-[#E65100] border-b border-[#FFCC80]/50 pb-4 inline-block mx-auto block w-max">The Groomsmen</h3>
              <div className="space-y-12">
                {weddingData.weddingParty.groomsmen.map((person, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-8 flex-row-reverse space-x-reverse text-right lg:flex-row lg:space-x-8 lg:text-left lg:space-x-reverse-0 bg-white p-6 rounded-3xl shadow-md border border-[#FFCC80]/30"
                  >
                    <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover shadow-sm" />
                    <div>
                      <div className="text-2xl font-display font-medium text-[#E65100] mb-2">{person.name}</div>
                      <div className="text-xs font-medium tracking-widest uppercase text-[#FF9800]">{person.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 px-6 bg-gradient-to-b from-[#FFFBF5] to-[#FFE0B2]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-light text-[#E65100] mb-6">Sun-Kissed Memories</h2>
            <p className="text-sm font-medium tracking-widest uppercase text-[#FF9800]">Moments we cherish</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingData.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl shadow-md"
              >
                <img src={img} alt="Gallery" className="w-full aspect-square object-cover hover:scale-110 transition-transform duration-1000" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details & RSVP */}
      <section id="details" className="py-32 px-6 bg-gradient-to-t from-[#FFFBF5] to-[#FFE0B2]/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="bg-white p-12 md:p-16 rounded-3xl shadow-lg border border-[#FFCC80]/30 flex flex-col">
            <h2 className="text-4xl font-display font-light text-[#E65100] mb-12 text-center">Weekend Events</h2>
            <div className="space-y-10 flex-grow">
              {weddingData.events.map((event, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center border-b border-[#FFCC80]/30 pb-6 last:border-0">
                  <span className="text-lg font-medium tracking-widest text-[#FF9800] md:w-32 shrink-0 mb-2 md:mb-0">{event.time}</span>
                  <div>
                    <span className="block text-xl font-display font-medium text-[#E65100] mb-1">{event.title}</span>
                    <span className="block text-[#5D4037] text-sm">{event.location}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-64 mt-12 rounded-2xl overflow-hidden border border-[#FFCC80]/30">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.262529815858!2d9.18241681557112!3d45.88599997910803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47868c227e1f4d3d%3A0x6c6e75294025f0!2sLake%20Como!5e0!3m2!1sen!2sus!4v1625581234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'sepia(30%) hue-rotate(330deg) saturate(150%)' }} 
                allowFullScreen 
                loading="lazy"
              />
            </div>
          </div>
          
          <div id="rsvp" className="bg-gradient-to-br from-[#FF9800] to-[#E65100] text-white p-12 md:p-16 rounded-3xl shadow-xl text-center flex flex-col justify-center">
            <h2 className="text-5xl font-display font-light mb-6">RSVP</h2>
            <p className="text-sm font-medium tracking-widest uppercase text-[#FFE0B2] mb-12">Please reply by August 1st</p>
            <form className="space-y-8 text-left">
              <div>
                <label className="block text-xs font-medium tracking-widest uppercase text-[#FFE0B2] mb-2">Name(s)</label>
                <input type="text" className="w-full border-b border-[#FFE0B2]/50 py-3 bg-transparent focus:outline-none focus:border-white transition-colors text-white" />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-widest uppercase text-[#FFE0B2] mb-2">Email</label>
                <input type="email" className="w-full border-b border-[#FFE0B2]/50 py-3 bg-transparent focus:outline-none focus:border-white transition-colors text-white" />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-widest uppercase text-[#FFE0B2] mb-2">Attending?</label>
                <select className="w-full border-b border-[#FFE0B2]/50 py-3 bg-transparent focus:outline-none focus:border-white transition-colors text-white appearance-none">
                  <option className="text-[#E65100]">Can't wait to celebrate!</option>
                  <option className="text-[#E65100]">Sending love from afar</option>
                </select>
              </div>
              <button type="button" className="w-full py-5 mt-10 bg-white text-[#E65100] text-sm font-medium tracking-widest uppercase hover:bg-[#FFFBF5] transition-colors rounded-full shadow-md">
                Send Response
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section id="travel" className="py-32 bg-[#FFFBF5] border-t border-[#FFCC80]/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-display font-light text-[#E65100] mb-6">Travel & Stay</h2>
            <p className="text-xs font-medium tracking-widest uppercase text-[#FF9800]">Information for our out-of-town guests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-12 rounded-3xl shadow-lg border border-[#FFCC80]/30 text-center">
              <h3 className="text-3xl font-display font-light mb-12 text-[#E65100] border-b border-[#FFCC80]/50 pb-4 inline-block">Accommodations</h3>
              <div className="space-y-12">
                {weddingData.travel.accommodations.map((hotel, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-display font-medium text-[#E65100] mb-3">{hotel.name}</h4>
                    <p className="text-[#5D4037] mb-6 text-sm leading-relaxed">{hotel.description}</p>
                    <a href={hotel.link} className="text-xs font-medium tracking-widest uppercase text-[#FF9800] hover:text-[#E65100] transition-colors border-b border-[#FF9800] pb-1">Book a Room</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-lg border border-[#FFCC80]/30 text-center">
              <h3 className="text-3xl font-display font-light mb-12 text-[#E65100] border-b border-[#FFCC80]/50 pb-4 inline-block">Airports</h3>
              <div className="space-y-12">
                {weddingData.travel.airports.map((airport, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-display font-medium text-[#E65100] mb-3">{airport.name}</h4>
                    <p className="text-[#5D4037] text-sm leading-relaxed">{airport.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code & Registry */}
      <section id="registry" className="py-32 bg-[#FFE0B2]/20 border-y border-[#FFCC80]/30">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-display font-light mb-8 text-[#E65100]">Dress Code</h2>
            <h3 className="text-xl font-medium tracking-widest uppercase text-[#FF9800] mb-6">{weddingData.dressCode.title}</h3>
            <p className="text-[#5D4037] leading-relaxed mb-16 text-lg">
              {weddingData.dressCode.description}
            </p>
            
            <h2 className="text-4xl font-display font-light mb-8 text-[#E65100]">Gift Registry</h2>
            <p className="text-[#5D4037] leading-relaxed mb-12 text-lg">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following places:
            </p>
            <div className="flex flex-col space-y-4">
              {weddingData.registry.map((item, index) => {
                const Icon = iconMap[item.icon] || Gift;
                return (
                  <a 
                    key={index} 
                    href={item.link}
                    className="flex items-center justify-between px-8 py-6 bg-white border border-[#FFCC80]/30 rounded-2xl hover:border-[#E65100] hover:shadow-md transition-all duration-300 group shadow-sm"
                  >
                    <span className="text-xs font-medium tracking-widest uppercase text-[#FF9800] group-hover:text-[#E65100] transition-colors">{item.name}</span>
                    <Icon className="w-5 h-5 text-[#FFCC80] group-hover:text-[#E65100] transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="p-4 bg-white border border-[#FFCC80]/30 shadow-lg rounded-3xl">
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop" 
              alt="Wedding Details" 
              className="w-full h-[600px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Quote 2 */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#FF9800] to-[#E65100] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-3xl md:text-5xl font-display font-light leading-relaxed italic">
            "{weddingData.quotes[1].split('-')[0].trim()}"
          </p>
          <p className="mt-8 text-xs font-medium tracking-widest uppercase text-[#FFE0B2]">
            - {weddingData.quotes[1].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-24 text-center bg-[#FFFBF5] border-t border-[#FFCC80]/30">
        <h2 className="text-5xl font-display font-light text-[#E65100] mb-6">{weddingData.bride} & {weddingData.groom}</h2>
        <p className="text-xs font-medium tracking-widest uppercase text-[#FF9800] mb-12">See you at the beach</p>
        <div className="text-[10px] font-medium tracking-widest uppercase text-[#FFCC80]">
          © 2026 {weddingData.bride} & {weddingData.groom}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
