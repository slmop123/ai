import React from 'react';
import { Sparkles, BookOpen, MessageSquare, Maximize2, Minimize2 } from 'lucide-react';

interface HeaderNavProps {
  currentSlide: number;
  totalSlides: number;
  onSelectSlide: (slideNumber: number) => void;
  onToggleNotes: () => void;
  isNotesOpen: boolean;
  onToggleFeedback: () => void;
  studentAnswerCount: number;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentSlide,
  totalSlides,
  onSelectSlide,
  onToggleNotes,
  isNotesOpen,
  onToggleFeedback,
  studentAnswerCount,
  isFullscreen,
  onToggleFullscreen
}) => {
  const slideTabs = [
    { id: 1, label: '1. حقيقة الذكاء الاصطناعي' },
    { id: 2, label: '2. مقارنة الأوامر' },
    { id: 3, label: '3. ميلاد هندسة الأوامر' },
    { id: 4, label: '4. لغز الهلوسة' },
    { id: 5, label: '5. خطورة الفتوى والعقيدة' },
    { id: 6, label: '6. خريطة الـ 8 أسابيع' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#060814]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Zone 1: Brand & Presenter Lockup */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 p-[1px] flex items-center justify-center shadow-lg shadow-violet-500/20">
            <div className="w-full h-full bg-[#080b1e] rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-cyan-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white tracking-wide font-cairo whitespace-nowrap">
              ورشة الذكاء الاصطناعي التفاعلية
            </span>
          </div>
        </div>

        {/* Zone 2: Slide Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1 bg-white/[0.03] border border-white/10 rounded-xl">
          {slideTabs.map((tab) => {
            const isActive = currentSlide === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectSlide(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600/80 to-blue-600/80 text-white shadow-md shadow-violet-500/25 border border-violet-400/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-300"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions & Presenter Toolkit */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Student responses button */}
          <button
            onClick={onToggleFeedback}
            title="إجابات وأسئلة الطلاب"
            className="px-2.5 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white transition-all flex items-center gap-1.5 whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">أصوات الفصل</span>
            <span className="px-1.5 py-0.2 bg-violet-500/40 text-violet-200 rounded text-[10px] font-mono">
              {studentAnswerCount}
            </span>
          </button>

          {/* Presenter Notes toggle */}
          <button
            onClick={onToggleNotes}
            title="ملاحظات العرض الخاصة بشاهين 01"
            className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all flex items-center gap-1.5 whitespace-nowrap ${
              isNotesOpen
                ? 'bg-amber-500/20 text-amber-200 border-amber-500/40 shadow-sm shadow-amber-500/20'
                : 'bg-white/5 hover:bg-white/10 text-slate-200 border-white/10'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline">ملاحظات شاهين</span>
          </button>

          {/* Fullscreen toggle */}
          <button
            onClick={onToggleFullscreen}
            title={isFullscreen ? 'إنهاء ملء الشاشة' : 'ملء الشاشة'}
            className="p-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all"
            aria-label="Toggle Fullscreen"
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4 text-cyan-400" />
            ) : (
              <Maximize2 className="w-4 h-4 text-cyan-400" />
            )}
          </button>
        </div>
      </div>

      {/* Slide Progress bar */}
      <div className="w-full h-1 bg-white/5 relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-500 ease-out"
          style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
        />
      </div>
    </header>
  );
};
