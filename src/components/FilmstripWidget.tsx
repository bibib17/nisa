import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Heart, Play } from 'lucide-react';
import { HERO_FILMSTRIP } from '../data/content';
import { HeroFilmstripItem } from '../types';
import { FlowerIcon } from './FloralAccents';

interface FilmstripWidgetProps {
  activeMedia?: HeroFilmstripItem;
  onSelectMedia?: (item: HeroFilmstripItem) => void;
  onOpenGallery?: () => void;
}

export const FilmstripWidget: React.FC<FilmstripWidgetProps> = ({
  activeMedia,
  onSelectMedia,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [likedMap, setLikedMap] = useState<Record<number, boolean>>({});
  const [floatingHeart, setFloatingHeart] = useState(false);
  const reelRef = useRef<HTMLDivElement>(null);

  const currentIdx = activeMedia
    ? HERO_FILMSTRIP.findIndex((item) => item.id === activeMedia.id)
    : selectedIndex;
  const safeIdx = currentIdx >= 0 ? currentIdx : 0;
  const currentItem = HERO_FILMSTRIP[safeIdx];

  const handleSelect = (idx: number) => {
    setSelectedIndex(idx);
    const item = HERO_FILMSTRIP[idx];
    onSelectMedia?.(item);

    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate?.(10);
    }
  };

  // Scroll active thumbnail smoothly into view whenever active item changes
  useEffect(() => {
    if (!reelRef.current) return;
    const activeEl = reelRef.current.children[safeIdx] as HTMLElement | undefined;
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [safeIdx]);

  const prevSlide = () => {
    const nextIdx = safeIdx > 0 ? safeIdx - 1 : HERO_FILMSTRIP.length - 1;
    handleSelect(nextIdx);
  };

  const nextSlide = () => {
    const nextIdx = safeIdx < HERO_FILMSTRIP.length - 1 ? safeIdx + 1 : 0;
    handleSelect(nextIdx);
  };

  const handleLikeMoment = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedMap((prev) => ({ ...prev, [currentItem.id]: !prev[currentItem.id] }));
    setFloatingHeart(true);

    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate?.(15);
    }

    setTimeout(() => {
      setFloatingHeart(false);
    }, 700);
  };

  const isCurrentLiked = !!likedMap[currentItem.id];

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[320px] mx-auto p-3 sm:p-3.5 bg-white/95 backdrop-blur-md rounded-3xl border border-[#CFE9FF] shadow-[0_8px_24px_rgba(43,108,176,0.1)] select-none space-y-2">
      {/* Header: Date, Counter & Live Time */}
      <div className="flex items-center justify-between bg-gradient-to-r from-[#F4F9FD] via-[#FFF5F8] to-[#FDF6EE] px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl border border-[#CFE9FF]/70">
        <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#2B6CB0]">
          <Clock size={13} className="text-[#5DA9FF]" />
          <span>{currentItem.date}</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-[10px] font-bold text-[#2B6CB0] bg-white/95 px-1.5 py-0.5 rounded-md border border-[#CFE9FF]">
            {safeIdx + 1}/{HERO_FILMSTRIP.length}
          </span>
          <span className="text-xs sm:text-[13px] font-bold text-[#1A4D80]">
            {currentItem.time}
          </span>
          <div className="relative">
            <button
              onClick={handleLikeMoment}
              aria-label="Suka Momen Ini"
              className="p-1 rounded-full text-[#E06287] cursor-pointer hover:bg-white active:scale-90 transition-transform"
            >
              <Heart size={14} fill={isCurrentLiked ? '#E06287' : 'transparent'} />
            </button>
            <AnimatePresence>
              {floatingHeart && (
                <motion.div
                  initial={{ opacity: 1, y: 0, scale: 0.8 }}
                  animate={{ opacity: 0, y: -20, scale: 1.3 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.65, ease: 'easeOut' }}
                  className="absolute -top-3 left-1 pointer-events-none text-[#E06287]"
                >
                  <Heart size={13} fill="#E06287" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Thumbnails Reel with navigation buttons & smooth horizontal scroll */}
      <div className="flex items-center gap-1 sm:gap-1.5">
        <button
          onClick={prevSlide}
          aria-label="Momen Sebelumnya"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[#2B6CB0] bg-[#EAF4FE] hover:bg-[#CFE9FF] active:scale-90 transition-all cursor-pointer shrink-0 border border-[#CFE9FF] shadow-xs"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Scrollable Reel container */}
        <div
          ref={reelRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1.5 px-0.5 touch-pan-x flex-1"
        >
          {HERO_FILMSTRIP.map((item, idx) => {
            const isSelected = safeIdx === idx;
            return (
              <motion.div
                key={item.id}
                whileTap={{ scale: 0.92 }}
                onClick={() => handleSelect(idx)}
                className={`relative w-[52px] h-[52px] min-w-[52px] min-h-[52px] sm:w-[58px] sm:h-[58px] sm:min-w-[58px] sm:min-h-[58px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 shrink-0 ${
                  isSelected
                    ? 'ring-2 ring-[#2B6CB0] ring-offset-2 ring-offset-white scale-105 shadow-[0_4px_12px_rgba(43,108,176,0.28)] opacity-100'
                    : 'opacity-55 hover:opacity-85 hover:scale-95'
                }`}
              >
                <img
                  src={item.type === 'video' ? (item.poster || item.src) : item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center text-white">
                    <Play size={12} fill="white" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Momen Berikutnya"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[#6434AD] bg-[#F5F0FB] hover:bg-[#E8DCF8] active:scale-90 transition-all cursor-pointer shrink-0 border border-[#EAE1FA]/80 shadow-xs"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Pagination Indicator Dots */}
      <div className="flex items-center justify-center gap-1.5 pt-0.5">
        {HERO_FILMSTRIP.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => handleSelect(dotIdx)}
            aria-label={`Pilih foto ${dotIdx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              dotIdx === safeIdx
                ? 'w-5 bg-gradient-to-r from-[#9B6FE4] to-[#D870B8]'
                : 'w-1.5 bg-[#E8DCF8] hover:bg-[#C0A4EB]'
            }`}
          />
        ))}
      </div>

      {/* Active Caption Details */}
      <div className="pt-0.5 px-0.5 space-y-1">
        <div className="flex items-center justify-between gap-2 min-w-0">
          <h4 className="text-[13px] sm:text-sm font-bold text-[#28163E] truncate min-w-0 flex-1">
            {currentItem.title}
          </h4>
          <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#7F4CD1] bg-[#F5F0FB] px-2 py-0.5 rounded-full border border-[#EAE1FA] shrink-0">
            <FlowerIcon size={10} petalColor="#D870B8" />
            {currentItem.tag}
          </span>
        </div>
        <p className="text-[11px] sm:text-[12px] text-[#5C4478] line-clamp-2 leading-relaxed">
          {currentItem.note}
        </p>
      </div>
    </div>
  );
};
