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

export function ClassicWhite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-serif selection:bg-gray-200 selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-8 px-12 flex justify-between items-center bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="text-2xl font-script text-gray-800">{weddingData.bride} & {weddingData.groom}</div>
        <div className="hidden md:flex space-x-12 text-xs font-sans tracking-[0.2em] uppercase text-gray-500">
          <a href="#story" className="hover:text-gray-900 transition-colors">Our Story</a>
          <a href="#party" className="hover:text-gray-900 transition-colors">Wedding Party</a>
          <a href="#gallery" className="hover:text-gray-900 transition-colors">Gallery</a>
          <a href="#details" className="hover:text-gray-900 transition-colors">Details</a>
          <a href="#travel" className="hover:text-gray-900 transition-colors">Travel</a>
          <a href="#registry" className="hover:text-gray-900 transition-colors">Registry</a>
          <a href="#rsvp" className="hover:text-gray-900 transition-colors">RSVP</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-white">
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
            alt="Classic Background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center max-w-4xl"
        >
          <div className="text-sm font-sans tracking-[0.3em] uppercase text-gray-400 mb-12">Together with their families</div>
          <h1 className="text-7xl md:text-9xl font-script text-gray-800 mb-12 drop-shadow-sm">
            {weddingData.bride} & {weddingData.groom}
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm font-sans tracking-[0.2em] uppercase text-gray-500 mb-12">
            <span>{weddingData.dateString}</span>
            <span className="hidden md:block w-px h-6 bg-gray-300" />
            <span>{weddingData.location}</span>
          </div>
          <Countdown />
        </motion.div>
      </section>

      {/* Quote 1 */}
      <section className="py-24 px-6 bg-white text-center border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-3xl md:text-5xl font-script text-gray-800 leading-relaxed">
            "{weddingData.quotes[0].split('-')[0].trim()}"
          </p>
          <p className="mt-8 text-xs font-sans tracking-[0.2em] uppercase text-gray-400">
            - {weddingData.quotes[0].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section id="story" className="py-32 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-script text-gray-800 mb-24">The Beginning</h2>
          <div className="space-y-24">
            {weddingData.story.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center"
              >
                <div className="text-sm font-sans tracking-[0.2em] uppercase text-gray-400 mb-6 border-b border-gray-300 pb-2">
                  {item.year}
                </div>
                <h3 className="text-3xl font-display font-light text-gray-800 mb-6">{item.title}</h3>
                <p className="text-gray-500 font-serif text-lg leading-relaxed max-w-2xl">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {weddingData.funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 border border-gray-100"
              >
                <div className="text-xs font-sans tracking-[0.2em] uppercase text-gray-400 mb-4">{fact.label}</div>
                <div className="text-xl font-display font-light text-gray-800">{fact.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Party */}
      <section id="party" className="py-32 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-script text-gray-800 mb-6">Wedding Party</h2>
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-gray-400">The people we love most</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Bridesmaids */}
            <div>
              <h3 className="text-3xl font-display font-light text-center mb-16 text-gray-800 border-b border-gray-200 pb-4 inline-block mx-auto block w-max">The Bridesmaids</h3>
              <div className="space-y-12">
                {weddingData.weddingParty.bridesmaids.map((person, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-8 bg-white p-6 border border-gray-100 shadow-sm"
                  >
                    <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    <div>
                      <div className="text-2xl font-display font-light text-gray-800 mb-2">{person.name}</div>
                      <div className="text-xs font-sans tracking-[0.2em] uppercase text-gray-400">{person.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Groomsmen */}
            <div>
              <h3 className="text-3xl font-display font-light text-center mb-16 text-gray-800 border-b border-gray-200 pb-4 inline-block mx-auto block w-max">The Groomsmen</h3>
              <div className="space-y-12">
                {weddingData.weddingParty.groomsmen.map((person, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-8 flex-row-reverse space-x-reverse text-right lg:flex-row lg:space-x-8 lg:text-left lg:space-x-reverse-0 bg-white p-6 border border-gray-100 shadow-sm"
                  >
                    <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    <div>
                      <div className="text-2xl font-display font-light text-gray-800 mb-2">{person.name}</div>
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
      <section id="gallery" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-script text-gray-800 mb-24 text-center">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingData.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="aspect-square overflow-hidden bg-gray-50 border border-gray-100 p-2 shadow-sm"
              >
                <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details & RSVP */}
      <section id="details" className="py-32 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="bg-white p-12 md:p-16 border border-gray-100 shadow-sm text-center flex flex-col">
            <h2 className="text-4xl font-script text-gray-800 mb-16">The Details</h2>
            <div className="space-y-12 flex-grow">
              {weddingData.events.map((event, index) => (
                <div key={index} className="flex flex-col border-b border-gray-100 pb-8 last:border-0">
                  <span className="text-sm font-sans tracking-[0.2em] uppercase text-gray-400 mb-3">{event.time}</span>
                  <span className="text-2xl font-display font-light text-gray-800 mb-2">{event.title}</span>
                  <span className="text-gray-500 font-serif italic">{event.location}</span>
                </div>
              ))}
            </div>
            <div className="w-full h-64 mt-12 bg-gray-50 border border-gray-100 p-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.262529815858!2d9.18241681557112!3d45.88599997910803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47868c227e1f4d3d%3A0x6c6e75294025f0!2sLake%20Como!5e0!3m2!1sen!2sus!4v1625581234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) opacity(70%)' }} 
                allowFullScreen 
                loading="lazy"
              />
            </div>
          </div>
          
          <div id="rsvp" className="bg-white p-12 md:p-16 border border-gray-100 shadow-sm text-center flex flex-col justify-center">
            <h2 className="text-5xl font-script text-gray-800 mb-6">RSVP</h2>
            <p className="text-sm font-sans tracking-[0.2em] uppercase text-gray-400 mb-16">Kindly reply by August 1st</p>
            <form className="space-y-8 text-left">
              <div>
                <label className="block text-xs font-sans tracking-[0.2em] uppercase text-gray-500 mb-3">Name(s)</label>
                <input type="text" className="w-full border-b border-gray-200 py-3 bg-transparent focus:outline-none focus:border-gray-800 transition-colors text-gray-800" />
              </div>
              <div>
                <label className="block text-xs font-sans tracking-[0.2em] uppercase text-gray-500 mb-3">Email</label>
                <input type="email" className="w-full border-b border-gray-200 py-3 bg-transparent focus:outline-none focus:border-gray-800 transition-colors text-gray-800" />
              </div>
              <div>
                <label className="block text-xs font-sans tracking-[0.2em] uppercase text-gray-500 mb-3">Attendance</label>
                <select className="w-full border-b border-gray-200 py-3 bg-transparent focus:outline-none focus:border-gray-800 transition-colors text-gray-800 appearance-none">
                  <option value="yes">Joyfully Accept</option>
                  <option value="no">Regretfully Decline</option>
                </select>
              </div>
              <button type="button" className="w-full py-5 mt-12 bg-gray-900 text-white text-sm font-sans tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors">
                Send Reply
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section id="travel" className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-script text-gray-800 mb-6">Travel & Stay</h2>
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-gray-400">Information for our out-of-town guests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-gray-50 p-12 border border-gray-100 text-center">
              <h3 className="text-3xl font-display font-light mb-12 text-gray-800 border-b border-gray-200 pb-4 inline-block">Accommodations</h3>
              <div className="space-y-12">
                {weddingData.travel.accommodations.map((hotel, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-display font-light text-gray-800 mb-3">{hotel.name}</h4>
                    <p className="text-gray-500 mb-6 text-sm leading-relaxed font-serif italic">{hotel.description}</p>
                    <a href={hotel.link} className="text-xs font-sans tracking-[0.2em] uppercase text-gray-800 hover:text-gray-500 transition-colors border-b border-gray-800 pb-1">Book a Room</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-12 border border-gray-100 text-center">
              <h3 className="text-3xl font-display font-light mb-12 text-gray-800 border-b border-gray-200 pb-4 inline-block">Airports</h3>
              <div className="space-y-12">
                {weddingData.travel.airports.map((airport, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-display font-light text-gray-800 mb-3">{airport.name}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-serif italic">{airport.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code & Registry */}
      <section id="registry" className="py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-display font-light mb-8 text-gray-800">Dress Code</h2>
            <h3 className="text-xl font-sans tracking-[0.2em] uppercase text-gray-500 mb-6">{weddingData.dressCode.title}</h3>
            <p className="text-gray-500 leading-relaxed mb-16 font-serif italic text-lg">
              {weddingData.dressCode.description}
            </p>
            
            <h2 className="text-4xl font-display font-light mb-8 text-gray-800">Gift Registry</h2>
            <p className="text-gray-500 leading-relaxed mb-12 font-serif italic text-lg">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following places:
            </p>
            <div className="flex flex-col space-y-4">
              {weddingData.registry.map((item, index) => {
                const Icon = iconMap[item.icon] || Gift;
                return (
                  <a 
                    key={index} 
                    href={item.link}
                    className="flex items-center justify-between px-8 py-6 bg-white border border-gray-100 hover:border-gray-300 transition-all duration-300 group shadow-sm"
                  >
                    <span className="text-xs font-sans tracking-[0.2em] uppercase text-gray-500 group-hover:text-gray-800 transition-colors">{item.name}</span>
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="p-4 bg-white border border-gray-100 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop" 
              alt="Wedding Details" 
              className="w-full h-[600px] object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* Quote 2 */}
      <section className="py-24 px-6 bg-white text-center border-b border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-3xl md:text-5xl font-script text-gray-800 leading-relaxed">
            "{weddingData.quotes[1].split('-')[0].trim()}"
          </p>
          <p className="mt-8 text-xs font-sans tracking-[0.2em] uppercase text-gray-400">
            - {weddingData.quotes[1].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-24 text-center bg-white border-t border-gray-100">
        <h2 className="text-5xl font-script text-gray-800 mb-8">{weddingData.bride} & {weddingData.groom}</h2>
        <p className="text-xs font-sans tracking-[0.2em] uppercase text-gray-400 mb-12">{weddingData.dateString}</p>
        <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-gray-400">
          © 2026 {weddingData.bride} & {weddingData.groom}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
