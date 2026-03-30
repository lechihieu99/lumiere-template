import React from 'react';
import { useParams } from 'react-router-dom';
import { RomanticFloral } from '../templates/RomanticFloral';
import { MinimalElegant } from '../templates/MinimalElegant';
import { LuxuryGold } from '../templates/LuxuryGold';
import { GardenWedding } from '../templates/GardenWedding';
import { VintageLove } from '../templates/VintageLove';
import { ModernChic } from '../templates/ModernChic';
import { ClassicWhite } from '../templates/ClassicWhite';
import { SunsetBeach } from '../templates/SunsetBeach';
import { BohoDesert } from '../templates/BohoDesert';
import { CelestialNight } from '../templates/CelestialNight';
import { EnchantedForest } from '../templates/EnchantedForest';
import { UrbanIndustrial } from '../templates/UrbanIndustrial';
import { PastelDream } from '../templates/PastelDream';
import { OrientalHeritage } from '../templates/OrientalHeritage';

export function TemplateRenderer() {
  const { id } = useParams<{ id: string }>();

  switch (id) {
    case 'romantic-floral':
      return <RomanticFloral />;
    case 'minimal-elegant':
      return <MinimalElegant />;
    case 'luxury-gold':
      return <LuxuryGold />;
    case 'garden-wedding':
      return <GardenWedding />;
    case 'vintage-love':
      return <VintageLove />;
    case 'modern-chic':
      return <ModernChic />;
    case 'classic-white':
      return <ClassicWhite />;
    case 'sunset-beach':
      return <SunsetBeach />;
    case 'boho-desert':
      return <BohoDesert />;
    case 'celestial-night':
      return <CelestialNight />;
    case 'enchanted-forest':
      return <EnchantedForest />;
    case 'urban-industrial':
      return <UrbanIndustrial />;
    case 'pastel-dream':
      return <PastelDream />;
    case 'oriental-heritage':
      return <OrientalHeritage />;
    default:
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <h1 className="text-2xl font-display">Template not found</h1>
        </div>
      );
  }
}
