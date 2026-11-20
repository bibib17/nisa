import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const DaisyFlower: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 26, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      {/* 12 pure white/cream petals */}
      <g fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.5">
        <ellipse cx="16" cy="6" rx="2.5" ry="5.5" />
        <ellipse cx="16" cy="26" rx="2.5" ry="5.5" />
        <ellipse cx="6" cy="16" rx="5.5" ry="2.5" />
        <ellipse cx="26" cy="16" rx="5.5" ry="2.5" />
        <ellipse cx="8.9" cy="8.9" rx="2.5" ry="5.5" transform="rotate(-45 8.9 8.9)" />
        <ellipse cx="23.1" cy="23.1" rx="2.5" ry="5.5" transform="rotate(-45 23.1 23.1)" />
        <ellipse cx="23.1" cy="8.9" rx="2.5" ry="5.5" transform="rotate(45 23.1 8.9)" />
        <ellipse cx="8.9" cy="23.1" rx="2.5" ry="5.5" transform="rotate(45 8.9 23.1)" />
      </g>
      {/* Glowing golden sunny stamen */}
      <circle cx="16" cy="16" r="4.2" fill="#FBBF24" />
      <circle cx="16" cy="16" r="2.8" fill="#F59E0B" />
      <circle cx="15.2" cy="15.2" r="1.1" fill="#FEF08A" />
    </svg>
  );
};

export const ChocolateBarIcon: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 20, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <rect x="3" y="3" width="18" height="18" rx="3.5" fill="#5A342B" />
      <rect x="5" y="5" width="6" height="6" rx="1.5" fill="#7A4839" />
      <rect x="13" y="5" width="6" height="6" rx="1.5" fill="#7A4839" />
      <rect x="5" y="13" width="6" height="6" rx="1.5" fill="#7A4839" />
      <rect x="13" y="13" width="6" height="6" rx="1.5" fill="#7A4839" />
      <path d="M15 3 L21 9 L21 3 Z" fill="#FBBF24" />
      <path d="M16 3 L21 8" stroke="#F59E0B" strokeWidth="0.8" />
    </svg>
  );
};

export const TeddyBearIcon: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 22, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      {/* Ears */}
      <circle cx="6" cy="7" r="3.2" fill="#C28956" />
      <circle cx="6" cy="7" r="1.8" fill="#F4B8E4" />
      <circle cx="18" cy="7" r="3.2" fill="#C28956" />
      <circle cx="18" cy="7" r="1.8" fill="#F4B8E4" />
      {/* Body */}
      <ellipse cx="12" cy="17" rx="6" ry="5" fill="#C28956" />
      <ellipse cx="12" cy="17" rx="3.5" ry="3" fill="#FDF6EE" />
      {/* Head */}
      <circle cx="12" cy="10" r="5.5" fill="#D49B6A" />
      <ellipse cx="12" cy="11.5" rx="2.8" ry="2" fill="#FDF6EE" />
      {/* Eyes & Nose */}
      <circle cx="10" cy="9.5" r="0.8" fill="#3D231E" />
      <circle cx="14" cy="9.5" r="0.8" fill="#3D231E" />
      <ellipse cx="12" cy="11" rx="1" ry="0.6" fill="#3D231E" />
      {/* Held Heart */}
      <path
        d="M12 15 C11.4 13.8 9.8 13.8 9.8 15 C9.8 16.3 12 17.5 12 17.5 C12 17.5 14.2 16.3 14.2 15 C14.2 13.8 12.6 13.8 12 15 Z"
        fill="#E06287"
      />
    </svg>
  );
};

export const SkybloomBranchDecoration: React.FC<{
  className?: string;
  opacity?: number;
}> = ({ className = '', opacity = 0.75 }) => {
  return (
    <div
      className={`pointer-events-none select-none absolute -top-2 -right-2 z-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <svg
        viewBox="0 0 240 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[160px] sm:w-[210px] md:w-[240px] h-auto drop-shadow-[0_4px_10px_rgba(43,108,176,0.06)]"
      >
        {/* Harmonious gentle curving branch stem */}
        <path
          d="M240 0 C195 18, 150 12, 115 38 C90 56, 60 68, 25 80"
          stroke="#5E8434"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M150 22 C130 42, 108 40, 80 50"
          stroke="#6F993E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M190 10 C172 26, 158 44, 135 55"
          stroke="#6F993E"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M70 62 C52 75, 42 90, 28 98"
          stroke="#7BA845"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Fresh Green Foliage Leaves */}
        <ellipse cx="100" cy="34" rx="10" ry="5.5" transform="rotate(-30 100 34)" fill="#A8C97A" fillOpacity="0.88" />
        <ellipse cx="135" cy="18" rx="11" ry="5.8" transform="rotate(25 135 18)" fill="#7BA845" fillOpacity="0.82" />
        <ellipse cx="75" cy="52" rx="9" ry="5" transform="rotate(-38 75 52)" fill="#A8C97A" fillOpacity="0.88" />
        <ellipse cx="48" cy="74" rx="8" ry="4.5" transform="rotate(15 48 74)" fill="#6F993E" fillOpacity="0.82" />
        <ellipse cx="28" cy="88" rx="7" ry="4" transform="rotate(-20 28 88)" fill="#A8C97A" fillOpacity="0.88" />
        <ellipse cx="170" cy="28" rx="10" ry="4.8" transform="rotate(35 170 28)" fill="#8FC058" fillOpacity="0.85" />
        <ellipse cx="120" cy="48" rx="8" ry="4.5" transform="rotate(-15 120 48)" fill="#A8C97A" fillOpacity="0.82" />
        <ellipse cx="205" cy="8" rx="11" ry="5.5" transform="rotate(10 205 8)" fill="#6F993E" fillOpacity="0.82" />

        {/* Blooming White Daisies on branch */}
        <g transform="translate(108, 40)">
          <circle cx="0" cy="-6" r="3.5" fill="#FFFFFF" />
          <circle cx="5.2" cy="-3" r="3.5" fill="#FFFFFF" />
          <circle cx="5.2" cy="3" r="3.5" fill="#FFFFFF" />
          <circle cx="0" cy="6" r="3.5" fill="#FFFFFF" />
          <circle cx="-5.2" cy="3" r="3.5" fill="#FFFFFF" />
          <circle cx="-5.2" cy="-3" r="3.5" fill="#FFFFFF" />
          <circle cx="0" cy="0" r="2.8" fill="#FBBF24" />
          <circle cx="0" cy="0" r="1.5" fill="#F59E0B" />
        </g>
        <g transform="translate(58, 66) scale(0.85)">
          <circle cx="0" cy="-5.5" r="3.2" fill="#FFFFFF" />
          <circle cx="4.8" cy="-2.8" r="3.2" fill="#FFFFFF" />
          <circle cx="4.8" cy="2.8" r="3.2" fill="#FFFFFF" />
          <circle cx="0" cy="5.5" r="3.2" fill="#FFFFFF" />
          <circle cx="-4.8" cy="2.8" r="3.2" fill="#FFFFFF" />
          <circle cx="-4.8" cy="-2.8" r="3.2" fill="#FFFFFF" />
          <circle cx="0" cy="0" r="2.6" fill="#FBBF24" />
        </g>
        <g transform="translate(160, 24) scale(0.92)">
          <circle cx="0" cy="-6" r="3.5" fill="#FFFFFF" />
          <circle cx="5.2" cy="-3" r="3.5" fill="#FFFFFF" />
          <circle cx="5.2" cy="3" r="3.5" fill="#FFFFFF" />
          <circle cx="0" cy="6" r="3.5" fill="#FFFFFF" />
          <circle cx="-5.2" cy="3" r="3.5" fill="#FFFFFF" />
          <circle cx="-5.2" cy="-3" r="3.5" fill="#FFFFFF" />
          <circle cx="0" cy="0" r="2.8" fill="#FBBF24" />
        </g>
        <g transform="translate(24, 90) scale(0.72)">
          <circle cx="0" cy="-5" r="3" fill="#FFFFFF" />
          <circle cx="4.5" cy="-2.5" r="3" fill="#FFFFFF" />
          <circle cx="4.5" cy="2.5" r="3" fill="#FFFFFF" />
          <circle cx="0" cy="5" r="3" fill="#FFFFFF" />
          <circle cx="-4.5" cy="2.5" r="3" fill="#FFFFFF" />
          <circle cx="-4.5" cy="-2.5" r="3" fill="#FFFFFF" />
          <circle cx="0" cy="0" r="2.4" fill="#FBBF24" />
        </g>
      </svg>
    </div>
  );
};

export const SkybloomLeftBranchDecoration: React.FC<{
  className?: string;
  opacity?: number;
}> = ({ className = '', opacity = 0.65 }) => {
  return (
    <div
      className={`pointer-events-none select-none absolute -top-2 -left-2 z-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <svg
        viewBox="0 0 240 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[140px] sm:w-[180px] md:w-[200px] h-auto drop-shadow-[0_4px_10px_rgba(43,108,176,0.06)]"
      >
        <path
          d="M0 0 C45 18, 90 12, 125 38 C150 56, 180 68, 215 80"
          stroke="#5E8434"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M90 22 C110 42, 132 40, 160 50"
          stroke="#6F993E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M50 10 C68 26, 82 44, 105 55"
          stroke="#6F993E"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        
        {/* Leaves */}
        <ellipse cx="140" cy="34" rx="10" ry="5.5" transform="rotate(30 140 34)" fill="#A8C97A" fillOpacity="0.88" />
        <ellipse cx="105" cy="18" rx="11" ry="5.8" transform="rotate(-25 105 18)" fill="#7BA845" fillOpacity="0.82" />
        <ellipse cx="165" cy="52" rx="9" ry="5" transform="rotate(38 165 52)" fill="#A8C97A" fillOpacity="0.88" />
        <ellipse cx="192" cy="74" rx="8" ry="4.5" transform="rotate(-15 192 74)" fill="#6F993E" fillOpacity="0.82" />
        <ellipse cx="70" cy="28" rx="10" ry="4.8" transform="rotate(-35 70 28)" fill="#8FC058" fillOpacity="0.85" />
        <ellipse cx="35" cy="8" rx="11" ry="5.5" transform="rotate(-10 35 8)" fill="#6F993E" fillOpacity="0.82" />

        {/* Daisies */}
        <g transform="translate(132, 40)">
          <circle cx="0" cy="-6" r="3.5" fill="#FFFFFF" />
          <circle cx="5.2" cy="-3" r="3.5" fill="#FFFFFF" />
          <circle cx="5.2" cy="3" r="3.5" fill="#FFFFFF" />
          <circle cx="0" cy="6" r="3.5" fill="#FFFFFF" />
          <circle cx="-5.2" cy="3" r="3.5" fill="#FFFFFF" />
          <circle cx="-5.2" cy="-3" r="3.5" fill="#FFFFFF" />
          <circle cx="0" cy="0" r="2.8" fill="#FBBF24" />
          <circle cx="0" cy="0" r="1.5" fill="#F59E0B" />
        </g>
        <g transform="translate(182, 66) scale(0.85)">
          <circle cx="0" cy="-5.5" r="3.2" fill="#FFFFFF" />
          <circle cx="4.8" cy="-2.8" r="3.2" fill="#FFFFFF" />
          <circle cx="4.8" cy="2.8" r="3.2" fill="#FFFFFF" />
          <circle cx="0" cy="5.5" r="3.2" fill="#FFFFFF" />
          <circle cx="-4.8" cy="2.8" r="3.2" fill="#FFFFFF" />
          <circle cx="-4.8" cy="-2.8" r="3.2" fill="#FFFFFF" />
          <circle cx="0" cy="0" r="2.6" fill="#FBBF24" />
        </g>
        <g transform="translate(80, 24) scale(0.92)">
          <circle cx="0" cy="-6" r="3.5" fill="#FFFFFF" />
          <circle cx="5.2" cy="-3" r="3.5" fill="#FFFFFF" />
          <circle cx="5.2" cy="3" r="3.5" fill="#FFFFFF" />
          <circle cx="0" cy="6" r="3.5" fill="#FFFFFF" />
          <circle cx="-5.2" cy="3" r="3.5" fill="#FFFFFF" />
          <circle cx="-5.2" cy="-3" r="3.5" fill="#FFFFFF" />
          <circle cx="0" cy="0" r="2.8" fill="#FBBF24" />
        </g>
      </svg>
    </div>
  );
};

export const RomanticQuoteBlock: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative my-6 px-5 sm:px-7 py-5 rounded-[28px] bg-gradient-to-br from-[#F4F9FD] via-white to-[#FFF6F9] border border-[#CFE9FF] shadow-[0_8px_25px_rgba(43,108,176,0.08)] select-none ${className}`}>
      <div className="flex items-start gap-2">
        <span className="font-serif text-4xl sm:text-5xl text-[#2B6CB0] leading-none select-none opacity-60">“</span>
        <div className="space-y-1.5 flex-1">
          <p className="font-serif italic text-base sm:text-lg text-[#1A4D80] leading-relaxed">
            Senyum manis Nisaa itu persis seperti birunya langit cerah sehabis hujan — selalu berhasil hangatkan hati dan bikin candu setiap hari.
          </p>
          <div className="pt-1 flex flex-wrap items-center justify-between gap-2 border-t border-[#CFE9FF]/60 text-xs text-[#6D3F33]">
            <span className="font-script text-lg sm:text-xl text-[#E06287] font-bold">
              — Dari Abg yang selalu cinta & bangga sama Nisaa
            </span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/90 rounded-full border border-[#E8DCF8] shadow-xs">
              <DaisyFlower size={14} />
              <ChocolateBarIcon size={14} />
              <TeddyBearIcon size={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FlowerIcon: React.FC<{
  size?: number;
  className?: string;
  petalColor?: string;
  centerColor?: string;
}> = ({
  size = 20,
  className = '',
  petalColor = '#9B6FE4',
  centerColor = '#FDE047',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      {/* 5 rounded petals */}
      <circle cx="12" cy="6" r="4.2" fill={petalColor} fillOpacity="0.88" />
      <circle cx="17.7" cy="10.1" r="4.2" fill={petalColor} fillOpacity="0.88" />
      <circle cx="15.5" cy="16.9" r="4.2" fill={petalColor} fillOpacity="0.88" />
      <circle cx="8.5" cy="16.9" r="4.2" fill={petalColor} fillOpacity="0.88" />
      <circle cx="6.3" cy="10.1" r="4.2" fill={petalColor} fillOpacity="0.88" />
      {/* Glowing Stamen Center */}
      <circle cx="12" cy="12" r="2.8" fill={centerColor} />
      <circle cx="12" cy="12" r="1.3" fill="#F59E0B" />
    </svg>
  );
};

export const SakuraBlossom: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 24, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <path
        d="M16 16 C16 11, 13 6, 16 3 C19 6, 16 11, 16 16 Z"
        fill="url(#sakuraGrad1)"
      />
      <path
        d="M16 16 C20.8 14.4, 25.5 14.8, 28.4 12.6 C26.2 15.5, 26.6 20.2, 16 16 Z"
        fill="url(#sakuraGrad2)"
      />
      <path
        d="M16 16 C18.5 20.3, 20.8 24.6, 23.6 24.8 C21.4 26.8, 17.5 23.8, 16 16 Z"
        fill="url(#sakuraGrad1)"
      />
      <path
        d="M16 16 C13.5 20.3, 9.6 23.8, 7.4 24.8 C10.2 24.6, 12.5 20.3, 16 16 Z"
        fill="url(#sakuraGrad2)"
      />
      <path
        d="M16 16 C5.4 20.2, 5.8 15.5, 3.6 12.6 C6.5 14.8, 11.2 14.4, 16 16 Z"
        fill="url(#sakuraGrad1)"
      />
      <circle cx="16" cy="16" r="2.2" fill="#FEF08A" />
      <defs>
        <linearGradient id="sakuraGrad1" x1="16" y1="3" x2="16" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E89FD5" />
          <stop offset="1" stopColor="#B388EB" />
        </linearGradient>
        <linearGradient id="sakuraGrad2" x1="28" y1="12" x2="16" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F4B8E4" />
          <stop offset="1" stopColor="#C599F5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const FloralCornerOrnament: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position = 'top-right', className = '' }) => {
  const rotation = {
    'top-left': '-rotate-90 top-1 left-1',
    'top-right': 'top-1 right-1',
    'bottom-left': 'rotate-180 bottom-1 left-1',
    'bottom-right': 'rotate-90 bottom-1 right-1',
  }[position];

  return (
    <div className={`absolute pointer-events-none select-none z-10 ${rotation} ${className}`}>
      <svg width="42" height="42" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M48 2 C25 2 2 25 2 48"
          stroke="#C599F5"
          strokeWidth="1.5"
          strokeDasharray="2 3"
          strokeOpacity="0.4"
        />
        {/* Blossom */}
        <circle cx="40" cy="10" r="3.5" fill="#E89FD5" fillOpacity="0.6" />
        <circle cx="40" cy="10" r="1.5" fill="#FEF08A" />
        {/* Leaf */}
        <path d="M26 12 C30 8 35 10 32 15 C28 14 26 12 26 12 Z" fill="#A78BFA" fillOpacity="0.35" />
        <path d="M12 26 C8 30 10 35 15 32 C14 28 12 26 12 26 Z" fill="#E89FD5" fillOpacity="0.35" />
        {/* Micro Blossom */}
        <circle cx="10" cy="40" r="3" fill="#B388EB" fillOpacity="0.6" />
        <circle cx="10" cy="40" r="1.2" fill="#FEF08A" />
      </svg>
    </div>
  );
};

export const FluffyCloud: React.FC<{
  width?: number;
  height?: number;
  className?: string;
  opacity?: number;
}> = ({ width = 160, height = 70, className = '', opacity = 0.9 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 160 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 select-none pointer-events-none drop-shadow-[0_8px_18px_rgba(43,108,176,0.12)] ${className}`}
    style={{ opacity }}
  >
    <defs>
      <linearGradient id="cloudGrad" x1="80" y1="0" x2="80" y2="70" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="0.65" stopColor="#F2F8FF" />
        <stop offset="1" stopColor="#D8ECFF" />
      </linearGradient>
    </defs>
    {/* Base pill */}
    <rect x="20" y="32" width="120" height="32" rx="16" fill="url(#cloudGrad)" />
    {/* Puffy cumulus lobes */}
    <circle cx="45" cy="36" r="22" fill="url(#cloudGrad)" />
    <circle cx="75" cy="24" r="24" fill="url(#cloudGrad)" />
    <circle cx="105" cy="30" r="20" fill="url(#cloudGrad)" />
    <circle cx="128" cy="42" r="14" fill="url(#cloudGrad)" />
    {/* Soft sunlight reflection on top edges */}
    <path
      d="M34 30 C43 17, 65 14, 82 19 C90 13, 107 17, 114 26"
      stroke="#FFFFFF"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeOpacity="0.85"
    />
  </svg>
);

export const CloudClusterBackdrop: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`pointer-events-none select-none absolute -z-10 flex items-center justify-center opacity-85 ${className}`}>
    <div className="relative w-[340px] sm:w-[420px] h-[120px]">
      <FluffyCloud width={200} height={85} className="absolute -left-12 -top-4 opacity-90" />
      <FluffyCloud width={240} height={100} className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-95" />
      <FluffyCloud width={190} height={80} className="absolute -right-10 -top-2 opacity-85" />
    </div>
  </div>
);

export const FloatingSkyClouds: React.FC = () => {
  const clouds = useMemo(
    () => [
      { id: 1, y: '5vh', scale: 1.15, duration: 45, delay: 0, opacity: 0.8 },
      { id: 2, y: '20vh', scale: 0.85, duration: 60, delay: 14, opacity: 0.65 },
      { id: 3, y: '42vh', scale: 1.25, duration: 52, delay: 6, opacity: 0.55 },
      { id: 4, y: '65vh', scale: 0.8, duration: 65, delay: 28, opacity: 0.7 },
      { id: 5, y: '82vh', scale: 1.0, duration: 48, delay: 20, opacity: 0.6 },
    ],
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0">
      {clouds.map((c) => (
        <motion.div
          key={c.id}
          initial={{ x: '-240px', y: c.y }}
          animate={{ x: '105vw' }}
          transition={{
            duration: c.duration,
            delay: c.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute"
          style={{ transform: `scale(${c.scale})` }}
        >
          <FluffyCloud opacity={c.opacity} />
        </motion.div>
      ))}
    </div>
  );
};

export const CornerFloralBranch: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position = 'top-right', className = '' }) => {
  const transform = {
    'top-left': '-scale-x-100 top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': '-scale-x-100 scale-y-[-1] bottom-0 left-0',
    'bottom-right': 'scale-y-[-1] bottom-0 right-0',
  }[position];

  return (
    <div className={`pointer-events-none select-none absolute z-15 overflow-visible ${transform} ${className}`}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M120 0 C90 12, 60 10, 40 30 C25 45, 10 70, 0 100" stroke="#6F993E" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="65" cy="20" rx="8" ry="4" transform="rotate(-30 65 20)" fill="#A8C97A" fillOpacity="0.88" />
        <ellipse cx="38" cy="42" rx="7" ry="3.8" transform="rotate(35 38 42)" fill="#7BA845" fillOpacity="0.85" />
        <ellipse cx="18" cy="72" rx="6" ry="3.5" transform="rotate(-20 18 72)" fill="#A8C97A" fillOpacity="0.9" />
        
        {/* Corner White Daisy */}
        <g transform="translate(42, 32) scale(0.8)">
          <circle cx="0" cy="-6" r="3.5" fill="#FFFFFF" />
          <circle cx="5" cy="-3" r="3.5" fill="#FFFFFF" />
          <circle cx="5" cy="3" r="3.5" fill="#FFFFFF" />
          <circle cx="0" cy="6" r="3.5" fill="#FFFFFF" />
          <circle cx="-5" cy="3" r="3.5" fill="#FFFFFF" />
          <circle cx="-5" cy="-3" r="3.5" fill="#FFFFFF" />
          <circle cx="0" cy="0" r="2.8" fill="#FBBF24" />
        </g>
      </svg>
    </div>
  );
};

export const FlowerBouquetBadge: React.FC<{ size?: number; className?: string }> = ({
  size = 46,
  className = '',
}) => {
  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <svg width={size} height={size * 0.72} viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Leaf stems */}
        <path d="M12 28 C18 20, 24 16, 32 18" stroke="#6F993E" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 28 C38 20, 32 16, 24 18" stroke="#6F993E" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="16" cy="18" rx="6" ry="3" transform="rotate(-35 16 18)" fill="#A8C97A" />
        <ellipse cx="40" cy="18" rx="6" ry="3" transform="rotate(35 40 18)" fill="#7BA845" />
        
        {/* Left Daisy */}
        <g transform="translate(18, 22) scale(0.68)">
          <circle cx="0" cy="-6" r="3.5" fill="#FFFFFF" />
          <circle cx="5" cy="-3" r="3.5" fill="#FFFFFF" />
          <circle cx="5" cy="3" r="3.5" fill="#FFFFFF" />
          <circle cx="0" cy="6" r="3.5" fill="#FFFFFF" />
          <circle cx="-5" cy="3" r="3.5" fill="#FFFFFF" />
          <circle cx="-5" cy="-3" r="3.5" fill="#FFFFFF" />
          <circle cx="0" cy="0" r="2.8" fill="#FBBF24" />
        </g>
        {/* Center Big Daisy */}
        <g transform="translate(28, 14)">
          <circle cx="0" cy="-7" r="4" fill="#FFFFFF" />
          <circle cx="6" cy="-3.5" r="4" fill="#FFFFFF" />
          <circle cx="6" cy="3.5" r="4" fill="#FFFFFF" />
          <circle cx="0" cy="7" r="4" fill="#FFFFFF" />
          <circle cx="-6" cy="3.5" r="4" fill="#FFFFFF" />
          <circle cx="-6" cy="-3.5" r="4" fill="#FFFFFF" />
          <circle cx="0" cy="0" r="3.3" fill="#FBBF24" />
        </g>
        {/* Right Daisy */}
        <g transform="translate(38, 22) scale(0.68)">
          <circle cx="0" cy="-6" r="3.5" fill="#FFFFFF" />
          <circle cx="5" cy="-3" r="3.5" fill="#FFFFFF" />
          <circle cx="5" cy="3" r="3.5" fill="#FFFFFF" />
          <circle cx="0" cy="6" r="3.5" fill="#FFFFFF" />
          <circle cx="-5" cy="3" r="3.5" fill="#FFFFFF" />
          <circle cx="-5" cy="-3" r="3.5" fill="#FFFFFF" />
          <circle cx="0" cy="0" r="2.8" fill="#FBBF24" />
        </g>
      </svg>
    </div>
  );
};

interface ParticleItem {
  id: number;
  kind: 'petal' | 'daisy' | 'leaf';
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotate: number;
  color: string;
}

export const FloatingFloralPetals: React.FC = () => {
  const particles: ParticleItem[] = useMemo(() => {
    const colors = [
      '#E89FD5', // Sakura pink
      '#C599F5', // Soft lilac
      '#F4B8E4', // Pastel blush
      '#B388EB', // Dreamy violet
      '#E0B0FF', // Mauve petal
    ];

    return Array.from({ length: 22 }).map((_, i) => {
      const kind: 'petal' | 'daisy' | 'leaf' =
        i % 4 === 0 ? 'daisy' : i % 5 === 0 ? 'leaf' : 'petal';
      return {
        id: i,
        kind,
        x: (i * 4.6 + 3) % 94, // evenly distributed across screen width
        delay: (i * 0.75) % 8,
        duration: 10 + (i % 6) * 2.2,
        size: kind === 'daisy' ? 18 + (i % 3) * 4 : 12 + (i % 4) * 3,
        rotate: i * 38,
        color: colors[i % colors.length],
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none select-none overflow-hidden z-20">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            y: -40,
            x: `${p.x}vw`,
            rotate: p.rotate,
            opacity: 0,
          }}
          animate={{
            y: '105vh',
            x: [`${p.x}vw`, `${p.x + (p.id % 2 === 0 ? 5 : -5)}vw`, `${p.x}vw`],
            rotate: [p.rotate, p.rotate + 180, p.rotate + 360],
            opacity: [0, 0.8, 0.9, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ width: p.size, height: p.size * (p.kind === 'leaf' ? 1.4 : 1.1) }}
          className="absolute"
        >
          {p.kind === 'daisy' ? (
            <DaisyFlower size={p.size} className="drop-shadow-[0_2px_6px_rgba(43,108,176,0.2)]" />
          ) : p.kind === 'leaf' ? (
            <svg viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_2px_4px_rgba(111,153,62,0.25)]">
              <ellipse cx="8" cy="12" rx="6" ry="10" transform="rotate(-15 8 12)" fill="#A8C97A" fillOpacity="0.8" />
              <path d="M8 3 C8 9, 8 15, 8 21" stroke="#6F993E" strokeWidth="0.8" strokeOpacity="0.6" />
            </svg>
          ) : (
            <svg viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_2px_4px_rgba(155,111,228,0.25)]">
              <path
                d="M10 0 C16 4, 20 12, 17 20 C14 26, 6 26, 3 20 C0 12, 4 4, 10 0 Z"
                fill={p.color}
                fillOpacity="0.7"
              />
              <path
                d="M10 4 C11 11, 10 18, 10 22"
                stroke="#FFFFFF"
                strokeWidth="0.8"
                strokeOpacity="0.45"
              />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
};

