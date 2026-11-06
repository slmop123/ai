import React, { useState } from 'react';
import {
  Sparkles,
  Award,
  Layers,
  Copy,
  Check,
  TrendingUp,
  Brain,
  ShieldCheck,
  Zap,
  ArrowLeft,
  ChevronRight,
  Terminal
} from 'lucide-react';

interface Slide3Props {
  onNextSlide: () => void;
}

export const Slide3PromptRise: React.FC<Slide3Props> = ({ onNextSlide }) => {
  // Interactive Prompt Formula Builder state
  const [selectedRole, setSelectedRole] = useState('كبير مهندسي البرمجيات');
  const [selectedTask, setSelectedTask] = useState('شرح خوارزمية البحث الثنائي');
  const [selectedStyle, setSelectedStyle] = useState('مبسط مع مثال كودي واقعي');
  const [selectedConstraint, setSelectedConstraint] = useState('بلغة بايثون وتجنب المصطلحات المعقدة');
  const [copied, setCopied] = useState(false);

  const roles = ['كبير مهندسي البرمجيات', 'مستشار ابتكار وتسويق', 'معلم خصوصي لمادة الفيزياء', 'باحث أكاديمي في الأمن السيبراني'];
  const tasks = ['شرح خوارزمية البحث الثنائي', 'تحليل نقاط القوة والضعف لفكرة مشروع مدرسي', 'إعداد خطة مراجعة للامتحان النهائي', 'كتابة نص تسويقي لتطبيق ذكي'];
  const styles = ['مبسط مع مثال كودي واقعي', 'تحليلي بأسلوب الخطوات المرقمة', 'نقدي استكشافي بطريقة سقراط', 'سريع ومركّز بنقاط مباشرة'];
  const constraints = ['بلغة بايثون وتجنب المصطلحات المعقدة', 'في أقل من 200 كلمة مع مرجع علمي', 'بصيغة جدول مقارنة منظم', 'مع توضيح الأخطاء الشائعة'];

  const compiledPrompt = `بصفتك ${selectedRole}، مهمتك هي ${selectedTask}. يرجى تقديم الإجابة بأسلوب ${selectedStyle}، مع الالتزام بالشرط التالي: ${selectedConstraint}.`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(compiledPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Dramatic Header */}
      <div className="rounded-3xl p-6 sm:p-8 glass-panel-elevated border border-violet-500/30 relative overflow-hidden text-center sm:text-right">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-violet-600/30 to-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>نقطة التحول العالمية · الثورة الجديدة</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-cairo leading-snug">
            بسبب هذه الفجوة الشاسعة في النتائج...
            <span className="block text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 via-blue-400 to-violet-400">
              ولد علم يغير قواعد اللعبة: هندسة الأوامر (Prompt Engineering)
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-tajawal max-w-3xl leading-relaxed">
            لم تعد المسألة من يمتلك جهاز حاسوب أو من يفتح موقع الذكاء الاصطناعي؛ القوة الحقيقية اليوم أصبحت لمن يمتلك لغة التخاطب مع الآلة ويوجهها بدقة متناهية.
          </p>
        </div>
      </div>

      {/* The Highlight Card: Shaheen 01 Vision */}
      <div className="rounded-3xl p-6 sm:p-8 glass-panel border border-cyan-500/30 relative overflow-hidden bg-gradient-to-br from-cyan-950/20 via-violet-950/30 to-[#070b1e]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
              <Award className="w-4 h-4" />
              <span>رسالة القائد الطلابي: شاهين 01</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-cairo leading-relaxed">
              "هذا هو المجال الذي سنتعلمه معاً لتصبحوا قادة المستقبل وموجهي الآلة.. وليس مجرد مستهلكين عاجزين!"
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-tajawal">
              في عالم يتسارع كل دقيقة، لن يحل الذكاء الاصطناعي محل الإنسان، لكن الإنسان الذي يتقن هندسة الأوامر سيحل حتماً محل من لا يتقنها. في مدرستنا، نصنع قادة التقنية لا متفرجين!
            </p>
          </div>

          {/* 3 Metrics Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full md:w-auto shrink-0">
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center space-y-1">
              <span className="text-xs text-slate-400">الطلب العالمي</span>
              <div className="text-xl font-bold text-cyan-400 font-mono">+320%</div>
              <span className="text-[10px] text-slate-500">للمهندسين المهرة</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center space-y-1">
              <span className="text-xs text-slate-400">كفاءة الإنتاج</span>
              <div className="text-xl font-bold text-violet-400 font-mono">10X</div>
              <span className="text-[10px] text-slate-500">في كتابة الأكواد والبحث</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center space-y-1">
              <span className="text-xs text-slate-400">نسبة الدقة</span>
              <div className="text-xl font-bold text-emerald-400 font-mono">98%</div>
              <span className="text-[10px] text-slate-500">مع الأطر الهندسية</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tool: Prompt Formula Builder Sandbox */}
      <div className="rounded-3xl p-6 glass-panel-elevated border border-violet-500/25 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 flex-wrap gap-2">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-cairo">
                مختبر تركيب الأوامر التكتيكي (Prompt Formula Sandbox)
              </h3>
              <p className="text-xs text-slate-400">
                جرب تركيب أمر هندسي فوري واختبر عناصره الأربعة
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
            تفاعلي ومباشر
          </span>
        </div>

        {/* Builder Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Pillar 1: Persona */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-cyan-300 block">1. حدد الدور (Persona):</label>
            <div className="space-y-1">
              {roles.map((r, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedRole(r)}
                  className={`w-full text-right p-2 rounded-lg text-xs transition-all truncate block ${
                    selectedRole === r
                      ? 'bg-cyan-500/20 border border-cyan-400 text-white font-bold'
                      : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Pillar 2: Task */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-blue-300 block">2. حدد المهمة (Task):</label>
            <div className="space-y-1">
              {tasks.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedTask(t)}
                  className={`w-full text-right p-2 rounded-lg text-xs transition-all truncate block ${
                    selectedTask === t
                      ? 'bg-blue-500/20 border border-blue-400 text-white font-bold'
                      : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Pillar 3: Style */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-violet-300 block">3. الأسلوب والنبرة (Tone):</label>
            <div className="space-y-1">
              {styles.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedStyle(s)}
                  className={`w-full text-right p-2 rounded-lg text-xs transition-all truncate block ${
                    selectedStyle === s
                      ? 'bg-violet-500/20 border border-violet-400 text-white font-bold'
                      : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Pillar 4: Constraints */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-emerald-300 block">4. القيود والشروط (Rules):</label>
            <div className="space-y-1">
              {constraints.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedConstraint(c)}
                  className={`w-full text-right p-2 rounded-lg text-xs transition-all truncate block ${
                    selectedConstraint === c
                      ? 'bg-emerald-500/20 border border-emerald-400 text-white font-bold'
                      : 'bg-white/5 border border-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Compiled Live Prompt */}
        <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-bold text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>الأمر الناتج المتكامل (Ready Prompt):</span>
            </span>
            <button
              onClick={handleCopyPrompt}
              className="px-3 py-1 rounded-lg bg-violet-600/50 hover:bg-violet-500 border border-violet-400/40 text-white text-xs font-medium transition-all flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'تم النسخ!' : 'نسخ البرومبت'}</span>
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-violet-950/20 border border-violet-500/20 font-mono text-xs sm:text-sm text-cyan-200 leading-relaxed">
            "{compiledPrompt}"
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="p-5 rounded-2xl glass-panel border border-violet-500/20 flex items-center justify-between flex-wrap gap-4">
        <div>
          <span className="text-xs text-violet-400 font-bold">المحطة التالية في كشف الأسرار:</span>
          <p className="text-sm font-bold text-white font-cairo">
            لكن احذروا! حتى مع الأوامر الذكية، يقع الذكاء الاصطناعي في فخ مميت... ما هو؟
          </p>
        </div>
        <button
          onClick={onNextSlide}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-violet-500/25"
        >
          <span>اكتشف لغز الهلوسة وقصة تشيلي</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
