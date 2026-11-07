import React, { useState } from 'react';
import {
  ShieldAlert,
  AlertTriangle,
  HelpCircle,
  Sparkles,
  ArrowLeft,
  RotateCcw,
  BookOpen,
  Calendar,
  XCircle,
  CheckCircle2,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { IMAGES } from '../../constants/images';

interface Slide5NoFatwaProps {
  onNextSlide: () => void;
}

export const Slide5NoFatwaInAI: React.FC<Slide5NoFatwaProps> = ({ onNextSlide }) => {
  // Interactive Simulation State:
  // 1: The Question & The Real Screenshot
  // 2: Dissecting the Absurdity (تشريح التخريف)
  // 3: The Golden Rules for Muslims with AI
  const [activeTab, setActiveTab] = useState<'evidence' | 'analysis' | 'rules'>('evidence');

  // Interactive Question Simulation Test
  const [showExplanation, setShowExplanation] = useState(true);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="rounded-3xl p-6 sm:p-8 glass-panel-elevated border border-amber-500/30 relative overflow-hidden text-center sm:text-right">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>قضية عقدية وفقهية حاسمة · احذر الفتاوى المولدة!</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-cairo leading-snug">
            لماذا لا يجوز أبداً أخذ الفتوى والدين
            <span className="block text-transparent bg-clip-text bg-gradient-to-l from-amber-300 via-rose-300 to-red-400">
              من الذكاء الاصطناعي؟
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-tajawal max-w-3xl leading-relaxed">
            الذكاء الاصطناعي لا يستطيع أن يقول لك <strong className="text-white">"لا أعلم"</strong>؛ لأن برمجته تقتضي فقط إرضاءك وتوقع الجواب بأي ثمن، فيبدأ بالتخريف، والتأويل، وتأليف الفتاوى الكارثية من عنده بكل ثقة!
          </p>
        </div>
      </div>

      {/* Main Real Evidence Showcase: The User's Real Screenshot of ChatGPT */}
      <div className="rounded-3xl p-6 sm:p-8 glass-panel-elevated border border-rose-500/30 space-y-6 relative overflow-hidden shadow-2xl shadow-rose-950/30">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-rose-400 font-bold">دليل واقعي موثق من التجربة الحية</span>
              <h3 className="text-base sm:text-lg font-bold text-white font-cairo">
                فضيحة ChatGPT: فتوى اجتماع عيد الفطر وعيد الأضحى في يوم واحد!
              </h3>
            </div>
          </div>

          {/* Tab buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10 text-xs">
            <button
              onClick={() => setActiveTab('evidence')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'evidence' ? 'bg-rose-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              1. لقطة الشاشة الحقيقية 📸
            </button>
            <button
              onClick={() => setActiveTab('analysis')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'analysis' ? 'bg-amber-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              2. تشريح التخريف 🔍
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'rules' ? 'bg-emerald-600 text-white font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              3. قواعد النجاة 🛡️
            </button>
          </div>
        </div>

        {/* Tab 1: The Real Screenshot & The Story */}
        {activeTab === 'evidence' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Column: The Real Screenshot Image in a High-Tech Frame */}
              <div className="lg:col-span-7 rounded-2xl overflow-hidden border-2 border-rose-500/40 bg-black/80 p-3 space-y-2 shadow-2xl relative group">
                <div className="flex items-center justify-between px-2 py-1 bg-white/5 rounded-lg text-[11px] text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                    <span>محادثة حقيقية موثقة مع ChatGPT</span>
                  </div>
                  <span className="text-rose-400 font-bold">تخريف وتأليف فتوى</span>
                </div>

                {/* The Screenshot Image Display */}
                <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0a0a14] relative">
                  <img
                    src={IMAGES.chatgptFatwaScreenshot}
                    alt="ChatGPT Eid Fatwa Hallucination Screenshot"
                    className="w-full h-auto object-contain max-h-[280px] mx-auto group-hover:scale-[1.02] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-2 rounded-lg bg-rose-950/40 border border-rose-500/20 text-[11px] text-rose-300 text-center font-mono">
                  📸 لقطة شاشة حية ملتقطة من محادثة مع الذكاء الاصطناعي
                </div>
              </div>

              {/* Right Column: Breakdown of what happened */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
                    <MessageSquare className="w-4 h-4" />
                    <span>السؤال الفخ الذي طرحه المستخدم:</span>
                  </div>
                  <div className="p-3 rounded-xl bg-violet-950/40 border border-violet-500/30 text-white font-bold text-xs sm:text-sm">
                    "اذا جاء عيد الفطر والاضحى في نفس اليوم ما هي الصلاة التي ابدا بها"
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/40 space-y-2">
                  <div className="flex items-center justify-between text-xs text-rose-300 font-bold">
                    <span>🤖 رد ChatGPT الذي ألّفه من عنده:</span>
                    <span className="font-mono text-[10px] bg-red-900/60 px-2 py-0.5 rounded text-white">
                      تخريف مطلق
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-mono text-white leading-relaxed bg-black/60 p-3 rounded-xl border border-rose-500/20">
                    "إذا اجتمع عيد الفطر وعيد الأضحى في يوم واحد، فإنك تبدأ بصلاة عيد الفطر، ثم صلاة عيد الأضحى."
                  </p>
                </div>

                <button
                  onClick={() => setActiveTab('analysis')}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-500 hover:to-rose-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-rose-950/40"
                >
                  <span>شاهد تشريح هذه الكارثة الفقهية ➔</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Dissecting the Absurdity (لماذا خرف الذكاء الاصطناعي؟) */}
        {activeTab === 'analysis' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Fact 1: Astronomical & Sharia Impossibility */}
              <div className="p-5 rounded-2xl bg-red-950/30 border border-red-500/30 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-red-400 text-xs font-bold">
                    <Calendar className="w-4 h-4" />
                    <span>الاستحالة الشرعية والفلكية القاطعة:</span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-cairo">
                    مستحيل فلكياً وشرعياً أن يلتقي العيدان في يوم واحد!
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-200 leading-relaxed">
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-400 font-bold">•</span>
                      <span><strong>عيد الفطر:</strong> يكون في <strong className="text-cyan-300">1 شوال</strong> بعد انقضاء شهر رمضان المبارك.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-400 font-bold">•</span>
                      <span><strong>عيد الأضحى:</strong> يكون في <strong className="text-cyan-300">10 ذي الحجة</strong> يوم النحر بعد يوم عرفة.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-amber-400 font-bold">•</span>
                      <span><strong>الفارق الزمني بينهما:</strong> أكثر من شهرين و 10 أيام كاملة!</span>
                    </li>
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-red-500/20 text-xs text-red-200">
                  ⚡ <strong>النتيجة:</strong> أي طفل مسلم يعرف أن العيدين لا يمكن أن يجتمعا أبداً في نفس اليوم!
                </div>
              </div>

              {/* Fact 2: Why AI failed so miserably */}
              <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                    <AlertTriangle className="w-4 h-4" />
                    <span>لماذا لم يقل الذكاء الاصطناعي: "هذا مستحيل ولا أعلم"؟</span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-cairo">
                    السر القاتل: الآلة مبرمجة على التوقع والتأليف فقط!
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed font-tajawal">
                    الذكاء الاصطناعي لا يملك عقلاً ولا إيماناً ولا فقهاً؛ هو مجرد خوارزمية إحصائية مبرمجة على ألا تتوقف عن الكلام! لو سألته سؤالاً مبنياً على كذبة أو افتراض مستحيل، <strong>سيؤلف لك حكماً وفتوى خيالية كاملة</strong> ويرتب لك الصلاة: "صلِّ الفطر أولاً ثم الأضحى"!
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-amber-500/20 text-xs text-amber-200">
                  ⚠️ <strong>الخطر الداهم:</strong> تخيّل لو اعتمد شخص على هذا الروبوت في صلاته وصيامه وعباداته وزواجه وطلاقه!
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setActiveTab('rules')}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white text-xs font-bold transition-all shadow-lg"
              >
                شاهد القواعد الأربع لحماية دينك وعقيدتك ➔
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: The 4 Golden Rules */}
        {activeTab === 'rules' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-right">
              <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/30 space-y-1.5">
                <div className="text-xs font-bold text-red-300">
                  🚫 1. لا يستطيع قول "لا أعلم"
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  الإمام مالك رحمه الله سُئل عن 48 مسألة فقال في 32 منها "لا أدري"، بينما الذكاء الاصطناعي يفتي في كل مستحيل بالتخريف!
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 space-y-1.5">
                <div className="text-xs font-bold text-amber-300">
                  ⚠️ 2. انعدام الإيمان والتقوى
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  الفتوى دين وأمانة وتوقيع عن رب العالمين، والآلة مجرد كود لا يخشى الله ولا يميّز بين الحلال والحرام.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-1.5">
                <div className="text-xs font-bold text-emerald-300">
                  ✅ 3. استخدامه في العلوم الدنيوية فقط
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  استخدمه في كتابة الأكواد، حل مسائل الرياضيات، ترجمة اللغات، وتنظيم المشاريع الدراسية فقط.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-1.5">
                <div className="text-xs font-bold text-cyan-300">
                  🕌 4. الرجوع للعلماء الراسخين
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  ﴿فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ﴾، العلماء الربانيون هم المرجع المعتمد للدين والعقيدة.
                </p>
              </div>
            </div>

            {/* Golden Quote Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-950/40 via-amber-950/30 to-black border border-amber-500/30 text-center space-y-1">
              <span className="text-xs text-amber-300 font-bold">الحكمة الذهبية التي يجب أن يحفرها كل طالب في قلبه:</span>
              <p className="text-sm sm:text-base font-bold text-white font-cairo">
                "دينك وعقيدتك أغلى من أن تأخذهما من آلة لا تعرف الصدق من الكذب وتخترع الفتاوى لترضيك!"
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Slide Navigation Bottom Strip */}
      <div className="p-5 rounded-2xl glass-panel border border-violet-500/20 flex items-center justify-between flex-wrap gap-4">
        <div>
          <span className="text-xs text-amber-400 font-bold">الخلاصة الإيمانية والعلمية:</span>
          <p className="text-sm font-bold text-white font-cairo">
            عرفنا حدود الآلة، ومخاطر تأليفها في الدين.. والآن حان وقت الانطلاق في خريطة الـ 8 أسابيع!
          </p>
        </div>
        <button
          onClick={onNextSlide}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-violet-500/25"
        >
          <span>انتقل لخريطة الـ 8 أسابيع</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
