import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { asset } from '../utils/assets';
import {
  FloralCornerOrnament,
  DaisyFlower,
  ChocolateBarIcon,
  TeddyBearIcon,
  CloudClusterBackdrop,
  FlowerBouquetBadge,
} from './FloralAccents';

interface GateScreenProps {
  onUnlock: () => void;
}

export const GateScreen: React.FC<GateScreenProps> = ({ onUnlock }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    confetti({
      particleCount: 50,
      spread: 90,
      origin: { y: 0.6, x: 0.5 },
      colors: ['#5DA9FF', '#2B6CB0', '#E06287', '#FCE7F0', '#FBBF24', '#7A4839'],
      shapes: ['circle'],
      scalar: 1.25,
    });

    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate?.([40, 60, 40]);
    }

    setTimeout(() => {
      onUnlock();
    }, 700);
  };

  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.div
          key="gate-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-romantic-pattern select-none"
        >
          <div className="relative w-full max-w-[370px] flex items-center justify-center">
            {/* Background Cloud Decoration (Behind Gift Box) */}
            <CloudClusterBackdrop className="-top-12 left-1/2 -translate-x-1/2 scale-110 opacity-75" />

            {/* Skybloom Clean Floating Gift Box */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full bg-white/95 backdrop-blur-xl rounded-[36px] p-7 text-center border border-[#CFE9FF] shadow-[0_25px_60px_rgba(43,108,176,0.16)] overflow-hidden"
            >
              {/* Subtle Corner Accents */}
              <FloralCornerOrnament position="top-right" />
              <FloralCornerOrnament position="bottom-left" />

            {/* Nisaa's Photo Avatar & Gift Badge */}
            <div className="relative mx-auto w-24 h-24 mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOpen}
                className="w-full h-full rounded-full p-1 bg-gradient-to-tr from-[#2B6CB0] via-[#5DA9FF] to-[#E06287] shadow-[0_10px_25px_rgba(43,108,176,0.28)] cursor-pointer"
              >
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-[#EAF4FE]">
                  <img
                    src={asset('/img/PHOTO-2026-11-20-08 copy.jpg')}
                    alt="Nisaa Cintakuu"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-tr from-[#2B6CB0] to-[#E06287] flex items-center justify-center text-white border-2 border-white shadow-md">
                <Gift size={16} />
              </div>
            </div>

            {/* Title & Message */}
            <div className="mt-4 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EAF4FE] rounded-full text-[11px] sm:text-xs font-bold text-[#2B6CB0] border border-[#CFE9FF]">
                <DaisyFlower size={13} />
                <span>KADO SPESIAL DARI ABG</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A4D80] leading-snug tracking-tight">
                Ada Kado Spesial Buat{' '}
                <span className="font-script text-3xl sm:text-4xl text-[#E06287] font-normal block sm:inline mt-0.5">
                  Nisaa Cintakuu
                </span>
              </h1>
              <p className="text-sm sm:text-base text-[#4A6482] leading-relaxed">
                Ruang apresiasi dan penyemangat manis buat Nisaa yang lagi capek kuliah. Sumpah senyummu itu manis banget bikin candu! 🌸✨
              </p>
            </div>

            {/* Romantic Accents Bar: Coklat, Bunga, Boneka */}
            <div className="mt-4 py-2 px-3 bg-gradient-to-r from-[#F4F9FD] via-[#FFF5F8] to-[#FDF6EE] rounded-2xl flex items-center justify-center gap-2.5 text-xs font-bold text-[#1A4D80] border border-[#CFE9FF]/70">
              <div className="flex items-center gap-1 text-[#6D3F33]">
                <ChocolateBarIcon size={14} />
                <span>Cokelat</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1 text-[#2B6CB0]">
                <DaisyFlower size={14} />
                <span>Bunga</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1 text-[#E06287]">
                <TeddyBearIcon size={14} />
                <span>Boneka</span>
              </div>
            </div>

            {/* Action Tap Button */}
            <motion.button
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              onClick={handleOpen}
              className="mt-6 w-full py-3.5 px-5 bg-gradient-to-r from-[#2B6CB0] via-[#5DA9FF] to-[#D870B8] text-white font-bold text-sm sm:text-base rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_25px_rgba(43,108,176,0.3)] transition-opacity hover:opacity-95"
            >
              <Heart size={16} fill="#FCEEF6" className="text-[#FCEEF6]" />
              <span>Buka Kado Buat Nisaa 🎁</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
      )}
    </AnimatePresence>
  );
};
