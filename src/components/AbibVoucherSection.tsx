import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Gift,
  Coffee,
  CheckCircle2,
  RotateCw,
  Download,
  X,
  MessageCircle,
  Sparkles,
  Shield,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ABIB_SOLO_CARDS } from '../data/content';
import { VoucherState, PhotocardItem } from '../types';
import { generateVoucherTicket, VoucherData } from '../utils/voucherGenerator';
import {
  FlowerIcon,
  SakuraBlossom,
  DaisyFlower,
  ChocolateBarIcon,
  TeddyBearIcon,
  SkybloomBranchDecoration,
  SkybloomLeftBranchDecoration,
} from './FloralAccents';

interface AbibVoucherSectionProps {
  vouchers: VoucherState;
  onClaimVoucher: (type: 'chocolate' | 'hug') => void;
  onNextPage: () => void;
  onPrevPage: () => void;
}

export const AbibVoucherSection: React.FC<AbibVoucherSectionProps> = ({
  vouchers,
  onClaimVoucher,
  onNextPage,
  onPrevPage,
}) => {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [likedCards, setLikedCards] = useState<Record<string, boolean>>({});
  const [floatingHeartId, setFloatingHeartId] = useState<string | null>(null);

  // Modal preview voucher ticket
  const [activeTicketModal, setActiveTicketModal] = useState<{
    dataUrl: string;
    data: VoucherData;
    filename: string;
  } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll while modal is active
  useEffect(() => {
    if (activeTicketModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeTicketModal]);

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

  const getVoucherData = (type: 'chocolate' | 'hug'): VoucherData => {
    const claimDate = new Date().toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    if (type === 'chocolate') {
      return {
        type: 'chocolate',
        title: 'Voucher Coklat & Moodbooster Kuliah',
        subtitle: 'Tiap kali pusing tugas kuliah atau capek kelas, tinggal pilih coklat favorit, Abg yang orderin delivery sampai depan tempat Nisaa! 🍫🌸',
        code: 'CHOC-NISAA-UNLIMITED',
        claimDate,
      };
    }

    return {
      type: 'hug',
      title: 'Voucher Teman Call & Peluk Virtual LDR',
      subtitle: 'Sesi call nemenin ngerjain tugas kuliah tanpa batas waktu plus telinga yang siap dengerin curhat capeknya Nisaa. 🫂🌸',
      code: 'HUG-NISAA-ALWAYS',
      claimDate,
    };
  };

  const openTicketModal = (type: 'chocolate' | 'hug') => {
    const data = getVoucherData(type);
    const dataUrl = generateVoucherTicket(data);
    const filename =
      type === 'chocolate'
        ? 'Voucher-Coklat-Khusus-Nisaa.png'
        : 'Voucher-Peluk-Khusus-Nisaa.png';

    setActiveTicketModal({
      dataUrl,
      data,
      filename,
    });
  };

  const handleChocolateClaim = () => {
    if (!vouchers.chocolateClaimed) {
      onClaimVoucher('chocolate');
    }

    confetti({
      particleCount: 55,
      spread: 80,
      origin: { y: 0.7, x: 0.5 },
      colors: ['#7F4CD1', '#9B6FE4', '#D870B8', '#FCEEF6', '#FDE047'],
      shapes: ['circle'],
      scalar: 1.2,
    });

    setTimeout(() => {
      openTicketModal('chocolate');
    }, 450);
  };

  const handleHugClaim = () => {
    if (!vouchers.hugClaimed) {
      onClaimVoucher('hug');
    }

    confetti({
      particleCount: 55,
      spread: 80,
      origin: { y: 0.7, x: 0.5 },
      colors: ['#D870B8', '#E89FD5', '#9B6FE4', '#C084FC', '#FDE047'],
      shapes: ['circle'],
      scalar: 1.2,
    });

    setTimeout(() => {
      openTicketModal('hug');
    }, 450);
  };

  const handleDownloadTicket = () => {
    if (!activeTicketModal) return;
    const link = document.createElement('a');
    link.download = activeTicketModal.filename;
    link.href = activeTicketModal.dataUrl;
    link.click();
  };

  return (
    <div className="relative w-full min-h-[750px] py-8 px-4 flex flex-col justify-between select-none overflow-hidden">
      {/* Decorative Skybloom White Daisy Branch in Background Top Corner */}
      <SkybloomBranchDecoration opacity={0.65} />

      <div className="space-y-7 relative z-10">
        {/* Header Bagian 3 */}
        <div className="space-y-2 px-1">
          <div className="flex items-center gap-2">
            <span className="h-[1.5px] w-6 bg-[#5DA9FF]/50" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-extrabold text-[#2B6CB0]">
              KOMITMEN & VOUCHER KASIH SAYANG
            </span>
            <span className="h-[1.5px] w-6 bg-[#5DA9FF]/50" />
          </div>

          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2">
              <DaisyFlower size={24} />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1A4D80] leading-tight">
                Janji & Voucher Khusus Nisaa
              </h2>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-[#2B6CB0] border border-[#CFE9FF] shadow-xs shrink-0">
              <Shield size={13} className="text-[#5DA9FF]" />
              <span>Jaminan Abg</span>
            </div>
          </div>
          <p className="text-sm sm:text-base text-[#4A6482] leading-relaxed">
            Klaim voucher kasih sayang, cokelat moodbooster & boneka peluk virtual dari Abg untuk Nisaa Cintakuu.
          </p>
        </div>

        {/* 4 Photocard Abg */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-lg font-bold text-[#28163E] flex items-center gap-1.5">
              <SakuraBlossom size={16} />
              <span>Komitmen Abg Buat Nisaa</span>
            </h3>
            <span className="text-[13px] text-[#8E76A8]">
              Ketuk untuk baca janji
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            {ABIB_SOLO_CARDS.map((card: PhotocardItem) => {
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
                          aria-label="Suka Kartu Abg"
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
                          aria-label="Balik Kartu Abg"
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
                          <FlowerIcon size={12} petalColor="#9B6FE4" />
                          <span>JANJI SETIA ABG</span>
                        </div>
                        <div className="text-[11px] sm:text-[12px] font-bold text-[#8E76A8]">
                          NO. #{card.cardNo}
                        </div>
                      </div>

                      <div className="my-auto py-1">
                        <p className="text-xs sm:text-sm font-bold text-[#28163E] leading-snug line-clamp-4">
                          "{card.backNote}"
                        </p>
                      </div>

                      <div className="pt-1 flex items-center justify-between text-[11px] text-[#8E76A8] shrink-0">
                        <span>{card.tag}</span>
                        <span className="font-semibold text-[#9B6FE4]">Ketuk foto</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 2 Official Vouchers */}
        <div className="space-y-3.5">
          {/* Voucher 1: Moodbooster Chocolate */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative bg-white/95 backdrop-blur-xl rounded-[28px] p-5.5 overflow-hidden border border-[#E8DCF8] shadow-[0_10px_28px_rgba(155,111,228,0.12)]"
          >
            {/* Cutout notches */}
            <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-[#F5F0FB] border-r border-[#E8DCF8]" />
            <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-[#F5F0FB] border-l border-[#E8DCF8]" />

            <div className="space-y-3.5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-[11px] sm:text-[12px] font-bold text-[#7F4CD1] bg-[#F5F0FB] px-2.5 py-0.5 rounded-full border border-[#EAE1FA]">
                  KODE: CHOC-NISAA-UNLIMITED
                </span>
                <span className="px-3 py-0.5 rounded-full bg-[#FCEEF6] text-[11px] sm:text-[12px] font-bold text-[#BE4B9B] border border-[#F3B8DF]/50">
                  Anti Expired
                </span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#3D231E] to-[#7A4839] text-white flex items-center justify-center shrink-0 shadow-md">
                  <ChocolateBarIcon size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#1A4D80] leading-tight">
                    Voucher Cokelat Moodbooster Kuliah 🍫
                  </h4>
                  <p className="text-sm text-[#4A6482] leading-relaxed">
                    Tiap kali pusing tugas kuliah atau capek kelas, tinggal pilih coklat favorit, Abg yang orderin delivery sampai depan tempat Nisaa!
                  </p>
                </div>
              </div>

              <div className="pt-1">
                {vouchers.chocolateClaimed ? (
                  <div className="space-y-2">
                    <div className="w-full py-2.5 px-4 rounded-full bg-[#F5F0FB] text-[#7F4CD1] font-semibold text-[13px] flex items-center justify-center gap-1.5 border border-[#EAE1FA]">
                      <CheckCircle2 size={15} className="text-[#9B6FE4]" />
                      <span>Voucher Sudah Terklaim Khusus Nisaa</span>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      onClick={() => openTicketModal('chocolate')}
                      className="w-full py-3 px-5 rounded-full bg-[#28163E] text-[#FCEEF6] hover:text-white font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md transition-colors"
                    >
                      <Download size={16} />
                      <span>Lihat & Download Tiket Foto PNG</span>
                    </motion.button>
                  </div>
                ) : (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleChocolateClaim}
                    className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#8E5BE2] via-[#9B6FE4] to-[#D870B8] text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-[0_8px_20px_rgba(155,111,228,0.28)] hover:opacity-95 transition-opacity"
                  >
                    <Gift size={16} className="text-[#FCEEF6]" />
                    <span>Klaim & Dapatkan Tiket Foto</span>
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Voucher 2: Warm Hug */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative bg-white/95 backdrop-blur-xl rounded-[28px] p-5.5 overflow-hidden border border-[#E8DCF8] shadow-[0_10px_28px_rgba(155,111,228,0.12)]"
          >
            <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-[#F5F0FB] border-r border-[#E8DCF8]" />
            <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-[#F5F0FB] border-l border-[#E8DCF8]" />

            <div className="space-y-3.5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-[11px] sm:text-[12px] font-bold text-[#BE4B9B] bg-[#FCEEF6] px-2.5 py-0.5 rounded-full border border-[#F3B8DF]/50">
                  KODE: HUG-NISAA-ALWAYS
                </span>
                <span className="px-3 py-0.5 rounded-full bg-[#F5F0FB] text-[11px] sm:text-[12px] font-bold text-[#7F4CD1] border border-[#EAE1FA]">
                  Prioritas Utama
                </span>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#2B6CB0] via-[#5DA9FF] to-[#E06287] text-white flex items-center justify-center shrink-0 shadow-md">
                  <TeddyBearIcon size={24} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#1A4D80] leading-tight">
                    Voucher Boneka Peluk & Teman Call LDR 🧸🌸
                  </h4>
                  <p className="text-sm text-[#4A6482] leading-relaxed">
                    Sesi call nemenin ngerjain tugas kuliah kapan pun Nisaa butuh, dengerin curhat dosen, atau sekadar lepas kangen dan capek seharian.
                  </p>
                </div>
              </div>

              <div className="pt-1">
                {vouchers.hugClaimed ? (
                  <div className="space-y-2">
                    <div className="w-full py-2.5 px-4 rounded-full bg-[#FCEEF6] text-[#BE4B9B] font-semibold text-[13px] flex items-center justify-center gap-1.5 border border-[#F3B8DF]/50">
                      <CheckCircle2 size={15} className="text-[#D870B8]" />
                      <span>Voucher Sudah Terklaim Khusus Nisaa</span>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      onClick={() => openTicketModal('hug')}
                      className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#D870B8] to-[#9B6FE4] text-white hover:opacity-95 font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md transition-opacity"
                    >
                      <Download size={16} />
                      <span>Lihat & Download Tiket Foto PNG</span>
                    </motion.button>
                  </div>
                ) : (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleHugClaim}
                    className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#D870B8] via-[#E89FD5] to-[#9B6FE4] text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-[0_8px_20px_rgba(216,112,184,0.3)] hover:opacity-95 transition-opacity"
                  >
                    <Heart size={16} fill="#FFFFFF" />
                    <span>Klaim & Dapatkan Tiket Foto</span>
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ticket Download & Preview Modal via React Portal */}
      {mounted &&
        typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {activeTicketModal && (
              <motion.div
                key="ticket-modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md select-none"
                onClick={() => setActiveTicketModal(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 15 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 15 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-[380px] max-h-[92vh] overflow-y-auto bg-white/95 backdrop-blur-2xl rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 space-y-4 border border-[#CFE9FF] shadow-[0_25px_60px_rgba(43,108,176,0.3)]"
                >
                  {/* Modal Header */}
                  <div className="flex items-center justify-between pb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#EAF4FE] text-[#2B6CB0] flex items-center justify-center border border-[#CFE9FF]">
                        <Sparkles size={16} />
                      </div>
                      <div>
                        <h3 className="font-serif text-base font-bold text-[#1A4D80] leading-tight">
                          Tiket Resmi Khusus Nisaa
                        </h3>
                        <p className="text-[12px] text-[#4A6482]">
                          Berlaku seumur hidup, siap ditagih kapan pun 🌸
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveTicketModal(null)}
                      className="w-8 h-8 rounded-full bg-[#F4F9FD] hover:bg-[#EAF4FE] text-[#1A4D80] hover:text-[#2B6CB0] border border-[#CFE9FF] flex items-center justify-center transition-colors cursor-pointer shadow-xs shrink-0"
                      aria-label="Tutup"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* Ticket Image Preview */}
                  <div className="rounded-2xl overflow-hidden bg-[#F4F9FD] p-1.5 border border-[#CFE9FF] shadow-inner">
                    <img
                      src={activeTicketModal.dataUrl}
                      alt="Tiket Voucher Resmi Khusus Nisaa Cintakuu"
                      className="w-full h-auto block rounded-xl shadow-sm"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2.5 pt-1">
                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      onClick={handleDownloadTicket}
                      className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#2B6CB0] via-[#5DA9FF] to-[#D870B8] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(43,108,176,0.3)] hover:opacity-95 transition-all cursor-pointer"
                    >
                      <Download size={18} className="text-[#FCEEF6]" />
                      <span>Download Foto Tiket PNG</span>
                    </motion.button>

                    <a
                      href={`https://wa.me/6285133933560?text=${encodeURIComponent(
                        `Bg, aku sudah klaim tiket resmi khusus Nisaa Cintakuu: "${activeTicketModal.data.title}". Ini bukti tiketnya, siap-siap ditagih yaa! Sumpah senyumku buat kamu terus kok 🌸`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-5 rounded-full bg-[#F4F9FD] text-[#2B6CB0] border border-[#CFE9FF] hover:bg-[#EAF4FE] font-bold text-sm flex items-center justify-center gap-2 transition-colors text-center"
                    >
                      <MessageCircle size={17} />
                      <span>Kirim & Tagih ke WhatsApp Abg</span>
                    </a>
                  </div>

                  <p className="text-center text-[12px] text-[#6D3F33] italic">
                    Tiket ini adalah dokumen cinta resmi yang mengikat Abg untuk selalu memanjakan dan menyemangati Nisaa yang lagi capek kuliah sampai nanti kita ketemu langsung.
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

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
          <span>Pesan Terakhir Abg</span>
          <ArrowRight size={18} className="text-[#FCEEF6]" />
        </motion.button>
      </div>
    </div>
  );
};
