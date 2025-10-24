'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, Menu, Volume2, VolumeX } from 'lucide-react';

interface HeroProps {
  onHeroClick?: () => void;
  onMenuToggle?: () => void;
}

export default function Hero({ onHeroClick, onMenuToggle }: HeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', updateProgress);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
    };
  }, []);
  

  const handleSectionClick = (e: React.MouseEvent) => {
    // Check if the click target is not the volume button or its children
    const target = e.target as HTMLElement;
    const isVolumeButton = target.closest('button[aria-label="volume-control"]');
    const isMenuButton = target.closest('button[aria-label="menu-toggle"]');
    
    if ((!isVolumeButton && !isMenuButton) && onHeroClick) {
      onHeroClick();
    }
  };

  return (
    <section 
      className="relative h-screen w-full overflow-hidden cursor-pointer"
      onClick={handleSectionClick}
    >
      <div className="absolute inset-0 bg-black">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-6">
        <h1 className="text-2xl font-bold text-white">HOMMEA</h1>
        <div className="flex items-center gap-6">
          <button className="text-white hover:text-white/80 transition">
            <Search size={24} />
          </button>
          <button
            className="text-white hover:text-white/80 transition"
            onClick={onMenuToggle}
            aria-label="menu-toggle"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <div className="absolute bottom-[150px] left-6 z-10 max-w-[920px]">
        <h2 className="text-[70px] leading-[75px] font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          Explore Hommea<br />
          Collections of residential
        </h2>
      </div>

      <button
        onClick={() => setIsMuted(!isMuted)}
        aria-label="volume-control"
        className="absolute bottom-[150px] right-6 z-10 text-white hover:text-white/80 transition"
      >
        {isMuted ? <VolumeX size={34} /> : <Volume2 size={34} />}
      </button>

      <div className="absolute bottom-0 left-0 h-[10px] bg-primary-brown" style={{ width: `${progress}%` }} />
    </section>
  );
}