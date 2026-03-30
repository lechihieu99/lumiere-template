import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from './shared/data';
import { Countdown } from './shared/Countdown';
import { Gift, ShoppingBag, Plane, Heart } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Gift,
  ShoppingBag,
  Plane
};

export function RomanticFloral() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C363F] font-serif selection:bg-[#E8D8CE] selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-6 px-12 flex justify-between items-center mix-blend-difference text-white">
        <div className="text-xl tracking-[0.2em] uppercase font-sans">{weddingData.bride[0]} & {weddingData.groom[0]}</div>
        <div className="hidden md:flex space-x-8 text-xs tracking-[0.2em] uppercase font-sans">
          <a href="#story" className="hover:opacity-70 transition-opacity">Our Story</a>
          <a href="#party" className="hover:opacity-70 transition-opacity">Wedding Party</a>
          <a href="#gallery" className="hover:opacity-70 transition-opacity">Gallery</a>
          <a href="#details" className="hover:opacity-70 transition-opacity">Details</a>
          <a href="#travel" className="hover:opacity-70 transition-opacity">Travel</a>
          <a href="#registry" className="hover:opacity-70 transition-opacity">Registry</a>
          <a href="#rsvp" className="hover:opacity-70 transition-opacity">RSVP</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
            alt="Floral Background" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#FDFBF7]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 text-center flex flex-col items-center"
        >
          <div className="text-sm tracking-[0.3em] uppercase mb-6 font-sans text-white/90">We are getting married</div>
          <h1 className="text-7xl md:text-9xl font-script text-white mb-8 drop-shadow-lg">
            {weddingData.bride} & {weddingData.groom}
          </h1>
          <div className="text-lg tracking-[0.2em] uppercase font-sans text-white/90 mb-12">
            {weddingData.dateString} <span className="mx-4">|</span> {weddingData.location}
          </div>
          <Countdown className="text-white" />
        </motion.div>
      </section>

      {/* Quote 1 */}
      <section className="py-24 px-6 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <Heart className="w-8 h-8 mx-auto text-[#8A9A86] mb-8 opacity-50" />
          <p className="text-2xl md:text-4xl font-serif italic text-gray-600 leading-relaxed">
            "{weddingData.quotes[0].split('-')[0].trim()}"
          </p>
          <p className="mt-6 text-sm font-sans tracking-widest uppercase text-[#8A9A86]">
            - {weddingData.quotes[0].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section id="story" className="py-32 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-script mb-16 text-[#8A9A86]">Our Love Story</h2>
          <div className="space-y-24 relative before:absolute before:inset-0 before:ml-1/2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#8A9A86]/30 before:to-transparent">
            {weddingData.story.map((item, index) => (
              <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#FDFBF7] bg-[#8A9A86] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-sm border border-[#8A9A86]/10 text-left md:group-odd:text-right">
                  <div className="text-sm font-sans tracking-widest text-[#8A9A86] mb-2">{item.year}</div>
                  <h3 className="text-2xl font-display mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Fun Facts */}
      <section className="py-24 bg-[#8A9A86]/5">
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
                <div className="text-sm font-sans tracking-widest uppercase text-[#8A9A86] mb-3">{fact.label}</div>
                <div className="text-xl font-serif text-gray-800">{fact.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Party */}
      <section id="party" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-script mb-4 text-[#8A9A86]">Wedding Party</h2>
            <p className="text-sm font-sans tracking-widest uppercase text-gray-400">The people we love most</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Bridesmaids */}
            <div>
              <h3 className="text-2xl font-display text-center mb-12 text-gray-800">The Bridesmaids</h3>
              <div className="space-y-8">
                {weddingData.weddingParty.bridesmaids.map((person, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-6"
                  >
                    <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover shadow-sm" />
                    <div>
                      <div className="text-xl font-serif text-gray-800">{person.name}</div>
                      <div className="text-sm font-sans tracking-widest uppercase text-[#8A9A86] mt-1">{person.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Groomsmen */}
            <div>
              <h3 className="text-2xl font-display text-center mb-12 text-gray-800">The Groomsmen</h3>
              <div className="space-y-8">
                {weddingData.weddingParty.groomsmen.map((person, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-6 flex-row-reverse space-x-reverse text-right lg:flex-row lg:space-x-6 lg:text-left lg:space-x-reverse-0"
                  >
                    <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover shadow-sm" />
                    <div>
                      <div className="text-xl font-serif text-gray-800">{person.name}</div>
                      <div className="text-sm font-sans tracking-widest uppercase text-[#8A9A86] mt-1">{person.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-script mb-4 text-[#8A9A86]">Moments</h2>
            <p className="text-sm font-sans tracking-widest uppercase text-gray-400">Captured in time</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingData.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`overflow-hidden rounded-t-full ${index % 2 === 0 ? 'mt-0 lg:mt-12' : 'mt-0'}`}
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
            <h2 className="text-4xl font-display mb-12 text-center md:text-left">The Details</h2>
            <div className="space-y-8 mb-16">
              {weddingData.events.map((event, index) => (
                <div key={index} className="flex flex-col border-b border-[#8A9A86]/20 pb-6">
                  <span className="text-sm font-sans tracking-widest text-[#8A9A86] mb-2">{event.time}</span>
                  <span className="text-2xl font-display mb-1">{event.title}</span>
                  <span className="text-gray-500 italic">{event.location}</span>
                </div>
              ))}
            </div>
            <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.262529815858!2d9.18241681557112!3d45.88599997910803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47868c227e1f4d3d%3A0x6c6e75294025f0!2sLake%20Como!5e0!3m2!1sen!2sus!4v1625581234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              />
            </div>
          </div>
          
          <div id="rsvp" className="bg-white p-12 rounded-t-full shadow-sm border border-[#8A9A86]/10 text-center flex flex-col justify-center">
            <h2 className="text-5xl font-script mb-4 text-[#8A9A86]">RSVP</h2>
            <p className="text-sm font-sans tracking-widest uppercase text-gray-400 mb-10">Kindly reply by August 1st</p>
            <form className="space-y-6 text-left">
              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-gray-500 mb-2">Full Name</label>
                <input type="text" className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-[#8A9A86] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-gray-500 mb-2">Email</label>
                <input type="email" className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-[#8A9A86] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-sans tracking-widest uppercase text-gray-500 mb-2">Will you attend?</label>
                <select className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-[#8A9A86] transition-colors">
                  <option>Joyfully Accept</option>
                  <option>Regretfully Decline</option>
                </select>
              </div>
              <button type="button" className="w-full py-4 mt-8 bg-[#8A9A86] text-white text-sm font-sans tracking-widest uppercase hover:bg-[#7A8A76] transition-colors">
                Send Reply
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section id="travel" className="py-32 bg-[#FDFBF7]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-script mb-4 text-[#8A9A86]">Travel & Stay</h2>
            <p className="text-sm font-sans tracking-widest uppercase text-gray-400">Information for our out-of-town guests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-display mb-8 text-gray-800 border-b border-[#8A9A86]/20 pb-4">Accommodations</h3>
              <div className="space-y-8">
                {weddingData.travel.accommodations.map((hotel, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-serif text-gray-800 mb-2">{hotel.name}</h4>
                    <p className="text-gray-600 mb-3">{hotel.description}</p>
                    <a href={hotel.link} className="text-sm font-sans tracking-widest uppercase text-[#8A9A86] hover:text-gray-800 transition-colors">Book a Room →</a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-display mb-8 text-gray-800 border-b border-[#8A9A86]/20 pb-4">Airports</h3>
              <div className="space-y-8">
                {weddingData.travel.airports.map((airport, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-serif text-gray-800 mb-2">{airport.name}</h4>
                    <p className="text-gray-600">{airport.description}</p>
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
            <h2 className="text-4xl font-display mb-6 text-gray-800">Dress Code</h2>
            <h3 className="text-2xl font-serif text-[#8A9A86] mb-4">{weddingData.dressCode.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-12">
              {weddingData.dressCode.description}
            </p>
            
            <h2 className="text-4xl font-display mb-8 text-gray-800">Gift Registry</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following places:
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {weddingData.registry.map((item, index) => {
                const Icon = iconMap[item.icon] || Gift;
                return (
                  <a 
                    key={index} 
                    href={item.link}
                    className="flex items-center space-x-3 px-6 py-3 border border-[#8A9A86]/30 rounded-full hover:bg-[#8A9A86] hover:text-white transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-[#8A9A86] group-hover:text-white transition-colors" />
                    <span className="text-sm font-sans tracking-widest uppercase">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 border border-[#8A9A86]/30 rounded-t-full translate-x-4 translate-y-4" />
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop" 
              alt="Wedding Details" 
              className="relative z-10 w-full h-[600px] object-cover rounded-t-full"
            />
          </div>
        </div>
      </section>

      {/* Quote 2 */}
      <section className="py-24 px-6 bg-[#8A9A86] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-2xl md:text-4xl font-serif italic leading-relaxed">
            "{weddingData.quotes[1].split('-')[0].trim()}"
          </p>
          <p className="mt-6 text-sm font-sans tracking-widest uppercase opacity-80">
            - {weddingData.quotes[1].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-24 text-center bg-[#8A9A86] text-white">
        <h2 className="text-6xl font-script mb-6">{weddingData.bride} & {weddingData.groom}</h2>
        <p className="text-sm font-sans tracking-widest uppercase opacity-80 mb-12">We can't wait to celebrate with you</p>
        <div className="text-xs font-sans tracking-widest uppercase opacity-60">
          © 2026 {weddingData.bride} & {weddingData.groom}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
