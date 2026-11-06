import React, { useState } from 'react';
import {
  Sparkles,
  Smartphone,
  HelpCircle,
  CheckCircle2,
  Cpu,
  ArrowLeft,
  RotateCcw,
  Play,
  Layers,
  Lightbulb,
  MessageSquare
} from 'lucide-react';

interface Slide1Props {
  onOpenFeedback: () => void;
  onNextSlide: () => void;
}

export const Slide1IntroKeyboard: React.FC<Slide1Props> = ({ onOpenFeedback, onNextSlide }) => {
  // Question voting state
  const [selectedPoll, setSelectedPoll] = useState<number | null>(null);
  const [isPollRevealed, setIsPollRevealed] = useState(false);

  // Keyboard Simulation State
  // Steps: 0 = Empty, 1 = "سل", 2 = "السلام", 3 = "السلام عليكم", 4 = "السلام عليكم ورحمة الله"
  const [simStep, setSimStep] = useState(0);
  const [activePreset, setActivePreset] = useState<'greeting' | 'story' | 'ai'>('greeting');

  const presets = {
    greeting: {
      id: 'greeting',
      title: 'تحية الإسلام (سـ + لـ)',
      initialChars: 'سـلـ',
      steps: [
        { typed: '', suggestions: [{ text: 'سـلـ', prob: 95 }, { text: 'مـر', prob: 3 }, { text: 'أهـ', prob: 2 }], nextToken: 'سـلـ' },
        { typed: 'سل', suggestions: [{ text: 'السلام', prob: 94 }, { text: 'سليم', prob: 4 }, { text: 'سلع', prob: 2 }], nextToken: 'السلام' },
        { typed: 'السلام', suggestions: [{ text: 'عليكم', prob: 98 }, { text: 'الوطني', prob: 1 }, { text: 'لك', prob: 1 }], nextToken: 'عليكم' },
        { typed: 'السلام عليكم', suggestions: [{ text: 'ورحمة الله', prob: 99 }, { text: 'جميعاً', prob: 1 }], nextToken: 'ورحمة الله' },
        { typed: 'السلام عليكم ورحمة الله', suggestions: [{ text: 'وبركاته', prob: 97 }], nextToken: 'وبركاته' }
      ]
    },
    story: {
      id: 'story',
      title: 'بداية القصص (كان يا...)',
      initialChars: 'كان يا',
      steps: [
        { typed: '', suggestions: [{ text: 'كان', prob: 90 }, { text: 'في', prob: 6 }], nextToken: 'كان' },
        { typed: 'كان يا', suggestions: [{ text: 'ما كان', prob: 97 }, { text: 'ترى', prob: 2 }, { text: 'صديقي', prob: 1 }], nextToken: 'ما كان' },
        { typed: 'كان يا ما كان', suggestions: [{ text: 'في قديم', prob: 95 }, { text: 'يا سادة', prob: 4 }], nextToken: 'في قديم' },
        { typed: 'كان يا ما كان في قديم', suggestions: [{ text: 'الزمان', prob: 99 }, { text: 'الوقت', prob: 1 }], nextToken: 'الزمان' }
      ]
    },
    ai: {
      id: 'ai',
      title: 'مصطلح التقنية (الذكاء الـ...)',
      initialChars: 'الذكاء الـ',
      steps: [
        { typed: '', suggestions: [{ text: 'الذكاء', prob: 92 }], nextToken: 'الذكاء' },
        { typed: 'الذكاء الـ', suggestions: [{ text: 'الاصطناعي', prob: 96 }, { text: 'البشري', prob: 3 }], nextToken: 'الاصطناعي' },
        { typed: 'الذكاء الاصطناعي', suggestions: [{ text: 'التوليدي', prob: 88 }, { text: 'العام', prob: 8 }, { text: 'المستقبلي', prob: 4 }], nextToken: 'التوليدي' },
        { typed: 'الذكاء الاصطناعي التوليدي', suggestions: [{ text: 'يغير العالم', prob: 94 }], nextToken: 'يغير العالم' }
      ]
    }
  };

  const currentPresetData = presets[activePreset];
  const maxStep = currentPresetData.steps.length - 1;
  const currentStepData = currentPresetData.steps[Math.min(simStep, maxStep)];

  const handleNextStep = () => {
    if (simStep < maxStep) {
      setSimStep((prev) => prev + 1);
    }
  };

  const handleResetSim = () => {
    setSimStep(0);
  };

  const changePreset = (presetKey: 'greeting' | 'story' | 'ai') => {
    setActivePreset(presetKey);
    setSimStep(0);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Title Section */}
      <div className="relative rounded-3xl p-6 sm:p-8 overflow-hidden glass-panel-elevated border border-violet-500/30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-600/20 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>الجلسة الافتتاحية · قيادة شاهين 01</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-cairo leading-tight">
              مرحباً بكم في عالم الذكاء الاصطناعي
              <span className="block text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 via-blue-400 to-violet-400">
                الحقيقة الكاملة وراء الآلة
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-tajawal">
              هل الذكاء الاصطناعي كائن واعي يفكّر ويفهم كما نفعل نحن؟ أم أن خلف هذه العبقرية الظاهرة سر رياضي غاية في البساطة والجمال؟ دعونا نكتشف السر معاً!
            </p>
          </div>

          {/* Quick Hero Visual Card */}
          <div className="w-full md:w-72 shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-[#070b1e]/90 p-4 shadow-xl shadow-violet-950/50">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-3 border border-white/10">
              <img
                src="/src/assets/images/ai_keyboard_prediction_1793977318785.jpg"
                alt="AI Prediction Keyboard"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070b1e] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] text-cyan-300 border border-cyan-500/30 font-mono">
                Next-Token Prediction
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>القائد: شاهين 01</span>
              <span className="text-violet-400 font-medium">الشريحة 1 / 6</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interaction 1: Big Class Question & Live Poll */}
      <div className="rounded-2xl p-6 glass-panel border border-cyan-500/20 relative overflow-hidden">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">سؤال الفصل التفاعلي</span>
              <h2 className="text-lg sm:text-xl font-bold text-white font-cairo">
                ما هو الذكاء الاصطناعي برأيكم؟
              </h2>
            </div>
          </div>

          <button
            onClick={onOpenFeedback}
            className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>تسجيل إجابة من الطلاب</span>
          </button>
        </div>

        {/* 3 Voting Choices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          {[
            { id: 1, title: 'عقل إلكتروني واعي', desc: 'يفكر ويشعر ولديه إدراك حقيقي مثل البشر', isTrue: false },
            { id: 2, title: 'روبوت خارق وخيال علمي', desc: 'يملك إجابات كونية مطلقة بدون أي خطأ', isTrue: false },
            { id: 3, title: 'نظام رياضي لتوقع الرمز التالي', desc: 'يحسب الاحتمالات الإحصائية للكلمة التالية!', isTrue: true }
          ].map((item) => {
            const isSelected = selectedPoll === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedPoll(item.id);
                  setIsPollRevealed(true);
                }}
                className={`p-4 rounded-xl border text-right transition-all duration-300 relative ${
                  isSelected
                    ? item.isTrue
                      ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-lg shadow-emerald-500/20'
                      : 'bg-red-500/20 border-red-400 text-white shadow-lg shadow-red-500/20'
                    : 'bg-white/[0.03] border-white/10 hover:border-cyan-400/40 text-slate-200 hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm font-cairo">{item.title}</span>
                  {isPollRevealed && isSelected && (
                    <span className="text-xs px-2 py-0.5 rounded-full font-bold">
                      {item.isTrue ? '✅ الحقيقة العلمية!' : '❌ مفهوم شائع خاطئ'}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-tajawal">
                  {item.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Reveal Message */}
        {isPollRevealed && (
          <div className="p-4 rounded-xl bg-violet-950/60 border border-violet-500/40 text-xs sm:text-sm text-slate-200 leading-relaxed flex items-start gap-3 animate-fadeIn">
            <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-300">ملاحظة شاهين 01: </span>
              الذكاء الاصطناعي لا يملك روحاً ولا عاطفة ولا وعياً! هو لا يفكر كالبشر على الإطلاق، بل هو تماماً مثل{' '}
              <strong className="text-cyan-300 underline underline-offset-4 font-bold">
                كيبورد هاتفك الذكي الذي يتوقع الكلمات
              </strong>
              .. تعالوا نجرب المحاكاة الحية أدناه!
            </div>
          </div>
        )}
      </div>

      {/* Interaction 2: Interactive Smartphone Keyboard Simulator (The Analogy) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: The Smartphone Mockup Simulation */}
        <div className="lg:col-span-7 rounded-3xl p-6 glass-panel-elevated border border-violet-500/30 relative">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-violet-400" />
              <h3 className="text-base font-bold text-white font-cairo">
                محاكي الهاتف الذكي: كيف يتنبأ بالكلمة التالية؟
              </h3>
            </div>

            {/* Presets switcher */}
            <div className="flex items-center gap-1 p-1 bg-white/5 rounded-xl border border-white/10 text-xs">
              <button
                onClick={() => changePreset('greeting')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  activePreset === 'greeting' ? 'bg-violet-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                تحية
              </button>
              <button
                onClick={() => changePreset('story')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  activePreset === 'story' ? 'bg-violet-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                قصة
              </button>
              <button
                onClick={() => changePreset('ai')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  activePreset === 'ai' ? 'bg-violet-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                تقنية
              </button>
            </div>
          </div>

          {/* Smartphone Frame */}
          <div className="max-w-md mx-auto rounded-[2.5rem] p-4 bg-gradient-to-b from-[#111738] to-[#080b1e] border-2 border-violet-500/40 shadow-2xl shadow-violet-950/80 relative">
            {/* Phone Speaker Notch */}
            <div className="w-32 h-4 bg-black/60 rounded-full mx-auto mb-3 flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
              <span className="w-10 h-1 rounded-full bg-slate-800" />
            </div>

            {/* Screen Inner Container */}
            <div className="rounded-2xl bg-[#090d24] border border-white/10 p-4 space-y-4 min-h-[300px] flex flex-col justify-between">
              {/* Chat Simulation Display */}
              <div className="space-y-3">
                <div className="text-[10px] text-center text-slate-500 font-mono">
                  شات تجريبي · محرك التنبؤ الإحصائي
                </div>

                <div className="p-3 rounded-2xl rounded-tr-sm bg-violet-600/20 border border-violet-500/30 text-white text-xs max-w-[85%] self-end mr-auto">
                  <span>سؤال الزميل: كيف نبدأ لقاء اليوم؟</span>
                </div>

                {/* Response preview bubble */}
                <div className="p-3.5 rounded-2xl rounded-tl-sm bg-white/10 border border-white/15 text-white text-sm max-w-[90%] min-h-[50px] flex items-center">
                  {currentStepData.typed ? (
                    <span className="font-semibold text-cyan-200 tracking-wide font-cairo">
                      {currentStepData.typed}
                      <span className="inline-block w-2 h-4 bg-cyan-400 mr-1 animate-pulse" />
                    </span>
                  ) : (
                    <span className="text-slate-500 italic text-xs">
                      ابدأ بالنقر على اقتراحات الكيبورد بالأسفل...
                    </span>
                  )}
                </div>
              </div>

              {/* Predictive Auto-Complete Strip */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-cyan-300 font-bold">شريط اقتراحات الكيبورد الذكي:</span>
                  <span className="text-[10px] font-mono">احتمالات التنبؤ</span>
                </div>

                <div className="grid grid-cols-3 gap-1.5">
                  {currentStepData.suggestions.map((sug, idx) => {
                    const isTopChoice = idx === 0;
                    return (
                      <button
                        key={idx}
                        onClick={handleNextStep}
                        className={`p-2 rounded-xl text-center transition-all ${
                          isTopChoice
                            ? 'bg-gradient-to-r from-cyan-500/30 to-blue-600/30 border border-cyan-400/50 text-cyan-200 shadow-md shadow-cyan-500/20 hover:scale-[1.02]'
                            : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white'
                        }`}
                      >
                        <div className="text-xs font-bold font-cairo truncate">{sug.text}</div>
                        <div className="text-[10px] font-mono text-cyan-300">{sug.prob}%</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Keyboard Visual Keys Layout */}
              <div className="p-2 rounded-xl bg-black/40 border border-white/5 space-y-1 select-none">
                <div className="flex justify-center gap-1 text-[11px] text-slate-300">
                  {['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج'].map((ch, i) => (
                    <span key={i} className="px-1.5 py-1 rounded bg-white/10 min-w-[22px] text-center font-mono">
                      {ch}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-1 text-[11px] text-slate-300">
                  {['ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط'].map((ch, i) => {
                    const isHighlighted = ch === 'س' || ch === 'ل';
                    return (
                      <span
                        key={i}
                        className={`px-1.5 py-1 rounded min-w-[22px] text-center font-mono ${
                          isHighlighted ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm shadow-cyan-400' : 'bg-white/10'
                        }`}
                      >
                        {ch}
                      </span>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between gap-1 text-[10px] text-slate-400 pt-1">
                  <span className="px-3 py-1 bg-white/10 rounded">مسافة</span>
                  <span className="px-3 py-1 bg-violet-600/60 text-white rounded font-bold">إرسال ↵</span>
                </div>
              </div>
            </div>

            {/* Simulation Controls under phone */}
            <div className="flex items-center justify-between mt-3 px-2">
              <button
                onClick={handleResetSim}
                className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-xs flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>إعادة الكيبورد</span>
              </button>

              <div className="text-xs text-slate-400 font-mono">
                الخطوة {simStep + 1} من {currentPresetData.steps.length}
              </div>

              <button
                onClick={handleNextStep}
                disabled={simStep >= maxStep}
                className="px-3 py-1 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-40 text-white text-xs font-bold flex items-center gap-1"
              >
                <span>الكلمة التالية</span>
                <Play className="w-3.5 h-3.5 fill-current" />
              </button>
            </div>
          </div>
        </div>

        {/* Right: The Core Scientific Analogy & Explanation */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-3xl glass-panel border border-violet-500/20 space-y-4">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-bold">
              <Cpu className="w-4 h-4" />
              <span>المعادلة الجوهرية (Next-Token Prediction)</span>
            </div>

            <h3 className="text-xl font-bold text-white font-cairo">
              الذكاء الاصطناعي = كيبورد هاتف خارق!
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-tajawal">
              لو فتحت هاتفك الآن وكتبت حرفي <span className="text-cyan-300 font-bold font-mono">"س"</span> و{' '}
              <span className="text-cyan-300 font-bold font-mono">"ل"</span>، ستجد أن الهاتف يقترح عليك كلمة{' '}
              <span className="text-violet-300 font-bold">"السلام"</span>، ثم إن ضغطت عليها يقترح{' '}
              <span className="text-violet-300 font-bold">"عليكم"</span>، ثم{' '}
              <span className="text-violet-300 font-bold">"ورحمة الله"</span>.
            </p>

            <div className="p-3.5 rounded-xl bg-violet-900/30 border border-violet-500/30 space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>كيف يعمل النموذج اللغوي الضخم (LLM)؟</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                قرأ النموذج مليارات الكتب والمقالات على الإنترنت. عندما تسأله أي سؤال، هو لا "يفهم" المعنى بفؤاده، بل يحسب رياضياً:{' '}
                <strong className="text-white">"ما هي الكلمة الأكثر احتمالاً بنسبة 99% لتأتي بعد هذا السؤال؟"</strong>
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>تنبؤ الكلمات العادية</span>
                <span className="text-cyan-400 font-mono">كيبورد الهاتف</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-cyan-400 rounded-full" />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span>تنبؤ أكواد ونصوص ومقالات كاملة</span>
                <span className="text-violet-400 font-mono">ChatGPT / Claude / Gemini</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" />
              </div>
            </div>
          </div>

          {/* Call to Action for Slide 2 */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-600/30 via-blue-600/20 to-transparent border border-violet-500/30 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-white font-cairo">
                والآن يأتي السؤال الذي يغير كل شيء...
              </h4>
              <p className="text-xs text-slate-300">
                إذا كان يكمل الكلام بالتنبؤ، كيف نأمره ليخرج لنا إبداعاً حقيقياً؟
              </p>
            </div>
            <button
              onClick={onNextSlide}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-lg shadow-cyan-500/25 shrink-0"
            >
              <span>انتقل للتحدي</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
