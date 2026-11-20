import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, RotateCw, Volume2, VolumeX, Play, Pause, X, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { ANGGI_SOLO_CARDS } from '../data/content';
import { PhotocardItem } from '../types';
import {
  FlowerIcon,
  SakuraBlossom,
  DaisyFlower,
  ChocolateBarIcon,
  TeddyBearIcon,
  SkybloomBranchDecoration,
  SkybloomLeftBranchDecoration,
  CornerFloralBranch,
  CloudClusterBackdrop,
  FlowerBouquetBadge,
} from './FloralAccents';

interface PhotocardBinderProps {
  onNextPage: () => void;
  onPrevPage: () => void;
}

export const PhotocardBinder: React.FC<PhotocardBinderProps> = ({
  onNextPage,
  onPrevPage,
}) => {
  const [selectedCard, setSelectedCard] = useState<PhotocardItem | null>(null);
  const [flippedMap, setFlippedMap] = useState<Record<string, boolean>>({});
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [totalLikes, setTotalLikes] = useState(ANGGI_SOLO_CARDS.length);
  const [floatingHeartId, setFloatingHeartId] = useState<string | null>(null);

  // Modal Video controls
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [modalFlipped, setModalFlipped] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll while modal is active
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCard]);

  // Keyboard navigation for modal
  useEffect(() => {
    if (!selectedCard) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        const currentIndex = ANGGI_SOLO_CARDS.findIndex((c) => c.id === selectedCard.id);
        const nextIndex = (currentIndex + 1) % ANGGI_SOLO_CARDS.length;
        setSelectedCard(ANGGI_SOLO_CARDS[nextIndex]);
        setModalFlipped(false);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = ANGGI_SOLO_CARDS.findIndex((c) => c.id === selectedCard.id);
        const prevIndex = (currentIndex - 1 + ANGGI_SOLO_CARDS.length) % ANGGI_SOLO_CARDS.length;
        setSelectedCard(ANGGI_SOLO_CARDS[prevIndex]);
        setModalFlipped(false);
      } else if (e.key === 'Escape') {
        setSelectedCard(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCard]);

  const toggleCardFlip = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFlippedMap((prev) => ({ ...prev, [id]: !prev[id] }));
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate?.(10);
    }
  };

  const handleHeartClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const wasLiked = likedMap[id];
    setLikedMap((prev) => ({ ...prev, [id]: !wasLiked }));
    setTotalLikes((prev) => (wasLiked ? prev - 1 : prev + 1));
    setFloatingHeartId(id);

    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate?.(12);
    }

    setTimeout(() => {
      setFloatingHeartId(null);
    }, 900);
  };

  const openModal = (card: PhotocardItem) => {
    setSelectedCard(card);
    setModalFlipped(false);
    setIsPlaying(true);
    setIsMuted(true);
  };

  const nextModalCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCard) return;
    const currentIndex = ANGGI_SOLO_CARDS.findIndex((c) => c.id === selectedCard.id);
    const nextIndex = (currentIndex + 1) % ANGGI_SOLO_CARDS.length;
    setSelectedCard(ANGGI_SOLO_CARDS[nextIndex]);
    setModalFlipped(false);
  };

  const prevModalCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedCard) return;
    const currentIndex = ANGGI_SOLO_CARDS.findIndex((c) => c.id === selectedCard.id);
    const prevIndex = (currentIndex - 1 + ANGGI_SOLO_CARDS.length) % ANGGI_SOLO_CARDS.length;
    setSelectedCard(ANGGI_SOLO_CARDS[prevIndex]);
    setModalFlipped(false);
  };

  const toggleModalPlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleModalMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="relative w-full min-h-[750px] py-8 px-4 flex flex-col justify-between select-none overflow-hidden">
      {/* Decorative Skybloom White Daisy Branch in Background Top Corner */}
      <SkybloomBranchDecoration opacity={0.65} />

      <div className="space-y-6 relative z-10">
        {/* Header Bagian 1 */}
        <div className="space-y-2 px-1">
          <div className="flex items-center gap-2">
            <span className="h-[1.5px] w-6 bg-[#5DA9FF]/50" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-extrabold text-[#2B6CB0]">
              DOKUMENTASI MANIS NISAA
            </span>
            <span className="h-[1.5px] w-6 bg-[#5DA9FF]/50" />
          </div>

          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2">
              <DaisyFlower size={24} />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1A4D80] leading-tight">
                Senyum Candu & Koleksi
              </h2>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-[#2B6CB0] border border-[#CFE9FF] shadow-xs shrink-0">
              <Heart size={13} fill="#E06287" className="text-[#E06287]" />
              <span>{totalLikes} Suka</span>
            </div>
          </div>
          <p className="text-sm sm:text-base text-[#4A6482] leading-relaxed">
            Kumpulan foto dan video manis kiriman Nisaa dengan rasio  penuh. Senyumnya beneran bikin candu banget dan selalu jadi penyemangat hari-hari Abg dari jauh! 💕
          </p>
        </div>

        {/* Anggi Photocards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {ANGGI_SOLO_CARDS.map((card) => {
            const isFlipped = !!flippedMap[card.id];
            const isLiked = !!likedMap[card.id];

            return (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openModal(card)}
                className="relative rounded-[24px] bg-white/95 backdrop-blur-md p-2.5 flex flex-col justify-between cursor-pointer select-none overflow-hidden border border-[#E8DCF8] shadow-[0_8px_20px_rgba(155,111,228,0.1)] hover:shadow-[0_12px_28px_rgba(155,111,228,0.18)] transition-all"
              >
                {/* Photocard Front / Back */}
                {!isFlipped ? (
                  <div className="relative w-full h-full flex flex-col justify-between">
                    {/* Media Display - Locked  (720x1279) Ratio */}
                    <div
                      className="relative w-full aspect-[9/16] rounded-[18px] overflow-hidden bg-[#28163E] shrink-0"
                      style={{ aspectRatio: '9 / 16' }}
                    >
                      {card.type === 'video' ? (
                        <video
                          src={card.src}
                          playsInline
                          webkit-playsinline="true"
                          muted
                          autoPlay
                          loop
                          preload="metadata"
                          className="w-full h-full object-cover pointer-events-none"
                        />
                      ) : (
                        <img
                          src={card.src}
                          alt={card.title}
                          className="w-full h-full object-cover pointer-events-none"
                          loading="lazy"
                        />
                      )}

                      {/* Holo Stamp Badge */}
                      <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#28163E]/85 backdrop-blur-sm text-[#FFFFFF] text-[12px] font-bold rounded-full">
                        #{card.cardNo}
                      </div>

                      {/* Love Tap Button */}
                      <button
                        onClick={(e) => handleHeartClick(card.id, e)}
                        aria-label="Suka Photocard"
                        className="absolute bottom-2 right-2 p-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#9B6FE4] shadow-sm cursor-pointer"
                      >
                        <Heart
                          size={15}
                          fill={isLiked ? '#9B6FE4' : 'transparent'}
                        />
                      </button>

                      {/* Double tap pop heart */}
                      <AnimatePresence>
                        {floatingHeartId === card.id && (
                          <motion.div
                            initial={{ scale: 0.4, opacity: 1 }}
                            animate={{ scale: 1.8, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="absolute inset-0 flex items-center justify-center pointer-events-none text-[#9B6FE4]"
                          >
                            <Heart size={54} fill="#9B6FE4" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-2 px-1 flex items-center justify-between shrink-0">
                      <div className="truncate pr-1">
                        <div className="text-[12px] sm:text-[13px] font-bold text-[#28163E] truncate leading-tight">
                          {card.title}
                        </div>
                        <div className="text-[11px] sm:text-[12px] text-[#8E76A8] leading-tight mt-0.5">
                          {card.date}
                        </div>
                      </div>

                      {/* Flip Button */}
                      <button
                        onClick={(e) => toggleCardFlip(card.id, e)}
                        aria-label="Balik Photocard"
                        className="p-1 rounded-full text-[#8E76A8] hover:text-[#9B6FE4] transition-colors cursor-pointer shrink-0"
                        title="Balik Kartu"
                      >
                        <RotateCw size={14} />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Photocard Back Side */
                  <div
                    onClick={(e) => toggleCardFlip(card.id, e)}
                    className="relative w-full aspect-[9/16] rounded-[18px] bg-gradient-to-br from-[#F5F0FB] via-[#FCEEF6] to-[#F5F0FB] border border-[#EAE1FA] p-3 flex flex-col justify-between text-center overflow-hidden"
                    style={{ aspectRatio: '9 / 16' }}
                  >
                    <div className="space-y-0.5 shrink-0">
                      <div className="inline-flex items-center gap-1 text-[11px] sm:text-[12px] font-bold text-[#7F4CD1]">
                        <FlowerIcon size={12} petalColor="#D870B8" />
                        <span>KARTU RESMI NISAA</span>
                      </div>
                      <div className="text-[11px] sm:text-[12px] font-bold text-[#8E76A8]">
                        NO. {card.cardNo} / {ANGGI_SOLO_CARDS.length}
                      </div>
                    </div>

                    <div className="my-auto py-1">
                      <p className="text-xs sm:text-sm font-bold text-[#28163E] leading-snug line-clamp-4">
                        "{card.backNote}"
                      </p>
                    </div>

                    <div className="pt-1 flex items-center justify-between text-[11px] text-[#8E76A8] shrink-0">
                      <span className="truncate">{card.tag}</span>
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
          <span>Lanjut ke Doa & Semangat Kuliah</span>
          <ArrowRight size={18} className="text-[#FCEEF6]" />
        </motion.button>
      </div>

      {/* Fullscreen Modal View via React Portal to document.body */}
      {mounted &&
        typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {selectedCard && (
              <motion.div
                key="photocard-modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md select-none"
                onClick={() => setSelectedCard(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 15 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 15 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative bg-white/95 backdrop-blur-2xl rounded-[28px] sm:rounded-[32px] border border-[#CFE9FF] shadow-[0_25px_60px_rgba(43,108,176,0.3)] flex flex-col items-center overflow-hidden max-h-[92vh] max-w-[94vw]"
                >
                  {/* Modal Top Nav Bar */}
                  <div className="w-full px-4 pt-3.5 pb-2.5 flex items-center justify-between shrink-0 border-b border-[#CFE9FF]/50 bg-white/75 backdrop-blur-md gap-3">
                    {/* Counter Pill */}
                    <div className="flex items-center gap-1 bg-[#F4F9FD] px-2 py-1 rounded-full border border-[#CFE9FF] shadow-xs">
                      <button
                        onClick={prevModalCard}
                        aria-label="Sebelumnya"
                        className="p-1 rounded-full text-[#2B6CB0] hover:bg-[#EAF4FE] transition-colors cursor-pointer"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <span className="text-xs font-bold text-[#1A4D80] px-1.5 whitespace-nowrap">
                        {selectedCard.cardNo} / {ANGGI_SOLO_CARDS.length}
                      </span>
                      <button
                        onClick={nextModalCard}
                        aria-label="Berikutnya"
                        className="p-1 rounded-full text-[#2B6CB0] hover:bg-[#EAF4FE] transition-colors cursor-pointer"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>

                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedCard(null)}
                      aria-label="Tutup Modal"
                      className="w-8 h-8 rounded-full bg-[#F4F9FD] hover:bg-[#EAF4FE] text-[#1A4D80] hover:text-[#2B6CB0] border border-[#CFE9FF] flex items-center justify-center transition-colors cursor-pointer shadow-xs shrink-0"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* Modal Media Showcase Container */}
                  <div className="p-3 sm:p-3.5 flex items-center justify-center">
                    {!modalFlipped ? (
                      <div
                        className="relative rounded-[20px] overflow-hidden bg-[#1A4D80] border border-[#CFE9FF] shadow-sm flex items-center justify-center"
                        style={{
                          height: 'min(48vh, 420px)',
                          width: 'calc(min(48vh, 420px) * 9 / 16)',
                          aspectRatio: '9 / 16',
                        }}
                      >
                        {selectedCard.type === 'video' ? (
                          <>
                            <video
                              ref={videoRef}
                              src={selectedCard.src}
                              playsInline
                              webkit-playsinline="true"
                              muted={isMuted}
                              autoPlay
                              loop
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                              <button
                                onClick={toggleModalPlay}
                                aria-label="Putar atau Jeda"
                                className="p-2 rounded-full bg-[#1A4D80]/85 backdrop-blur-md text-white cursor-pointer hover:bg-[#2B6CB0] transition-colors"
                              >
                                {isPlaying ? <Pause size={15} /> : <Play size={15} />}
                              </button>
                              <button
                                onClick={toggleModalMute}
                                aria-label="Bunyikan atau Bisukan"
                                className="p-2 rounded-full bg-[#1A4D80]/85 backdrop-blur-md text-white cursor-pointer hover:bg-[#2B6CB0] transition-colors"
                              >
                                {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                              </button>
                            </div>
                          </>
                        ) : (
                          <img
                            src={selectedCard.src}
                            alt={selectedCard.title}
                            className="w-full h-full object-cover"
                          />
                        )}

                        <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-[#1A4D80]/85 backdrop-blur-md text-white text-[11px] font-bold rounded-full border border-white/20 whitespace-nowrap">
                          PC #{selectedCard.cardNo} • {selectedCard.tag}
                        </div>
                      </div>
                    ) : (
                      /* Modal Back Side */
                      <div
                        className="relative rounded-[20px] bg-gradient-to-br from-[#F4F9FD] via-[#FFF5F8] to-[#FDF6EE] border border-[#CFE9FF] p-4 sm:p-5 flex flex-col justify-between text-center shadow-sm"
                        style={{
                          height: 'min(48vh, 420px)',
                          width: 'calc(min(48vh, 420px) * 9 / 16)',
                          aspectRatio: '9 / 16',
                        }}
                      >
                        <div className="space-y-1">
                          <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2B6CB0]">
                            <DaisyFlower size={14} />
                            <span>OFFICIAL PHOTOCARD NISAA</span>
                          </div>
                          <div className="text-[11px] font-bold text-[#6D3F33]">
                            NO. {selectedCard.cardNo} / {ANGGI_SOLO_CARDS.length}
                          </div>
                        </div>

                        <div className="my-auto py-2">
                          <p className="font-serif italic text-sm sm:text-base font-bold text-[#1A4D80] leading-relaxed">
                            "{selectedCard.backNote}"
                          </p>
                        </div>

                        <div className="pt-2 text-[10px] text-[#4A6482] flex items-center justify-center gap-1">
                          <TeddyBearIcon size={13} />
                          <span>Ditulis tulus oleh Abg buat Nisaa cintakuu</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Modal Card Info & Flip Action */}
                  <div className="w-full px-4 pt-2.5 pb-4 border-t border-[#CFE9FF]/50 bg-white/75 backdrop-blur-md space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-serif text-sm sm:text-base font-bold text-[#1A4D80] truncate max-w-[160px] sm:max-w-[200px]">
                        {selectedCard.title}
                      </h3>
                      <button
                        onClick={() => setModalFlipped(!modalFlipped)}
                        className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[#EAF4FE] text-[#2B6CB0] border border-[#CFE9FF] text-xs font-bold cursor-pointer hover:bg-[#CFE9FF]/50 transition-colors shrink-0"
                      >
                        <RotateCw size={12} />
                        <span>{modalFlipped ? 'Lihat Foto' : 'Balik Kartu'}</span>
                      </button>
                    </div>
                    <div className="text-[11px] text-[#6D3F33] font-medium truncate">
                      {selectedCard.date} • Koleksi #{selectedCard.cardNo} dari {ANGGI_SOLO_CARDS.length}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
};
