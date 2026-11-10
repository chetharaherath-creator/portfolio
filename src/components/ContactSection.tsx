import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, Copy, Check, X, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'activation_needed' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const autoDismissTimer = useRef<NodeJS.Timeout | null>(null);

  // Clear timer on unmount
  useEffect(() => {
    return () => {
      if (autoDismissTimer.current) {
        clearTimeout(autoDismissTimer.current);
      }
    };
  }, []);

  const clearFeedback = () => {
    if (autoDismissTimer.current) {
      clearTimeout(autoDismissTimer.current);
      autoDismissTimer.current = null;
    }
    setStatus('idle');
    setFeedbackMessage('');
  };

  const setDismissableFeedback = (
    newStatus: 'success' | 'activation_needed' | 'error',
    msg: string,
    delayMs = 7000
  ) => {
    if (autoDismissTimer.current) {
      clearTimeout(autoDismissTimer.current);
    }
    setStatus(newStatus);
    setFeedbackMessage(msg);
    autoDismissTimer.current = setTimeout(() => {
      setStatus('idle');
      setFeedbackMessage('');
    }, delayMs);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    if (status === 'success' || status === 'error' || status === 'activation_needed') {
      clearFeedback();
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setDismissableFeedback('error', 'Please fill in your name, email, and message.', 5000);
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('https://formsubmit.co/ajax/chetharaherath@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject
            ? `[Portfolio Contact] ${formData.subject} - from ${formData.name}`
            : `[Portfolio Contact] New Inquiry from ${formData.name}`,
          message: formData.message,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const data = await res.json().catch(() => null);

      if (data && (data.success === 'true' || data.success === true)) {
        setDismissableFeedback(
          'success',
          "Message sent successfully! Delivered directly to Chethara's inbox.",
          8000
        );
        setFormData({ name: '', email: '', subject: '', message: '' });

        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#543244', '#656744', '#F7F2EA'],
        });
      } else if (
        data &&
        typeof data.message === 'string' &&
        data.message.toLowerCase().includes('activation')
      ) {
        setDismissableFeedback(
          'activation_needed',
          "One-time setup: FormSubmit sent an 'Activate Form' link to chetharaherath@gmail.com. Check your inbox and click it once to receive all future messages directly!",
          12000
        );
      } else {
        setDismissableFeedback(
          'error',
          'Could not send message via form endpoint. Please use the direct email link below.',
          8000
        );
      }
    } catch (err) {
      setDismissableFeedback(
        'error',
        'Network error while sending. Please reach Chethara directly at chetharaherath@gmail.com.',
        8000
      );
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-neutral-200/90 dark:border-white/10 text-xs font-mono tracking-widest uppercase text-[#656744] dark:text-[#B5BC7E] font-bold mb-3 shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#656744] dark:bg-[#B5BC7E]" />
              <span>DIRECT COMMUNICATION</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl text-[#241E22] dark:text-[#F7F2EA] tracking-tight block"
            >
              Let's Connect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-light"
            >
              Available for Software Engineering Internships, full-stack development, and collaborative projects.
            </motion.p>
          </div>
        </div>

        {/* Mobius Architectural Expanding Hairline Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left h-px bg-neutral-200/90 dark:bg-white/10 mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-white/85 dark:bg-[#1D181B] border border-[#543244]/15 dark:border-white/10 shadow-xs space-y-4">
              <h3 className="font-serif text-xl font-semibold text-[#543244] dark:text-[#EFE7DB]">
                Direct Contacts
              </h3>

              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#543244]/5 dark:bg-white/[0.03] border border-[#543244]/10 dark:border-white/5">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-xl bg-[#543244]/10 dark:bg-white/10 text-[#543244] dark:text-[#EFE7DB]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase block">Email</span>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate block hover:underline"
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(portfolioData.personal.email, 'email')}
                  className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-300 transition-colors"
                  title="Copy Email"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#543244]/5 dark:bg-white/[0.03] border border-[#543244]/10 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#656744]/10 text-[#656744]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase block">Phone / WhatsApp</span>
                    <a
                      href={`tel:${portfolioData.personal.phone}`}
                      className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:underline"
                    >
                      {portfolioData.personal.phoneFormatted}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(portfolioData.personal.phone, 'phone')}
                  className="p-2 rounded-xl hover:bg-white dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-300 transition-colors"
                  title="Copy Phone"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#543244]/5 dark:bg-white/[0.03] border border-[#543244]/10 dark:border-white/5">
                <div className="p-2 rounded-xl bg-neutral-200/70 dark:bg-white/10 text-neutral-700 dark:text-neutral-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block">Location</span>
                  <span className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {portfolioData.personal.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/80 dark:bg-[#201B1E] border border-[#543244]/15 dark:border-white/10 flex items-center gap-3 hover:border-[#543244] transition-all group"
              >
                <div className="p-2 rounded-xl bg-[#0077B5]/10 text-[#0077B5]">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 block group-hover:text-[#543244]">
                    LinkedIn
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500">Connect</span>
                </div>
              </a>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/80 dark:bg-[#201B1E] border border-[#543244]/15 dark:border-white/10 flex items-center gap-3 hover:border-[#543244] transition-all group"
              >
                <div className="p-2 rounded-xl bg-neutral-800/10 dark:bg-white/10 text-neutral-900 dark:text-neutral-100">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 block group-hover:text-[#543244]">
                    GitHub
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500">Repositories</span>
                </div>
              </a>
            </div>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/85 dark:bg-[#1D181B] border border-[#543244]/15 dark:border-white/10 shadow-xs">
            <h3 className="font-serif text-2xl font-semibold text-[#543244] dark:text-[#EFE7DB] mb-2">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-6 font-light">
              Direct message to Chethara Herath.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 block mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F2EA] dark:bg-white/5 border border-neutral-300/80 dark:border-white/10 text-sm focus:outline-none focus:border-[#543244] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F2EA] dark:bg-white/5 border border-neutral-300/80 dark:border-white/10 text-sm focus:outline-none focus:border-[#543244] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 block mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  placeholder="Software Engineering Internship"
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F2EA] dark:bg-white/5 border border-neutral-300/80 dark:border-white/10 text-sm focus:outline-none focus:border-[#543244] transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 block mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Hello Chethara..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F7F2EA] dark:bg-white/5 border border-neutral-300/80 dark:border-white/10 text-sm focus:outline-none focus:border-[#543244] transition-colors resize-none"
                />
              </div>

              <AnimatePresence>
                {feedbackMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className={`p-3.5 rounded-xl text-xs font-mono flex items-start justify-between gap-3 ${
                      status === 'success'
                        ? 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20'
                        : status === 'activation_needed'
                        ? 'bg-amber-500/10 text-amber-900 dark:text-amber-300 border border-amber-500/20'
                        : 'bg-rose-500/10 text-rose-800 dark:text-rose-300 border border-rose-500/20'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {status === 'success' && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      )}
                      {status === 'activation_needed' && (
                        <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      )}
                      {status === 'error' && (
                        <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                      )}
                      <span className="leading-relaxed">{feedbackMessage}</span>
                    </div>
                    <button
                      type="button"
                      onClick={clearFeedback}
                      className="p-1 rounded-md text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-black/5 dark:hover:bg-white/5 transition-colors shrink-0 cursor-pointer"
                      title="Dismiss notice"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <MagneticButton
                type="submit"
                disabled={status === 'loading'}
                strength={0.2}
                className="w-full py-3.5 rounded-xl bg-[#543244] hover:bg-[#3C1F2F] text-[#F7F2EA] font-sans font-medium text-sm shadow-xs transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {status === 'loading' ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </MagneticButton>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                <span className="font-mono text-[11px]">Direct recipient: chetharaherath@gmail.com</span>
                <a
                  href={`mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
                    formData.subject || 'Portfolio Inquiry'
                  )}&body=${encodeURIComponent(
                    formData.message || 'Hi Chethara,\n\nI came across your portfolio and would like to connect.'
                  )}`}
                  className="inline-flex items-center gap-1 hover:text-[#543244] dark:hover:text-[#EFE7DB] underline transition-colors"
                >
                  <span>Open in default email app</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
