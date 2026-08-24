import React, { useState } from 'react';
import { CONTACT_CONFIG } from '../data/initialData';
import { Send, Mail, Linkedin, Github, CheckCircle2, Sparkles, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedChannel, setCopiedChannel] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 6000);
    }, 800);
  };

  const copyToClipboard = (text: string, channelName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedChannel(channelName);
    setTimeout(() => setCopiedChannel(null), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-['Outfit']">
            Have an idea? Let's build it.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Have a project, tool or automation idea? Get in touch with AN Tech.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Communication Channels & Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0a101d] border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white font-['Outfit']">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Whether you need a custom computer-based examination system, a workflow utility tool, or an automation pipeline, reach out anytime.
              </p>

              <div className="space-y-3 pt-2">
                {/* Email Channel */}
                <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between gap-3 shadow-[0_0_20px_rgba(0,240,255,0.08)]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-cyan-500/40 text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-cyan-400 font-semibold">Official Email</div>
                      <a
                        href={`mailto:${CONTACT_CONFIG.email}`}
                        className="text-xs sm:text-sm font-semibold text-white font-mono hover:text-cyan-300 transition-colors"
                      >
                        {CONTACT_CONFIG.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={`mailto:${CONTACT_CONFIG.email}`}
                      className="px-2.5 py-1.5 text-xs font-mono font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                    >
                      Email ↗
                    </a>
                    <button
                      onClick={() => copyToClipboard(CONTACT_CONFIG.email, 'email')}
                      className="p-2 text-slate-400 hover:text-cyan-300 bg-slate-950 rounded-lg border border-slate-800 transition-colors"
                      title="Copy Email"
                    >
                      {copiedChannel === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* LinkedIn Channel Placeholder */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sky-400">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">LinkedIn Profile</div>
                      <div className="text-xs sm:text-sm font-semibold text-white font-mono">{CONTACT_CONFIG.linkedinPlaceholder}</div>
                    </div>
                  </div>
                </div>

                {/* GitHub Channel Placeholder */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">GitHub Repositories</div>
                      <div className="text-xs sm:text-sm font-semibold text-white font-mono">{CONTACT_CONFIG.githubPlaceholder}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0a101d] border border-cyan-500/20 shadow-[0_0_40px_rgba(0,240,255,0.05)]">
              <h3 className="text-xl font-bold text-white mb-2 font-['Outfit']">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below and we will respond promptly.
              </p>

              {isSuccess ? (
                <div className="p-6 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 text-center space-y-2 animate-in zoom-in-95 duration-200">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Message Dispatched!</h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Thank you for reaching out to AN Tech. We have received your inquiry and will review it shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Message or Project Idea *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your software requirement, examination setup, or automation tool idea..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 transition-all duration-200 shadow-[0_0_20px_rgba(0,240,255,0.3)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Dispatching Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
