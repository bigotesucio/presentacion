import React from 'react';
import SlideWrapper from './SlideWrapper';

const IntroSlide: React.FC = () => {
    const bgImage = "https://ascari.club/wp-content/uploads/2025/07/DSC04217.webp";
  
    return (
    <SlideWrapper bgImage={bgImage} className="justify-center">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-full border-2 border-white flex-shrink-0 flex items-center justify-center">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">
            Dos líneas de producto premium para socios del club
        </h2>
      </div>
    </SlideWrapper>
  );
};

export default IntroSlide;