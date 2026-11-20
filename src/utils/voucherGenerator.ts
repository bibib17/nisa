export interface VoucherData {
  type: 'chocolate' | 'hug';
  title: string;
  subtitle: string;
  code: string;
  claimDate: string;
}

/**
 * Draws a cute mini heart on 2D canvas
 */
function drawHeart(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  color: string
) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  const topCurveHeight = size * 0.3;
  ctx.moveTo(x, y + topCurveHeight);
  // Top left curve
  ctx.bezierCurveTo(
    x,
    y,
    x - size / 2,
    y,
    x - size / 2,
    y + topCurveHeight
  );
  // Bottom left curve
  ctx.bezierCurveTo(
    x - size / 2,
    y + (size + topCurveHeight) / 2,
    x,
    y + (size + topCurveHeight) / 1.5,
    x,
    y + size
  );
  // Bottom right curve
  ctx.bezierCurveTo(
    x,
    y + (size + topCurveHeight) / 1.5,
    x + size / 2,
    y + (size + topCurveHeight) / 2,
    x + size / 2,
    y + topCurveHeight
  );
  // Top right curve
  ctx.bezierCurveTo(
    x + size / 2,
    y,
    x,
    y,
    x,
    y + topCurveHeight
  );
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

/**
 * Draws a dainty 5-petal flower on 2D canvas
 */
function drawFlower(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  petalColor: string,
  centerColor: string = '#FEF08A'
) {
  ctx.save();
  ctx.fillStyle = petalColor;
  for (let i = 0; i < 5; i++) {
    const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
    const px = x + Math.cos(angle) * radius;
    const py = y + Math.sin(angle) * radius;
    ctx.beginPath();
    ctx.arc(px, py, radius * 0.65, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = centerColor;
  ctx.beginPath();
  ctx.arc(x, y, radius * 0.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

/**
 * Draws text with automatic line-wrapping to prevent overflowing ticket bounds
 */
function drawWrappedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  maxLines: number = 3
): number {
  const words = text.split(' ');
  let line = '';
  let currentY = y;
  let linesCount = 0;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const testWidth = ctx.measureText(testLine).width;
    if (testWidth > maxWidth && n > 0) {
      linesCount++;
      if (linesCount >= maxLines) {
        ctx.fillText(line.trim() + '...', x, currentY);
        return currentY;
      }
      ctx.fillText(line.trim(), x, currentY);
      line = words[n] + ' ';
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, currentY);
  return currentY;
}

export function generateVoucherTicket(data: VoucherData): string {
  const canvas = document.createElement('canvas');
  // High resolution for retina clarity
  const scale = 2;
  const w = 840;
  const h = 480;
  canvas.width = w * scale;
  canvas.height = h * scale;

  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  ctx.scale(scale, scale);

  const isChoc = data.type === 'chocolate';
  const primaryColor = isChoc ? '#7F4CD1' : '#D870B8';
  const accentColor = isChoc ? '#9B6FE4' : '#E89FD5';
  const bgLavender = '#F5F0FB';

  // 1. Background fill with soft lavender
  ctx.fillStyle = bgLavender;
  ctx.fillRect(0, 0, w, h);

  // 2. Ticket Base Card
  const mx = 24;
  const my = 24;
  const tw = w - mx * 2;
  const th = h - my * 2;
  const r = 24;

  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.roundRect(mx, my, tw, th, r);
  ctx.fill();

  // Subtle border
  ctx.strokeStyle = '#E8DCF8';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // 3. Ticket Left & Right Notches (Ticket cutout semicircles)
  const notchRadius = 20;
  const notchY = h / 2;

  ctx.fillStyle = bgLavender;
  ctx.beginPath();
  ctx.arc(mx, notchY, notchRadius, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(w - mx, notchY, notchRadius, 0, Math.PI * 2);
  ctx.fill();

  // 4. Left Accent Color Strip
  ctx.fillStyle = primaryColor;
  ctx.beginPath();
  ctx.roundRect(mx, my, 16, th, [r, 0, 0, r]);
  ctx.fill();

  // 5. Exclusivity Banner Header
  ctx.fillStyle = primaryColor;
  ctx.font = 'bold 13px system-ui, -apple-system, sans-serif';
  ctx.fillText('VOUCHER RESMI · EKSKLUSIF KHUSUS NISAA CINTAKUU', mx + 46, my + 38);

  // Little decorative flower next to header
  drawFlower(ctx, mx + 30, my + 34, 6, accentColor);
  drawFlower(ctx, w - mx - 40, my + 34, 6, accentColor);

  ctx.fillStyle = '#6434AD';
  ctx.font = '600 12px system-ui, -apple-system, sans-serif';
  ctx.fillText('DITERBITKAN OLEH: ABIB (ABG)', mx + 46, my + 56);

  // 6. Voucher Title (Auto-wrapped, limited to 510px so it stays clear of stamp)
  ctx.fillStyle = '#28163E';
  ctx.font = 'bold 20px system-ui, -apple-system, sans-serif';
  const afterTitleY = drawWrappedText(ctx, data.title, mx + 46, my + 92, 510, 26, 2);

  // 7. Subtitle / Romantic Commitment (Auto-wrapped, limited to 510px)
  ctx.fillStyle = '#5C4478';
  ctx.font = '13.5px system-ui, -apple-system, sans-serif';
  drawWrappedText(ctx, data.subtitle, mx + 46, afterTitleY + 24, 510, 19, 2);

  // 8. Dashed Perforated Tear Line
  ctx.strokeStyle = '#D8C7F5';
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(mx + 36, my + 180);
  ctx.lineTo(w - mx - 36, my + 180);
  ctx.stroke();
  ctx.setLineDash([]); // Reset line dash

  // 9. Details Grid (Recipient, Issuer, Validity)
  const col1X = mx + 46;
  const col2X = mx + 240;
  const col3X = mx + 530;

  ctx.fillStyle = '#8E76A8';
  ctx.font = 'bold 11px system-ui, -apple-system, sans-serif';
  ctx.fillText('PENERIMA RESMI:', col1X, my + 215);
  ctx.fillText('MASA BERLAKU:', col2X, my + 215);
  ctx.fillText('TANGGAL KLAIM:', col3X, my + 215);

  ctx.fillStyle = '#28163E';
  ctx.font = 'bold 14.5px system-ui, -apple-system, sans-serif';
  ctx.fillText('Nisaa Cintakuu', col1X, my + 238);
  ctx.fillText(
    data.type === 'chocolate' ? 'Waktu Ketemu Langsung' : 'Seumur Hidup (Anti Expired)',
    col2X,
    my + 238
  );
  ctx.fillText(data.claimDate, col3X, my + 238);

  // 10. Syarat & Ketentuan Romantis (Auto-wrapped so it stays safely within ticket margins)
  ctx.fillStyle = '#5C4478';
  ctx.font = 'italic 12.5px system-ui, -apple-system, sans-serif';
  const termsText =
    data.type === 'chocolate'
      ? 'Syarat: Tunjukkan tiket ini pas kita ketemu langsung nanti. Siap ditraktir cokelat favorit & jalan bareng seharian! 🍫🌸'
      : 'Syarat: Cukup kirimkan tiket ini ke WhatsApp Abg (0851-3393-3560). Siap diorderin delivery & ditemenin 24/7! 🌸';
  drawWrappedText(ctx, termsText, mx + 46, my + 282, 680, 18, 2);

  // 11. Official Stamp Circle on Right
  const stampX = w - mx - 105;
  const stampY = my + 102;
  ctx.save();
  ctx.translate(stampX, stampY);
  ctx.rotate(-0.14);

  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 0, 52, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, 0, 46, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = accentColor;
  ctx.font = 'bold 11px system-ui, -apple-system, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('· KHUSUS NISAA ·', 0, -20);
  ctx.font = 'bold 13px system-ui, -apple-system, sans-serif';
  ctx.fillText('100% ASLI', 0, 0);
  ctx.font = 'bold 10px system-ui, -apple-system, sans-serif';
  ctx.fillText('DIJAMIN ABG', 0, 20);

  ctx.restore();

  // 12. Bottom Barcode & Ticket Code
  ctx.fillStyle = '#8E76A8';
  ctx.font = 'bold 12px system-ui, -apple-system, sans-serif';
  ctx.fillText(`KODE RESMI: ${data.code}`, mx + 50, my + 330);

  // Draw simulated barcode lines
  ctx.fillStyle = '#28163E';
  const barX = mx + 50;
  const barY = my + 346;
  const barW = 260;
  const barH = 34;

  const barPattern = [
    3, 1, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3, 2, 1, 4, 1, 2, 3, 1, 2, 4, 1, 3, 2, 1,
    4, 2, 1, 3, 2, 1, 4, 1, 3, 2, 1, 2, 4, 1, 3, 2,
  ];
  let curX = barX;
  barPattern.forEach((wVal, idx) => {
    if (idx % 2 === 0) {
      ctx.fillRect(curX, barY, wVal * 1.5, barH);
    }
    curX += wVal * 1.5 + 1.5;
  });

  // Return Base64 data URL
  return canvas.toDataURL('image/png');
}
