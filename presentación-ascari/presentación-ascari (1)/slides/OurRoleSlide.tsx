import React from 'react';
import SlideWrapper from './SlideWrapper';
import { OUR_ROLE_DATA } from '../constants';
import type { Role } from '../types';

const Shape: React.FC<{ shape: Role['shape'] }> = ({ shape }) => {
    switch (shape) {
        case 'circle':
            return <div className="w-5 h-5 rounded-full bg-white/60" />;
        case 'square':
            return <div className="w-5 h-5 bg-white/80" />;
        case 'triangle':
            return <div className="w-0 h-0 border-l-[10px] border-l-transparent border-b-[18px] border-b-white border-r-[10px] border-r-transparent" />;
        default:
            return null;
    }
};

const OurRoleSlide: React.FC = () => {
  const bgImage = "https://ascari.club/wp-content/uploads/2025/07/DJI_20250607160329_0551_D.webp";
  return (
    <SlideWrapper bgImage={bgImage} className="justify-center items-start">
        <div className="w-full">
            <div className="mb-8 md:mb-12">
                <h2 className="text-4xl md:text-5xl font-bold uppercase">Nuestro Rol:</h2>
                <p className="text-lg text-white/80 mt-2">
                    convertir diseño en producto real, con calidad premium
                </p>
            </div>
            <div className="space-y-8">
                {OUR_ROLE_DATA.map((role, index) => (
                    <div key={role.title} className="border-t border-white/20 pt-6">
                        <div className="flex items-start gap-4">
                            <div className="mt-1">
                                <Shape shape={role.shape} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">{role.title}</h3>
                                <p className="text-white/80 mt-2 max-w-3xl">{role.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </SlideWrapper>
  );
};

export default OurRoleSlide;