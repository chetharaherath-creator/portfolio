import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ColorPaletteWidget: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedCode(hex);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="my-12 p-6 md:p-8 rounded-3xl bg-white/70 dark:bg-white/[0.03] border border-[#593649]/15 dark:border-white/10 backdrop-blur-sm shadow-sm">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#686B46] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Harmonized Palette System</span>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#593649] dark:text-[#F6EFE5]">
            Curated Pantone® Identity
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-xl">
            A bespoke editorial chromatic scheme bridging warm alabaster parchment, rich plum wine contrast, and organic olive precision.
          </p>
        </div>
        <span className="font-mono text-xs text-neutral-500 self-start md:self-end">
          Click any swatch to copy HEX
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {portfolioData.pantonePalette.map((item, idx) => (
          <motion.div
            key={item.code}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            onClick={() => copyToClipboard(item.hex)}
            className="cursor-pointer group rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-[#1E1C1A] shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Color Swatch Box */}
            <div
              className="h-32 sm:h-36 w-full flex items-end justify-between p-4 relative"
              style={{ backgroundColor: item.hex }}
            >
              <span
                className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full ${
                  item.hex === '#F6EFE5'
                    ? 'bg-black/10 text-neutral-800'
                    : 'bg-white/20 text-white backdrop-blur-xs'
                }`}
              >
                SWATCH {idx + 1}
              </span>
              <div
                className={`p-1.5 rounded-full transition-transform duration-200 group-hover:scale-110 ${
                  item.hex === '#F6EFE5'
                    ? 'bg-neutral-800 text-white'
                    : 'bg-white text-neutral-900'
                }`}
              >
                {copiedCode === item.hex ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </div>
            </div>

            {/* Pantone Card Typography */}
            <div className="p-4 bg-white dark:bg-[#181615]">
              <div className="flex items-baseline justify-between mb-1">
                <span className="font-sans font-bold text-sm tracking-tight text-neutral-900 dark:text-neutral-100">
                  PANTONE®
                </span>
                <span className="font-mono text-xs text-neutral-500">{item.hex}</span>
              </div>
              <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                {item.code}
              </div>
              <div className="font-serif text-lg font-semibold text-[#593649] dark:text-[#E8DED0] mt-1">
                {item.name}
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1 italic">
                {item.role}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

