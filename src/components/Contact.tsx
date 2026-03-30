import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  const [language, setLanguage] = useState<'EN' | 'VI'>('EN');

  return (
    <div className="min-h-screen bg-[var(--color-luxury-cream)] text-[var(--color-luxury-charcoal)] font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-white/80 backdrop-blur-md border-b border-black/5">
        <Link to="/" className="flex items-center space-x-2 text-sm font-medium tracking-widest uppercase hover:text-[var(--color-luxury-gold)] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'EN' ? 'Back to Home' : 'Trang chủ'}</span>
        </Link>
        <div className="text-2xl font-display font-semibold tracking-tight">Lumière</div>
        <div className="flex items-center space-x-2 text-sm font-medium tracking-wide">
          <button onClick={() => setLanguage('EN')} className={`transition-colors ${language === 'EN' ? 'text-[var(--color-luxury-gold)]' : 'text-gray-400 hover:text-[var(--color-luxury-gold)]'}`}>EN</button>
          <span className="text-gray-300">|</span>
          <button onClick={() => setLanguage('VI')} className={`transition-colors ${language === 'VI' ? 'text-[var(--color-luxury-gold)]' : 'text-gray-400 hover:text-[var(--color-luxury-gold)]'}`}>VI</button>
        </div>
      </nav>

      <section className="pt-40 pb-24 px-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-display mb-6">{language === 'EN' ? 'Get in Touch' : 'Liên hệ'}</h1>
          <p className="text-gray-600 font-serif text-xl max-w-2xl mx-auto">
            {language === 'EN' ? "We'd love to hear from you. Whether you have a question about our templates or want to discuss a custom design." : "Chúng tôi rất mong nhận được phản hồi từ bạn. Dù bạn có câu hỏi về mẫu giao diện hay muốn thảo luận về thiết kế tùy chỉnh."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h2 className="text-2xl font-serif mb-8">{language === 'EN' ? 'Send us a message' : 'Gửi tin nhắn'}</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-medium tracking-widest uppercase text-gray-500 mb-2">{language === 'EN' ? 'Name' : 'Tên'}</label>
                <input type="text" className="w-full border-b border-black/20 py-3 bg-transparent focus:outline-none focus:border-black transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-widest uppercase text-gray-500 mb-2">{language === 'EN' ? 'Email' : 'Email'}</label>
                <input type="email" className="w-full border-b border-black/20 py-3 bg-transparent focus:outline-none focus:border-black transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-widest uppercase text-gray-500 mb-2">{language === 'EN' ? 'Message' : 'Tin nhắn'}</label>
                <textarea rows={4} className="w-full border-b border-black/20 py-3 bg-transparent focus:outline-none focus:border-black transition-colors resize-none"></textarea>
              </div>
              <button type="button" className="px-8 py-4 bg-black text-white text-sm font-medium tracking-widest uppercase hover:bg-black/80 transition-colors w-full">
                {language === 'EN' ? 'Send Message' : 'Gửi tin nhắn'}
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="space-y-12">
            <div>
              <h2 className="text-2xl font-serif mb-8">{language === 'EN' ? 'Contact Information' : 'Thông tin liên hệ'}</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 mt-1 text-[var(--color-luxury-gold)]" />
                  <div>
                    <div className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-1">Email</div>
                    <div className="font-serif text-lg">hello@lumierestudio.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 mt-1 text-[var(--color-luxury-gold)]" />
                  <div>
                    <div className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-1">{language === 'EN' ? 'Phone' : 'Điện thoại'}</div>
                    <div className="font-serif text-lg">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 mt-1 text-[var(--color-luxury-gold)]" />
                  <div>
                    <div className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-1">{language === 'EN' ? 'Studio' : 'Văn phòng'}</div>
                    <div className="font-serif text-lg">123 Design District<br />New York, NY 10001</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
