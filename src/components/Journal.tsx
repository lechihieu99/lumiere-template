import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Journal() {
  const [language, setLanguage] = useState<'EN' | 'VI'>('EN');

  const articles = [
    {
      titleEn: 'The Art of Minimalist Weddings',
      titleVi: 'Nghệ thuật của Đám cưới Tối giản',
      date: 'March 12, 2026',
      categoryEn: 'Design Trends',
      categoryVi: 'Xu hướng Thiết kế',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1469&auto=format&fit=crop',
      excerptEn: 'Discover how less can truly be more when it comes to elegant wedding celebrations.',
      excerptVi: 'Khám phá cách sự tối giản có thể mang lại nhiều giá trị hơn khi nói đến các lễ kỷ niệm đám cưới thanh lịch.'
    },
    {
      titleEn: 'Choosing the Perfect Typography',
      titleVi: 'Chọn Kiểu chữ Hoàn hảo',
      date: 'February 28, 2026',
      categoryEn: 'Typography',
      categoryVi: 'Kiểu chữ',
      image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1470&auto=format&fit=crop',
      excerptEn: 'A deep dive into selecting fonts that perfectly capture the mood of your special day.',
      excerptVi: 'Tìm hiểu sâu về cách chọn phông chữ nắm bắt hoàn hảo tâm trạng trong ngày đặc biệt của bạn.'
    },
    {
      titleEn: 'Digital vs Physical Invitations',
      titleVi: 'Thiệp mời Kỹ thuật số vs Truyền thống',
      date: 'February 15, 2026',
      categoryEn: 'Planning',
      categoryVi: 'Lên kế hoạch',
      image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1470&auto=format&fit=crop',
      excerptEn: 'Weighing the pros and cons of modern digital invites against traditional paper stationery.',
      excerptVi: 'Cân nhắc ưu và nhược điểm của thiệp mời kỹ thuật số hiện đại so với văn phòng phẩm giấy truyền thống.'
    }
  ];

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

      <section className="pt-40 pb-24 px-6 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-display mb-6">{language === 'EN' ? 'The Journal' : 'Tạp chí'}</h1>
          <p className="text-gray-600 font-serif text-xl max-w-2xl mx-auto">
            {language === 'EN' ? "Insights, inspiration, and trends from the world of digital wedding design." : "Thông tin chi tiết, nguồn cảm hứng và xu hướng từ thế giới thiết kế đám cưới kỹ thuật số."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {articles.map((article, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-6 aspect-[4/3]">
                <img src={article.image} alt="Article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex items-center justify-between text-xs font-medium tracking-widest uppercase text-gray-400 mb-3">
                <span>{language === 'EN' ? article.categoryEn : article.categoryVi}</span>
                <span>{article.date}</span>
              </div>
              <h2 className="text-2xl font-serif mb-3 group-hover:text-[var(--color-luxury-gold)] transition-colors">
                {language === 'EN' ? article.titleEn : article.titleVi}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {language === 'EN' ? article.excerptEn : article.excerptVi}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
