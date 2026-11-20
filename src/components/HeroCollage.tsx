import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Clock, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FilmstripWidget } from './FilmstripWidget';
import {
  FlowerIcon,
  FloralCornerOrnament,
  DaisyFlower,
  ChocolateBarIcon,
  TeddyBearIcon,
  SkybloomBranchDecoration,
  SkybloomLeftBranchDecoration,
  CornerFloralBranch,
  CloudClusterBackdrop,
  FlowerBouquetBadge,
  FluffyCloud,
  RomanticQuoteBlock,
} from './FloralAccents';
import { HERO_FILMSTRIP } from '../data/content';
import { HeroFilmstripItem } from '../types';

interface HeroCollageProps {
  onNextPage: () => void;
  onJumpToPage?: (page: number) => void;
}

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
}

export const HeroCollage: React.FC<HeroCollageProps> = ({
  onNextPage,
  onJumpToPage,
}) => {
  const [activeMedia, setActiveMedia] = useState<HeroFilmstripItem>(HERO_FILMSTRIP[0]);
  const [floatingHearts, setFloatingHearts] = useState<FloatingHeart[]>([]);

  const handleHeartBurst = (e: React.MouseEvent) => {
    e.stopPropagation();
    confetti({
      particleCount: 36,
      spread: 75,
      origin: { y: 0.88, x: 0.5 },
      colors: ['#5DA9FF', '#2B6CB0', '#E06287', '#FCE7F0', '#FBBF24', '#7A4839'],
      shapes: ['circle'],
      scalar: 1.15,
    });
  };

  const handleCutoutClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newHeart: FloatingHeart = {
      id: Date.now() + Math.random(),
      x,
      y,
    };

    setFloatingHearts((prev) => [...prev.slice(-4), newHeart]);

    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate?.(12);
    }

    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1200);
  };

  return (
    <div className="relative w-full min-h-[820px] bg-transparent pt-3 pb-10 px-3 sm:px-5 flex flex-col justify-between select-none overflow-hidden">
      {/* Decorative Skybloom White Daisy Branch in Background Top Corner */}
      <SkybloomBranchDecoration opacity={0.7} />

      {/* Top Bar: Headline & Filmstrip Controller */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 flex flex-col gap-4 px-1"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
          <div className="space-y-3 max-w-sm lg:max-w-xl">
            {/* Category Kicker with Fine Lines */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2"
            >
              <span className="h-[1.5px] w-6 sm:w-8 bg-[#5DA9FF]/60" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-extrabold text-[#2B6CB0]">
                RUANG CINTA & SEMANGAT KULIAH
              </span>
              <span className="h-[1.5px] w-6 sm:w-8 bg-[#5DA9FF]/60" />
            </motion.div>

            {/* Main Skybloom Headline: Serif + Dancing Script Cursive */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="font-serif text-3xl sm:text-5xl lg:text-[58px] font-bold text-[#1A4D80] tracking-tight leading-[1.08]"
            >
              Senyum Manis{' '}
              <span className="font-script font-normal text-4xl sm:text-6xl lg:text-[68px] text-[#E06287] italic block sm:inline mt-1 sm:mt-0 sm:ml-2">
                Nisaa Cintakuu
              </span>
            </motion.h1>

            {/* Romantic Accents Bar: Coklat, Bunga, Love, Boneka */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-0.5"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#CFE9FF] text-xs font-bold text-[#2B6CB0] shadow-xs backdrop-blur-md">
                <DaisyFlower size={14} />
                <span>Bunga Manis</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF6EE] border border-[#EADBC8] text-xs font-bold text-[#6D3F33] shadow-xs">
                <ChocolateBarIcon size={14} />
                <span>Cokelat Moodbooster</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF5F8] border border-[#FCE7F0] text-xs font-bold text-[#E06287] shadow-xs">
                <TeddyBearIcon size={14} />
                <span>Boneka Peluk</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F5FAFF] border border-[#CFE9FF] text-xs font-semibold text-[#1A4D80]">
                <Heart size={12} fill="#E06287" className="text-[#E06287]" />
                <span>Cinta Tulus</span>
              </span>
            </motion.div>

            {/* Description Text */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="text-sm sm:text-base text-[#4A6482] leading-relaxed max-w-md pt-0.5"
            >
              Buat Nisaa yang lagi capek-capeknya kuliah... Sumpah senyum manismu di foto dan video ini bikin candu banget, selalu bikin hati luluh. Pokoknya Abg sayang dan bangga banget sama Nisaa! 💕
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.14 }}
              className="pt-1 flex flex-wrap items-center gap-2.5"
            >
              <button
                onClick={onNextPage}
                className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-[#2B6CB0] via-[#5DA9FF] to-[#D870B8] text-white font-bold text-sm sm:text-base min-h-[46px] hover:opacity-95 shadow-[0_10px_25px_rgba(43,108,176,0.28)] transition-all cursor-pointer"
              >
                <span>Buka Semangat Buat Nisaa</span>
                <ArrowRight size={17} className="text-[#FCEEF6]" />
              </button>
            </motion.div>
          </div>

          {/* Interactive Filmstrip Controller Widget */}
          <div className="w-full sm:w-auto flex justify-center sm:justify-end pt-1">
            <FilmstripWidget
              activeMedia={activeMedia}
              onSelectMedia={(item) => setActiveMedia(item)}
              onOpenGallery={() => (onJumpToPage ? onJumpToPage(3) : onNextPage())}
            />
          </div>
        </div>
      </motion.div>

      {/* Central Moving Picture Showcase with Fluffy Cloud & Flower Branch Backdrop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 flex-1 flex items-center justify-center my-6"
      >
        {/* Soft Fluffy Anime Clouds Backdrop */}
        <CloudClusterBackdrop className="-bottom-8 scale-110 sm:scale-125" />

        <div
          onClick={handleCutoutClick}
          className="relative w-[280px] sm:w-[330px] lg:w-[370px] max-w-[85vw] aspect-[9/16] cursor-pointer"
          style={{ aspectRatio: '9 / 16' }}
        >
          {/* Floral Corner Branches on Frame */}
          <CornerFloralBranch position="top-right" />
          <CornerFloralBranch position="bottom-left" />

          {/* Dynamic Floating Sticker 1: Active Tag with Daisy */}
          <motion.div
            key={activeMedia.tag}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-4 left-4 z-20 px-3.5 py-1.5 bg-white/95 backdrop-blur-md text-[#2B6CB0] border border-[#CFE9FF] text-xs sm:text-sm font-bold rounded-full flex items-center gap-1.5 shadow-[0_4px_12px_rgba(43,108,176,0.14)]"
          >
            <DaisyFlower size={14} />
            <span>{activeMedia.tag}</span>
          </motion.div>

          {/* Dynamic Floating Sticker 2: Active Time with Teddy Bear Accent */}
          <motion.div
            key={activeMedia.time}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-10 right-2 z-20 px-3.5 py-1.5 bg-[#1A4D80]/90 backdrop-blur-md text-[#FFFFFF] text-xs sm:text-sm font-semibold rounded-full flex items-center gap-1.5 shadow-md border border-white/20"
          >
            <TeddyBearIcon size={14} />
            <span>{activeMedia.time}</span>
          </motion.div>

          {/* Moving Picture Footage Container */}
          <div className="w-full h-full rounded-[32px] overflow-hidden bg-white p-2 border border-[#CFE9FF] shadow-[0_20px_45px_rgba(43,108,176,0.18)]">
            <div className="w-full h-full rounded-[24px] overflow-hidden bg-[#1A4D80]">
              <AnimatePresence mode="wait">
                {activeMedia.type === 'video' ? (
                  <motion.video
                    key={activeMedia.src}
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.4 }}
                    transition={{ duration: 0.3 }}
                    src={activeMedia.src}
                    poster={activeMedia.poster}
                    playsInline
                    webkit-playsinline="true"
                    muted
                    autoPlay
                    loop
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <motion.img
                    key={activeMedia.src}
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.4 }}
                    transition={{ duration: 0.3 }}
                    src={activeMedia.src}
                    alt={activeMedia.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Tap-on-cutout heart & flower bubble particles */}
          <AnimatePresence>
            {floatingHearts.map((h) => (
              <motion.div
                key={h.id}
                initial={{ opacity: 1, scale: 0.6, x: h.x - 16, y: h.y - 16 }}
                animate={{
                  opacity: 0,
                  scale: 1.6,
                  y: h.y - 85,
                  x: h.x - 16 + (Math.random() * 30 - 15),
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="absolute pointer-events-none text-[#E06287] z-30 flex items-center justify-center"
              >
                <Heart size={28} fill="#E06287" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Romantic Quote Callout Block Matching Skybloom Reference */}
      <RomanticQuoteBlock />

      {/* Bottom Interactive Navigation Action Bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.28 }}
        className="relative z-30 flex items-center gap-3 px-1 pt-2"
      >
        {/* Flower & Love Burst Button */}
        <motion.button
          whileTap={{ scale: 0.88 }}
          whileHover={{ scale: 1.06 }}
          onClick={handleHeartBurst}
          aria-label="Kirim Partikel Bunga & Hati"
          className="w-13 h-13 min-w-[50px] min-h-[50px] rounded-full bg-white/95 backdrop-blur-md border border-[#CFE9FF] shadow-[0_4px_16px_rgba(43,108,176,0.12)] flex items-center justify-center text-[#2B6CB0] shrink-0 cursor-pointer"
        >
          <DaisyFlower size={24} />
        </motion.button>

        {/* Primary Action Button to Proceed to Next Page */}
        <motion.button
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.02 }}
          onClick={onNextPage}
          className="flex-1 py-3.5 px-6 bg-gradient-to-r from-[#2B6CB0] via-[#5DA9FF] to-[#D870B8] text-[#FFFFFF] rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_25px_rgba(43,108,176,0.28)] transition-opacity hover:opacity-95"
        >
          <span>Lanjut ke Cerita Nisaa</span>
          <ArrowRight size={18} className="text-[#FCEEF6]" />
        </motion.button>
      </motion.div>
    </div>
  );
};
