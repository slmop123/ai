import React, { useState } from 'react';
import {
  AlertTriangle,
  Plane,
  XCircle,
  HelpCircle,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  RotateCcw,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

interface Slide4Props {
  onNextSlide: () => void;
}

export const Slide4HallucinationChile: React.FC<Slide4Props> = ({ onNextSlide }) => {
  // Deduction Interactive Step
  const [selectedDeduction, setSelectedDeduction] = useState<number | null>(null);
  const [isDeductionRevealed, setIsDeductionRevealed] = useState(false);

  // Chile Story Interactive Simulation Stage
  // 1: The Question to ChatGPT, 2: The Hallucinated Confident Answer, 3: The Airport Reality Shock!
  const [storyStage, setStoryStage] = useState<1 | 2 | 3>(1);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="rounded-3xl p-6 sm:p-8 glass-panel-elevated border border-amber-500/30 relative overflow-hidden text-center sm:text-right">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>الظاهرة الأخطر في عالم الذكاء الاصطناعي</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-cairo leading-snug">
            لغز "الهلوسة الرقمية"
            <span className="block text-transparent bg-clip-text bg-gradient-to-l from-amber-400 via-rose-400 to-red-400">
              وحقيقة قصة فيزا تشيلي الصادمة
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-tajawal leading-relaxed">
            عندما يسألك شخص عن شيء لا تعرفه، قد تقول: "لا أعلم". لكن هل الذكاء الاصطناعي يستطيع أن يقول: "لا أعلم"؟ دعونا نستنتج معاً!
          </p>
        </div>
      </div>

      {/* Interactive Deduction Q&A Flow */}
      <div className="rounded-2xl p-6 glass-panel border border-violet-500/20 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-violet-400 font-bold uppercase tracking-wider">سؤال الاستنتاج الذهبي</span>
            <h2 className="text-base sm:text-lg font-bold text-white font-cairo">
              بما أن الذكاء الاصطناعي يكمل الكلام مثل كيبورد الهاتف فقط ولا يملك عاطفة أو وعياً... ماذا نستنتج؟
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            {
              id: 1,
              title: 'الاستنتاج الخاطئ: أنه معصوم ويحفظ كل شيء',
              desc: 'بما أنه قرأ كل الإنترنت فهو دائماً يعطي حقائق دقيقة بنسبة 100% ولا يخطئ أبداً.',
              isCorrect: false
            },
            {
              id: 2,
              title: 'الاستنتاج العبقري الحقيقي (المستنتج العلمي):',
              desc: 'إنه يتنبأ بالنص التالي الأكثر تناسقاً لغوياً فقط، ولا يتأكد من صحته العلمية أو التاريخية في العالم الحقيقي!',
              isCorrect: true
            }
          ].map((opt) => {
            const isSelected = selectedDeduction === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => {
                  setSelectedDeduction(opt.id);
                  setIsDeductionRevealed(true);
                }}
                className={`p-4 rounded-xl text-right transition-all border ${
                  isSelected
                    ? opt.isCorrect
                      ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-lg shadow-emerald-500/20'
                      : 'bg-red-500/20 border-red-400 text-white shadow-lg shadow-red-500/20'
                    : 'bg-white/5 border-white/10 hover:border-violet-400/40 text-slate-300 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-sm font-cairo">{opt.title}</span>
                  {isDeductionRevealed && isSelected && (
                    <span className="text-xs px-2 py-0.5 rounded-full font-bold">
                      {opt.isCorrect ? '✅ استنتاج صحيح!' : '❌ غير صحيح'}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-tajawal">
                  {opt.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Revealed Concept: What is Hallucination? */}
        {isDeductionRevealed && (
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 animate-fadeIn">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-amber-300 font-cairo">
                المفهوم العلمي: الهلوسة الرقمية (AI Hallucination)
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-tajawal">
                هي حالة يقوم فيها نموذج الذكاء الاصطناعي بتوليد معلومات غير صحيحة، أو تأليف أحداث تاريخية ومراجع علمية وهمية، لكنه يقدمها بأسلوب بلاغي فصيح ونبرة واثقة بنسبة 100%!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* The Chile Visa Real Story Simulation Card */}
      <div className="rounded-3xl p-6 sm:p-8 glass-panel-elevated border border-rose-500/30 space-y-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-rose-400 font-bold">قصة واقعية موثقة</span>
              <h3 className="text-lg font-bold text-white font-cairo">
                كارثة مطار سانتياغو: قصة فيزا تشيلي
              </h3>
            </div>
          </div>

          {/* Story Stage Stepper */}
          <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10 text-xs">
            <button
              onClick={() => setStoryStage(1)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                storyStage === 1 ? 'bg-rose-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              1. السؤال
            </button>
            <button
              onClick={() => setStoryStage(2)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                storyStage === 2 ? 'bg-amber-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              2. الهلوسة
            </button>
            <button
              onClick={() => setStoryStage(3)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                storyStage === 3 ? 'bg-red-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              3. صدمة المطار 🚫
            </button>
          </div>
        </div>

        {/* Story Interactive Stage Viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Visual Scene on Left */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 relative aspect-[4/3] group shadow-xl">
            <img
              src="/src/assets/images/ai_chile_visa_story_1793977319366.jpg"
              alt="Chile Visa Hallucination Scene"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060814] via-black/30 to-transparent" />
            <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-xs text-slate-300 bg-black/60 backdrop-blur-md p-2 rounded-xl border border-white/10">
              <span className="flex items-center gap-1.5 text-rose-300">
                <Plane className="w-3.5 h-3.5" />
                <span>مطار تشيلي الدولي</span>
              </span>
              <span className="font-mono text-amber-300">Confidently Incorrect</span>
            </div>
          </div>

          {/* Interactive Story Progression on Right */}
          <div className="lg:col-span-7 space-y-4">
            {storyStage === 1 && (
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="text-cyan-400 font-bold">المحطة 1: التخطيط للسفر</span>
                  <span>قبل المغادرة بأسبوع</span>
                </div>
                <div className="p-3.5 rounded-xl bg-violet-950/40 border border-violet-500/30 text-white text-xs leading-relaxed">
                  💬 المسافر يكتب للذكاء الاصطناعي:
                  <p className="text-sm font-bold text-cyan-200 mt-1">
                    "هل أحتاج تأشيرة (فيزا) مسبقة للسفر إلى جمهورية تشيلي بجوازي؟"
                  </p>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-tajawal">
                  المسافر أراد توفير الوقت بدلاً من زيارة موقع وزارة الخارجية، وظن أن الذكاء الاصطناعي يملك تحديثات فورية موثوقة بنسبة 100%.
                </p>
                <button
                  onClick={() => setStoryStage(2)}
                  className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <span>شاهد رد الذكاء الاصطناعي ➔</span>
                </button>
              </div>
            )}

            {storyStage === 2 && (
              <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between text-xs text-amber-400">
                  <span className="font-bold">المحطة 2: الرد المهلوس بثقة عمياء</span>
                  <span>توليد خيالي</span>
                </div>
                <div className="p-3.5 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-100 text-xs leading-relaxed space-y-1">
                  <div className="font-bold text-amber-300">🤖 رد الذكاء الاصطناعي الواثق:</div>
                  <p className="text-xs font-mono">
                    "يسرني إخبارك بأنك <span className="underline font-bold text-white">لا تحتاج لأي تأشيرة مسبقة</span> لدخول تشيلي! يمكنك الدخول مجاناً والإقامة لمدة 90 يوماً كسائح. رحلة سعيدة!"
                  </p>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-tajawal">
                  لاحظ كيف صيغت الإجابة بأسلوب ودي وفصيح بدون أدنى تردد أو كلمة شك واحدة! هذا هو جوهر الهلوسة.
                </p>
                <button
                  onClick={() => setStoryStage(3)}
                  className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <span>شاهد ما حدث في المطار 🚫</span>
                </button>
              </div>
            )}

            {storyStage === 3 && (
              <div className="p-5 rounded-2xl bg-red-950/40 border border-red-500/40 space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between text-xs text-red-400">
                  <span className="font-bold flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>المحطة 3: الصدمة الكبرى في الجوازات!</span>
                  </span>
                  <span className="font-mono text-red-300 font-bold">رفض الدخول</span>
                </div>
                <div className="p-4 rounded-xl bg-red-950/70 border border-red-500/50 text-red-200 text-xs leading-relaxed space-y-2">
                  <div className="text-sm font-bold text-white">
                    🚫 ختم المطار: ENTRY DENIED - ترحيل فوري
                  </div>
                  <p className="text-xs text-slate-200">
                    عند وصول المسافر لكاونتر الجوازات في سانتياغو، طالبوه بالفيزا المسبقة. وعندما أخبرهم: "شات جي بي تي قال لي لا أحتاج فيزا!"، ضحك الضابط ورفض دخوله، وتم ترحيله على أول طائرة بعد خسارة تذاكر وفنادق بآلاف الدولارات!
                  </p>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-400 font-mono">المصدر: قضايا حقيقية موثقة عالمياً</span>
                  <button
                    onClick={() => setStoryStage(1)}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>إعادة القصة</span>
                  </button>
                </div>
              </div>
            )}

            {/* The Golden Takeaway Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-red-600/20 via-amber-600/20 to-transparent border border-amber-500/30 space-y-1.5">
              <div className="text-xs font-bold text-amber-300">
                الحكمة الذهبية التي يجب أن يحفظها كل طالب:
              </div>
              <p className="text-sm font-bold text-white font-cairo">
                "الذكاء الاصطناعي يذيع الكذب أحياناً بثقة مطلقة! (Confidently Incorrect)"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Triple Fact-Checking Shield */}
      <div className="rounded-2xl p-6 glass-panel border border-cyan-500/20 space-y-4">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-cyan-400" />
          <h3 className="text-base font-bold text-white font-cairo">
            درع الأمان الثلاثي: كيف تحمي نفسك من الهلوسة؟
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
            <div className="text-xs font-bold text-cyan-300">1. اطلب المراجع الرسمية</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              اطلب دائماً من الذكاء الاصطناعي إرفاق الروابط الحكومية أو مصادر الكتب للتأكد بنفسك.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
            <div className="text-xs font-bold text-cyan-300">2. شرط الاعتراف بعدم المعرفة</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              أضف في نهاية أمرك: "إذا لم تكن متأكداً بنسبة 100%، قل صراحة: لا أعلم، ولا تؤلف!".
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
            <div className="text-xs font-bold text-cyan-300">3. تجنب القرارات الحرجة</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              لا تعتمد عليه أبداً في التشخيص الطبي، القضايا القانونية، أو السفر دون تدقيق بشري موثوق.
            </p>
          </div>
        </div>
      </div>

      {/* Slide Navigation Bottom Strip */}
      <div className="p-5 rounded-2xl glass-panel border border-violet-500/20 flex items-center justify-between flex-wrap gap-4">
        <div>
          <span className="text-xs text-amber-400 font-bold">المحطة العقدية والأخلاقية الأهم:</span>
          <p className="text-sm font-bold text-white font-cairo">
            إذا كان الذكاء الاصطناعي يهلوس ويجمع الكلام فقط.. هل يجوز أن نأخذ منه فتوى أو عقيدة؟
          </p>
        </div>
        <button
          onClick={onNextSlide}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-500 hover:to-rose-500 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-amber-500/25"
        >
          <span>خطورة الفتوى والعقيدة مع AI</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
