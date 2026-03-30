import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { templates } from '../data/templates';
import { SignInModal } from './SignInModal';
import { CartDrawer } from './CartDrawer';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Check, Eye, ShoppingBag, Sparkles } from 'lucide-react';

export function TemplateDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const template = templates.find(t => t.id === id);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'VI'>('EN');
  const [selectedTier, setSelectedTier] = useState<1 | 2>(1);
  const { items, addToCart, setIsCartOpen } = useCart();

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-display mb-4">{language === 'EN' ? 'Template not found' : 'Không tìm thấy mẫu'}</h1>
          <button onClick={() => navigate('/')} className="text-sm uppercase tracking-widest border-b border-black pb-1">
            {language === 'EN' ? 'Return to Collection' : 'Quay lại Bộ sưu tập'}
          </button>
        </div>
      </div>
    );
  }

  const featuresEN = [
    "Fully responsive design (Desktop, Tablet, Mobile)",
    "Customizable colors and typography",
    "RSVP form integration",
    "Interactive photo gallery",
    "Countdown timer",
    "Google Maps integration",
    "SEO optimized",
    "Lifetime updates"
  ];

  const featuresVI = [
    "Thiết kế tương thích mọi thiết bị (Máy tính, Máy tính bảng, Điện thoại)",
    "Tùy chỉnh màu sắc và kiểu chữ",
    "Tích hợp biểu mẫu RSVP",
    "Thư viện ảnh tương tác",
    "Đồng hồ đếm ngược",
    "Tích hợp Google Maps",
    "Tối ưu hóa SEO",
    "Cập nhật trọn đời"
  ];

  const features = language === 'EN' ? featuresEN : featuresVI;

  return (
    <div className="min-h-screen bg-[var(--color-luxury-cream)] text-[var(--color-luxury-charcoal)] font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-white/80 backdrop-blur-md border-b border-black/5">
        <Link to="/" className="flex items-center text-sm font-medium tracking-widest uppercase hover:text-[var(--color-luxury-gold)] transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {language === 'EN' ? 'Back to Collection' : 'Quay lại Bộ sưu tập'}
        </Link>
        <div className="text-2xl font-display font-semibold tracking-tight">Lumière</div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-sm font-medium tracking-wide">
            <button 
              onClick={() => setLanguage('EN')}
              className={`transition-colors ${language === 'EN' ? 'text-[var(--color-luxury-gold)]' : 'text-gray-400 hover:text-[var(--color-luxury-gold)]'}`}
            >
              EN
            </button>
            <span className="text-gray-300">|</span>
            <button 
              onClick={() => setLanguage('VI')}
              className={`transition-colors ${language === 'VI' ? 'text-[var(--color-luxury-gold)]' : 'text-gray-400 hover:text-[var(--color-luxury-gold)]'}`}
            >
              VI
            </button>
          </div>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-gray-600 hover:text-black transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {items.length > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-[var(--color-luxury-gold)] text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                {items.length}
              </span>
            )}
          </button>
          <button 
            onClick={() => setIsSignInOpen(true)}
            className="px-6 py-2.5 bg-black text-white text-sm font-medium tracking-wide uppercase hover:bg-black/80 transition-colors"
          >
            {language === 'EN' ? 'Sign In' : 'Đăng nhập'}
          </button>
        </div>
      </nav>

      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} language={language} />
      <CartDrawer language={language} />

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Left Column: Images */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] overflow-hidden bg-gray-100"
            >
              <img 
                src={template.image} 
                alt={template.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="grid grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="aspect-square overflow-hidden bg-gray-100"
              >
                <img 
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop" 
                  alt="Detail 1" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-square overflow-hidden bg-gray-100"
              >
                <img 
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
                  alt="Detail 2" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <div className="flex items-center space-x-3 text-xs font-medium tracking-widest uppercase text-gray-400 mb-6">
                {(language === 'EN' ? template.tags : template.tags_vi).map((tag, i) => (
                  <React.Fragment key={tag}>
                    <span>{tag}</span>
                    {i < template.tags.length - 1 && <span className="w-1 h-1 bg-[var(--color-luxury-gold)] rounded-full" />}
                  </React.Fragment>
                ))}
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">{language === 'EN' ? template.name : template.name_vi}</h1>
              <p className="text-xl text-gray-600 font-serif leading-relaxed mb-12">
                {language === 'EN' ? template.description : template.description_vi}
              </p>

              <div className="mb-12 space-y-4">
                <h3 className="text-sm font-medium tracking-widest uppercase text-black mb-6">
                  {language === 'EN' ? 'Select Package' : 'Chọn Gói'}
                </h3>
                
                <div 
                  onClick={() => setSelectedTier(1)}
                  className={`p-6 border cursor-pointer transition-all ${selectedTier === 1 ? 'border-black bg-black/5' : 'border-black/10 hover:border-black/30'}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium uppercase tracking-wider">{language === 'EN' ? 'Standard' : 'Tiêu chuẩn'}</h4>
                    <span className="font-medium">200,000 VND ($7.7)</span>
                  </div>
                  <p className="text-sm text-gray-600 font-serif">
                    {language === 'EN' 
                      ? 'Content edits within the existing template + 3 additional custom requests.' 
                      : 'Chỉnh sửa nội dung có sẵn trong template + 3 yêu cầu thêm.'}
                  </p>
                </div>

                <div 
                  onClick={() => setSelectedTier(2)}
                  className={`p-6 border cursor-pointer transition-all ${selectedTier === 2 ? 'border-black bg-black/5' : 'border-black/10 hover:border-black/30'}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium uppercase tracking-wider">{language === 'EN' ? 'Premium' : 'Cao cấp'}</h4>
                    <span className="font-medium">350,000 VND ($13.4)</span>
                  </div>
                  <p className="text-sm text-gray-600 font-serif">
                    {language === 'EN' 
                      ? 'Content edits within the existing template + 5 additional custom requests.' 
                      : 'Chỉnh sửa nội dung có sẵn trong template + 5 yêu cầu thêm.'}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 pb-16 border-b border-black/10">
                <Link 
                  to={`/preview/${template.id}`}
                  className="w-full sm:w-auto px-10 py-5 bg-black text-white text-sm font-medium tracking-widest uppercase hover:bg-black/80 transition-all flex items-center justify-center group"
                >
                  <Eye className="w-4 h-4 mr-3" />
                  {language === 'EN' ? 'Live Preview' : 'Xem trước'}
                </Link>
                <button 
                  onClick={() => addToCart(template, selectedTier)}
                  className="w-full sm:w-auto px-10 py-5 border border-black text-black text-sm font-medium tracking-widest uppercase hover:bg-gray-50 transition-all flex items-center justify-center group"
                >
                  <ShoppingBag className="w-4 h-4 mr-3" />
                  {language === 'EN' ? `Add to Cart — $${selectedTier === 1 ? '7.7' : '13.4'}` : `Thêm vào giỏ — ${selectedTier === 1 ? '200k' : '350k'} VND`}
                </button>
              </div>

              <div className="space-y-8">
                <div className="flex items-center space-x-2 text-[var(--color-luxury-gold)]">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="text-lg font-medium tracking-widest uppercase text-black">
                    {language === 'EN' ? 'Template Features' : 'Tính năng của Mẫu'}
                  </h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 mr-3 text-[var(--color-luxury-gold)] shrink-0" />
                      <span className="text-gray-600 font-serif">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-black/5 py-12 px-6 md:px-12 text-center">
        <p className="text-xs font-medium tracking-widest uppercase text-gray-400">
          © 2026 Lumière Studio. {language === 'EN' ? 'All rights reserved.' : 'Mọi quyền được bảo lưu.'}
        </p>
      </footer>
    </div>
  );
}
