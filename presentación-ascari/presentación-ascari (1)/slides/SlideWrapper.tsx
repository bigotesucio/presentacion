import React from 'react';

interface HeaderProps {
    theme?: 'light' | 'dark';
}

const Header: React.FC<HeaderProps> = ({ theme = 'dark' }) => {
    const textColor = theme === 'dark' ? 'text-white' : 'text-black';
    const lightText = theme === 'dark' ? 'text-white/80' : 'text-black/60';

    return (
        <header className={`absolute top-0 left-0 right-0 w-full p-6 md:p-8 z-20`}>
            <div className={`w-full max-w-[1400px] mx-auto flex justify-between items-center text-[10px] font-bold tracking-widest uppercase`}>
                <span className={textColor}>Apparell.™</span>
                <span className={lightText}>ASCARI CUB</span>
                <span className={lightText}>2025</span>
            </div>
        </header>
    );
};


interface SlideWrapperProps {
  children: React.ReactNode;
  className?: string;
  theme?: 'light' | 'dark';
  bgImage?: string;
  bgClassName?: string;
  overlayStyle?: React.CSSProperties;
}

const SlideWrapper: React.FC<SlideWrapperProps> = ({ children, className = '', theme = 'dark', bgImage, bgClassName = 'bg-cover bg-center', overlayStyle = {backgroundColor: 'rgba(0,0,0,0.6)'} }) => {
  const themeClasses = theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black';
  const hasBgImage = !!bgImage;

  return (
    <section className={`slide w-full h-screen flex items-center justify-center relative overflow-hidden ${!hasBgImage ? themeClasses : ''} ${className}`}>
        {hasBgImage && (
            <div className={`absolute inset-0 w-full h-full ${bgClassName}`} style={{ backgroundImage: `url(${bgImage})` }} aria-hidden="true">
                <div className="absolute inset-0 w-full h-full" style={overlayStyle}></div>
            </div>
        )}
        <Header theme={hasBgImage || theme === 'dark' ? 'dark' : 'light'} />
        <div className={`relative w-full max-w-[1100px] mx-auto z-10 px-6 md:px-8 ${hasBgImage ? 'text-white' : ''}`}>
            {children}
        </div>
    </section>
  );
};

export default SlideWrapper;