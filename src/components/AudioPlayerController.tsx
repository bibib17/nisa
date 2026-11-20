import React from 'react';
import { motion } from 'framer-motion';
import { Disc, Play, Pause } from 'lucide-react';
import { DaisyFlower } from './FloralAccents';

interface AudioPlayerControllerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const AudioPlayerController: React.FC<AudioPlayerControllerProps> = ({
  isPlaying,
  onToggle,
}) => {
  return (
    <div className="fixed top-3 right-4 z-50 flex items-center gap-2 py-1.5 px-3.5 bg-white/95 backdrop-blur-md border border-[#CFE9FF] rounded-full text-xs sm:text-[13px] font-semibold text-[#1A4D80] shadow-[0_4px_20px_rgba(43,108,176,0.14)] select-none">
      <div
        className={`w-5 h-5 rounded-full flex items-center justify-center text-[#2B6CB0] ${
          isPlaying ? 'animate-spin-slow' : 'opacity-60'
        }`}
      >
        <Disc size={16} />
      </div>

      <div className="flex items-center gap-1.5 pr-0.5">
        <DaisyFlower size={13} />
        <span className="text-xs sm:text-[13px] font-bold text-[#1A4D80] leading-tight">
          The Way You Look at Me
        </span>
      </div>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={onToggle}
        aria-label={isPlaying ? 'Jeda Musik' : 'Putar Musik'}
        className="p-1 rounded-full text-[#2B6CB0] hover:text-[#5DA9FF] hover:bg-[#EAF4FE] transition-colors cursor-pointer"
      >
        {isPlaying ? <Pause size={14} /> : <Play size={14} />}
      </motion.button>
    </div>
  );
};
