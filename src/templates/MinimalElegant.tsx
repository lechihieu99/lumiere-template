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

export function MinimalElegant() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-8 px-12 flex justify-between items-center bg-white/90 backdrop-blur-sm border-b border-black/5">
        <div className="text-sm font-medium tracking-[0.3em] uppercase">{weddingData.bride} & {weddingData.groom}</div>
        <div className="hidden md:flex space-x-12 text-xs font-medium tracking-[0.2em] uppercase text-gray-500">
          <a href="#story" className="hover:text-black transition-colors">Story</a>
          <a href="#party" className="hover:text-black transition-colors">Party</a>
          <a href="#gallery" className="hover:text-black transition-colors">Gallery</a>
          <a href="#details" className="hover:text-black transition-colors">Details</a>
          <a href="#travel" className="hover:text-black transition-colors">Travel</a>
          <a href="#registry" className="hover:text-black transition-colors">Registry</a>
          <a href="#rsvp" className="hover:text-black transition-colors">RSVP</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center pt-24 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-display font-light tracking-tight mb-8 leading-[1.1]">
            Celebrating the <br />
            <span className="italic font-serif text-gray-500">marriage of</span> <br />
            {weddingData.bride} & {weddingData.groom}
          </h1>
          <div className="flex items-center justify-center space-x-6 text-sm font-medium tracking-[0.2em] uppercase text-gray-400 mt-12 mb-16">
            <span>{weddingData.dateString}</span>
            <span className="w-1 h-1 bg-black rounded-full" />
            <span>{weddingData.location}</span>
          </div>
          <Countdown />
        </motion.div>
      </section>

      {/* Quote 1 */}
      <section className="py-32 px-6 bg-white border-t border-black/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-3xl md:text-5xl font-display font-light text-black leading-tight">
            "{weddingData.quotes[0].split('-')[0].trim()}"
          </p>
          <p className="mt-8 text-xs font-medium tracking-[0.3em] uppercase text-gray-400">
            - {weddingData.quotes[0].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section id="story" className="py-32 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-gray-400 mb-16 text-center">Our Journey</h2>
          <div className="space-y-24">
            {weddingData.story.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
              >
                <div className="text-sm font-medium tracking-[0.2em] uppercase text-gray-400 md:w-32 shrink-0 pt-2">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-3xl font-display font-light mb-4">{item.title}</h3>
                  <p className="text-gray-500 font-serif text-lg leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-32 bg-white border-t border-black/5">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-gray-400 mb-20 text-center">The Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-center">
            {weddingData.funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-xs font-medium tracking-[0.2em] uppercase text-gray-400 mb-4">{fact.label}</div>
                <div className="text-xl font-display font-light text-black">{fact.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Party */}
      <section id="party" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-gray-400 mb-20 text-center">Wedding Party</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Bridesmaids */}
            <div>
              <h3 className="text-2xl font-display font-light text-center mb-16 text-black">The Bridesmaids</h3>
              <div className="space-y-12">
                {weddingData.weddingParty.bridesmaids.map((person, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-center space-x-8"
                  >
                    <div className="w-24 h-24 overflow-hidden shrink-0">
                      <img src={person.image} alt={person.name} className="w-full h-full object-cover grayscale" />
                    </div>
                    <div>
                      <div className="text-xl font-display font-light text-black mb-1">{person.name}</div>
                      <div className="text-xs font-medium tracking-[0.2em] uppercase text-gray-400">{person.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Groomsmen */}
            <div>
              <h3 className="text-2xl font-display font-light text-center mb-16 text-black">The Groomsmen</h3>
              <div className="space-y-12">
                {weddingData.weddingParty.groomsmen.map((person, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-center space-x-8 lg:flex-row-reverse lg:space-x-reverse lg:text-right"
                  >
                    <div className="w-24 h-24 overflow-hidden shrink-0">
                      <img src={person.image} alt={person.name} className="w-full h-full object-cover grayscale" />
                    </div>
                    <div>
                      <div className="text-xl font-display font-light text-black mb-1">{person.name}</div>
                      <div className="text-xs font-medium tracking-[0.2em] uppercase text-gray-400">{person.role}</div>
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
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-gray-400 mb-16 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {weddingData.gallery.slice(0, 4).map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="aspect-[4/5] overflow-hidden bg-gray-100"
              >
                <img src={img} alt="Gallery" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details & RSVP */}
      <section id="details" className="py-32 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-gray-500 mb-16">The Details</h2>
            <div className="space-y-12 mb-16">
              {weddingData.events.map((event, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 mb-3">{event.time}</span>
                  <span className="text-3xl font-display font-light mb-2">{event.title}</span>
                  <span className="text-gray-400 font-serif italic">{event.location}</span>
                </div>
              ))}
            </div>
            <div className="w-full h-64 bg-gray-900 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.262529815858!2d9.18241681557112!3d45.88599997910803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47868c227e1f4d3d%3A0x6c6e75294025f0!2sLake%20Como!5e0!3m2!1sen!2sus!4v1625581234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} 
                allowFullScreen 
                loading="lazy"
              />
            </div>
          </div>
          
          <div id="rsvp" className="flex flex-col justify-center">
            <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-gray-500 mb-16">RSVP</h2>
            <form className="space-y-8">
              <div>
                <input type="text" placeholder="Full Name" className="w-full border-b border-white/20 py-4 bg-transparent focus:outline-none focus:border-white transition-colors text-lg font-light placeholder:text-gray-600" />
              </div>
              <div>
                <input type="email" placeholder="Email Address" className="w-full border-b border-white/20 py-4 bg-transparent focus:outline-none focus:border-white transition-colors text-lg font-light placeholder:text-gray-600" />
              </div>
              <div>
                <select className="w-full border-b border-white/20 py-4 bg-transparent focus:outline-none focus:border-white transition-colors text-lg font-light text-gray-400 appearance-none">
                  <option value="" disabled selected>Will you attend?</option>
                  <option value="yes" className="text-black">Joyfully Accept</option>
                  <option value="no" className="text-black">Regretfully Decline</option>
                </select>
              </div>
              <button type="button" className="w-full py-5 mt-8 bg-white text-black text-sm font-medium tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors">
                Submit Response
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section id="travel" className="py-32 bg-white text-black border-b border-black/5">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-gray-400 mb-20 text-center">Travel & Stay</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h3 className="text-2xl font-display font-light mb-12 text-black">Accommodations</h3>
              <div className="space-y-12">
                {weddingData.travel.accommodations.map((hotel, index) => (
                  <div key={index} className="border-b border-black/10 pb-8">
                    <h4 className="text-xl font-display font-light text-black mb-3">{hotel.name}</h4>
                    <p className="text-gray-500 font-serif mb-6 leading-relaxed">{hotel.description}</p>
                    <a href={hotel.link} className="text-xs font-medium tracking-[0.2em] uppercase text-black hover:text-gray-500 transition-colors">Book a Room</a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-display font-light mb-12 text-black">Airports</h3>
              <div className="space-y-12">
                {weddingData.travel.airports.map((airport, index) => (
                  <div key={index} className="border-b border-black/10 pb-8">
                    <h4 className="text-xl font-display font-light text-black mb-3">{airport.name}</h4>
                    <p className="text-gray-500 font-serif leading-relaxed">{airport.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code & Registry */}
      <section id="registry" className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-gray-400 mb-12">Dress Code</h2>
            <h3 className="text-3xl font-display font-light text-black mb-6">{weddingData.dressCode.title}</h3>
            <p className="text-gray-500 font-serif leading-relaxed mb-16">
              {weddingData.dressCode.description}
            </p>
            
            <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-gray-400 mb-12">Gift Registry</h2>
            <p className="text-gray-500 font-serif leading-relaxed mb-10">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following places:
            </p>
            <div className="flex flex-col space-y-4">
              {weddingData.registry.map((item, index) => {
                const Icon = iconMap[item.icon] || Gift;
                return (
                  <a 
                    key={index} 
                    href={item.link}
                    className="flex items-center justify-between px-8 py-6 bg-white border border-black/5 hover:border-black transition-colors group"
                  >
                    <span className="text-sm font-medium tracking-[0.2em] uppercase text-black">{item.name}</span>
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="h-full min-h-[500px] bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop" 
              alt="Wedding Details" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </section>

      {/* Quote 2 */}
      <section className="py-32 px-6 bg-black text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-3xl md:text-5xl font-display font-light leading-tight">
            "{weddingData.quotes[1].split('-')[0].trim()}"
          </p>
          <p className="mt-8 text-xs font-medium tracking-[0.3em] uppercase text-gray-500">
            - {weddingData.quotes[1].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-24 text-center bg-white text-black border-t border-black/5">
        <h2 className="text-4xl font-display font-light mb-6">{weddingData.bride} & {weddingData.groom}</h2>
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-gray-400 mb-12">{weddingData.dateString}</p>
        <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-300">
          © 2026 {weddingData.bride} & {weddingData.groom}.
        </div>
      </footer>
    </div>
  );
}
