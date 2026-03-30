import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Template } from '../data/templates';
import { ArrowRight, Eye } from 'lucide-react';

interface TemplateCardProps {
  template: Template;
  index: number;
  language?: 'EN' | 'VI';
}

export const TemplateCard: React.FC<TemplateCardProps> = ({ template, index, language = 'EN' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden aspect-[4/5] mb-8 bg-gray-100">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          src={template.image}
          alt={template.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center space-y-4 backdrop-blur-sm">
          <Link
            to={`/preview/${template.id}`}
            className="px-8 py-4 bg-white text-black text-sm font-medium tracking-widest uppercase hover:bg-gray-100 transition-colors flex items-center shadow-2xl transform translate-y-4 group-hover:translate-y-0 duration-500"
          >
            <Eye className="w-4 h-4 mr-3" />
            {language === 'EN' ? 'Live Preview' : 'Xem trước'}
          </Link>
          <Link 
            to={`/template/${template.id}`}
            className="px-8 py-4 border border-white text-white text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-colors transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75"
          >
            {language === 'EN' ? 'Use Template' : 'Sử dụng Mẫu'}
          </Link>
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <div className="flex items-center space-x-3 text-xs font-medium tracking-widest uppercase text-gray-400">
          {(language === 'EN' ? template.tags : template.tags_vi).map((tag, i) => (
            <React.Fragment key={tag}>
              <span>{tag}</span>
              {i < template.tags.length - 1 && <span className="w-1 h-1 bg-gray-300 rounded-full" />}
            </React.Fragment>
          ))}
        </div>
        <h3 className="text-3xl font-display font-medium text-black">{language === 'EN' ? template.name : template.name_vi}</h3>
        <p className="text-gray-600 font-serif text-lg leading-relaxed max-w-md">
          {language === 'EN' ? template.description : template.description_vi}
        </p>
        <Link 
          to={`/template/${template.id}`}
          className="inline-flex items-center text-sm font-medium tracking-widest uppercase text-black mt-4 group/link w-fit"
        >
          {language === 'EN' ? 'View Details' : 'Xem chi tiết'}
          <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
