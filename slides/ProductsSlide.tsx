import React from 'react';
import SlideWrapper from './SlideWrapper';
import { PRODUCT_CATEGORIES_DATA } from '../constants';

const ProductsSlide: React.FC = () => {
  const bgImage = "https://ascari.club/wp-content/uploads/2025/07/DSC04333.webp";
  return (
    <SlideWrapper bgImage={bgImage} className="items-start">
        <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold uppercase">Propuesta de Desarrollo por</h2>
            <h3 className="text-3xl md:text-4xl font-bold uppercase text-white/70">Categoría de Producto</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-10 w-full">
            {PRODUCT_CATEGORIES_DATA.map((cat) => (
                <div key={cat.category} className="bg-black/40 p-6 h-full flex flex-col rounded-lg">
                    <h3 className="text-2xl font-bold uppercase">{cat.category.replace('/', '/\n')}</h3>
                    <ul className="mt-6 space-y-2 list-disc list-inside text-white/80 flex-grow">
                        {cat.items.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </SlideWrapper>
  );
};

export default ProductsSlide;