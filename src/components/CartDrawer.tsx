import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export function CartDrawer({ language }: { language: 'EN' | 'VI' }) {
  const { items, isCartOpen, setIsCartOpen, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalUSD = items.reduce((sum, item) => sum + item.priceUSD, 0);
  const totalVND = items.reduce((sum, item) => sum + item.priceVND, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-2xl font-display font-medium">
                {language === 'EN' ? 'Your Cart' : 'Giỏ hàng của bạn'}
              </h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                  <ShoppingBag className="w-12 h-12 opacity-20" />
                  <p>{language === 'EN' ? 'Your cart is empty' : 'Giỏ hàng trống'}</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map(item => (
                    <div key={item.template.id} className="flex gap-4">
                      <img src={item.template.image} alt={item.template.name} className="w-24 h-32 object-cover bg-gray-100" referrerPolicy="no-referrer" />
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <h3 className="font-display font-medium text-lg">{language === 'EN' ? item.template.name : item.template.name_vi}</h3>
                          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                            {language === 'EN' ? `Package: ${item.tier === 1 ? 'Standard' : 'Premium'}` : `Gói: ${item.tier === 1 ? 'Tiêu chuẩn' : 'Cao cấp'}`}
                          </p>
                          <p className="text-sm font-medium text-gray-900">
                            {language === 'EN' ? `$${item.priceUSD}` : `${item.priceVND.toLocaleString()} VND`}
                          </p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.template.id)}
                          className="text-xs font-medium tracking-widest uppercase text-red-500 hover:text-red-700 flex items-center w-fit"
                        >
                          <Trash2 className="w-3 h-3 mr-1" />
                          {language === 'EN' ? 'Remove' : 'Xóa'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-medium text-gray-600">{language === 'EN' ? 'Total' : 'Tổng cộng'}</span>
                  <span className="text-2xl font-display font-medium">
                    {language === 'EN' ? `$${totalUSD.toFixed(2)}` : `${totalVND.toLocaleString()} VND`}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/checkout');
                  }}
                  className="w-full py-4 bg-black text-white text-sm font-medium tracking-widest uppercase hover:bg-black/80 transition-colors"
                >
                  {language === 'EN' ? 'Checkout' : 'Thanh toán'}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
