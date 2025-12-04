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
      features: "Philosophy",
      about: "About Us",
      join: "Join Early",
    },
    hero: {
      titlePrefix: "Travel with a friend who",
      titleHighlight: "Truly Understands",
      subtitle: "GoGoGuide is more than an app. It's a companion that shares the wonder of the journey, understands your mood, and connects you to the world without barriers.",
      cta: "Join the Waitlist",
      launched: "Coming Feb 14",
      emailPrompt: "Enter your email to be the first to know:",
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
      subtitle: "We believe travel is about the feeling, not just the facts.",
      items: [
        {
          title: "Always By Your Side",
          description: "A gentle presence that accompanies you through every street and alley. Never feel lonely on a solo trip again.",
          icon: "heart"
        },
        {
          title: "Emotional Connection",
          description: "Share your awe, your curiosity, and your joy. GoGoGuide responds with empathy, turning sightseeing into a shared experience.",
          icon: "sparkles"
        },
        {
          title: "Beyond Language",
          description: "Break down every barrier. Connect deeply with local cultures and histories as if you were a native, anywhere in the world.",
          icon: "languages"
        }
      ]
    },
    waitlist: {
      title: "Become a Founding Member",
      subtitle: "Join the first 100 travelers to find their perfect travel soulmate.",
      placeholder: "Enter your email",
      button: "Join Early Bird",
      success: "Welcome to the family. We'll speak soon.",
      spotsLeft: "Only 42 spots remaining.",
    },
    footer: {
      copyright: "© 2025 GoGoGuide. All rights reserved.",
    }
  },
  [Language.ZH]: {
    nav: {
      features: "产品理念",
      about: "关于我们",
      join: "加入早鸟",
    },
    hero: {
      titlePrefix: "与懂你的",
      titleHighlight: "灵魂伴侣同行",
      subtitle: "GoGoGuide 不仅仅是一个 App。它是陪你感受旅途惊喜、听懂你情绪的伙伴，带你跨越语言障碍，自在探索世界。",
      cta: "加入等候名单",
      launched: "2月14日 温暖上线",
      emailPrompt: "输入邮箱，第一时间开启你的心灵之旅：",
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
      subtitle: "我们相信，旅行的意义在于感受，而不仅仅是打卡。",
      items: [
        {
          title: "温情陪伴",
          description: "穿梭在大街小巷时的温柔守护。无论独自旅行还是漫步异国，有它在，你永远不会感到孤单。",
          icon: "heart"
        },
        {
          title: "情绪价值",
          description: "分享你的惊叹、好奇与快乐。GoGoGuide 能给予充满共鸣的回应，让每一次看风景都变成心灵的交流。",
          icon: "sparkles"
        },
        {
          title: "跨越语言",
          description: "打破所有沟通的壁垒。像当地人一样深入了解文化与历史，无论身在何处，都能自在融入。",
          icon: "languages"
        }
      ]
    },
    waitlist: {
      title: "加入早鸟计划",
      subtitle: "成为首批 100 位找到“旅行灵魂伴侣”的体验者。",
      placeholder: "输入您的邮箱地址",
      button: "加入早鸟",
      success: "欢迎加入大家庭！我们会尽快联系您。",
      spotsLeft: "早鸟名额仅剩 42 位。",
    },
    footer: {
      copyright: "© 2025 GoGoGuide. 保留所有权利。",
    }
  }
};