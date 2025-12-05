import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { CONTENT, HERO_IMAGES } from './constants';
import Countdown from './components/Countdown';
import WaitlistForm from './components/WaitlistForm';
import { Globe, Heart, Sparkles, Languages, Check, ArrowRight } from 'lucide-react';
import { detectUserLanguage, saveLanguagePreference, getSavedLanguagePreference } from './utils/languageDetector';

const App = () => {
  // 优先使用保存的语言偏好，否则使用中文作为初始值
  const [lang, setLang] = useState<Language>(() => getSavedLanguagePreference() || Language.ZH);
  const [isLanguageDetected, setIsLanguageDetected] = useState(false);

  // Initialize with a random image from the list.
  // Lazy initialization ensures this only runs once on mount.
  const [bgImage] = useState(() => HERO_IMAGES[Math.floor(Math.random() * HERO_IMAGES.length)]);

  const t = CONTENT[lang];

  // 自动检测用户语言
  useEffect(() => {
    const detectLanguage = async () => {
      // 如果已有保存的偏好，不再自动检测
      const savedLang = getSavedLanguagePreference();
      if (savedLang) {
        setIsLanguageDetected(true);
        return;
      }

      // 自动检测语言
      const detectedLang = await detectUserLanguage();
      setLang(detectedLang);
      setIsLanguageDetected(true);
      console.log('Auto-detected language:', detectedLang);
    };

    detectLanguage();
  }, []);

  const toggleLanguage = () => {
    setLang(prev => {
      const newLang = prev === Language.EN ? Language.ZH : Language.EN;
      saveLanguagePreference(newLang); // 保存用户的手动选择
      return newLang;
    });
  };

  // Helper to get icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'heart': return <Heart className="w-8 h-8 text-brand-500" />;
      case 'sparkles': return <Sparkles className="w-8 h-8 text-brand-500" />;
      case 'languages': return <Languages className="w-8 h-8 text-brand-500" />;
      default: return <Globe className="w-8 h-8 text-brand-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-50 text-gray-800 overflow-x-hidden selection:bg-brand-200 selection:text-brand-900 font-sans">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/70 backdrop-blur-lg border-b border-brand-100/50 supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-brand-200 transform transition-transform hover:scale-105">
                <Globe size={20} />
              </div>
              <span className="font-bold text-xl tracking-tight text-brand-900">GoGoGuide</span>
            </div>
            
            <div className="flex items-center gap-6">
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 hover:bg-brand-50 transition-all text-sm font-medium text-brand-800 border border-brand-200/50 hover:border-brand-300 shadow-sm"
              >
                <Languages size={16} className="text-brand-600" />
                {lang === Language.EN ? '中文' : 'English'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
               src={bgImage}
               alt="Travel Background"
               className="w-full h-full object-cover animate-[pulse-slow_10s_ease-in-out_infinite] scale-105 transition-opacity duration-1000"
            />
            {/* Gradient Overlay - Refined for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-50/95 via-brand-50/80 to-brand-100/40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-brand-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Content & Countdown (2/3 width) */}
            <div className="lg:col-span-8 text-center lg:text-left flex flex-col items-center lg:items-start space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-brand-200/60 backdrop-blur-md shadow-sm animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                <span className="text-brand-800 text-sm font-bold tracking-wide uppercase">{t.hero.launched}</span>
              </div>
              
              {/* Headings */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-brand-950 tracking-tight leading-[1.1] animate-fade-in-up [animation-delay:100ms]">
                  {t.hero.titlePrefix} <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-600">
                    {t.hero.titleHighlight}
                  </span>
                </h1>
                
                <p className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-700 leading-relaxed font-medium animate-fade-in-up [animation-delay:200ms]">
                  {t.hero.subtitle}
                </p>
              </div>

              {/* Countdown Component */}
              <div className="pt-4 animate-fade-in-up [animation-delay:300ms]">
                 <Countdown text={t.countdown} />
              </div>
            </div>

            {/* Right Column: Waitlist Form - Floating Glass Card (1/3 width) */}
            <div className="lg:col-span-4 w-full animate-fade-in-up [animation-delay:400ms] flex flex-col justify-center">
               <div className="relative group">
                 {/* Decorative blur behind the card */}
                 <div className="absolute -inset-1 bg-gradient-to-r from-brand-400 to-teal-400 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                 
                 {/* Main Card */}
                 <div className="relative bg-white/90 backdrop-blur-xl rounded-[1.8rem] p-6 md:p-8 shadow-2xl border border-white/60">
                   <div className="flex flex-col gap-4">
                     <div className="space-y-1 text-center lg:text-left">
                       <p className="text-brand-950 font-bold text-xl md:text-2xl leading-tight">
                         {t.hero.emailPrompt}
                       </p>
                       <p className="text-sm text-brand-700/70 font-medium">
                         {t.waitlist.spotsLeft}
                       </p>
                     </div>
                     
                     <div className="pt-2">
                       <WaitlistForm text={t.waitlist} variant="hero" />
                     </div>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-100 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl mb-6">{t.features.title}</h2>
            <p className="text-xl text-gray-500">{t.features.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {t.features.items.map((feature, index) => (
              <div key={index} className="group hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-brand-50/50 rounded-3xl p-8 h-full border border-brand-100 hover:border-brand-200 hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 text-brand-500 border border-brand-50">
                    {getIcon(feature.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-brand-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Demo Section */}
      <section className="py-24 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white aspect-video md:aspect-[21/9]">
            {/* Background Image: Peaceful nature scene */}
            <img 
               src="https://picsum.photos/seed/naturecalm/1600/900"
               alt="Peaceful Nature"
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-900/20 backdrop-blur-[2px]"></div>
            
            <div className="absolute inset-0 flex items-center justify-center p-4">
                {/* Chat Interface Mockup */}
                <div className="glass-panel p-6 md:p-8 rounded-3xl max-w-2xl w-full shadow-2xl">
                    <div className="space-y-6">
                        {/* User Message */}
                        <div className="flex items-end justify-end gap-3">
                            <div className="bg-brand-600 text-white px-5 py-3 rounded-2xl rounded-tr-none shadow-md max-w-[80%]">
                                <p className="text-sm md:text-base leading-relaxed">
                                    {lang === Language.EN ? 
                                        "This sunset makes me feel so small, but in a good way." : 
                                        "这落日让我感觉自己好渺小，但心里很平静。"
                                    }
                                </p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0 overflow-hidden border-2 border-white">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                            </div>
                        </div>

                        {/* AI Response */}
                        <div className="flex items-end gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white shrink-0 shadow-lg border-2 border-white">
                                <Heart size={18} fill="currentColor" className="text-white/90" />
                            </div>
                            <div className="bg-white/90 text-gray-800 px-5 py-4 rounded-2xl rounded-tl-none shadow-md max-w-[85%]">
                                <p className="text-sm md:text-base leading-relaxed">
                                    {lang === Language.EN ? 
                                        "That is the magic of travel. It reminds us that we are part of something vast and beautiful. Enjoy this moment of peace." : 
                                        "这就是旅行的魔力呀。它温柔地提醒我们，我们也是这宏大美丽世界的一部分。好好享受这份宁静吧。"
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Waitlist Section */}
      <section id="waitlist" className="py-24 bg-brand-950 relative overflow-hidden">
         {/* Refined Background Elements - Darker, cleaner theme */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-brand-800/20 rounded-full mix-blend-screen blur-[100px] animate-pulse-slow"></div>
            <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-emerald-600/10 rounded-full mix-blend-screen blur-[80px] animate-pulse-slow [animation-delay:2s]"></div>
         </div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="text-center lg:text-left">
                   <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                     {lang === Language.EN ? "Find Your Travel Soulmate" : "寻找你的旅行灵魂伴侣"}
                   </h2>
                   <p className="text-brand-100/80 text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                     {lang === Language.EN ? 
                       "Join the limited early bird program. We are accepting only 100 dedicated travelers to help shape the heart and soul of GoGoGuide." : 
                       "加入限量早鸟计划。我们仅寻找 100 位用心感受世界的旅行者，共同塑造 GoGoGuide 的温度与灵魂。"
                     }
                   </p>
                   <ul className="space-y-5 text-brand-50 inline-block text-left">
                      {[
                        lang === Language.EN ? "Early access to emotional engine" : "优先体验情感共鸣引擎",
                        lang === Language.EN ? "Lifetime community membership" : "终身社群会员资格",
                        lang === Language.EN ? "Shape the product personality" : "参与塑造产品性格"
                      ].map((item, i) => (
                          <li key={i} className="flex items-center gap-4 group">
                              <div className="w-6 h-6 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center group-hover:bg-brand-500 group-hover:border-brand-500 transition-all duration-300">
                                <Check size={14} className="text-brand-200 group-hover:text-white transition-colors" />
                              </div>
                              <span className="font-medium tracking-wide text-brand-100/90 group-hover:text-white transition-colors">{item}</span>
                          </li>
                      ))}
                   </ul>
                </div>
                
                <div className="relative flex justify-center lg:justify-end">
                    {/* Decorative glow behind form - Subtle */}
                    <div className="absolute inset-0 bg-brand-500/10 blur-3xl rounded-full transform scale-90 pointer-events-none"></div>
                    
                    {/* The form sits directly here, no extra wrapper div with background */}
                    <div className="w-full max-w-md">
                        <WaitlistForm text={t.waitlist} variant="default" />
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-950 py-12 text-center border-t border-brand-900/50">
         <p className="text-brand-400/60 text-sm font-medium tracking-wide">{t.footer.copyright}</p>
      </footer>
    </div>
  );
};

export default App;