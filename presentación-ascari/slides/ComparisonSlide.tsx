import React from 'react';
import SlideWrapper from './SlideWrapper';
import { COMPARISON_DATA } from '../constants';

const ComparisonSlide: React.FC = () => {
    const bgImage = "https://ascari.club/wp-content/uploads/2024/10/ASCARI_CARROUSEL_EVENTS_7-scaled.webp";
  
    return (
    <SlideWrapper bgImage={bgImage} overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.7)' }} className="justify-center">
        <div className="text-center">
             <h2 className="text-3xl md:text-4xl font-bold uppercase">Comparativa de Estilos:</h2>
             <p className="text-white/80 mt-2">Dos líneas, dos formas de representar el espíritu de ASCARI.</p>
        </div>
        <div className="mt-10">
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b-2 border-white/50">
                        <th className="p-3 md:p-4 text-sm font-bold tracking-widest uppercase text-white/60">Elemento</th>
                        <th className="p-3 md:p-4 text-sm font-bold tracking-widest uppercase text-white">Línea 1 <br/><span className="text-xl font-bold normal-case text-white">Elegante y Sobria</span></th>
                        <th className="p-3 md:p-4 text-sm font-bold tracking-widest uppercase text-white">Línea 2 <br/><span className="text-xl font-bold normal-case text-white">Racing y Callejera</span></th>
                    </tr>
                </thead>
                <tbody>
                    {COMPARISON_DATA.map((item, index) => (
                        <tr key={item.element} className="border-b border-white/20 text-sm">
                            <td className="p-3 md:p-4 font-bold align-top text-white">
                                {item.element}
                            </td>
                            <td className="p-3 md:p-4 text-white/80 align-top">
                                {item.elegant}
                            </td>
                            <td className="p-3 md:p-4 text-white/80 align-top">
                                {item.racing}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <p className="text-center italic mt-10 text-white/80">
            “Una colección pensada para abrazar la dualidad del club: exclusividad con carácter.”
        </p>
    </SlideWrapper>
  );
};

export default ComparisonSlide;