import React from 'react';
import SlideWrapper from './SlideWrapper';
import { HERO_DATA } from '../constants';

const HeroSlide: React.FC = () => {
  const bgImage = "https://ascari.club/wp-content/uploads/2024/10/ASCARI_EVENTS.webp";

  return (
    <SlideWrapper bgImage={bgImage} className="text-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        {HERO_DATA.title}
      </h1>
      <h2 className="text-7xl md:text-8xl font-bold mt-2 uppercase">
        {HERO_DATA.client}
      </h2>
    </SlideWrapper>
  );
};

export default HeroSlide;