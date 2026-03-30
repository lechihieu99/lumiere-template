import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: 'EN' | 'VI';
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose, language = 'EN' }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white p-8 shadow-2xl z-[101]"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-medium mb-2">{language === 'EN' ? 'Welcome Back' : 'Chào mừng Trở lại'}</h2>
              <p className="text-sm text-gray-500 font-serif">{language === 'EN' ? 'Sign in to access your templates and saved items.' : 'Đăng nhập để truy cập các mẫu và mục đã lưu của bạn.'}</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              <div>
                <label className="block text-xs font-medium tracking-widest uppercase text-gray-500 mb-2">{language === 'EN' ? 'Email Address' : 'Địa chỉ Email'}</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="email" 
                    required
                    className="w-full border border-gray-200 py-3 pl-12 pr-4 focus:outline-none focus:border-black transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-medium tracking-widest uppercase text-gray-500 mb-2">{language === 'EN' ? 'Password' : 'Mật khẩu'}</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    type="password" 
                    required
                    className="w-full border border-gray-200 py-3 pl-12 pr-4 focus:outline-none focus:border-black transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="mr-2 accent-black" />
                  <span className="text-gray-600">{language === 'EN' ? 'Remember me' : 'Ghi nhớ đăng nhập'}</span>
                </label>
                <a href="#" className="text-black hover:underline">{language === 'EN' ? 'Forgot password?' : 'Quên mật khẩu?'}</a>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-black text-white text-sm font-medium tracking-widest uppercase hover:bg-black/80 transition-colors"
              >
                {language === 'EN' ? 'Sign In' : 'Đăng nhập'}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-500">
              {language === 'EN' ? "Don't have an account?" : 'Chưa có tài khoản?'} <a href="#" className="text-black hover:underline font-medium">{language === 'EN' ? 'Create one' : 'Tạo tài khoản'}</a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
