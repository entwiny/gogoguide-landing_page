export enum Language {
  EN = 'EN',
  ZH = 'ZH'
}

export interface Translation {
  nav: {
    features: string;
    about: string;
    join: string;
  };
  hero: {
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    cta: string;
    launched: string;
    emailPrompt: string;
  };
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    launchingText: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  waitlist: {
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
    success: string;
    spotsLeft: string;
  };
  footer: {
    copyright: string;
  };
}