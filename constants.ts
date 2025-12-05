import { Language, Translation } from './types';

export const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // 1. Original Van/Travel
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // 2. Green Valley/Nature
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // 3. Forest Road
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // 4. Lake Landscape
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // 5. Mountain Hiking
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // 6. Foggy Forest
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // 7. Sunlight Woods
  "https://images.unsplash.com/photo-1501854140884-074cf2b21d25?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // 8. Alpine Lake
  "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // 9. Mountain Hiker/View
  "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", // 10. Forest Path
];

export const CONTENT: Record<Language, Translation> = {
  [Language.EN]: {
    nav: {
      features: "Features",
      about: "About Us",
      join: "Join Early",
    },
    hero: {
      titlePrefix: "Travel smarter with",
      titleHighlight: "Your Pocket Guide",
      subtitle: "Expert insights when you want them. Complete freedom when you don't. No tourist traps, no schedules.",
      cta: "Join the Waitlist",
      launched: "Coming Feb 14",
      emailPrompt: "Get early access:",
    },
    countdown: {
      days: "Days",
      hours: "Hours",
      minutes: "Mins",
      seconds: "Secs",
      launchingText: "Meeting you this Valentine's Day",
    },
    features: {
      title: "Why GoGoGuide?",
      subtitle: "We get it. Modern travel has real problems.",
      items: [
        {
          title: "Expert Stories, No Small Talk",
          description: "Want deep local knowledge without the awkward chit-chat? Get professional insights while exploring at your own pace. No pressure, no rushing.",
          icon: "heart"
        },
        {
          title: "Zero Shopping Traps",
          description: "Sick of guides dragging you to gift shops? No commissions here. Just authentic experiences for your curiosity, not someone's wallet.",
          icon: "sparkles"
        },
        {
          title: "Ready When You Are",
          description: "Sudden sunset adventure? No booking needed. GoGoGuide lives in your pocket, ready whenever wanderlust hits.",
          icon: "languages"
        }
      ]
    },
    waitlist: {
      title: "Join the First 100",
      subtitle: "Be among the first travelers to experience guideless guiding.",
      placeholder: "Enter your email",
      button: "Join Early Bird",
      success: "You're in! We'll be in touch soon.",
      spotsLeft: "Only 42 spots remaining.",
    },
    footer: {
      copyright: "© 2025 GoGoGuide. All rights reserved.",
    }
  },
  [Language.ZH]: {
    nav: {
      features: "功能特色",
      about: "关于我们",
      join: "加入早鸟",
    },
    hero: {
      titlePrefix: "更聪明的旅行",
      titleHighlight: "口袋里的导游",
      subtitle: "想要专业讲解时就有。想要自由探索时就走。不踩坑，不赶场。",
      cta: "加入等候名单",
      launched: "2月14日 温暖上线",
      emailPrompt: "抢先体验：",
    },
    countdown: {
      days: "天",
      hours: "时",
      minutes: "分",
      seconds: "秒",
      launchingText: "情人节 · 浪漫邂逅",
    },
    features: {
      title: "为什么选择 GoGoGuide？",
      subtitle: "我们懂。旅行确实有这些烦恼。",
      items: [
        {
          title: "专业讲解，零社交负担",
          description: "想听当地故事，但不想应付闲聊？专业讲解随时有，按自己节奏逛。不尴尬，不赶路。",
          icon: "heart"
        },
        {
          title: "零购物陷阱",
          description: "烦透了被拉去礼品店？这里没回扣。只有真实体验，为你的好奇心服务，不是别人的钱包。",
          icon: "sparkles"
        },
        {
          title: "随时出发",
          description: "突然想看日落？不用预约。GoGoGuide 在你口袋里，说走就走。",
          icon: "languages"
        }
      ]
    },
    waitlist: {
      title: "加入首批 100 人",
      subtitle: "首批体验「无导游的导游」服务。",
      placeholder: "输入您的邮箱地址",
      button: "加入早鸟",
      success: "搞定！我们会尽快联系你。",
      spotsLeft: "早鸟名额仅剩 42 位。",
    },
    footer: {
      copyright: "© 2025 GoGoGuide. 保留所有权利。",
    }
  }
};