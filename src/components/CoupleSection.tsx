import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, RotateCw, Sparkles, ArrowLeft, ArrowRight, BookOpen, GraduationCap, Coffee, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COUPLE_CARDS } from '../data/content';
import { PhotocardItem } from '../types';
import {
  FlowerIcon,
  SakuraBlossom,
  DaisyFlower,
  ChocolateBarIcon,
  TeddyBearIcon,
  SkybloomBranchDecoration,
  SkybloomLeftBranchDecoration,
} from './FloralAccents';

interface CoupleSectionProps {
  onNextPage: () => void;
  onPrevPage: () => void;
}

const STUDY_CHEERS = [
  'Kuliah hari ini lancar ya cintakuu! Abg kirimin cokelat manis & peluk boneka virtual biar gak capek 🍫🧸',
  'Ngerjain tugas kuliahnya satu per satu ya sayang. Jangan lupa ngemil cokelat, minum air, dan peluk boneka kesayangan 🌸💧',
  'Nisaa itu mahasiswi hebat! Kamu sudah berjuang keras, percayalah hasil terbaik pasti nunggu kamu 🎓✨',
  'Sumpah senyum manis Nisaa di video bikin candu banget weh... bikin capek seharian langsung hilang seketika, pokoknya Abg suka banget! 🥰💖',
  'Kalau otak udah mulai jenuh sama urusan kampus, langsung call Abg yaa. Abg selalu siap dengerin curhat Nisaa 🫂🧸',
  'Peluk virtual paling hangat dari Abg buat Nisaa yang lagi capek kuliah malam ini. Semangat terus cintakuu tersayang! 🌷🍫',
];

export const CoupleSection: React.FC<CoupleSectionProps> = ({
  onNextPage,
  onPrevPage,
}) => {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [likedCards, setLikedCards] = useState<Record<string, boolean>>({});
  const [floatingHeartId, setFloatingHeartId] = useState<string | null>(null);
  const [activeCheerIndex, setActiveCheerIndex] = useState(0);

  const toggleFlip = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate?.(10);
    }
  };

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedCards((prev) => ({ ...prev, [id]: !prev[id] }));
    setFloatingHeartId(id);

    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate?.(12);
    }

    setTimeout(() => {
      setFloatingHeartId(null);
    }, 900);
  };

  const handleNextCheer = () => {
    setActiveCheerIndex((prev) => (prev + 1) % STUDY_CHEERS.length);
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate?.(10);
    }
  };

  const handleSendCheerBurst = (e: React.MouseEvent) => {
    e.stopPropagation();
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.6, x: 0.5 },
      colors: ['#9B6FE4', '#D870B8', '#B899EE', '#FCEEF6', '#FDE047'],
      shapes: ['circle'],
      scalar: 1.15,
    });
    handleNextCheer();
  };

  return (
    <div className="relative w-full min-h-[750px] py-8 px-4 flex flex-col justify-between select-none overflow-hidden">
      {/* Decorative Skybloom White Daisy Branch in Background Top Corner */}
      <SkybloomBranchDecoration opacity={0.65} />

      <div className="space-y-6 relative z-10">
        {/* Header Bagian Penyemangat Ujian & Belajar */}
        <div className="space-y-2 px-1">
          <div className="flex items-center gap-2">
            <span className="h-[1.5px] w-6 bg-[#5DA9FF]/50" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-extrabold text-[#2B6CB0]">
              SEMANGAT & DUKUNGAN KULIAH
            </span>
            <span className="h-[1.5px] w-6 bg-[#5DA9FF]/50" />
          </div>

          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2">
              <DaisyFlower size={24} />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1A4D80] leading-tight">
                Penyemangat Khusus Nisaa
              </h2>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-[#2B6CB0] border border-[#CFE9FF] shadow-xs shrink-0">
              <GraduationCap size={14} className="text-[#5DA9FF]" />
              <span>Doa Dari Jauh</span>
            </div>
          </div>
          <p className="text-sm sm:text-base text-[#4A6482] leading-relaxed">
            Meskipun terhalang jarak, doa dan energi manis dari Abg gak pernah putus buat nemenin lelahnya kuliah, tugas, dan jadwal padat Nisaa! 🌸📚
          </p>
        </div>

        {/* Interactive Study Cheer Capsule */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-3xl bg-gradient-to-r from-[#F4F9FD] via-[#FFF5F8] to-[#FDF6EE] border border-[#CFE9FF] shadow-xs space-y-3"
        >
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2B6CB0]">
              <BookOpen size={14} className="text-[#5DA9FF]" />
              <span>Kapsul Semangat Kuliah & Tugas Hari Ini</span>
            </div>
            <button
              onClick={handleNextCheer}
              className="text-xs font-bold text-[#E06287] hover:text-[#2B6CB0] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <RotateCw size={12} />
              <span>Ganti Pesan</span>
            </button>
          </div>

          <motion.div
            key={activeCheerIndex}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm sm:text-base font-semibold text-[#1A4D80] bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#CFE9FF] shadow-xs flex items-start gap-2.5 leading-relaxed"
          >
            <span className="text-lg shrink-0">🌸</span>
            <span>"{STUDY_CHEERS[activeCheerIndex]}"</span>
          </motion.div>

          <div className="flex items-center justify-between pt-0.5">
            <span className="text-[11px] sm:text-xs text-[#6D3F33]">
              Kirim energi doa & peluk virtual:
            </span>
            <button
              onClick={handleSendCheerBurst}
              className="px-3.5 py-1.5 bg-gradient-to-r from-[#2B6CB0] via-[#5DA9FF] to-[#D870B8] text-white rounded-full text-xs font-bold shadow-[0_4px_12px_rgba(43,108,176,0.25)] hover:opacity-95 transition-opacity cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles size={12} className="text-[#FCEEF6]" />
              <span>Kirim Semangat ✨</span>
            </button>
          </div>
        </motion.div>

        {/* 4 Study & Exam Photocard Cards Grid */}
        <div className="grid grid-cols-2 gap-3.5">
          {COUPLE_CARDS.map((card: PhotocardItem) => {
            const isFlipped = !!flippedCards[card.id];
            const isLiked = !!likedCards[card.id];

            return (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggleFlip(card.id)}
                className="relative rounded-[24px] bg-white/95 backdrop-blur-md p-2.5 flex flex-col justify-between cursor-pointer select-none overflow-hidden border border-[#E8DCF8] shadow-[0_8px_20px_rgba(155,111,228,0.1)] hover:shadow-[0_12px_28px_rgba(155,111,228,0.18)] transition-all"
              >
                {!isFlipped ? (
                  <div className="relative w-full h-full flex flex-col justify-between">
                    <div
                      className="relative w-full aspect-[9/16] rounded-[18px] overflow-hidden bg-[#28163E] shrink-0"
                      style={{ aspectRatio: '9 / 16' }}
                    >
                      <img
                        src={card.src}
                        alt={card.title}
                        className="w-full h-full object-cover pointer-events-none"
                        loading="lazy"
                      />

                      <div className="absolute top-2 left-2 px-2.5 py-0.5 bg-[#28163E]/85 backdrop-blur-sm text-[#FFFFFF] text-[12px] font-bold rounded-full">
                        #{card.cardNo}
                      </div>

                      <button
                        onClick={(e) => toggleLike(card.id, e)}
                        aria-label="Suka Kartu Semangat"
                        className="absolute bottom-2 right-2 p-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#9B6FE4] shadow-sm cursor-pointer"
                      >
                        <Heart
                          size={15}
                          fill={isLiked ? '#9B6FE4' : 'transparent'}
                        />
                      </button>

                      <AnimatePresence>
                        {floatingHeartId === card.id && (
                          <motion.div
                            initial={{ scale: 0.4, opacity: 1 }}
                            animate={{ scale: 1.8, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0 flex items-center justify-center pointer-events-none text-[#9B6FE4]"
                          >
                            <Heart size={50} fill="#9B6FE4" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="pt-2 px-1 flex items-center justify-between shrink-0">
                      <div className="truncate pr-1">
                        <div className="text-[12px] sm:text-[13px] font-bold text-[#28163E] truncate leading-tight">
                          {card.title}
                        </div>
                        <div className="text-[11px] sm:text-[12px] text-[#8E76A8] leading-tight mt-0.5">
                          {card.date}
                        </div>
                      </div>

                      <button
                        onClick={(e) => toggleFlip(card.id, e)}
                        aria-label="Balik Kartu Semangat"
                        className="p-1 rounded-full text-[#8E76A8] hover:text-[#9B6FE4] transition-colors cursor-pointer shrink-0"
                        title="Balik Kartu"
                      >
                        <RotateCw size={14} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={(e) => toggleFlip(card.id, e)}
                    className="relative w-full aspect-[9/16] rounded-[18px] bg-gradient-to-br from-[#F5F0FB] via-[#FCEEF6] to-[#F5F0FB] border border-[#EAE1FA] p-3 flex flex-col justify-between text-center overflow-hidden"
                    style={{ aspectRatio: '9 / 16' }}
                  >
                    <div className="space-y-0.5 shrink-0">
                      <div className="inline-flex items-center gap-1 text-[11px] sm:text-[12px] font-bold text-[#7F4CD1]">
                        <SakuraBlossom size={13} />
                        <span>DOA & DUKUNGAN ABG</span>
                      </div>
                      <div className="text-[11px] sm:text-[12px] font-bold text-[#8E76A8]">
                        NO. #{card.cardNo}
                      </div>
                    </div>

                    <div className="my-auto py-1">
                      <p className="text-xs sm:text-sm font-bold text-[#28163E] leading-snug line-clamp-5">
                        "{card.backNote}"
                      </p>
                    </div>

                    <div className="pt-1 flex items-center justify-between text-[11px] text-[#8E76A8] shrink-0">
                      <span className="font-semibold text-[#7F4CD1]">{card.tag}</span>
                      <span className="font-semibold text-[#9B6FE4]">Ketuk foto</span>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="pt-6 flex items-center gap-3">
        <button
          onClick={onPrevPage}
          aria-label="Halaman Sebelumnya"
          className="w-13 h-13 min-w-[50px] min-h-[50px] rounded-full bg-white/95 backdrop-blur-md border border-[#CFE9FF] shadow-xs flex items-center justify-center text-[#1A4D80] shrink-0 cursor-pointer hover:bg-[#EAF4FE] transition-colors"
        >
          <ArrowLeft size={19} />
        </button>

        <motion.button
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.02 }}
          onClick={onNextPage}
          className="flex-1 py-3.5 px-6 bg-gradient-to-r from-[#2B6CB0] via-[#5DA9FF] to-[#D870B8] text-white rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_25px_rgba(43,108,176,0.28)] transition-opacity hover:opacity-95"
        >
          <span>Lanjut ke Janji & Voucher Abg</span>
          <ArrowRight size={18} className="text-[#FCEEF6]" />
        </motion.button>
      </div>
    </div>
  );
};
