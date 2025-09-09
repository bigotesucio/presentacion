import React from 'react';
import SlideWrapper from './SlideWrapper';

const images = [
    'https://images.unsplash.com/photo-1629596494402-7c8707b665c8?w=500&q=80', // Dior Racing Jacket
    'https://images.unsplash.com/photo-1617128856334-969300a89a05?w=500&q=80', // White Racing Top
    'https://images.unsplash.com/photo-1621331718998-89c0a688b776?w=500&q=80', // Porsche Racing Suit
    'https://images.unsplash.com/photo-1582693247348-3453a6e5631b?w=500&q=80', // Ralph Lauren Jacket
    'https://images.unsplash.com/photo-1617104677293-9c565a0a35c2?w=500&q=80', // Aime Leon Dore Jacket
    'https://images.unsplash.com/photo-1605335143343-a1ad9652a6a4?w=500&q=80', // McLaren Fleece
    'https://images.unsplash.com/photo-1633456388836-f6d14e3579c8?w=500&q=80', // Sleeve detail
    'https://images.unsplash.com/photo-1620804569563-394a8497c2df?w=500&q=80', // Palace Jacket
    'https://images.unsplash.com/photo-1599323049583-140228c894e2?w=500&q=80', // Shorts
    'https://images.unsplash.com/photo-1583084220391-4472c68f158f?w=500&q=80', // Mercedes Shirt
    'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80', // Balenciaga Shirt
    'https://images.unsplash.com/photo-1593440366763-71a07153b310?w=500&q=80', // Striped Sweater
    'https://images.unsplash.com/photo-1576405335191-5b8719008f51?w=500&q=80', // Palace Jacket 2
    'https://images.unsplash.com/photo-1618173873335-a131a47b1e8a?w=500&q=80', // Umbrella
    'https://images.unsplash.com/photo-1589467243399-56b4a5e2f737?w=500&q=80', // Teddy Bear
    'https://images.unsplash.com/photo-1621948432321-2f741b2b81d7?w=500&q=80', // Water Bottle
    'https://images.unsplash.com/photo-1599423300438-73ab1c5731b2?w=500&q=80', // Toy Cars
    'https://images.unsplash.com/photo-1610469512967-7323ff05c434?w=500&q=80', // Gloves
    'https://images.unsplash.com/photo-1591047139829-d919b5ca23d3?w=500&q=80', // Leather Gloves
    'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&q=80', // Scarf
    'https://images.unsplash.com/photo-1622416489390-1443d3513a87?w=500&q=80', // Superdry Backpack
    'https://images.unsplash.com/photo-1611652022413-757279b91350?w=500&q=80', // Cap
    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80', // Scarf 2
    'https://images.unsplash.com/photo-1560343338-232e92c2a4a9?w=500&q=80', // BMW Bag
];

const MoodboardSlide: React.FC = () => {
    return (
        <SlideWrapper theme="light" className="p-0 justify-start items-stretch">
            <div className="pt-20 px-8 md:px-12 w-full max-w-full">
                <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                    {images.map((src, index) => (
                        <div key={index} className="aspect-square">
                           <img src={src} alt={`Moodboard image ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </SlideWrapper>
    );
};

export default MoodboardSlide;