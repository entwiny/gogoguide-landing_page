import { Language } from '../types';

/**
 * 检测用户的首选语言
 * 优先级：
 * 1. URL 参数 (lang=en 或 lang=zh)
 * 2. 浏览器语言设置
 * 3. IP 地理定位（备选）
 */
export async function detectUserLanguage(): Promise<Language> {
  // 1. 检查 URL 参数
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  if (langParam === 'en') return Language.EN;
  if (langParam === 'zh') return Language.ZH;

  // 2. 检查浏览器语言
  const browserLang = getBrowserLanguage();
  if (browserLang) {
    console.log('Detected browser language:', browserLang);
    return browserLang;
  }

  // 3. 尝试通过 IP 检测（备选方案）
  try {
    const ipLang = await getLanguageFromIP();
    if (ipLang) {
      console.log('Detected language from IP:', ipLang);
      return ipLang;
    }
  } catch (error) {
    console.log('IP detection failed, using browser language fallback');
  }

  // 默认返回中文
  return Language.ZH;
}

/**
 * 从浏览器语言设置中检测语言
 */
function getBrowserLanguage(): Language | null {
  // 获取浏览器语言列表
  const languages = navigator.languages || [navigator.language];

  for (const lang of languages) {
    const langCode = lang.toLowerCase();

    // 检查是否是中文
    if (langCode.startsWith('zh')) {
      return Language.ZH;
    }

    // 其他语言默认显示英文
    if (langCode.startsWith('en') ||
        langCode.startsWith('es') ||
        langCode.startsWith('fr') ||
        langCode.startsWith('de') ||
        langCode.startsWith('ja') ||
        langCode.startsWith('ko')) {
      return Language.EN;
    }
  }

  return null;
}

/**
 * 通过 IP 地址检测用户所在国家并返回对应语言
 * 使用免费的 ipapi.co API
 */
async function getLanguageFromIP(): Promise<Language | null> {
  try {
    // 使用 ipapi.co 免费 API（每天 1000 次请求限制）
    const response = await fetch('https://ipapi.co/json/', {
      // 设置 5 秒超时
      signal: AbortSignal.timeout(5000)
    });

    if (!response.ok) {
      throw new Error('IP API request failed');
    }

    const data = await response.json();
    const countryCode = data.country_code;

    console.log('Detected country from IP:', countryCode);

    // 中国大陆、香港、澳门、台湾、新加坡使用中文
    if (['CN', 'HK', 'MO', 'TW', 'SG'].includes(countryCode)) {
      return Language.ZH;
    }

    // 其他国家使用英文
    return Language.EN;

  } catch (error) {
    console.error('Failed to detect language from IP:', error);
    return null;
  }
}

/**
 * 将检测到的语言保存到 localStorage
 */
export function saveLanguagePreference(lang: Language): void {
  try {
    localStorage.setItem('preferredLanguage', lang);
  } catch (error) {
    console.error('Failed to save language preference:', error);
  }
}

/**
 * 从 localStorage 获取保存的语言偏好
 */
export function getSavedLanguagePreference(): Language | null {
  try {
    const saved = localStorage.getItem('preferredLanguage');
    if (saved === Language.EN || saved === Language.ZH) {
      return saved;
    }
  } catch (error) {
    console.error('Failed to get saved language preference:', error);
  }
  return null;
}
