import React, { useState } from 'react';
import { Translation } from '../types';
import { Send, CheckCircle2 } from 'lucide-react';

interface WaitlistFormProps {
  text: Translation['waitlist'];
  variant?: 'default' | 'hero';
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ text, variant = 'default' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const isHero = variant === 'hero';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      // Web3Forms API endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
          subject: 'New GoGoGuide Waitlist Signup',
          email: email,
          from_name: 'GoGoGuide Landing Page',
          message: `New waitlist signup: ${email}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setEmail('');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('提交失败，请稍后再试 / Submission failed, please try again later');
      setStatus('idle');
    }
  };

  return (
    <div className={`w-full max-w-md mx-auto transition-all duration-300
      ${isHero 
        ? 'p-0' // Hero styling handled by parent
        : 'bg-white p-8 shadow-2xl shadow-black/20 rounded-3xl' // Default: Clean white card, solid background
      }`}
    >
      {!isHero && (
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{text.title}</h3>
          <p className="text-gray-500 leading-relaxed text-sm">{text.subtitle}</p>
        </div>
      )}

      {status === 'success' ? (
        <div className={`text-center animate-fade-in-up ${isHero ? 'py-4' : 'bg-brand-50 border border-brand-100 rounded-2xl p-8'}`}>
          <CheckCircle2 className={`w-14 h-14 mx-auto mb-4 ${isHero ? 'text-brand-700' : 'text-brand-500'}`} />
          <p className={`font-semibold text-xl ${isHero ? 'text-brand-900' : 'text-brand-800'}`}>{text.success}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={isHero ? "space-y-4" : "space-y-5"}>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={text.placeholder}
              className={`w-full px-6 rounded-xl border outline-none transition-all text-gray-800 placeholder:text-gray-400
                ${isHero 
                  ? 'py-3.5 bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-brand-500/50' 
                  : 'py-4 bg-gray-50 border-gray-200 focus:bg-white focus:border-brand-300 focus:ring-4 focus:ring-brand-100'
                }`}
              required
              disabled={status === 'loading'}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full font-bold rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg
              ${isHero
                ? 'bg-brand-800 hover:bg-brand-900 text-white py-3.5 px-6 shadow-brand-900/20'
                : 'bg-brand-600 hover:bg-brand-700 text-white py-4 px-6 shadow-brand-500/30'
              }`}
          >
            {status === 'loading' ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <>
                {text.button} <Send size={18} />
              </>
            )}
          </button>
          <p className={`text-xs text-center font-medium tracking-wide ${isHero ? 'text-gray-500' : 'text-brand-500/70'}`}>
            {text.spotsLeft}
          </p>
        </form>
      )}
    </div>
  );
};

export default WaitlistForm;