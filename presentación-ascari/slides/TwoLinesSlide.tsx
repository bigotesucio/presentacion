import React from 'react';
import SlideWrapper from './SlideWrapper';
import { PRODUCT_LINES } from '../constants';

const TwoLinesSlide: React.FC = () => {
  return (
    <SlideWrapper theme="light" className="justify-start items-stretch p-0">
        <div className="w-full pt-20 pb-8 px-6 md:px-8 text-left">
            <h2 className="text-3xl md:text-4xl font-bold uppercase">Dos Líneas, Una Identidad de Marca:</h2>
            <h3 className="text-3xl md:text-4xl font-bold uppercase text-black/70">Elegancia y Espíritu Racing</h3>
            <p className="text-gray-600 mt-4 max-w-3xl">La colección se articula en dos universos de estilo complementarios, diseñados para reflejar la personalidad única del Club Ascari y de sus socios.</p>
        </div>
        <div className="flex flex-col md:flex-row flex-grow w-full border-t border-black/20">
            {PRODUCT_LINES.map((line, index) => (
                <div key={line.id} className={`p-6 md:p-8 w-full md:w-1/2 flex flex-col justify-between ${index === 0 ? 'border-b md:border-r md:border-b-0 border-black/20' : ''}`}>
                    <div>
                        <div className="flex items-center gap-4">
                           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
                           <p className="font-bold tracking-widest text-sm">{line.line}</p>
                        </div>
                        <h3 className="text-3xl font-bold uppercase mt-2">{line.title}</h3>
                        <div className="mt-6 space-y-3 text-sm text-gray-700">
                            <p><strong className="text-black">Estilo visual:</strong> {line.visualStyle}</p>
                            <p><strong className="text-black">Inspiración:</strong> {line.inspiration}</p>
                            <p><strong className="text-black">Paleta:</strong> {line.palette}</p>
                            <p><strong className="text-black">Materiales clave:</strong> {line.keyMaterials}</p>
                            <p><strong className="text-black">Target:</strong> {line.target}</p>
                        </div>
                    </div>
                    <p className="text-lg italic mt-8 text-gray-800">{line.quote}</p>
                </div>
            ))}
        </div>
    </SlideWrapper>
  );
};

export default TwoLinesSlide;