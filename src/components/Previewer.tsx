import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Monitor, Tablet, Smartphone, X, ExternalLink, ShoppingBag } from 'lucide-react';
import { templates } from '../data/templates';
import { CartDrawer } from './CartDrawer';
import { useCart } from '../context/CartContext';
import clsx from 'clsx';

type Device = 'desktop' | 'tablet' | 'mobile';

export function Previewer() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [device, setDevice] = useState<Device>('desktop');
  const [language, setLanguage] = useState<'EN' | 'VI'>('EN');
  const { items, addToCart, setIsCartOpen } = useCart();
  
  const template = templates.find(t => t.id === id);
  
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

  return (
    <div className="h-screen w-full flex flex-col bg-[#1A1A1A] text-white overflow-hidden">
      {/* Toolbar */}
      <div className="h-16 flex-shrink-0 border-b border-white/10 flex items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/')}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="h-6 w-px bg-white/20 mx-2" />
          <span className="font-display text-lg tracking-wide">{language === 'EN' ? template.name : template.name_vi}</span>
        </div>
        
        <div className="flex items-center space-x-2 bg-white/5 p-1 rounded-lg">
          <button 
            onClick={() => setDevice('desktop')}
            className={clsx(
              "p-2 rounded-md transition-all",
              device === 'desktop' ? "bg-white/20 text-white" : "text-gray-400 hover:text-white"
            )}
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setDevice('tablet')}
            className={clsx(
              "p-2 rounded-md transition-all",
              device === 'tablet' ? "bg-white/20 text-white" : "text-gray-400 hover:text-white"
            )}
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setDevice('mobile')}
            className={clsx(
              "p-2 rounded-md transition-all",
              device === 'mobile' ? "bg-white/20 text-white" : "text-gray-400 hover:text-white"
            )}
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-sm font-medium tracking-wide">
            <button 
              onClick={() => setLanguage('EN')}
              className={`transition-colors ${language === 'EN' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              EN
            </button>
            <span className="text-gray-600">|</span>
            <button 
              onClick={() => setLanguage('VI')}
              className={`transition-colors ${language === 'VI' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              VI
            </button>
          </div>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-gray-400 hover:text-white transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {items.length > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-[var(--color-luxury-gold)] text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                {items.length}
              </span>
            )}
          </button>
          <div className="h-6 w-px bg-white/20" />
          <a 
            href={`/render/${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center text-xs font-medium tracking-widest uppercase text-gray-300 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            {language === 'EN' ? 'Open in new tab' : 'Mở trong tab mới'}
          </a>
          <button 
            onClick={() => addToCart(template, 1)}
            className="px-6 py-2.5 bg-white text-black text-xs font-medium tracking-widest uppercase hover:bg-gray-200 transition-colors"
          >
            {language === 'EN' ? 'Add to Cart' : 'Thêm vào giỏ'}
          </button>
        </div>
      </div>

      <CartDrawer language={language} />

      {/* Preview Area */}
      <div className="flex-1 overflow-hidden bg-[#0A0A0A] flex items-center justify-center p-4 md:p-8">
        <div 
          className={clsx(
            "bg-white h-full w-full transition-all duration-500 ease-in-out shadow-2xl rounded-sm overflow-hidden",
            device === 'desktop' && "max-w-[100%]",
            device === 'tablet' && "max-w-[768px]",
            device === 'mobile' && "max-w-[375px]"
          )}
        >
          <iframe 
            src={`/render/${id}`}
            className="w-full h-full border-none"
            title={`${template.name} Preview`}
          />
        </div>
      </div>
    </div>
  );
}
