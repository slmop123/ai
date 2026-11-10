import React, { useState } from 'react';
import {
  XCircle,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  User,
  Shield,
  Car,
  Utensils,
  Shirt,
  Gauge,
  Fuel,
  Check,
  RotateCcw,
  Play,
  Layers,
  ChevronRight
} from 'lucide-react';
import { IMAGES } from '../../constants/images';

interface Slide2Props {
  onNextSlide: () => void;
}

export const Slide2PromptBattle: React.FC<Slide2Props> = ({ onNextSlide }) => {
  // Step progression:
  // 1: Big Question only ("من منكم يعرف كيف يكتب أمر...")
  // 2: Ordinary Prompt revealed ("اصنع لي موقع تجارة إلكترونية باللون الأصفر واللغة العربية") + "توليد الموقع" button
  // 3: Chaotic Bad Website generated (Car, Salad, T-shirt in SAR, MAD, USD) + "انتقال إلى البرومبت الاحترافي" button
  // 4: Professional Prompt revealed (Full paragraph, color-coded continuous text) + "توليد الموقع الاحترافي" button
  // 5: Professional Luxury Moroccan Car Store generated with real car photos + full comparison
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Generating simulation state
  const [isGenerating, setIsGenerating] = useState(false);

  // Booking car state
  const [bookedCar, setBookedCar] = useState<string | null>(null);

  const handleGenerateNormal = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setStep(3);
    }, 700);
  };

  const handleGeneratePro = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setStep(5);
    }, 800);
  };

  const resetFlow = () => {
    setStep(1);
    setBookedCar(null);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Step Indicator Header Bar */}
      <div className="flex items-center justify-between p-3 rounded-2xl glass-panel border border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-cyan-400 font-cairo">مراحل التحدي التفاعلي:</span>
          <div className="flex items-center gap-1.5 font-mono">
            {[
              { num: 1, label: 'السؤال' },
              { num: 2, label: 'البرومبت العادي' },
              { num: 3, label: 'الموقع الفوضوي' },
              { num: 4, label: 'البرومبت الهندسي' },
              { num: 5, label: 'المعرض الفاخر' }
            ].map((s) => (
              <button
                key={s.num}
                onClick={() => setStep(s.num as any)}
                className={`px-2 py-0.5 rounded-lg transition-all text-[11px] ${
                  step === s.num
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm shadow-cyan-400'
                    : step > s.num
                    ? 'bg-white/10 text-cyan-300'
                    : 'bg-white/5 text-slate-500 hover:text-white'
                }`}
              >
                {s.num}. {s.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={resetFlow}
          className="text-slate-400 hover:text-white text-xs flex items-center gap-1 transition-colors"
          title="إعادة التحدي من البداية"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">إعادة من البداية</span>
        </button>
      </div>

      {/* Header Question (Always visible as the anchor) */}
      <div className="rounded-3xl p-6 sm:p-8 glass-panel-elevated border border-violet-500/30 text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>السؤال الأعظم وتحدي الفصل</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-cairo leading-snug">
            من منكم يعرف كيف يكتب أمراً (Prompt) حقيقياً
            <span className="block text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-violet-400">
              للذكاء الاصطناعي؟
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-tajawal max-w-2xl mx-auto">
            الكثير يظن أن كتابة أمر للذكاء الاصطناعي مثل كتابة جملة بحث عادية. دعونا نرى بالتجربة العملية والحيّة ما الذي يحدث عندما نطلب موقعاً إلكترونياً!
          </p>

          {/* Trigger Button to Start / Show Step 2 */}
          {step === 1 && (
            <div className="pt-2">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-red-500 via-rose-600 to-amber-600 hover:from-red-400 hover:to-amber-500 text-white font-bold text-sm shadow-xl shadow-red-500/25 transition-all flex items-center gap-2 mx-auto animate-bounce"
              >
                <span>شاهد كيف يكتب عامة الناس البرومبت العادي</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* STEP 2 & 3: ORDINARY PROMPT & CHAOTIC BAD WEBSITE */}
      {(step === 2 || step === 3) && (
        <div className="rounded-3xl p-6 glass-panel border border-red-500/30 space-y-6 animate-fadeIn bg-gradient-to-b from-[#140a12]/90 to-[#0c0919]/95 shadow-2xl shadow-red-950/40">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                <User className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-red-400 font-bold">المرحلة الأولى</span>
                <h3 className="text-base font-bold text-white font-cairo">
                  طريقة عامة الناس (البرومبت السطحي المجرد)
                </h3>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-bold font-mono">
              مستخدم عادي
            </span>
          </div>

          {/* Ordinary Prompt Display */}
          <div className="p-5 rounded-2xl bg-black/50 border border-red-500/30 space-y-2">
            <div className="text-xs text-slate-400 font-mono flex items-center justify-between">
              <span>نص الأمر كما كتبه المستخدم في الدردشة:</span>
              <span className="text-red-400">بدون دور · بدون سياق · بدون قيود</span>
            </div>
            <div className="text-base sm:text-lg font-bold text-red-200 font-mono bg-red-950/40 p-3.5 rounded-xl border border-red-500/30">
              "اصنع لي موقع تجارة إلكترونية باللون الأصفر واللغة العربية"
            </div>
          </div>

          {/* Action Button: Generate Bad Site */}
          {step === 2 && (
            <div className="text-center py-2">
              <button
                onClick={handleGenerateNormal}
                disabled={isGenerating}
                className="px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white font-bold text-sm shadow-xl shadow-red-600/30 transition-all flex items-center gap-2 mx-auto"
              >
                {isGenerating ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>جاري التوليد بالعشوائية السطحية...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>توليد الموقع بناءً على هذا البرومبت العادي</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Step 3: Generated Chaotic Website Reveal */}
          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-red-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>نتيجة الذكاء الاصطناعي: موقع فوضوي بمنتجات وعملات متضاربة!</span>
                </span>
                <span className="text-xs font-mono text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-500/40">
                  جودة النتيجة: 15% ❌
                </span>
              </div>

              {/* The Chaotic Website Browser Mockup */}
              <div className="rounded-2xl border-2 border-dashed border-red-500/40 bg-[#120a10] p-4 space-y-4 shadow-inner">
                {/* Browser top strip */}
                <div className="p-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-center justify-between text-xs text-yellow-300 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="mr-2 text-slate-300">http://متجري-العشوائي.com</span>
                  </div>
                  <span className="text-[10px] bg-red-900/60 text-red-200 px-2 py-0.5 rounded border border-red-500/40">
                    غير آمن ⚠️
                  </span>
                </div>

                {/* Ugly header */}
                <div className="text-center py-2 bg-gradient-to-r from-pink-900/40 via-red-900/30 to-yellow-900/40 rounded-xl border border-red-500/20">
                  <h4 className="text-base font-extrabold text-yellow-300 underline decoration-wavy decoration-red-500 tracking-wider">
                    🛒 متجر كل شيء وغير مفهوم! اضغط هنا للشراء!
                  </h4>
                  <p className="text-xs text-pink-300 mt-0.5">
                    (تجد سيارة بجانبها سلطة طعام للطلب وبجانبها قميص، وبثلاث عملات مختلفة!)
                  </p>
                </div>

                {/* 3 Mismatched Chaotic Products */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-right">
                  {/* Product 1: Used Car in SAR */}
                  <div className="p-3 rounded-2xl bg-red-950/50 border border-red-500/40 space-y-2 relative">
                    <div className="aspect-[4/3] rounded-xl bg-red-900/30 border border-red-500/20 flex flex-col items-center justify-center p-2 text-center">
                      <Car className="w-10 h-10 text-red-400 mb-1" />
                      <span className="text-xs text-slate-300">سيارة مستعملة موديل 2008</span>
                    </div>
                    <div className="text-xs font-bold text-slate-100">
                      سيارة تويوتا ياريس 2008
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-400 font-mono bg-black/60 px-2 py-0.5 rounded border border-amber-500/30">
                        45,000 ر.س
                      </span>
                      <span className="text-[10px] text-red-400 font-bold">بالريال السعودي!</span>
                    </div>
                    <button className="w-full py-1.5 text-xs font-bold bg-yellow-500 hover:bg-yellow-400 text-slate-950 rounded-lg shadow">
                      اشترِ سيارة الآن!
                    </button>
                  </div>

                  {/* Product 2: Fresh Greek Salad with REAL PHOTO in MAD */}
                  <div className="p-3 rounded-2xl bg-yellow-950/50 border border-yellow-500/40 space-y-2 relative">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden border border-yellow-500/30 relative">
                      <img
                        src={IMAGES.greekSalad}
                        alt="Fresh Greek Salad"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-1 right-1 text-[9px] bg-black/70 text-yellow-300 px-1.5 py-0.5 rounded font-mono">
                        وجبة طعام دليفري
                      </span>
                    </div>
                    <div className="text-xs font-bold text-slate-100">
                      سلطة يونانية طازجة مع زيتون وجبن
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400 font-mono bg-black/60 px-2 py-0.5 rounded border border-emerald-500/30">
                        28 د.م
                      </span>
                      <span className="text-[10px] text-yellow-400 font-bold">بالدرهم المغربي!</span>
                    </div>
                    <button className="w-full py-1.5 text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white rounded-lg shadow">
                      اطلب للغداء الآن!
                    </button>
                  </div>

                  {/* Product 3: Cotton T-Shirt in USD */}
                  <div className="p-3 rounded-2xl bg-pink-950/50 border border-pink-500/40 space-y-2 relative">
                    <div className="aspect-[4/3] rounded-xl bg-pink-900/30 border border-pink-500/20 flex flex-col items-center justify-center p-2 text-center">
                      <Shirt className="w-10 h-10 text-pink-400 mb-1" />
                      <span className="text-xs text-slate-300">ملابس قطنية صيفية</span>
                    </div>
                    <div className="text-xs font-bold text-slate-100">
                      تيشيرت صيفي مقاس XL
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-cyan-400 font-mono bg-black/60 px-2 py-0.5 rounded border border-cyan-500/30">
                        $19.99 USD
                      </span>
                      <span className="text-[10px] text-pink-400 font-bold">بالدولار الأمريكي!</span>
                    </div>
                    <button className="w-full py-1.5 text-xs font-bold bg-red-600 hover:bg-red-500 text-white rounded-lg shadow">
                      Buy T-Shirt Now!
                    </button>
                  </div>
                </div>

                {/* Banner explanation */}
                <div className="p-2.5 rounded-xl bg-red-950/80 border border-red-500/50 text-xs text-red-200 flex items-center justify-between">
                  <span className="font-bold">❌ أخطاء البرومبت السطحي:</span>
                  <span>تضارب 3 عملات مختلفة + وضع سيارة مستعملة بجوار سلطة خضار وبجوار تيشيرت بدون أي سياق!</span>
                </div>
              </div>

              {/* Transition Button to Pro Prompt */}
              <div className="pt-2 text-center">
                <button
                  onClick={() => setStep(4)}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all flex items-center gap-2 mx-auto"
                >
                  <span>الانتقال إلى البرومبت الهندسي الاحترافي ➔</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* STEP 4 & 5: PROFESSIONAL PROMPT (FULL PARAGRAPH COLOR-CODED) & LUXURY MOROCCAN CAR STORE */}
      {(step === 4 || step === 5) && (
        <div className="rounded-3xl p-6 glass-panel-elevated border border-cyan-500/40 space-y-6 animate-fadeIn bg-gradient-to-b from-[#0a142e]/95 to-[#070b1e] shadow-2xl shadow-cyan-950/50">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-cyan-400 font-bold">المرحلة المتقدمة</span>
                <h3 className="text-base font-bold text-white font-cairo">
                  طريقة المبتكر (البرومبت الهندسي المتكامل والملون)
                </h3>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-cyan-200 border border-cyan-400/40 text-xs font-bold font-mono">
              مهندس أوامر ⚡
            </span>
          </div>

          {/* Continuous Full Paragraph Color-Coded Prompt */}
          <div className="p-5 rounded-2xl bg-black/60 border border-cyan-500/30 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
              <span className="text-cyan-300 font-bold">نص البرومبت الهندسي الكامل (كتلة واحدة ملونة بأركانه الأربعة):</span>
              <span className="text-[11px] text-slate-400">كل لون يعبر عن ركن أساسي</span>
            </div>

            {/* Continuous Color-Coded Paragraph */}
            <div className="p-4 rounded-xl bg-[#080d22] border border-cyan-500/30 font-tajawal text-sm sm:text-base leading-relaxed text-right">
              {/* Persona (Cyan) */}
              <span className="text-cyan-400 font-bold bg-cyan-950/40 px-1 py-0.5 rounded inline">
                "بصفتك كبير مهندسي Full-Stack وخبير في بناء معارض السيارات الرقمية الفاخرة وتجربة المستخدم الراقية،
              </span>{' '}
              {/* Context (Violet) */}
              <span className="text-violet-300 font-semibold bg-violet-950/40 px-1 py-0.5 rounded inline">
                نحن نبني منصة تجارة إلكترونية راقية لمعرض سيارات حديثة في المغرب تستهدف عشاق الفخامة،
              </span>{' '}
              {/* Task (Emerald) */}
              <span className="text-emerald-300 font-semibold bg-emerald-950/40 px-1 py-0.5 rounded inline">
                صمم واجهة متجر تفاعلية تعرض سيارات فارهة بمواصفات المحرك والتسارع ونظام حجز تجربة قيادة فوري،
              </span>{' '}
              {/* Constraints (Amber) */}
              <span className="text-amber-300 font-bold bg-amber-950/40 px-1 py-0.5 rounded inline">
                مع الالتزام الصارم بأن تكون العملة المعتمدة حصراً هي الدرهم المغربي (د.م)، والتصميم زجاجي داكن فخم مع شهادة فحص معتمدة وتصنيفات سيارات دقيقة بدون خلط أي منتج آخر."
              </span>
            </div>

            {/* Color Legend for the 4 Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
              <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-cyan-950/50 border border-cyan-500/30 text-cyan-300">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="font-bold">1. الدور (Persona)</span>
              </div>
              <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-violet-950/50 border border-violet-500/30 text-violet-300">
                <span className="w-2.5 h-2.5 rounded-full bg-violet-400" />
                <span className="font-bold">2. السياق (Context)</span>
              </div>
              <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="font-bold">3. المهمة (Task)</span>
              </div>
              <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-amber-950/50 border border-amber-500/30 text-amber-300">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="font-bold">4. القيود (Constraints)</span>
              </div>
            </div>
          </div>

          {/* Action Button: Generate Pro Site */}
          {step === 4 && (
            <div className="text-center py-2">
              <button
                onClick={handleGeneratePro}
                disabled={isGenerating}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-white font-bold text-sm shadow-xl shadow-cyan-500/30 transition-all flex items-center gap-2 mx-auto"
              >
                {isGenerating ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>جاري هندسة وتوليد المعرض الفاخر بالدرهم المغربي...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>توليد الموقع الاحترافي بناءً على هذا البرومبت الهندسي</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Step 5: Generated Luxury Moroccan Car Showroom with Real Photos */}
          {step === 5 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-cyan-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>معرض السيارات الفاخر بالصور الحقيقية والدرهم المغربي 🇲🇦</span>
                </span>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/40">
                  جودة النتيجة: 98% ✨
                </span>
              </div>

              {/* The Luxury Moroccan Car Showroom Mockup */}
              <div className="rounded-2xl border border-cyan-500/40 bg-[#090f24] p-4 space-y-4 shadow-xl shadow-cyan-950/60">
                {/* Browser top strip */}
                <div className="p-2 bg-white/5 border border-white/10 rounded-lg flex items-center justify-between text-xs text-slate-300 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="mr-2 text-cyan-300">https://motors-elite.ma</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                    <Shield className="w-3 h-3 text-emerald-400" />
                    <span>شهادة فحص معتمدة 🇲🇦</span>
                  </span>
                </div>

                {/* Showroom Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-white/[0.04] border border-white/10 rounded-xl">
                  <div className="flex items-center gap-2.5">
                    <Car className="w-5 h-5 text-cyan-400" />
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-white font-cairo">
                        موتورز إيليت المغرب | Motors Elite Maroc
                      </span>
                      <span className="text-[10px] text-slate-400 block">
                        صالة العرض الرقمية للسيارات الفارهة بالدار البيضاء والرباط
                      </span>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">
                    العملة: الدرهم المغربي (د.م) 🇲🇦
                  </div>
                </div>

                {/* 3 Luxury Cars with REAL PHOTOGRAPHS & Moroccan Dirham Prices */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-right">
                  {/* Car 1: Audi RS e-tron GT with Real Photo */}
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 transition-all space-y-2 group/car shadow-lg">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden border border-cyan-500/30 relative">
                      <img
                        src={IMAGES.audiEtron}
                        alt="Audi RS e-tron GT Real Photo"
                        className="w-full h-full object-cover group-hover/car:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full bg-cyan-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/40 font-mono">
                        كهربائية 100%
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white font-cairo">
                      أودي RS E-Tron GT
                    </div>
                    <div className="text-xs text-slate-300 flex items-center justify-between">
                      <span className="flex items-center gap-1 text-cyan-300 font-mono">
                        <Gauge className="w-3.5 h-3.5" /> 0-100 في 3.3 ث
                      </span>
                      <span className="text-slate-400 font-mono">598 حصان</span>
                    </div>
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs text-slate-400">السعر كاش:</span>
                      <span className="text-sm font-bold text-cyan-300 font-mono bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/30">
                        980,000 د.م
                      </span>
                    </div>
                    <button
                      onClick={() => setBookedCar('أودي RS E-Tron GT')}
                      className="w-full py-2 text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Car className="w-3.5 h-3.5" />
                      <span>حجز تجربة قيادة</span>
                    </button>
                  </div>

                  {/* Car 2: Mercedes-AMG G63 with Real Photo */}
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-violet-400/50 transition-all space-y-2 group/car shadow-lg">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden border border-violet-500/30 relative">
                      <img
                        src={IMAGES.mercedesG63}
                        alt="Mercedes-AMG G63 Real Photo"
                        className="w-full h-full object-cover group-hover/car:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full bg-violet-950/80 backdrop-blur-md text-violet-300 border border-violet-500/40 font-mono">
                        دفع رباعي 4x4
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white font-cairo">
                      مرسيدس جي-كلاس AMG G63
                    </div>
                    <div className="text-xs text-slate-300 flex items-center justify-between">
                      <span className="flex items-center gap-1 text-violet-300 font-mono">
                        <Fuel className="w-3.5 h-3.5" /> V8 Biturbo
                      </span>
                      <span className="text-slate-400 font-mono">585 حصان</span>
                    </div>
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs text-slate-400">السعر كاش:</span>
                      <span className="text-sm font-bold text-violet-300 font-mono bg-violet-950/40 px-2 py-0.5 rounded border border-violet-500/30">
                        1,650,000 د.م
                      </span>
                    </div>
                    <button
                      onClick={() => setBookedCar('مرسيدس جي-كلاس AMG G63')}
                      className="w-full py-2 text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>طلب معاينة VIP</span>
                    </button>
                  </div>

                  {/* Car 3: Porsche Cayenne Coupe with Real Photo */}
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-400/50 transition-all space-y-2 group/car shadow-lg">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden border border-emerald-500/30 relative">
                      <img
                        src={IMAGES.porscheCayenne}
                        alt="Porsche Cayenne Coupe Real Photo"
                        className="w-full h-full object-cover group-hover/car:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-2 right-2 text-[10px] px-2 py-0.5 rounded-full bg-emerald-950/80 backdrop-blur-md text-emerald-300 border border-emerald-500/40 font-mono">
                        هايبرد E-Hybrid
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white font-cairo">
                      بورشه كايين كوبيه 2026
                    </div>
                    <div className="text-xs text-slate-300 flex items-center justify-between">
                      <span className="flex items-center gap-1 text-emerald-300 font-mono">
                        <Gauge className="w-3.5 h-3.5" /> تسارع 4.7 ث
                      </span>
                      <span className="text-slate-400 font-mono">460 حصان</span>
                    </div>
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs text-slate-400">السعر كاش:</span>
                      <span className="text-sm font-bold text-emerald-300 font-mono bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                        1,250,000 د.م
                      </span>
                    </div>
                    <button
                      onClick={() => setBookedCar('بورشه كايين كوبيه 2026')}
                      className="w-full py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Car className="w-3.5 h-3.5" />
                      <span>حجز تجربة قيادة</span>
                    </button>
                  </div>
                </div>

                {/* Booking Toast */}
                {bookedCar && (
                  <div className="p-3 rounded-xl bg-emerald-950/90 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between animate-fadeIn">
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>تم بنجاح حجز موعد تجربة قيادة لسيارة: <strong>{bookedCar}</strong> بالدرهم المغربي في صالة الدار البيضاء!</span>
                    </span>
                    <button
                      onClick={() => setBookedCar(null)}
                      className="text-xs text-emerald-400 underline hover:text-white"
                    >
                      إغلاق
                    </button>
                  </div>
                )}
              </div>

              {/* Action: Next Slide or View Both */}
              <div className="p-4 rounded-2xl glass-panel border border-violet-500/30 flex items-center justify-between flex-wrap gap-3">
                <div className="space-y-1">
                  <span className="text-xs text-cyan-400 font-bold">الدرس المستفاد للفصل:</span>
                  <p className="text-xs sm:text-sm text-slate-200">
                    رأيتم كيف تحول الناتج من موقع عشوائي يبيع سلطة وسيارة بتضارب عملات، إلى معرض فخم لسيارات حقيقية بالدرهم المغربي بفضل هندسة الأوامر!
                  </p>
                </div>
                <button
                  onClick={onNextSlide}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-violet-500/25 shrink-0"
                >
                  <span>اكتشف ميلاد التخصص الجديد</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Quick Summary Pill at bottom */}
      <div className="text-center text-xs text-slate-400 font-mono">
        شاهين 01 · ورشة الذكاء الاصطناعي وهندسة الأوامر
      </div>
    </div>
  );
};
