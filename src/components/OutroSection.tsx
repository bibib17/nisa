import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Sparkles, ArrowLeft, MessageCircle } from 'lucide-react';
import {
  FlowerIcon,
  SakuraBlossom,
  DaisyFlower,
  ChocolateBarIcon,
  TeddyBearIcon,
  SkybloomBranchDecoration,
  SkybloomLeftBranchDecoration,
} from './FloralAccents';

interface OutroSectionProps {
  onRestart: () => void;
  onPrevPage: () => void;
}

export const OutroSection: React.FC<OutroSectionProps> = ({
  onRestart,
  onPrevPage,
}) => {
  return (
    <div className="relative w-full min-h-[750px] py-12 px-6 bg-gradient-to-b from-[#1A365D] via-[#102A4C] to-[#0B1A2F] text-[#FFFFFF] text-center select-none rounded-[36px] border border-[#2B6CB0]/40 shadow-[0_25px_60px_rgba(26,54,93,0.5)] flex flex-col justify-between overflow-hidden">
      {/* Decorative Skybloom White Daisy Branch in Background Top Corner */}
      <SkybloomBranchDecoration opacity={0.35} />
      {/* Decorative ambient glowing orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#5DA9FF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#E06287]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-8 my-auto relative z-10">
        {/* Flower & Love Emblem */}
        <div className="mx-auto w-18 h-18 rounded-full bg-gradient-to-tr from-[#2B6CB0] via-[#5DA9FF] to-[#E06287] flex items-center justify-center text-white shadow-[0_10px_30px_rgba(43,108,176,0.45)]">
          <DaisyFlower size={36} />
        </div>

        {/* Closing Title */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold text-[#CFE9FF] border border-white/15">
            <DaisyFlower size={13} />
            <span>BUNGA TERINDAH DI HATI ABG</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFFFFF] tracking-tight leading-tight">
            Terima Kasih,{' '}
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#F9D8ED] font-normal block sm:inline mt-1">
              Nisaa Cintakuu
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#CFE9FF] max-w-md mx-auto leading-relaxed">
            Meskipun kita belum pernah ketemu langsung, kehadiran Nisaa selalu jadi berkah dan penyemangat terbesar buat Abg. Semangat terus buat kuliah dan tugas-tugasnya yaa sayang. Sumpah, senyum manis Nisaa itu bikin candu banget, pokoknya Abg suka banget sama kamu! Abg selalu doain dari jauh dan gak sabar nunggu momen indah waktu kita ketemu nanti 🌸✨.
          </p>

          {/* Romantic Accents Pill */}
          <div className="flex items-center justify-center gap-2 pt-1 text-xs text-[#CFE9FF]">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15">
              <ChocolateBarIcon size={13} />
              <span>Cokelat</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15">
              <DaisyFlower size={13} />
              <span>Bunga</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15">
              <TeddyBearIcon size={13} />
              <span>Boneka</span>
            </span>
          </div>
        </div>

        {/* Signature */}
        <div className="pt-2 space-y-1">
          <div className="text-xs sm:text-sm text-[#90CDF4]">
            Tertanda dengan penuh sayang & kekaguman,
          </div>
          <div className="font-script text-2xl sm:text-3xl font-bold text-[#FFFFFF] flex items-center justify-center gap-2">
            <span>Dari Abg, buat Nisaa cintakuu tersayang</span>
          </div>
        </div>

        {/* Direct WhatsApp Contact Button */}
        <div className="pt-2">
          <a
            href={`https://wa.me/6285133933560?text=${encodeURIComponent(
              'Bg, aku sudah baca semua pesan dan doa kamu di web... makasih banyak yaa sudah selalu semangatin aku yang lagi capek kuliah! Senyum manisku khusus buat Abg 🌸'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white text-[#1A365D] hover:bg-[#F0F7FF] transition-all font-bold text-sm shadow-[0_4px_16px_rgba(255,255,255,0.25)]"
          >
            <MessageCircle size={17} className="text-[#2B6CB0]" />
            <span>Chat Abg di WhatsApp</span>
          </a>
        </div>

        {/* Micro Timestamp */}
        <div className="text-xs text-[#90CDF4]/70 flex items-center justify-center gap-1.5 pt-2">
          <Sparkles size={14} className="text-[#FBBF24]" />
          <span>Dibuat khusus untuk Nisaa Cintakuu • 2026</span>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="pt-6 flex items-center gap-3 relative z-10">
        <button
          onClick={onPrevPage}
          aria-label="Halaman Sebelumnya"
          className="w-14 h-14 min-w-[54px] min-h-[54px] rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#E8DCF8] shrink-0 cursor-pointer hover:bg-white/20 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>

        <motion.button
          whileTap={{ scale: 0.94 }}
          whileHover={{ scale: 1.04 }}
          onClick={onRestart}
          className="flex-1 py-4 px-6 bg-gradient-to-r from-[#8E5BE2] via-[#9B6FE4] to-[#D870B8] text-white font-bold text-base rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_25px_rgba(155,111,228,0.4)] transition-opacity hover:opacity-95"
        >
          <RotateCcw size={16} />
          <span>Ulangi Cerita dari Awal</span>
        </motion.button>
      </div>
    </div>
  );
};
