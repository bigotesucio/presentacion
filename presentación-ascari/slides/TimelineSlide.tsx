import React from 'react';
import SlideWrapper from './SlideWrapper';
import { TIMELINE_DATA } from '../constants';

const TimelineSlide: React.FC = () => {
  return (
    <SlideWrapper theme="light" className="items-start">
        <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold uppercase">Fases del Proyecto y</h2>
            <h3 className="text-3xl md:text-4xl font-bold uppercase text-black/70">Planificación Estimada</h3>
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
            {TIMELINE_DATA.map((phase) => (
                <div key={phase.phase} className="border border-black p-6 h-full flex flex-col rounded-lg">
                    <div className="flex-grow">
                        <p className="font-bold text-2xl">FASE {phase.phase}</p>
                        <h3 className="text-base font-bold mt-2">{phase.title}</h3>
                        <p className="text-sm font-bold text-gray-500 mt-2 mb-4">{phase.duration}</p>
                        <p className="text-xs text-gray-600">{phase.description}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-black/20">
                        <p className="text-xs font-bold text-gray-800">→ Resultado: <span className="font-normal">{phase.result}</span></p>
                    </div>
                </div>
            ))}
        </div>
    </SlideWrapper>
  );
};

export default TimelineSlide;