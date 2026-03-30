import React, { useState } from 'react';
import { motion } from 'motion/react';
import { templates } from '../data/templates';
import { TemplateCard } from './TemplateCard';
import { SignInModal } from './SignInModal';
import { CartDrawer } from './CartDrawer';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShoppingBag, ChevronLeft, ChevronRight, Search } from 'lucide-react';

export function Marketplace() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'VI'>('EN');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const { items, setIsCartOpen } = useCart();

  const categories = [
    { id: 'All', labelEn: 'All', labelVi: 'Tất cả' },
    { id: 'Minimal', labelEn: 'Minimal', labelVi: 'Tối giản' },
    { id: 'Romantic', labelEn: 'Romantic', labelVi: 'Lãng mạn' },
    { id: 'Editorial', labelEn: 'Editorial', labelVi: 'Tạp chí' },
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.name_vi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description_vi.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = activeCategory === 'All' || template.tags.includes(activeCategory);

    return matchesSearch && matchesCategory;
  });

  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(filteredTemplates.length / ITEMS_PER_PAGE);
  const currentTemplates = filteredTemplates.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-[var(--color-luxury-cream)] text-[var(--color-luxury-charcoal)] font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="text-2xl font-display font-semibold tracking-tight">Lumière</div>
        <div className="hidden md:flex space-x-8 pl-32 text-sm font-medium tracking-wide uppercase">
          <a href="#templates" className="hover:text-[var(--color-luxury-gold)] transition-colors">{language === 'EN' ? 'Templates' : 'Mẫu'}</a>
          <Link to="/about" className="hover:text-[var(--color-luxury-gold)] transition-colors">{language === 'EN' ? 'Studio' : 'Giới thiệu'}</Link>
        </div>
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

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Wedding"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-luxury-cream)]/50 via-transparent to-[var(--color-luxury-cream)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center space-x-2 mb-6 text-[var(--color-luxury-gold)]">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase">
                {language === 'EN' ? 'Premium Wedding Templates' : 'Mẫu Website Đám Cưới Cao Cấp'}
              </span>
              <Sparkles className="w-4 h-4" />
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-medium leading-[1.1] tracking-tight mb-8">
              {language === 'EN' ? (
                <>Digital elegance for <br className="hidden md:block" /><span className="italic text-orange-500">your timeless</span> romance.</>
              ) : (
                <>Sự thanh lịch cho <br className="hidden md:block" /><span className="italic text-orange-600">tình yêu vĩnh cửu</span>.</>
              )}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 font-serif leading-relaxed">
              {language === 'EN'
                ? 'Curated, high-end website templates designed specially. Craft a digital experience as unforgettable as your wedding day.'
                : 'Các mẫu website cao cấp, được tuyển chọn và thiết kế đặc biệt. Tạo nên một trải nghiệm kỹ thuật số khó quên như chính ngày cưới của bạn.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#templates"
                className="px-8 py-4 bg-black text-white text-sm font-medium tracking-widest uppercase hover:bg-black/80 transition-all flex items-center group"
              >
                {language === 'EN' ? 'Explore Collection' : 'Khám phá Bộ sưu tập'}
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/about"
                className="px-8 py-4 border border-black/20 text-sm font-medium tracking-widest uppercase hover:border-black transition-all"
              >
                {language === 'EN' ? 'Our Philosophy' : 'Triết lý của chúng tôi'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="py-12 border-y border-black/5 bg-white overflow-hidden flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex space-x-16 items-center text-sm font-medium tracking-[0.3em] uppercase text-gray-400"
        >
          {Array(4).fill(null).map((_, i) => (
            <React.Fragment key={i}>
              <span>{language === 'EN' ? 'Award Winning Design' : 'Thiết kế Đạt giải thưởng'}</span>
              <span className="w-1.5 h-1.5 bg-[var(--color-luxury-gold)] rounded-full" />
              <span>{language === 'EN' ? 'Fully Responsive' : 'Tương thích Mọi thiết bị'}</span>
              <span className="w-1.5 h-1.5 bg-[var(--color-luxury-gold)] rounded-full" />
              <span>{language === 'EN' ? 'Premium Typography' : 'Kiểu chữ Cao cấp'}</span>
              <span className="w-1.5 h-1.5 bg-[var(--color-luxury-gold)] rounded-full" />
              <span>{language === 'EN' ? 'Smooth Animations' : 'Hiệu ứng Mượt mà'}</span>
              <span className="w-1.5 h-1.5 bg-[var(--color-luxury-gold)] rounded-full" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Templates Gallery */}
      <section id="templates" className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl mb-8 md:mb-0">
            <h2 className="text-5xl md:text-6xl font-display mb-6">
              {language === 'EN' ? 'The Collection' : 'Bộ sưu tập'}
            </h2>
            <p className="text-gray-600 font-serif text-xl leading-relaxed">
              {language === 'EN'
                ? 'Each template is meticulously crafted with perfect typography, fluid animations, and responsive layouts.'
                : 'Mỗi mẫu đều được chế tác tỉ mỉ với kiểu chữ hoàn hảo, hiệu ứng mượt mà và bố cục tương thích mọi thiết bị.'}
            </p>
          </div>

          <div className="w-full md:w-auto flex flex-col items-end space-y-6">
            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder={language === 'EN' ? "Search templates..." : "Tìm kiếm mẫu..."}
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full pl-12 pr-4 py-3 bg-white border border-black/10 focus:border-[var(--color-luxury-gold)] focus:outline-none transition-colors text-sm"
              />
            </div>

            {/* Categories */}
            <div className="flex space-x-6 text-sm font-medium tracking-widest uppercase border-b border-black/10 pb-2 w-full md:w-auto overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setCurrentPage(1); }}
                  className={`whitespace-nowrap pb-2 transition-colors ${activeCategory === cat.id
                    ? 'text-black border-b-2 border-black -mb-[9px]'
                    : 'text-gray-400 hover:text-black'
                    }`}
                >
                  {language === 'EN' ? cat.labelEn : cat.labelVi}
                </button>
              ))}
            </div>
          </div>
        </div>

        {currentTemplates.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-2xl font-serif text-gray-500">
              {language === 'EN' ? 'No templates found matching your criteria.' : 'Không tìm thấy mẫu nào phù hợp với tiêu chí của bạn.'}
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); setCurrentPage(1); }}
              className="mt-6 px-6 py-2 border border-black text-sm font-medium tracking-widest uppercase hover:bg-black hover:text-white transition-colors"
            >
              {language === 'EN' ? 'Clear Filters' : 'Xóa bộ lọc'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {currentTemplates.map((template, index) => (
              <TemplateCard key={template.id} template={template} index={index} language={language} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-24 flex justify-center items-center space-x-4">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-3 border border-black/10 rounded-full disabled:opacity-30 hover:bg-black/5 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex space-x-2 text-sm font-medium">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${currentPage === i + 1
                    ? 'bg-black text-white'
                    : 'hover:bg-black/5'
                    }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-3 border border-black/10 rounded-full disabled:opacity-30 hover:bg-black/5 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-24 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-display font-semibold tracking-tight mb-6">Lumière</div>
            <p className="text-gray-400 font-serif text-lg max-w-md">
              {language === 'EN'
                ? 'Elevating the standard of digital wedding experiences through exceptional design and uncompromising quality.'
                : 'Nâng tầm tiêu chuẩn trải nghiệm đám cưới kỹ thuật số thông qua thiết kế xuất sắc và chất lượng không thỏa hiệp.'}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase mb-6 text-gray-500">{language === 'EN' ? 'Collection' : 'Bộ sưu tập'}</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">{language === 'EN' ? 'All Templates' : 'Tất cả Mẫu'}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{language === 'EN' ? 'New Arrivals' : 'Mới ra mắt'}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{language === 'EN' ? 'Best Sellers' : 'Bán chạy nhất'}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{language === 'EN' ? 'Custom Design' : 'Thiết kế Tùy chỉnh'}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium tracking-widest uppercase mb-6 text-gray-500">{language === 'EN' ? 'Studio' : 'Giới thiệu'}</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">{language === 'EN' ? 'About Us' : 'Về chúng tôi'}</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors">{language === 'EN' ? 'Journal' : 'Tạp chí'}</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">{language === 'EN' ? 'Support' : 'Hỗ trợ'}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{language === 'EN' ? 'Contact' : 'Liên hệ'}</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1600px] mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 tracking-wide uppercase">
          <p>© 2026 Lumière Studio. {language === 'EN' ? 'All rights reserved.' : 'Mọi quyền được bảo lưu.'}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Pinterest</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
