import React, { useState } from 'react';
import { ROADMAP_WEEKS } from '../../data/presentationData';
import { WeekPlan } from '../../types/presentation';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  Award,
  Target,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  X,
  BookOpen,
  UserCheck
} from 'lucide-react';

interface Slide5Props {
  onRestartPresentation: () => void;
}

export const Slide5Roadmap8Weeks: React.FC<Slide5Props> = ({ onRestartPresentation }) => {
  const [selectedWeek, setSelectedWeek] = useState<WeekPlan | null>(ROADMAP_WEEKS[0]);
  const [enrolled, setEnrolled] = useState(false);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="rounded-3xl p-6 sm:p-8 glass-panel-elevated border border-violet-500/30 relative overflow-hidden text-center sm:text-right">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-600/20 via-cyan-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>المنهج الدراسي المتكامل · 8 أسابيع (ساعة كل أسبوع)</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-cairo leading-snug">
            خريطة الطريق: رحلتنا لصناعة رواد الذكاء الاصطناعي
            <span className="block text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 via-blue-400 to-violet-400">
              مع رئيس مجلس الطلاب شاهين 01
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-tajawal max-w-3xl leading-relaxed">
            برنامج عملي تطبيقي يركز على المهارات الحقيقية، وينتهي بمشروع تخرج ريادي يخدم مدرستنا ومجتمعنا، وصولاً لحفل التكريم وتوزيع أوسمة التميز 🏆.
          </p>
        </div>
      </div>

      {/* Cyber Academy Roadmap Image Card */}
      <div className="rounded-2xl overflow-hidden border border-white/10 relative h-40 sm:h-52 group shadow-2xl">
        <img
          src="/src/assets/images/ai_roadmap_cyber_1793977320129.jpg"
          alt="Cyber AI Academy 8-Week Roadmap"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060814]/90 via-[#060814]/60 to-[#060814]/90 flex items-center justify-between px-6 sm:px-12">
          <div className="space-y-1">
            <span className="text-xs text-cyan-400 font-mono">CYBER ACADEMY 2026</span>
            <h3 className="text-lg sm:text-2xl font-bold text-white font-cairo">
              8 أسابيع لنكون في طليعة المستقبل
            </h3>
            <p className="text-xs text-slate-300 max-w-md hidden sm:block">
              انقر على أي أسبوع لاستكشاف تفاصيل الورشة، المهارات المكتسبة، والتحدي الأسبوعي!
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => setEnrolled(!enrolled)}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center gap-2 shadow-lg ${
                enrolled
                  ? 'bg-emerald-500/20 border border-emerald-400 text-emerald-300 shadow-emerald-500/20'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-cyan-500/25'
              }`}
            >
              {enrolled ? (
                <>
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  <span>أنت مسجل في الدورة ✅</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>تأكيد انضمامي للدورة</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 8-Week Interactive Timeline Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ROADMAP_WEEKS.map((week) => {
          const isSelected = selectedWeek?.weekNumber === week.weekNumber;
          const isDone = week.status === 'completed';
          const isActive = week.status === 'active';

          return (
            <div
              key={week.weekNumber}
              onClick={() => setSelectedWeek(week)}
              className={`cursor-pointer rounded-2xl p-5 border text-right transition-all duration-300 relative flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-b from-violet-900/40 to-[#0c112e] border-cyan-400 shadow-xl shadow-cyan-500/20 scale-[1.02]'
                  : 'bg-white/[0.03] border-white/10 hover:border-violet-400/40 hover:bg-white/[0.06]'
              }`}
            >
              <div>
                {/* Week Header & Status */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-white/10 text-cyan-300">
                    الأسبوع {week.weekNumber}
                  </span>
                  {isDone ? (
                    <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>تمت بنجاح ✅</span>
                    </span>
                  ) : isActive ? (
                    <span className="text-[11px] font-bold text-cyan-300 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>الأسبوع القادم ⚡</span>
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-500">
                      قادم
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white font-cairo mb-1.5 leading-snug">
                  {week.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mb-3 font-tajawal">
                  {week.subtitle}
                </p>
              </div>

              {/* Mini tags */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-violet-400" />
                  <span>{week.duration}</span>
                </span>
                <span className="text-cyan-400 font-medium flex items-center gap-0.5">
                  <span>التفاصيل</span>
                  <ChevronLeft className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Week Deep Dive Modal / Glass Card */}
      {selectedWeek && (
        <div className="rounded-3xl p-6 sm:p-8 glass-panel-elevated border border-cyan-500/30 space-y-4 relative">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-bold font-mono">
                W{selectedWeek.weekNumber}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white font-cairo">
                    الأسبوع {selectedWeek.weekNumber}: {selectedWeek.title}
                  </h3>
                  {selectedWeek.status === 'completed' && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                      تم الإنجاز بنجاح ✅
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400">{selectedWeek.subtitle}</p>
              </div>
            </div>
            <span className="text-xs font-mono text-violet-300 bg-violet-500/10 px-3 py-1 rounded-lg border border-violet-500/20">
              مدة اللقاء: {selectedWeek.duration}
            </span>
          </div>

          <p className="text-sm text-slate-200 leading-relaxed font-tajawal">
            {selectedWeek.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {/* Skills */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>المهارات المكتسبة:</span>
              </div>
              <ul className="space-y-1">
                {selectedWeek.skills.map((s, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission */}
            <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-500/20 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-violet-300">
                <Target className="w-3.5 h-3.5" />
                <span>التحدي الأسبوعي (Weekly Mission):</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedWeek.mission}
              </p>
            </div>

            {/* Deliverable */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                <Award className="w-3.5 h-3.5" />
                <span>المخرج المطلوب تسليمه:</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedWeek.deliverable}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Graduation Project & Trophies Spotlight */}
      <div className="p-6 rounded-3xl glass-panel border border-violet-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-violet-950/40 via-blue-950/20 to-transparent">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-amber-300 text-xs font-bold">
            <Award className="w-4 h-4 text-amber-400" />
            <span>مشروع التخرج ومعرض الابتكار (الأسبوع 7 و 8)</span>
          </div>
          <h3 className="text-lg font-bold text-white font-cairo">
            تصميم ذكاء اصطناعي خاص بمدرستنا يخدم الطلاب والمعلمين!
          </h3>
          <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
            لن نكتفي بالتعلم النظري، بل سيعمل مجلس الطلاب مع كافة المشاركين لإطلاق نظام ذكي مدرسي، وتتويج الفرق الفائزة بشهادات معتمدة وأوسمة التميز.
          </p>
        </div>

        <button
          onClick={onRestartPresentation}
          className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all flex items-center gap-2 shrink-0"
        >
          <ArrowRight className="w-4 h-4" />
          <span>العودة لبداية العرض</span>
        </button>
      </div>
    </div>
  );
};
