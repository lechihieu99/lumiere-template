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

export function VintageLove() {
  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#3E2723] font-serif selection:bg-[#D7CCC8] selection:text-[#3E2723]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 py-6 px-12 flex justify-between items-center bg-[#F9F6F0]/80 backdrop-blur-sm border-b-2 border-[#D7CCC8]/50 border-double">
        <div className="text-2xl font-display font-bold tracking-tight">{weddingData.bride} & {weddingData.groom}</div>
        <div className="hidden md:flex space-x-8 text-sm font-bold tracking-widest uppercase text-[#5D4037]">
          <a href="#story" className="hover:text-[#8D6E63] transition-colors border-b-2 border-transparent hover:border-[#8D6E63] pb-1">Our Tale</a>
          <a href="#party" className="hover:text-[#8D6E63] transition-colors border-b-2 border-transparent hover:border-[#8D6E63] pb-1">Wedding Party</a>
          <a href="#gallery" className="hover:text-[#8D6E63] transition-colors border-b-2 border-transparent hover:border-[#8D6E63] pb-1">Memories</a>
          <a href="#details" className="hover:text-[#8D6E63] transition-colors border-b-2 border-transparent hover:border-[#8D6E63] pb-1">The Day</a>
          <a href="#travel" className="hover:text-[#8D6E63] transition-colors border-b-2 border-transparent hover:border-[#8D6E63] pb-1">Travel</a>
          <a href="#registry" className="hover:text-[#8D6E63] transition-colors border-b-2 border-transparent hover:border-[#8D6E63] pb-1">Registry</a>
          <a href="#rsvp" className="hover:text-[#8D6E63] transition-colors border-b-2 border-transparent hover:border-[#8D6E63] pb-1">RSVP</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0 p-8">
          <div className="w-full h-full border-4 border-[#D7CCC8] border-double p-2 relative">
            <div className="absolute inset-0 border border-[#D7CCC8] m-2" />
            <img 
              src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop" 
              alt="Vintage Background" 
              className="w-full h-full object-cover sepia-[.3] contrast-125 brightness-90"
            />
            <div className="absolute inset-0 bg-[#3E2723]/30 mix-blend-overlay" />
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 text-center bg-[#F9F6F0] p-16 border-4 border-[#D7CCC8] border-double shadow-2xl max-w-2xl mx-4"
        >
          <div className="text-sm font-bold tracking-[0.4em] uppercase mb-8 text-[#5D4037] border-b border-[#D7CCC8] pb-4 inline-block">A Timeless Romance</div>
          <h1 className="text-7xl md:text-8xl font-display font-bold mb-6 text-[#3E2723] leading-none">
            {weddingData.bride} <br />
            <span className="text-5xl md:text-6xl italic font-normal text-[#8D6E63]">&</span> <br />
            {weddingData.groom}
          </h1>
          <div className="text-lg font-bold tracking-[0.2em] uppercase text-[#5D4037] border-t border-[#D7CCC8] pt-8 mt-8 mb-8">
            {weddingData.dateString} <br />
            <span className="text-sm font-normal italic text-[#8D6E63] mt-2 block">{weddingData.location}</span>
          </div>
          <Countdown />
        </motion.div>
      </section>

      {/* Quote 1 */}
      <section className="py-24 px-6 bg-[#EFEBE9] border-y-4 border-[#D7CCC8] border-double text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-3xl md:text-5xl font-display font-bold text-[#3E2723] leading-relaxed italic">
            "{weddingData.quotes[0].split('-')[0].trim()}"
          </p>
          <p className="mt-8 text-sm font-bold tracking-widest uppercase text-[#8D6E63]">
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
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-20 text-[#3E2723] border-b-2 border-[#D7CCC8] pb-8 inline-block">Chapters of Us</h2>
          <div className="space-y-24 relative before:absolute before:inset-0 before:ml-1/2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[#D7CCC8] before:border-l before:border-r before:border-[#F9F6F0]">
            {weddingData.story.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-[#D7CCC8] border-double bg-[#F9F6F0] text-[#3E2723] shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-lg">
                  {item.year.slice(-2)}
                </div>
                <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3.5rem)] p-8 bg-white border-2 border-[#D7CCC8] shadow-lg text-left md:group-odd:text-right relative">
                  <div className="absolute inset-1 border border-[#D7CCC8]/50 pointer-events-none" />
                  <h3 className="text-3xl font-display font-bold mb-4 text-[#5D4037]">{item.title}</h3>
                  <p className="text-[#8D6E63] leading-relaxed text-lg italic">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Fun Facts */}
      <section className="py-24 bg-[#EFEBE9] border-y-4 border-[#D7CCC8] border-double">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {weddingData.funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 border-2 border-[#D7CCC8] shadow-lg relative"
              >
                <div className="absolute inset-1 border border-[#D7CCC8]/50 pointer-events-none" />
                <div className="text-xs font-bold tracking-widest uppercase text-[#8D6E63] mb-3">{fact.label}</div>
                <div className="text-xl font-display font-bold text-[#5D4037]">{fact.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Party */}
      <section id="party" className="py-32 bg-[#F9F6F0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-[#3E2723]">Wedding Party</h2>
            <p className="text-lg font-bold tracking-widest uppercase text-[#8D6E63] border-b border-[#D7CCC8] pb-4 inline-block">The people we love most</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Bridesmaids */}
            <div>
              <h3 className="text-3xl font-display font-bold text-center mb-12 text-[#5D4037] border-b-2 border-[#D7CCC8] pb-4 inline-block mx-auto block w-max">The Bridesmaids</h3>
              <div className="space-y-8">
                {weddingData.weddingParty.bridesmaids.map((person, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-6 bg-white p-6 border-2 border-[#D7CCC8] shadow-md relative"
                  >
                    <div className="absolute inset-1 border border-[#D7CCC8]/50 pointer-events-none" />
                    <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover border-4 border-[#D7CCC8] border-double shadow-sm sepia-[.2]" />
                    <div>
                      <div className="text-2xl font-display font-bold text-[#5D4037] mb-1">{person.name}</div>
                      <div className="text-sm font-bold tracking-widest uppercase text-[#8D6E63]">{person.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Groomsmen */}
            <div>
              <h3 className="text-3xl font-display font-bold text-center mb-12 text-[#5D4037] border-b-2 border-[#D7CCC8] pb-4 inline-block mx-auto block w-max">The Groomsmen</h3>
              <div className="space-y-8">
                {weddingData.weddingParty.groomsmen.map((person, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-6 flex-row-reverse space-x-reverse text-right lg:flex-row lg:space-x-6 lg:text-left lg:space-x-reverse-0 bg-white p-6 border-2 border-[#D7CCC8] shadow-md relative"
                  >
                    <div className="absolute inset-1 border border-[#D7CCC8]/50 pointer-events-none" />
                    <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover border-4 border-[#D7CCC8] border-double shadow-sm sepia-[.2]" />
                    <div>
                      <div className="text-2xl font-display font-bold text-[#5D4037] mb-1">{person.name}</div>
                      <div className="text-sm font-bold tracking-widest uppercase text-[#8D6E63]">{person.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 bg-[#EFEBE9] border-y-4 border-[#D7CCC8] border-double">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-[#3E2723]">Photographs</h2>
            <p className="text-lg font-bold tracking-widest uppercase text-[#8D6E63] border-b border-[#D7CCC8] pb-4 inline-block">A collection of memories</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {weddingData.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-4 pb-16 shadow-xl border border-[#D7CCC8] transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-500"
                style={{ transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})` }}
              >
                <img src={img} alt="Gallery" className="w-full aspect-square object-cover sepia-[.2] contrast-110" />
                <div className="mt-8 text-center font-script text-3xl text-[#5D4037] opacity-80">
                  {weddingData.bride} & {weddingData.groom}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Details & RSVP */}
      <section id="details" className="py-32 px-6 bg-[#F9F6F0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="bg-white p-12 border-4 border-[#D7CCC8] border-double shadow-lg relative flex flex-col">
            <div className="absolute inset-2 border border-[#D7CCC8]/50 pointer-events-none" />
            <h2 className="text-4xl font-display font-bold mb-12 text-[#3E2723] text-center border-b border-[#D7CCC8] pb-6">The Itinerary</h2>
            <div className="space-y-10 flex-grow">
              {weddingData.events.map((event, index) => (
                <div key={index} className="flex flex-col text-center border-b border-[#D7CCC8]/30 pb-8 last:border-0">
                  <span className="text-xl font-bold tracking-widest text-[#8D6E63] mb-2">{event.time}</span>
                  <span className="text-3xl font-display font-bold text-[#5D4037] mb-2">{event.title}</span>
                  <span className="text-lg text-[#8D6E63] italic">{event.location}</span>
                </div>
              ))}
            </div>
            <div className="w-full h-64 mt-12 border-4 border-[#D7CCC8] border-double p-1 relative z-10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.262529815858!2d9.18241681557112!3d45.88599997910803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47868c227e1f4d3d%3A0x6c6e75294025f0!2sLake%20Como!5e0!3m2!1sen!2sus!4v1625581234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'sepia(60%) contrast(110%) brightness(90%)' }} 
                allowFullScreen 
                loading="lazy"
              />
            </div>
          </div>
          
          <div id="rsvp" className="bg-[#5D4037] text-[#F9F6F0] p-12 border-4 border-[#D7CCC8] border-double shadow-2xl text-center flex flex-col justify-center relative">
            <div className="absolute inset-2 border border-[#D7CCC8]/30 pointer-events-none" />
            <h2 className="text-5xl font-display font-bold mb-6 text-[#D7CCC8]">R.S.V.P.</h2>
            <p className="text-sm font-bold tracking-widest uppercase text-[#A1887F] mb-12 border-b border-[#8D6E63] pb-6">The favor of a reply is requested</p>
            <form className="space-y-8 text-left max-w-md mx-auto w-full">
              <div>
                <label className="block text-sm font-bold tracking-widest uppercase text-[#D7CCC8] mb-2">M.</label>
                <input type="text" className="w-full border-b-2 border-[#8D6E63] py-2 bg-transparent focus:outline-none focus:border-[#D7CCC8] transition-colors text-xl font-script" />
              </div>
              <div>
                <label className="block text-sm font-bold tracking-widest uppercase text-[#D7CCC8] mb-2">Email Address</label>
                <input type="email" className="w-full border-b-2 border-[#8D6E63] py-2 bg-transparent focus:outline-none focus:border-[#D7CCC8] transition-colors text-lg" />
              </div>
              <div className="pt-4">
                <label className="flex items-center space-x-4 cursor-pointer mb-4">
                  <input type="radio" name="attendance" className="w-5 h-5 accent-[#D7CCC8]" />
                  <span className="text-lg italic text-[#D7CCC8]">Accepts with pleasure</span>
                </label>
                <label className="flex items-center space-x-4 cursor-pointer">
                  <input type="radio" name="attendance" className="w-5 h-5 accent-[#D7CCC8]" />
                  <span className="text-lg italic text-[#D7CCC8]">Declines with regret</span>
                </label>
              </div>
              <button type="button" className="w-full py-4 mt-8 bg-[#D7CCC8] text-[#3E2723] text-lg font-bold tracking-widest uppercase hover:bg-white transition-colors border-2 border-[#3E2723]">
                Send Reply
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Travel & Accommodation */}
      <section id="travel" className="py-32 bg-[#EFEBE9] border-y-4 border-[#D7CCC8] border-double">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-[#3E2723]">Travel & Stay</h2>
            <p className="text-lg font-bold tracking-widest uppercase text-[#8D6E63] border-b border-[#D7CCC8] pb-4 inline-block">Information for our out-of-town guests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-10 border-4 border-[#D7CCC8] border-double shadow-lg relative">
              <div className="absolute inset-2 border border-[#D7CCC8]/50 pointer-events-none" />
              <h3 className="text-3xl font-display font-bold mb-8 text-[#5D4037] border-b-2 border-[#D7CCC8] pb-4">Accommodations</h3>
              <div className="space-y-8">
                {weddingData.travel.accommodations.map((hotel, index) => (
                  <div key={index}>
                    <h4 className="text-2xl font-display font-bold text-[#5D4037] mb-2">{hotel.name}</h4>
                    <p className="text-[#8D6E63] mb-4 text-lg italic leading-relaxed">{hotel.description}</p>
                    <a href={hotel.link} className="text-sm font-bold tracking-widest uppercase text-[#5D4037] hover:text-[#8D6E63] transition-colors border-b border-[#5D4037] pb-1">Book a Room</a>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 border-4 border-[#D7CCC8] border-double shadow-lg relative">
              <div className="absolute inset-2 border border-[#D7CCC8]/50 pointer-events-none" />
              <h3 className="text-3xl font-display font-bold mb-8 text-[#5D4037] border-b-2 border-[#D7CCC8] pb-4">Airports</h3>
              <div className="space-y-8">
                {weddingData.travel.airports.map((airport, index) => (
                  <div key={index}>
                    <h4 className="text-2xl font-display font-bold text-[#5D4037] mb-2">{airport.name}</h4>
                    <p className="text-[#8D6E63] text-lg italic leading-relaxed">{airport.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code & Registry */}
      <section id="registry" className="py-32 bg-[#F9F6F0]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-display font-bold mb-6 text-[#3E2723]">Dress Code</h2>
            <h3 className="text-2xl font-bold tracking-widest uppercase text-[#8D6E63] mb-4">{weddingData.dressCode.title}</h3>
            <p className="text-[#8D6E63] leading-relaxed mb-12 text-lg italic">
              {weddingData.dressCode.description}
            </p>
            
            <h2 className="text-4xl font-display font-bold mb-8 text-[#3E2723]">Gift Registry</h2>
            <p className="text-[#8D6E63] leading-relaxed mb-8 text-lg italic">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following places:
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {weddingData.registry.map((item, index) => {
                const Icon = iconMap[item.icon] || Gift;
                return (
                  <a 
                    key={index} 
                    href={item.link}
                    className="flex items-center space-x-3 px-6 py-3 bg-white border-2 border-[#D7CCC8] hover:bg-[#D7CCC8] hover:text-[#3E2723] transition-all duration-300 group shadow-md relative"
                  >
                    <div className="absolute inset-1 border border-[#D7CCC8]/50 pointer-events-none group-hover:border-[#3E2723]/20 transition-colors" />
                    <Icon className="w-5 h-5 text-[#5D4037] group-hover:text-[#3E2723] transition-colors relative z-10" />
                    <span className="text-sm font-bold tracking-widest uppercase text-[#5D4037] group-hover:text-[#3E2723] transition-colors relative z-10">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 border-4 border-[#D7CCC8] border-double translate-x-4 translate-y-4" />
            <div className="relative z-10 bg-white p-4 border border-[#D7CCC8] shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop" 
                alt="Wedding Details" 
                className="w-full h-[500px] object-cover sepia-[.2] contrast-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote 2 */}
      <section className="py-24 px-6 bg-[#5D4037] text-[#F9F6F0] text-center border-y-8 border-[#3E2723] border-double">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="absolute inset-0 border border-[#D7CCC8]/30 pointer-events-none -m-8" />
          <p className="text-3xl md:text-5xl font-display font-bold leading-relaxed italic text-[#D7CCC8]">
            "{weddingData.quotes[1].split('-')[0].trim()}"
          </p>
          <p className="mt-8 text-sm font-bold tracking-widest uppercase text-[#A1887F]">
            - {weddingData.quotes[1].split('-')[1].trim()}
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-24 text-center bg-[#3E2723] text-[#D7CCC8] border-t-8 border-[#5D4037] border-double">
        <h2 className="text-6xl font-display font-bold mb-8">{weddingData.bride} & {weddingData.groom}</h2>
        <p className="text-sm font-bold tracking-widest uppercase text-[#8D6E63] mb-12 border-b border-[#5D4037] pb-6 inline-block">Forever & Always</p>
        <div className="text-xs font-bold tracking-widest uppercase text-[#5D4037]">
          © 2026 {weddingData.bride} & {weddingData.groom}.
        </div>
      </footer>
    </div>
  );
}
