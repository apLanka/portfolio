"use client";

import { X } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { links } from "../config/links";

interface QRCodeModalProps {
  onClose: () => void;
}

export function QRCodeModal({ onClose }: QRCodeModalProps) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/20 dark:bg-white/5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -right-3 -top-3 rounded-full bg-black dark:bg-white p-2 text-white dark:text-black transition-transform hover:scale-110"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="rounded-lg bg-white p-2">
          <QRCodeSVG
            value={`${links.website}/`}
            size={200}
            level="H"
            includeMargin={false}
          />
        </div>
      </div>
    </div>
  );
}
