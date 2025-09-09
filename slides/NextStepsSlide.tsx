import React from 'react';
import SlideWrapper from './SlideWrapper';
import { QUESTIONS_DATA } from '../constants';

const NextStepsSlide: React.FC = () => {
    const bgImage = "https://ascari.club/wp-content/uploads/2024/09/ASCARI_MERCEDES.webp";
  return (
    <SlideWrapper bgImage={bgImage} className="justify-center items-start">
        <div className="w-full">
            <div className="mb-8 md:mb-10">
                <h2 className="text-3xl md:text-4xl font-bold uppercase">Dudas que nos ayudarán a</h2>
                <h3 className="text-3xl md:text-4xl font-bold uppercase text-white/70">Ajustar la Propuesta</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-6 max-w-6xl">
                {QUESTIONS_DATA.map((q) => (
                    <div key={q.id} className="grid grid-cols-[auto_1fr] gap-x-4 items-start">
                        <span className="font-bold text-xl">{q.id}.</span> 
                        <div>
                            <p className="font-bold">{q.question}</p>
                            {q.context && <p className="text-sm text-white/60 mt-1">{q.context}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </SlideWrapper>
  );
};

export default NextStepsSlide;