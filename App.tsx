import React from 'react';
import HeroSlide from './slides/HeroSlide';
import IntroSlide from './slides/IntroSlide';
import TwoLinesSlide from './slides/TwoLinesSlide';
import OurRoleSlide from './slides/OurRoleSlide';
import ComparisonSlide from './slides/ComparisonSlide';
import ProductsSlide from './slides/ProductsSlide';
import TimelineSlide from './slides/TimelineSlide';
import NextStepsSlide from './slides/NextStepsSlide';
import ThankYouSlide from './slides/ThankYouSlide';
import DetailsSlide from './slides/DetailsSlide';

const App: React.FC = () => {
    return (
        <main className="scroll-snap-container">
            <HeroSlide />
            <IntroSlide />
            <TwoLinesSlide />
            <OurRoleSlide />
            <ComparisonSlide />
            <ProductsSlide />
            <TimelineSlide />
            <DetailsSlide category="Textil" />
            <DetailsSlide category="Accesorios" />
            <DetailsSlide category="Lifestyle/Regalos&Family" />
            <NextStepsSlide />
            <ThankYouSlide />
        </main>
    );
};

export default App;