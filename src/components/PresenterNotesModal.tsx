import React from 'react';
import { PresenterNote } from '../types/presentation';
import { X, Sparkles, Lightbulb, MessageSquareQuote, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface PresenterNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentNote: PresenterNote;
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

export const PresenterNotesModal: React.FC<PresenterNotesModalProps> = ({
  isOpen,
  onClose,
  currentNote,
  currentSlide,
  totalSlides,
  onPrev,
  onNext
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#090d24] border border-violet-500/30 rounded-2xl p-6 shadow-2xl shadow-violet-950/80 overflow-hidden text-right">
        {/* Glow ambient background */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5 relative">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white font-cairo">
                  دليل إلقاء شاهين 01
                </h3>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 font-mono">
                  شريحة {currentSlide} من {totalSlides}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {currentNote.slideTitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content sections */}
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
          {/* Hook card */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25">
            <div className="flex items-center gap-2 mb-1.5 text-amber-300 text-xs font-bold">
              <MessageSquareQuote className="w-4 h-4" />
              <span>جملة افتتاحية / خطاف الانتباه (The Hook):</span>
            </div>
            <p className="text-sm text-amber-100 font-medium leading-relaxed">
              "{currentNote.hook}"
            </p>
          </div>

          {/* Script Points */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <h4 className="text-xs font-bold text-cyan-400 mb-2.5 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>نقاط الحديث الرئيسية (Talking Points):</span>
            </h4>
            <ul className="space-y-2">
              {currentNote.script.map((line, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-200 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive instruction */}
          <div className="p-3.5 rounded-xl bg-violet-500/10 border border-violet-500/20">
            <div className="flex items-center gap-2 mb-1 text-violet-300 text-xs font-bold">
              <Sparkles className="w-4 h-4" />
              <span>الإجراء التفاعلي المطلوب في هذه الشريحة:</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentNote.interactivePrompt}
            </p>
          </div>

          {/* Pro Tips */}
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <div className="flex items-center gap-2 mb-1.5 text-emerald-300 text-xs font-bold">
              <Lightbulb className="w-4 h-4" />
              <span>نصائح شاهين لإدارة انتباه الطلاب:</span>
            </div>
            <ul className="space-y-1.5">
              {currentNote.proTips.map((tip, idx) => (
                <li key={idx} className="text-xs text-emerald-100 flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              disabled={currentSlide === 1}
              className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
            >
              <ArrowRight className="w-3.5 h-3.5" />
              <span>الشريحة السابقة</span>
            </button>
            <button
              onClick={onNext}
              disabled={currentSlide === totalSlides}
              className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
            >
              <span>الشريحة التالية</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium transition-colors"
          >
            إغلاق الملاحظات
          </button>
        </div>
      </div>
    </div>
  );
};
