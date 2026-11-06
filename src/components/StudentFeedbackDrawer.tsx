import React, { useState } from 'react';
import { StudentAnswer } from '../types/presentation';
import { X, ThumbsUp, Send, User, Sparkles } from 'lucide-react';

interface StudentFeedbackDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  answers: StudentAnswer[];
  onAddAnswer: (name: string, text: string) => void;
  onLikeAnswer: (id: string) => void;
}

export const StudentFeedbackDrawer: React.FC<StudentFeedbackDrawerProps> = ({
  isOpen,
  onClose,
  answers,
  onAddAnswer,
  onLikeAnswer
}) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddAnswer(name.trim() || 'طالب مجهول', text.trim());
    setText('');
  };

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-full sm:w-96 bg-[#090d24]/95 border-r border-cyan-500/20 backdrop-blur-2xl shadow-2xl p-5 flex flex-col justify-between text-right">
      <div>
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-cairo">
                أصوات وإجابات الفصل
              </h3>
              <p className="text-[11px] text-slate-400">
                تسجيل إجابات وأفكار الطلاب الحية
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Answers List */}
        <div className="space-y-3 max-h-[55vh] overflow-y-auto pr-1">
          {answers.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400">
              لا توجد إجابات بعد.. شجع الطلاب على المشاركة!
            </div>
          ) : (
            answers.map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-500/30 transition-all text-xs"
              >
                <div className="flex items-center justify-between mb-1.5 text-slate-400">
                  <div className="flex items-center gap-1.5 font-medium text-slate-200">
                    <User className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.studentName}</span>
                  </div>
                  <span className="text-[10px]">{item.timestamp}</span>
                </div>
                <p className="text-slate-100 leading-relaxed mb-2">
                  "{item.answerText}"
                </p>
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => onLikeAnswer(item.id)}
                    className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 hover:bg-violet-500/20 text-[11px] text-slate-300 hover:text-violet-200 transition-colors"
                  >
                    <ThumbsUp className="w-3 h-3 text-violet-400" />
                    <span className="font-mono">{item.likes}</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Add Answer Form */}
      <form onSubmit={handleSubmit} className="mt-4 pt-4 border-t border-white/10 space-y-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="اسم الطالب (اختياري)..."
          className="w-full px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
        />
        <div className="relative">
          <textarea
            rows={2}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="اكتب إجابة أو فكرة الطالب هنا..."
            className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/20"
        >
          <Send className="w-3.5 h-3.5" />
          <span>إرسال الإجابة إلى الشاشة</span>
        </button>
      </form>
    </div>
  );
};
