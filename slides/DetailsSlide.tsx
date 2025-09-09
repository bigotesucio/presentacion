import React, { useMemo } from 'react';
import SlideWrapper from './SlideWrapper';
import { PRODUCT_DETAILS_DATA } from '../constants';
import type { ProductCategory } from '../types';

interface ProductDetailsSlideProps {
    category: ProductCategory['category'];
}

const DetailsSlide: React.FC<ProductDetailsSlideProps> = ({ category }) => {
  const filteredProducts = useMemo(() => {
    return PRODUCT_DETAILS_DATA.filter(p => p.category === category);
  }, [category]);
  
  const categoryTitle = category.replace(/([A-Z])/g, ' $1').replace('Regalos&Family', 'Lifestyle').trim();

  return (
    <SlideWrapper theme="light" className="items-start">
        <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold uppercase">Detalle de Materiales y Técnicas</h2>
            <h3 className="text-3xl md:text-4xl font-bold uppercase text-black/70">por Tipo de Producto [{category.toUpperCase().split('/')[0]}]</h3>
        </div>
        
        <div className="mt-8 h-[70vh] overflow-y-auto overflow-x-auto w-full border-t border-b border-black/20">
            <table className="w-full text-left text-sm whitespace-normal">
                <thead className="sticky top-0 bg-white/80 backdrop-blur-sm z-10">
                    <tr className="border-b border-black/20">
                        <th className="p-3 font-bold min-w-[120px]">Producto</th>
                        <th className="p-3 font-bold min-w-[200px]">Elegante y sobria</th>
                        <th className="p-3 font-bold min-w-[200px]">Racing y Callejera</th>
                        <th className="p-3 font-bold min-w-[250px]">Detalles Desarrollo</th>
                    </tr>
                </thead>
                <tbody className="align-top">
                    {filteredProducts.map((item, index) => (
                        <tr key={index} className="border-t border-black/10">
                            <td className="p-3 font-bold">{item.product}</td>
                            <td className="p-3 text-gray-700">{item.elegant}</td>
                            <td className="p-3 text-gray-700">{item.racing}</td>
                            <td className="p-3 text-gray-700">{item.development}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </SlideWrapper>
  );
};

export default DetailsSlide;