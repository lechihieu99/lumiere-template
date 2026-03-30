import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';

export function Support() {
  const [language, setLanguage] = useState<'EN' | 'VI'>('EN');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      qEn: 'How do I customize my template?',
      qVi: 'Làm thế nào để tùy chỉnh mẫu của tôi?',
      aEn: 'Once you purchase a template, you will receive a detailed guide on how to customize the content, colors, and images using our intuitive editor.',
      aVi: 'Sau khi mua mẫu, bạn sẽ nhận được hướng dẫn chi tiết về cách tùy chỉnh nội dung, màu sắc và hình ảnh bằng trình chỉnh sửa trực quan của chúng tôi.'
    },
    {
      qEn: 'Do I need coding experience?',
      qVi: 'Tôi có cần kinh nghiệm lập trình không?',
      aEn: 'Not at all! Our templates are designed to be user-friendly and require zero coding knowledge. Everything can be edited visually.',
      aVi: 'Hoàn toàn không! Các mẫu của chúng tôi được thiết kế thân thiện với người dùng và không yêu cầu kiến thức lập trình. Mọi thứ đều có thể chỉnh sửa trực quan.'
    },
    {
      qEn: 'Can I use my own domain name?',
      qVi: 'Tôi có thể sử dụng tên miền riêng không?',
      aEn: 'Yes, all our premium plans include the ability to connect your own custom domain name (e.g., www.jackandjill.com).',
      aVi: 'Có, tất cả các gói cao cấp của chúng tôi đều bao gồm khả năng kết nối tên miền tùy chỉnh của riêng bạn (ví dụ: www.jackandjill.com).'
    },
    {
      qEn: 'How long do I have access to the site?',
      qVi: 'Tôi có quyền truy cập trang web trong bao lâu?',
      aEn: 'Your website will remain active for 1 year from the date of purchase. You can choose to extend this period for a small fee.',
      aVi: 'Trang web của bạn sẽ duy trì hoạt động trong 1 năm kể từ ngày mua. Bạn có thể chọn gia hạn thời gian này với một khoản phí nhỏ.'
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

      <section className="pt-40 pb-24 px-6 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-display mb-6">{language === 'EN' ? 'Help & Support' : 'Trợ giúp & Hỗ trợ'}</h1>
          <p className="text-gray-600 font-serif text-xl">
            {language === 'EN' ? "Find answers to common questions or reach out to our team." : "Tìm câu trả lời cho các câu hỏi thường gặp hoặc liên hệ với nhóm của chúng tôi."}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-black/10 bg-white"
            >
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-6 flex justify-between items-center text-left"
              >
                <span className="font-serif text-lg">{language === 'EN' ? faq.qEn : faq.qVi}</span>
                {openFaq === index ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {language === 'EN' ? faq.aEn : faq.aVi}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center border-t border-black/10 pt-16">
          <h2 className="text-2xl font-serif mb-4">{language === 'EN' ? 'Still need help?' : 'Vẫn cần trợ giúp?'}</h2>
          <p className="text-gray-600 mb-8">{language === 'EN' ? 'Our support team is available Monday through Friday.' : 'Đội ngũ hỗ trợ của chúng tôi làm việc từ Thứ Hai đến Thứ Sáu.'}</p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-black text-white text-sm font-medium tracking-widest uppercase hover:bg-black/80 transition-colors">
            {language === 'EN' ? 'Contact Support' : 'Liên hệ Hỗ trợ'}
          </Link>
        </div>
      </section>
    </div>
  );
}
