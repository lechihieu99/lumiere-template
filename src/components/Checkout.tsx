import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Check, Lock, Phone, Landmark, Copy, ShoppingBag } from 'lucide-react';

export function Checkout() {
  const navigate = useNavigate();
  const { items, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'VI'>('EN');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const totalUSD = items.reduce((sum, item) => sum + item.priceUSD, 0);
  const totalVND = items.reduce((sum, item) => sum + item.priceVND, 0);
  const templateIds = items.map(item => item.template.id.toUpperCase()).join(', ');
  const transferMessage = `MUA ${templateIds} ${phoneNumber}`.trim();

  if (items.length === 0 && !isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-gray-300" />
          <h1 className="text-2xl font-display mb-4">{language === 'EN' ? 'Your cart is empty' : 'Giỏ hàng của bạn đang trống'}</h1>
          <button onClick={() => navigate('/')} className="text-sm uppercase tracking-widest border-b border-black pb-1">
            {language === 'EN' ? 'Return to Collection' : 'Quay lại Bộ sưu tập'}
          </button>
        </div>
      </div>
    );
  }

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[var(--color-luxury-cream)] text-[var(--color-luxury-charcoal)] font-sans flex flex-col">
      {/* Navigation */}
      <nav className="flex-shrink-0 flex items-center justify-between px-8 py-6 bg-white border-b border-black/5">
        <Link to="/" className="flex items-center text-sm font-medium tracking-widest uppercase hover:text-[var(--color-luxury-gold)] transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {language === 'EN' ? 'Back' : 'Quay lại'}
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
          <div className="hidden md:flex items-center text-sm text-gray-500">
            <Lock className="w-4 h-4 mr-2" />
            {language === 'EN' ? 'Secure Checkout' : 'Thanh toán An toàn'}
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center py-12 px-6">
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Order Summary */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl font-display font-medium mb-8">{language === 'EN' ? 'Order Summary' : 'Tóm tắt Đơn hàng'}</h2>
            
            <div className="space-y-6 mb-8">
              {items.map(item => (
                <div key={item.template.id} className="bg-white p-6 border border-black/5 flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-24 aspect-[4/5] bg-gray-100 overflow-hidden shrink-0">
                    <img src={item.template.image} alt={item.template.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-display font-medium mb-1">{language === 'EN' ? item.template.name : item.template.name_vi}</h3>
                      <p className="text-sm text-gray-500 font-serif mb-3">
                        {language === 'EN' 
                          ? `Package: ${item.tier === 1 ? 'Standard' : 'Premium'}` 
                          : `Gói: ${item.tier === 1 ? 'Tiêu chuẩn' : 'Cao cấp'}`}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-gray-400">
                        {(language === 'EN' ? item.template.tags : item.template.tags_vi).slice(0, 2).map((tag, i) => (
                          <React.Fragment key={tag}>
                            <span>{tag}</span>
                            {i < 1 && <span className="w-1 h-1 bg-gray-300 rounded-full" />}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    <div className="text-xl font-display mt-4 sm:mt-0">
                      {language === 'EN' ? `$${item.priceUSD}` : `${item.priceVND.toLocaleString()} VND`}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-sm text-gray-600">
                <Check className="w-4 h-4 mr-3 text-[var(--color-luxury-gold)]" />
                {language === 'EN' ? 'Lifetime access to the template' : 'Truy cập trọn đời vào mẫu'}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Check className="w-4 h-4 mr-3 text-[var(--color-luxury-gold)]" />
                {language === 'EN' ? 'Free hosting for 1 year' : 'Lưu trữ miễn phí trong 1 năm'}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Check className="w-4 h-4 mr-3 text-[var(--color-luxury-gold)]" />
                {language === 'EN' ? 'Custom domain connection' : 'Kết nối tên miền tùy chỉnh'}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Check className="w-4 h-4 mr-3 text-[var(--color-luxury-gold)]" />
                {language === 'EN' ? 'Premium customer support' : 'Hỗ trợ khách hàng cao cấp'}
              </div>
            </div>
          </motion.div>

          {/* Right: Payment Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-12 border border-black/5 shadow-xl h-fit sticky top-8"
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-medium mb-2">
                    {language === 'EN' ? 'Payment Received' : 'Đã nhận thanh toán'}
                  </h2>
                  <p className="text-gray-600 font-serif">
                    {language === 'EN' 
                      ? 'Thank you for your purchase. We will contact you within 2 hours.' 
                      : 'Cảm ơn bạn đã mua hàng. Chúng tôi sẽ liên hệ lại với bạn trong vòng 2 tiếng.'}
                  </p>
                </div>
                <button 
                  onClick={() => navigate('/')}
                  className="px-8 py-4 bg-black text-white text-sm font-medium tracking-widest uppercase hover:bg-black/80 transition-all"
                >
                  {language === 'EN' ? 'Return to Collection' : 'Quay lại Bộ sưu tập'}
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-display font-medium mb-8">{language === 'EN' ? 'Payment Details' : 'Chi tiết Thanh toán'}</h2>
                
                <form onSubmit={handleCheckout} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium tracking-widest uppercase text-gray-500 mb-2">{language === 'EN' ? 'Email Address' : 'Địa chỉ Email'}</label>
                      <input 
                        type="email" 
                        required
                        className="w-full border border-gray-200 p-4 focus:outline-none focus:border-black transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-medium tracking-widest uppercase text-gray-500 mb-2">{language === 'EN' ? 'Phone Number' : 'Số điện thoại'}</label>
                      <div className="border border-gray-200 p-4 flex items-center focus-within:border-black transition-colors">
                        <Phone className="w-5 h-5 text-gray-400 mr-3" />
                        <input 
                          type="tel" 
                          required
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full focus:outline-none"
                          placeholder={language === 'EN' ? 'Your phone number' : 'Số điện thoại của bạn'}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bank Transfer Info Box */}
                  <div className="bg-gray-50 p-6 border border-gray-200 mt-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Landmark className="w-5 h-5 text-gray-600" />
                      <h3 className="font-medium">{language === 'EN' ? 'Bank Transfer Details' : 'Thông tin chuyển khoản'}</h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">{language === 'EN' ? 'Bank' : 'Ngân hàng'}:</span>
                        <span className="font-medium">Vietcombank</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">{language === 'EN' ? 'Account Number' : 'Số tài khoản'}:</span>
                        <span className="font-medium font-mono">0123456789</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">{language === 'EN' ? 'Account Name' : 'Chủ tài khoản'}:</span>
                        <span className="font-medium">NGUYEN VAN A</span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                        <span className="text-gray-500">{language === 'EN' ? 'Amount' : 'Số tiền'}:</span>
                        <span className="text-xl font-display font-medium text-[var(--color-luxury-gold)]">
                          {language === 'EN' ? `$${totalUSD.toFixed(2)}` : `${totalVND.toLocaleString()} VND`}
                        </span>
                      </div>
                      <div className="pt-3 border-t border-gray-200">
                        <span className="block text-gray-500 mb-1">{language === 'EN' ? 'Transfer Message' : 'Nội dung chuyển khoản'}:</span>
                        <div className="flex items-center justify-between bg-white border border-gray-200 p-3">
                          <span className="font-mono font-medium text-black">{transferMessage}</span>
                          <button 
                            type="button" 
                            onClick={() => {
                              navigator.clipboard.writeText(transferMessage);
                              alert(language === 'EN' ? 'Copied to clipboard!' : 'Đã sao chép!');
                            }} 
                            className="text-gray-400 hover:text-black transition-colors"
                            title={language === 'EN' ? 'Copy message' : 'Sao chép nội dung'}
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                          {language === 'EN' ? '* Please include this exact message so we can verify your payment.' : '* Vui lòng ghi chính xác nội dung này để chúng tôi xác nhận thanh toán.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <button 
                      type="submit"
                      disabled={isProcessing || !phoneNumber}
                      className="w-full py-5 bg-black text-white text-sm font-medium tracking-widest uppercase hover:bg-black/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isProcessing 
                        ? (language === 'EN' ? 'Processing...' : 'Đang xử lý...') 
                        : (language === 'EN' ? 'I have transferred' : 'Tôi đã chuyển khoản')}
                    </button>
                  </div>
                  
                  <p className="text-xs text-center text-gray-400 mt-6">
                    {language === 'EN' ? 'By confirming your purchase, you agree to our Terms of Service and Privacy Policy.' : 'Bằng cách xác nhận mua hàng, bạn đồng ý với Điều khoản Dịch vụ và Chính sách Bảo mật của chúng tôi.'}
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
