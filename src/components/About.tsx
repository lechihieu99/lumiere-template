import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function About() {
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
          <h1 className="text-5xl md:text-7xl font-display mb-6">{language === 'EN' ? 'Our Story' : 'Câu chuyện của chúng tôi'}</h1>
          <p className="text-gray-600 font-serif text-xl max-w-2xl mx-auto leading-relaxed">
            {language === 'EN' ? "Crafting digital elegance for the modern couple. We believe your wedding website should be as beautiful and unique as your love story." : "Chế tác sự thanh lịch kỹ thuật số cho cặp đôi hiện đại. Chúng tôi tin rằng trang web đám cưới của bạn phải đẹp và độc đáo như chính câu chuyện tình yêu của bạn."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Studio Team" className="w-full h-[500px] object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h2 className="text-3xl font-serif mb-6">{language === 'EN' ? 'The Philosophy' : 'Triết lý'}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {language === 'EN' ? "Founded in 2024, Lumière Studio was born out of a desire to elevate the standard of digital wedding experiences. We saw a gap between the high-end aesthetics of modern weddings and the generic templates available online." : "Được thành lập vào năm 2024, Lumière Studio ra đời từ mong muốn nâng tầm tiêu chuẩn trải nghiệm đám cưới kỹ thuật số. Chúng tôi nhận thấy khoảng cách giữa tính thẩm mỹ cao cấp của các đám cưới hiện đại và các mẫu chung chung có sẵn trực tuyến."}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {language === 'EN' ? "Our team of award-winning designers and developers meticulously craft each template, ensuring perfect typography, fluid animations, and responsive layouts that look stunning on any device." : "Đội ngũ các nhà thiết kế và nhà phát triển đạt giải thưởng của chúng tôi tỉ mỉ chế tác từng mẫu, đảm bảo kiểu chữ hoàn hảo, hiệu ứng mượt mà và bố cục tương thích trông tuyệt đẹp trên mọi thiết bị."}
            </p>
          </motion.div>
        </div>

        <div className="text-center bg-white p-16 border border-black/5">
          <h2 className="text-3xl font-serif mb-6">{language === 'EN' ? 'Join Our Journey' : 'Tham gia cùng chúng tôi'}</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            {language === 'EN' ? "Ready to create an unforgettable digital experience for your special day?" : "Sẵn sàng tạo ra một trải nghiệm kỹ thuật số khó quên cho ngày đặc biệt của bạn?"}
          </p>
          <Link to="/" className="inline-block px-8 py-4 bg-black text-white text-sm font-medium tracking-widest uppercase hover:bg-black/80 transition-colors">
            {language === 'EN' ? 'Explore Collection' : 'Khám phá Bộ sưu tập'}
          </Link>
        </div>
      </section>
    </div>
  );
}
