/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { PresenterNotesModal } from './components/PresenterNotesModal';
import { StudentFeedbackDrawer } from './components/StudentFeedbackDrawer';
import { Slide1IntroKeyboard } from './components/slides/Slide1IntroKeyboard';
import { Slide2PromptBattle } from './components/slides/Slide2PromptBattle';
import { Slide3PromptRise } from './components/slides/Slide3PromptRise';
import { Slide4HallucinationChile } from './components/slides/Slide4HallucinationChile';
import { Slide5NoFatwaInAI } from './components/slides/Slide5NoFatwaInAI';
import { Slide5Roadmap8Weeks } from './components/slides/Slide5Roadmap8Weeks';
import { PRESENTER_NOTES, INITIAL_STUDENT_ANSWERS } from './data/presentationData';
import { StudentAnswer } from './types/presentation';
import {
  ChevronRight,
  ChevronLeft,
  BookOpen,
  MessageSquare,
  Sparkles,
  Maximize2,
  Minimize2,
  Layers,
  HelpCircle
} from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const totalSlides = 6;

  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Student answers state
  const [answers, setAnswers] = useState<StudentAnswer[]>(INITIAL_STUDENT_ANSWERS);

  const handleAddAnswer = (studentName: string, answerText: string) => {
    const newAns: StudentAnswer = {
      id: `ans-${Date.now()}`,
      studentName,
      answerText,
      timestamp: 'الآن',
      likes: 1
    };
    setAnswers([newAns, ...answers]);
  };

  const handleLikeAnswer = (id: string) => {
    setAnswers(answers.map(a => a.id === id ? { ...a, likes: a.likes + 1 } : a));
  };

  // Navigation handlers
  const handleNextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev < totalSlides ? prev + 1 : prev));
  }, [totalSlides]);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev > 1 ? prev - 1 : prev));
  }, []);

  const handleSelectSlide = (slideNum: number) => {
    if (slideNum >= 1 && slideNum <= totalSlides) {
      setCurrentSlide(slideNum);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowLeft') {
        // In Arabic RTL, left arrow moves forward to the next slide
        handleNextSlide();
      } else if (e.key === 'ArrowRight') {
        // In Arabic RTL, right arrow moves backward to the previous slide
        handlePrevSlide();
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        handleNextSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'Escape') {
        setIsNotesOpen(false);
        setIsFeedbackOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSlide, handlePrevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const currentNote = PRESENTER_NOTES.find(n => n.slideId === currentSlide) || PRESENTER_NOTES[0];

  return (
    <div className="min-h-screen bg-[#050714] text-slate-100 flex flex-col justify-between relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background ambient light orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Main Top Header Navigation */}
      <HeaderNav
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onSelectSlide={handleSelectSlide}
        onToggleNotes={() => setIsNotesOpen(prev => !prev)}
        isNotesOpen={isNotesOpen}
        onToggleFeedback={() => setIsFeedbackOpen(prev => !prev)}
        studentAnswerCount={answers.length}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* Slide Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 relative z-10">
        {currentSlide === 1 && (
          <Slide1IntroKeyboard
            onOpenFeedback={() => setIsFeedbackOpen(true)}
            onNextSlide={handleNextSlide}
          />
        )}
        {currentSlide === 2 && (
          <Slide2PromptBattle
            onNextSlide={handleNextSlide}
          />
        )}
        {currentSlide === 3 && (
          <Slide3PromptRise
            onNextSlide={handleNextSlide}
          />
        )}
        {currentSlide === 4 && (
          <Slide4HallucinationChile
            onNextSlide={handleNextSlide}
          />
        )}
        {currentSlide === 5 && (
          <Slide5NoFatwaInAI
            onNextSlide={handleNextSlide}
          />
        )}
        {currentSlide === 6 && (
          <Slide5Roadmap8Weeks
            onRestartPresentation={() => handleSelectSlide(1)}
          />
        )}
      </main>

      {/* Floating Bottom Presentation Controller Dock */}
      <div className="sticky bottom-4 z-40 max-w-md mx-auto w-[92%] px-4 py-2.5 rounded-2xl glass-panel-elevated border border-white/15 shadow-2xl flex items-center justify-between gap-3 text-xs mb-3">
        {/* Previous Button (Right arrow in RTL) */}
        <button
          onClick={handlePrevSlide}
          disabled={currentSlide === 1}
          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-slate-200 transition-all flex items-center gap-1"
          title="الشريحة السابقة (السهم الأيمن)"
        >
          <ChevronRight className="w-4 h-4" />
          <span className="hidden sm:inline">السابق</span>
        </button>

        {/* Slide Counter & Indicators */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5, 6].map(num => (
            <button
              key={num}
              onClick={() => handleSelectSlide(num)}
              className={`transition-all rounded-full ${
                currentSlide === num
                  ? 'w-6 h-2 bg-gradient-to-r from-cyan-400 to-violet-400'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
              title={`شريحة ${num}`}
            />
          ))}
          <span className="text-slate-400 font-mono text-[11px] mr-1">
            {currentSlide} / {totalSlides}
          </span>
        </div>

        {/* Next Button (Left arrow in RTL) */}
        <button
          onClick={handleNextSlide}
          disabled={currentSlide === totalSlides}
          className="p-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 disabled:opacity-30 disabled:cursor-not-allowed text-white font-bold transition-all flex items-center gap-1 shadow-md shadow-violet-500/20"
          title="الشريحة التالية (السهم الأيسر أو مسافة)"
        >
          <span className="hidden sm:inline">التالي</span>
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>

      {/* Presenter Notes Modal */}
      <PresenterNotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        currentNote={currentNote}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={handlePrevSlide}
        onNext={handleNextSlide}
      />

      {/* Student Feedback Drawer */}
      <StudentFeedbackDrawer
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
        answers={answers}
        onAddAnswer={handleAddAnswer}
        onLikeAnswer={handleLikeAnswer}
      />
    </div>
  );
}
