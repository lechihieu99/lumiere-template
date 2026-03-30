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

export function GardenWedding() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#4A5D4E] font-serif selection:bg-[#4A5D4E] selection:text-[#F4F1EA]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-6 px-8 flex justify-between items-center bg-[#F4F1EA]/90 backdrop-blur-sm border-b border-[#4A5D4E]/10">
        <div className="text-xl font-display italic">{weddingData.bride} & {weddingData.groom}</div>
        <div className="hidden md:flex space-x-8 text-sm tracking-widest uppercase font-sans text-[#7A8B7D]">
          <a href="#story" className="hover:text-[#4A5D4E] transition-colors">Our Story</a>
          <a href="#party" className="hover:text-[#4A5D4E] transition-colors">Wedding Party</a>
          <a href="#gallery" className="hover:text-[#4A5D4E] transition-colors">Gallery</a>
          <a href="#details" className="hover:text-[#4A5D4E] transition-colors">Details</a>
          <a href="#travel" className="hover:text-[#4A5D4E] transition-colors">Travel</a>
          <a href="#registry" className="hover:text-[#4A5D4E] transition-colors">Registry</a>
          <a href="#rsvp" className="hover:text-[#4A5D4E] transition-colors">RSVP</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 p-4 md:p-8 pb-0">
          <div className="w-full h-full rounded-t-[100px] overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop" 
              alt="Garden Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#4A5D4E]/20 mix-blend-multiply" />
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center bg-[#F4F1EA]/90 backdrop-blur-md p-12 md:p-20 rounded-[40px] shadow-xl max-w-3xl mx-4 border border-[#4A5D4E]/10"
        >
          <div className="text-xs tracking-[0.3em] uppercase mb-6 font-sans text-[#7A8B7D]">Join us in the garden</div>
          <h1 className="text-6xl md:text-8xl font-display italic mb-8 text-[#4A5D4E]">
            {weddingData.bride} <br />
            <span className="text-4xl md:text-6xl font-sans not-italic font-light text-[#7A8B7D]">&</span> <br />
            {weddingData.groom}
          </h1>
          <div className="text-sm tracking-[0.2em] uppercase font-sans text-[#4A5D4E] border-t border-[#4A5D4E]/20 pt-8 mt-8 mb-8">
            {weddingData.dateString} <span className="mx-4">•</span> {weddingData.location}
          </div>
          <Countdown />
        </motion.div>
      </section>

      {/* Quote 1 */}
      <section className="py-24 px-6 bg-[#EAE6DB] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-3xl md:text-5xl font-display italic text-[#4A5D4E] leading-relaxed">
            "{weddingData.quotes[0].split('-')[0].trim()}"
          </p>
          <p className="mt-8 text-xs font-sans tracking-widest uppercase text-[#7A8B7D]">
            - {weddingData.quotes[0].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section id="story" className="py-32 px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-display italic mb-20 text-[#4A5D4E]">How We Met</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-[#4A5D4E]/20 -translate-y-1/2 z-0" />
            {weddingData.story.map((item, index) => (
              <div key={index} className="relative z-10 bg-[#F4F1EA] px-6 py-8 border border-[#4A5D4E]/10 rounded-2xl shadow-sm">
                <div className="w-12 h-12 mx-auto bg-[#4A5D4E] text-[#F4F1EA] rounded-full flex items-center justify-center text-sm font-sans tracking-widest mb-6 shadow-md">
                  {item.year.slice(-2)}'
                </div>
                <h3 className="text-2xl font-display italic mb-4 text-[#4A5D4E]">{item.title}</h3>
                <p className="text-[#7A8B7D] leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Fun Facts */}
      <section className="py-24 bg-[#EAE6DB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {weddingData.funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F4F1EA] p-8 rounded-2xl shadow-sm border border-[#4A5D4E]/10"
              >
                <div className="text-xs font-sans tracking-widest uppercase text-[#7A8B7D] mb-3">{fact.label}</div>
                <div className="text-xl font-display italic text-[#4A5D4E]">{fact.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Party */}
      <section id="party" className="py-32 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display italic mb-4 text-[#4A5D4E]">Wedding Party</h2>
            <p className="text-sm font-sans tracking-widest uppercase text-[#7A8B7D]">The people we love most</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Bridesmaids */}
            <div>
              <h3 className="text-3xl font-display italic text-center mb-12 text-[#4A5D4E]">The Bridesmaids</h3>
              <div className="space-y-8">
                {weddingData.weddingParty.bridesmaids.map((person, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-6 bg-white p-6 rounded-[30px] shadow-sm border border-[#4A5D4E]/5"
                  >
                    <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover shadow-sm" />
                    <div>
                      <div className="text-xl font-display italic text-[#4A5D4E] mb-1">{person.name}</div>
                      <div className="text-xs font-sans tracking-widest uppercase text-[#7A8B7D]">{person.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Groomsmen */}
            <div>
              <h3 className="text-3xl font-display italic text-center mb-12 text-[#4A5D4E]">The Groomsmen</h3>
              <div className="space-y-8">
                {weddingData.weddingParty.groomsmen.map((person, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-6 flex-row-reverse space-x-reverse text-right lg:flex-row lg:space-x-6 lg:text-left lg:space-x-reverse-0 bg-white p-6 rounded-[30px] shadow-sm border border-[#4A5D4E]/5"
                  >
                    <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover shadow-sm" />
                    <div>
                      <div className="text-xl font-display italic text-[#4A5D4E] mb-1">{person.name}</div>
                      <div className="text-xs font-sans tracking-widest uppercase text-[#7A8B7D]">{person.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 bg-[#EAE6DB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display italic mb-4 text-[#4A5D4E]">Gallery</h2>
            <p className="text-sm font-sans tracking-widest uppercase text-[#7A8B7D]">A glimpse into our lives</p>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {weddingData.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="break-inside-avoid rounded-2xl overflow-hidden shadow-md"
              >
                <img src={img} alt="Gallery" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details & RSVP */}
      <section id="details" className="py-32 px-6 bg-[#F4F1EA]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="bg-white p-12 md:p-16 rounded-[40px] shadow-sm border border-[#4A5D4E]/10 flex flex-col">
            <h2 className="text-4xl font-display italic mb-12 text-[#4A5D4E] text-center">Schedule</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-[#4A5D4E]/20 flex-grow">
              {weddingData.events.map((event, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-4 h-4 rounded-full bg-[#F4F1EA] border-2 border-[#4A5D4E] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ml-4 md:ml-0" />
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 text-left md:group-odd:text-right">
                    <div className="text-xs font-sans tracking-widest text-[#7A8B7D] mb-1">{event.time}</div>
                    <h3 className="text-xl font-display italic text-[#4A5D4E] mb-1">{event.title}</h3>
                    <p className="text-[#7A8B7D] text-sm">{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-64 mt-12 rounded-2xl overflow-hidden border border-[#4A5D4E]/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.262529815858!2d9.18241681557112!3d45.88599997910803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47868c227e1f4d3d%3A0x6c6e75294025f0!2sLake%20Como!5e0!3m2!1sen!2sus!4v1625581234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'sepia(20%) hue-rotate(70deg) saturate(150%)' }} 
                allowFullScreen 
                loading="lazy"
              />
            </div>
          </div>
          
          <div id="rsvp" className="bg-[#4A5D4E] text-[#F4F1EA] p-12 md:p-16 rounded-[40px] shadow-xl text-center flex flex-col justify-center">
            <h2 className="text-5xl font-display italic mb-4">RSVP</h2>
            <p className="text-xs font-sans tracking-widest uppercase text-[#A3B1A6] mb-12">Please respond by August 1st</p>
            <form className="space-y-6 text-left">
              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-[#A3B1A6] mb-2">Name(s)</label>
                <input type="text" className="w-full border-b border-[#A3B1A6]/50 py-2 bg-transparent focus:outline-none focus:border-[#F4F1EA] transition-colors text-[#F4F1EA]" />
              </div>
              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-[#A3B1A6] mb-2">Email</label>
                <input type="email" className="w-full border-b border-[#A3B1A6]/50 py-2 bg-transparent focus:outline-none focus:border-[#F4F1EA] transition-colors text-[#F4F1EA]" />
              </div>
              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-[#A3B1A6] mb-2">Attending?</label>
                <select className="w-full border-b border-[#A3B1A6]/50 py-2 bg-transparent focus:outline-none focus:border-[#F4F1EA] transition-colors text-[#F4F1EA] appearance-none">
                  <option className="text-[#4A5D4E]">Yes, wouldn't miss it</option>
                  <option className="text-[#4A5D4E]">No, celebrating from afar</option>
                </select>
              </div>
              <button type="button" className="w-full py-4 mt-8 bg-[#F4F1EA] text-[#4A5D4E] text-sm font-sans tracking-widest uppercase hover:bg-white transition-colors rounded-full font-medium">
                Send RSVP
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section id="travel" className="py-32 bg-[#EAE6DB]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display italic mb-4 text-[#4A5D4E]">Travel & Stay</h2>
            <p className="text-sm font-sans tracking-widest uppercase text-[#7A8B7D]">Information for our out-of-town guests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-[#F4F1EA] p-10 rounded-[40px] shadow-sm border border-[#4A5D4E]/10">
              <h3 className="text-3xl font-display italic mb-8 text-[#4A5D4E] border-b border-[#4A5D4E]/20 pb-4">Accommodations</h3>
              <div className="space-y-8">
                {weddingData.travel.accommodations.map((hotel, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-display italic text-[#4A5D4E] mb-2">{hotel.name}</h4>
                    <p className="text-[#7A8B7D] mb-4 text-sm leading-relaxed">{hotel.description}</p>
                    <a href={hotel.link} className="text-xs font-sans tracking-widest uppercase text-[#4A5D4E] hover:text-[#7A8B7D] transition-colors font-medium">Book a Room →</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F4F1EA] p-10 rounded-[40px] shadow-sm border border-[#4A5D4E]/10">
              <h3 className="text-3xl font-display italic mb-8 text-[#4A5D4E] border-b border-[#4A5D4E]/20 pb-4">Airports</h3>
              <div className="space-y-8">
                {weddingData.travel.airports.map((airport, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-display italic text-[#4A5D4E] mb-2">{airport.name}</h4>
                    <p className="text-[#7A8B7D] text-sm leading-relaxed">{airport.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code & Registry */}
      <section id="registry" className="py-32 bg-[#F4F1EA]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-display italic mb-6 text-[#4A5D4E]">Dress Code</h2>
            <h3 className="text-2xl font-sans text-[#7A8B7D] mb-4">{weddingData.dressCode.title}</h3>
            <p className="text-[#7A8B7D] leading-relaxed mb-12 text-sm">
              {weddingData.dressCode.description}
            </p>
            
            <h2 className="text-4xl font-display italic mb-8 text-[#4A5D4E]">Gift Registry</h2>
            <p className="text-[#7A8B7D] leading-relaxed mb-8 text-sm">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following places:
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {weddingData.registry.map((item, index) => {
                const Icon = iconMap[item.icon] || Gift;
                return (
                  <a 
                    key={index} 
                    href={item.link}
                    className="flex items-center space-x-3 px-6 py-3 bg-white border border-[#4A5D4E]/10 rounded-full hover:bg-[#4A5D4E] hover:text-[#F4F1EA] transition-all duration-300 group shadow-sm"
                  >
                    <Icon className="w-4 h-4 text-[#4A5D4E] group-hover:text-[#F4F1EA] transition-colors" />
                    <span className="text-xs font-sans tracking-widest uppercase text-[#4A5D4E] group-hover:text-[#F4F1EA] transition-colors">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#4A5D4E]/10 rounded-[40px] translate-x-4 translate-y-4" />
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop" 
              alt="Wedding Details" 
              className="relative z-10 w-full h-[500px] object-cover rounded-[40px] shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Quote 2 */}
      <section className="py-24 px-6 bg-[#4A5D4E] text-[#F4F1EA] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-3xl md:text-5xl font-display italic leading-relaxed">
            "{weddingData.quotes[1].split('-')[0].trim()}"
          </p>
          <p className="mt-8 text-xs font-sans tracking-widest uppercase text-[#A3B1A6]">
            - {weddingData.quotes[1].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-24 text-center bg-[#EAE6DB] text-[#4A5D4E]">
        <h2 className="text-5xl font-display italic mb-6">{weddingData.bride} & {weddingData.groom}</h2>
        <p className="text-xs font-sans tracking-widest uppercase text-[#7A8B7D] mb-12">Thank you for being part of our story</p>
        <div className="text-[10px] font-sans tracking-widest uppercase text-[#7A8B7D]/60">
          © 2026 {weddingData.bride} & {weddingData.groom}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
