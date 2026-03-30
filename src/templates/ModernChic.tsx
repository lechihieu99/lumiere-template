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

export function ModernChic() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-6 px-8 flex justify-between items-center mix-blend-difference text-white">
        <div className="text-3xl font-bold tracking-tighter lowercase">{weddingData.bride[0]}&{weddingData.groom[0]}.</div>
        <div className="hidden md:flex space-x-10 text-xs font-bold tracking-widest uppercase">
          <a href="#story" className="hover:opacity-50 transition-opacity">The Story</a>
          <a href="#party" className="hover:opacity-50 transition-opacity">The Party</a>
          <a href="#gallery" className="hover:opacity-50 transition-opacity">The Gallery</a>
          <a href="#details" className="hover:opacity-50 transition-opacity">The Details</a>
          <a href="#travel" className="hover:opacity-50 transition-opacity">Travel</a>
          <a href="#registry" className="hover:opacity-50 transition-opacity">Registry</a>
          <a href="#rsvp" className="hover:opacity-50 transition-opacity">RSVP</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-end p-8 md:p-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541250848049-b4f7141dca3f?q=80&w=2074&auto=format&fit=crop" 
            alt="Modern Background" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-white"
        >
          <h1 className="text-[12vw] leading-none font-bold tracking-tighter uppercase mb-4">
            {weddingData.bride} <br />
            & {weddingData.groom}
          </h1>
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-8 text-sm font-bold tracking-widest uppercase mb-12">
            <span>{weddingData.dateString}</span>
            <span className="hidden md:block w-8 h-px bg-white" />
            <span>{weddingData.location}</span>
          </div>
          <Countdown />
        </motion.div>
      </section>

      {/* Quote 1 */}
      <section className="py-32 px-8 md:px-16 bg-black text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-tight">
            "{weddingData.quotes[0].split('-')[0].trim()}"
          </p>
          <p className="mt-12 text-sm font-bold tracking-widest uppercase text-gray-500">
            - {weddingData.quotes[0].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section id="story" className="py-32 px-8 md:px-16 bg-white text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24">
          <div className="md:w-1/3">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase sticky top-32">
              Our <br /> Story
            </h2>
          </div>
          <div className="md:w-2/3 space-y-32">
            {weddingData.story.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="border-t border-white/20 pt-8"
              >
                <div className="text-8xl font-bold text-black/10 tracking-tighter mb-4">{item.year}</div>
                <h3 className="text-4xl font-bold tracking-tight mb-6 uppercase">{item.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
            {weddingData.funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-6xl font-bold tracking-tighter mb-4">{fact.value}</div>
                <div className="text-xs font-bold tracking-widest uppercase text-gray-500">{fact.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Party */}
      <section id="party" className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="mb-24">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6">The Party</h2>
            <p className="text-sm font-bold tracking-widest uppercase text-gray-500">Our closest friends</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            {/* Bridesmaids */}
            <div>
              <h3 className="text-4xl font-bold tracking-tighter uppercase mb-16 border-b border-white/20 pb-8">Bridesmaids</h3>
              <div className="space-y-16">
                {weddingData.weddingParty.bridesmaids.map((person, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-8 group"
                  >
                    <div className="w-32 h-32 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                      <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold tracking-tighter uppercase mb-2">{person.name}</div>
                      <div className="text-xs font-bold tracking-widest uppercase text-gray-500">{person.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Groomsmen */}
            <div>
              <h3 className="text-4xl font-bold tracking-tighter uppercase mb-16 border-b border-white/20 pb-8 text-right lg:text-left">Groomsmen</h3>
              <div className="space-y-16">
                {weddingData.weddingParty.groomsmen.map((person, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-8 flex-row-reverse space-x-reverse text-right lg:flex-row lg:space-x-8 lg:text-left lg:space-x-reverse-0 group"
                  >
                    <div className="w-32 h-32 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                      <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold tracking-tighter uppercase mb-2">{person.name}</div>
                      <div className="text-xs font-bold tracking-widest uppercase text-gray-500">{person.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 px-8 md:px-16 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-24 text-center">
            Visuals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {weddingData.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`aspect-[3/4] overflow-hidden ${index % 2 === 1 ? 'md:mt-32' : ''}`}
              >
                <img src={img} alt="Gallery" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details & RSVP */}
      <section id="details" className="py-32 px-8 md:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="flex flex-col">
            <h2 className="text-6xl font-bold tracking-tighter uppercase mb-16">Schedule</h2>
            <div className="space-y-12 flex-grow">
              {weddingData.events.map((event, index) => (
                <div key={index} className="flex flex-col border-l-4 border-black pl-8">
                  <span className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-2">{event.time}</span>
                  <span className="text-4xl font-bold tracking-tight mb-2 uppercase">{event.title}</span>
                  <span className="text-xl text-gray-600">{event.location}</span>
                </div>
              ))}
            </div>
            <div className="w-full h-64 mt-16 border-4 border-black p-2 bg-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.262529815858!2d9.18241681557112!3d45.88599997910803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47868c227e1f4d3d%3A0x6c6e75294025f0!2sLake%20Como!5e0!3m2!1sen!2sus!4v1625581234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(100%) contrast(120%)' }} 
                allowFullScreen 
                loading="lazy"
              />
            </div>
          </div>
          
          <div id="rsvp" className="bg-black text-white p-12 md:p-16 flex flex-col justify-center">
            <h2 className="text-6xl font-bold tracking-tighter uppercase mb-16">RSVP</h2>
            <form className="space-y-10">
              <div>
                <input type="text" placeholder="FULL NAME" className="w-full border-b-2 border-white/20 py-4 bg-transparent focus:outline-none focus:border-white transition-colors text-2xl font-bold tracking-tight placeholder:text-white/20 uppercase" />
              </div>
              <div>
                <input type="email" placeholder="EMAIL ADDRESS" className="w-full border-b-2 border-white/20 py-4 bg-transparent focus:outline-none focus:border-white transition-colors text-2xl font-bold tracking-tight placeholder:text-white/20 uppercase" />
              </div>
              <div>
                <select className="w-full border-b-2 border-white/20 py-4 bg-transparent focus:outline-none focus:border-white transition-colors text-2xl font-bold tracking-tight text-white/50 uppercase appearance-none">
                  <option value="" disabled selected>ATTENDANCE</option>
                  <option value="yes" className="text-black">ACCEPT</option>
                  <option value="no" className="text-black">DECLINE</option>
                </select>
              </div>
              <button type="button" className="w-full py-6 mt-12 bg-white text-black text-xl font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section id="travel" className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="mb-24">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6">Travel</h2>
            <p className="text-sm font-bold tracking-widest uppercase text-gray-500">For our guests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h3 className="text-4xl font-bold tracking-tighter uppercase mb-12 border-b-4 border-black pb-6">Stay</h3>
              <div className="space-y-12">
                {weddingData.travel.accommodations.map((hotel, index) => (
                  <div key={index} className="group">
                    <h4 className="text-3xl font-bold tracking-tighter uppercase mb-4 group-hover:text-gray-500 transition-colors">{hotel.name}</h4>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{hotel.description}</p>
                    <a href={hotel.link} className="inline-block text-sm font-bold tracking-widest uppercase border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">Book a Room</a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-bold tracking-tighter uppercase mb-12 border-b-4 border-black pb-6">Fly</h3>
              <div className="space-y-12">
                {weddingData.travel.airports.map((airport, index) => (
                  <div key={index}>
                    <h4 className="text-3xl font-bold tracking-tighter uppercase mb-4">{airport.name}</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">{airport.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code & Registry */}
      <section id="registry" className="py-32 bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop" 
                alt="Wedding Details" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-6xl font-bold tracking-tighter uppercase mb-8">Dress Code</h2>
            <h3 className="text-2xl font-bold tracking-tight uppercase mb-6">{weddingData.dressCode.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-16 text-xl">
              {weddingData.dressCode.description}
            </p>
            
            <h2 className="text-6xl font-bold tracking-tighter uppercase mb-8">Registry</h2>
            <p className="text-gray-600 leading-relaxed mb-12 text-xl">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following places:
            </p>
            <div className="flex flex-col space-y-6">
              {weddingData.registry.map((item, index) => {
                const Icon = iconMap[item.icon] || Gift;
                return (
                  <a 
                    key={index} 
                    href={item.link}
                    className="flex items-center justify-between p-8 bg-white border-2 border-transparent hover:border-black transition-all duration-300 group"
                  >
                    <span className="text-2xl font-bold tracking-tighter uppercase group-hover:text-gray-500 transition-colors">{item.name}</span>
                    <Icon className="w-8 h-8 text-black group-hover:text-gray-500 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quote 2 */}
      <section className="py-32 px-8 md:px-16 bg-black text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto"
        >
          <p className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-tight">
            "{weddingData.quotes[1].split('-')[0].trim()}"
          </p>
          <p className="mt-12 text-sm font-bold tracking-widest uppercase text-gray-500">
            - {weddingData.quotes[1].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-8 md:px-16 bg-black text-white text-center">
        <h2 className="text-[10vw] leading-none font-bold tracking-tighter uppercase mb-8">
          {weddingData.bride} & {weddingData.groom}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-sm font-bold tracking-widest uppercase text-gray-500">
          <span>{weddingData.dateString}</span>
          <span>{weddingData.location}</span>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}
