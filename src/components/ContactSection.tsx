import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, MessageSquare, Terminal } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Software Engineering Opportunity / Project');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const getMailtoLink = () => {
    return `mailto:${DEVELOPER_PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Weldon,\n\nFrom: ${name} (${email})\n\nMessage:\n${message}`)}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#080C14] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase font-mono">
            GET IN TOUCH · INQUIRIES &amp; OPPORTUNITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Let’s Build Something Reliable Together
          </h2>
          <p className="text-base text-slate-300">
            I am currently open to full-time software engineering roles, technical contract architectures, and high-impact distributed web application projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Developer Links & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0E1524] border border-slate-800 space-y-6">
              <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Direct Contact Channels</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs font-mono">EMAIL</span>
                    <a href={`mailto:${DEVELOPER_PROFILE.email}`} className="text-white hover:text-cyan-400 font-mono transition-colors">
                      {DEVELOPER_PROFILE.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs font-mono">PHONE &amp; WHATSAPP</span>
                    <a href={`tel:${DEVELOPER_PROFILE.phone}`} className="text-white hover:text-cyan-400 font-mono transition-colors">
                      {DEVELOPER_PROFILE.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs font-mono">LOCATION</span>
                    <span className="text-slate-200">{DEVELOPER_PROFILE.location}</span>
                  </div>
                </div>

              </div>

              {/* Developer Links (GitHub & LinkedIn) */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-2.5">
                <a
                  href={DEVELOPER_PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-850 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={DEVELOPER_PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-850 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1524] border border-slate-800 shadow-xl">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-base font-bold text-white font-display">
                    Send an Inbound Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        YOUR NAME / ORGANIZATION: *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Henderson"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">
                        YOUR EMAIL: *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      INQUIRY TYPE / SUBJECT:
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                    >
                      <option value="Full-Time Software Engineering Opportunity">Full-Time Software Engineering Opportunity</option>
                      <option value="Contract Full-Stack Web Development">Contract Full-Stack Web Development</option>
                      <option value="Fintech & M-Pesa System Architecture">Fintech &amp; M-Pesa System Architecture</option>
                      <option value="Technical Consultation / Other">Technical Consultation / Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      MESSAGE / TECHNICAL SPECIFICATION: *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe the role or software project, technical requirements, timeline, or questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Dispatch Message</span>
                        </>
                      )}
                    </button>

                    <a
                      href={getMailtoLink()}
                      className="text-xs text-slate-400 hover:text-cyan-400 underline font-mono"
                    >
                      Or open in your email client →
                    </a>
                  </div>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      Message Dispatched!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
                      Thank you, <strong className="text-white">{name}</strong>. Weldon Rono will review your note and respond via <strong className="text-white">{email}</strong> promptly.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="text-xs font-mono text-cyan-400 hover:underline pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
