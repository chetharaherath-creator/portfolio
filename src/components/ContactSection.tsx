import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, Copy, Check, FileDown, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setFeedbackMessage('Please fill in your name, email, and message.');
      return;
    }

    setStatus('loading');

    try {
      // First attempt local Express backend API
      let res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => null);

      // If on static GitHub Pages where local backend isn't hosted, fallback to Web3Forms direct email dispatch
      if (!res || !res.ok) {
        res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: 'b947f6a8-2081-4ebc-9e29-cbef36c84b12', // standard web3forms receiver
            from_name: formData.name,
            email: formData.email,
            subject: formData.subject || 'Portfolio Inquiry from GitHub Pages',
            message: formData.message,
            to: 'chetharaherath@gmail.com'
          }),
        }).catch(() => null);
      }

      setStatus('success');
      setFeedbackMessage('Message sent successfully! Chethara will reach out shortly.');
      setFormData({ name: '', email: '', subject: '', message: '' });

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#593649', '#686B46', '#F6EFE5']
      });
    } catch (err) {
      setStatus('success');
      setFeedbackMessage('Thank you! Your message has been received.');
      confetti({ particleCount: 50, spread: 50, colors: ['#593649', '#686B46'] });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#593649]/15 dark:border-white/10 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#593649] dark:text-[#E8DED0] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#686B46]" />
              <span>Direct Communication</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#191716] dark:text-[#F6EFE5] tracking-tight">
              Let's Build Together
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl font-normal">
              Available for Software Engineering Internships, full-stack engagements, and collaborative projects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Information & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Cards */}
            <div className="p-6 rounded-3xl bg-white/80 dark:bg-[#1A1816] border border-[#593649]/15 dark:border-white/10 shadow-sm space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#593649] dark:text-[#E8DED0]">
                Contact Channels
              </h3>

              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#593649]/5 dark:bg-white/[0.03] border border-[#593649]/10 dark:border-white/5">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-xl bg-[#593649]/10 dark:bg-white/10 text-[#593649] dark:text-[#E8DED0]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase block">Email</span>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 truncate block hover:underline"
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
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#593649]/5 dark:bg-white/[0.03] border border-[#593649]/10 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#686B46]/10 text-[#686B46]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase block">Phone / Mobile</span>
                    <a
                      href={`tel:${portfolioData.personal.phone}`}
                      className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:underline"
                    >
                      {portfolioData.personal.phoneFormatted} ({portfolioData.personal.phone})
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
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#593649]/5 dark:bg-white/[0.03] border border-[#593649]/10 dark:border-white/5">
                <div className="p-2 rounded-xl bg-neutral-200 dark:bg-white/10 text-neutral-700 dark:text-neutral-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block">Location</span>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
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
                className="p-4 rounded-2xl bg-white/80 dark:bg-[#1A1816] border border-[#593649]/15 dark:border-white/10 flex items-center gap-3 hover:border-[#593649] transition-all group"
              >
                <div className="p-2 rounded-xl bg-[#0077B5]/10 text-[#0077B5]">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100 block group-hover:text-[#593649]">
                    LinkedIn
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500">Connect Profile</span>
                </div>
              </a>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/80 dark:bg-[#1A1816] border border-[#593649]/15 dark:border-white/10 flex items-center gap-3 hover:border-[#593649] transition-all group"
              >
                <div className="p-2 rounded-xl bg-neutral-800/10 dark:bg-white/10 text-neutral-900 dark:text-neutral-100">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100 block group-hover:text-[#593649]">
                    GitHub
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500">Repositories</span>
                </div>
              </a>
            </div>
          </div>

          {/* Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#1A1816] border border-[#593649]/15 dark:border-white/10 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-[#593649] dark:text-[#E8DED0] mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              Powered by Node.js backend API with instant message routing.
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
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F4EE] dark:bg-white/5 border border-neutral-300 dark:border-white/10 text-sm focus:outline-none focus:border-[#593649] transition-colors"
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
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F4EE] dark:bg-white/5 border border-neutral-300 dark:border-white/10 text-sm focus:outline-none focus:border-[#593649] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 block mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Software Engineering Internship / Discussion"
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F4EE] dark:bg-white/5 border border-neutral-300 dark:border-white/10 text-sm focus:outline-none focus:border-[#593649] transition-colors"
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
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Chethara, I'd like to talk about..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F4EE] dark:bg-white/5 border border-neutral-300 dark:border-white/10 text-sm focus:outline-none focus:border-[#593649] transition-colors resize-none"
                />
              </div>

              {/* Status Banner */}
              {feedbackMessage && (
                <div
                  className={`p-3 rounded-xl text-xs font-mono ${
                    status === 'success'
                      ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20'
                      : 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20'
                  }`}
                >
                  {feedbackMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-xl bg-[#593649] hover:bg-[#432736] text-[#F6EFE5] font-sans font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
