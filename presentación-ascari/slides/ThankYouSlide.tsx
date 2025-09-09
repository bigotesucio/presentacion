import React from 'react';
import SlideWrapper from './SlideWrapper';

const ThankYouSlide: React.FC = () => {
    const bgImage = "https://ascari.club/wp-content/uploads/2025/07/DJI_20250607160543_0555_D.webp";

    return (
    <SlideWrapper bgImage={bgImage} className="text-center justify-center">
      <h2 className="text-8xl sm:text-9xl lg:text-[9rem] font-bold uppercase">
        Gracias
      </h2>
    </SlideWrapper>
  );
};

export default ThankYouSlide;