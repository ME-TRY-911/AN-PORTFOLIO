import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { X, ExternalLink, CheckCircle2, QrCode, Play, Monitor, Download, BookOpen, GraduationCap, ScanText, Copy, Check, Sparkles, FileText, Image as ImageIcon } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'mockups' | 'interactive'>('overview');
  
  // Interactive QR Generator state for Link to QR
  const [qrInputUrl, setQrInputUrl] = useState('https://linktoqr.in');
  const [qrSize, setQrSize] = useState('200');

  // CBT interactive simulator state
  const [cbtQuestionIdx, setCbtQuestionIdx] = useState(0);
  const [cbtSelectedOption, setCbtSelectedOption] = useState<number | null>(null);
  const [cbtSubmitted, setCbtSubmitted] = useState(false);

  // OCR interactive simulator state
  const [ocrSampleType, setOcrSampleType] = useState<'invoice' | 'receipt' | 'handwritten'>('invoice');
  const [isOcrProcessing, setIsOcrProcessing] = useState(false);
  const [ocrCopied, setOcrCopied] = useState(false);

  if (!project) return null;

  const sampleCbtQuestions = [
    {
      q: 'Which algorithm is most optimal for searching in a balanced binary search tree?',
      options: ['O(1) Constant Time', 'O(log n) Logarithmic Time', 'O(n) Linear Time', 'O(n^2) Quadratic Time'],
      correct: 1,
      topic: 'Data Structures'
    },
    {
      q: 'In modern web architecture, what is the primary benefit of TypeScript static typing?',
      options: ['Increases server speed', 'Catches compile-time defects and improves maintainability', 'Replaces relational databases', 'Compresses images automatically'],
      correct: 1,
      topic: 'Software Engineering'
    }
  ];

  const ocrSampleOutputs = {
    invoice: `INVOICE #INV-2026-0842\nDate: 2026-08-22\nClient: AN TECH Solutions\nItems:\n1. Cloud Engine Deployment - $120.00\n2. Database Storage Node - $45.00\n3. AI OCR Recognition Unit - $80.00\nTotal Due: $245.00 (Status: Paid)`,
    receipt: `STORE RECEIPT - TECH MART\nTerminal ID: #884\nTimestamp: 14:32:09 IST\n1x Wireless Optical Scanner ... Rs 1,499.00\n1x USB-C Data Cable ............. Rs 299.00\nSubtotal: Rs 1,798.00\nTax (GST 18%): Rs 323.64\nTotal: Rs 2,121.64\nThank you for shopping!`,
    handwritten: `Meeting Notes (AN Tech Roadmap):\n- Finalize CBT automatic result calculation\n- Link2QR instant client-side QR renderer\n- LibraCore book indexing and overdue ledger\n- TextSnap AI OCR high accuracy document parser`
  };

  const handleRunOcr = () => {
    setIsOcrProcessing(true);
    setTimeout(() => {
      setIsOcrProcessing(false);
    }, 600);
  };

  const handleCopyOcr = () => {
    navigator.clipboard.writeText(ocrSampleOutputs[ocrSampleType]);
    setOcrCopied(true);
    setTimeout(() => setOcrCopied(false), 2000);
  };

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrInputUrl || 'https://linktoqr.in')}&color=00f0ff&bgcolor=0a0f1d`;

  const getDomainFromUrl = (url?: string) => {
    if (!url) return `${project.id}.antech.dev`;
    try {
      const parsed = new URL(url);
      return parsed.hostname + (parsed.pathname !== '/' ? parsed.pathname : '');
    } catch {
      return url;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#0a101d] border border-cyan-500/30 rounded-3xl shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden flex flex-col my-8 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-950/60">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                {project.category}
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {project.status}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              {project.name}
            </h2>
            <p className="text-sm text-cyan-200/90 font-medium mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 sm:px-8 border-b border-slate-800 bg-slate-950/30 flex gap-4 text-xs sm:text-sm font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'overview'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Project Overview & Features
          </button>
          <button
            onClick={() => setActiveTab('mockups')}
            className={`py-3.5 border-b-2 whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeTab === 'mockups'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>Live Architecture Preview</span>
          </button>
          {project.hasInteractiveDemo && (
            <button
              onClick={() => setActiveTab('interactive')}
              className={`py-3.5 border-b-2 whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeTab === 'interactive'
                  ? 'border-cyan-400 text-cyan-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Play className="w-4 h-4 text-cyan-400 fill-current" />
              <span>Interactive Sandbox Demo</span>
            </button>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Description & Direct Link Banner */}
              <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-mono uppercase text-cyan-400 font-bold mb-1">Live Application Endpoint</div>
                  <div className="text-sm font-mono text-slate-200 break-all">{project.liveUrl || 'Available on request'}</div>
                </div>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Live Web App</span>
                  </a>
                )}
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xs font-mono uppercase text-slate-400 font-bold mb-2">Description</h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
                  {project.description}
                </p>
              </div>

              {/* Key Features Grid */}
              <div>
                <h3 className="text-xs font-mono uppercase text-slate-400 font-bold mb-3">Key Features & Architecture</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-xs font-mono uppercase text-slate-400 font-bold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MOCKUPS & UI FRAMES */}
          {activeTab === 'mockups' && (
            <div className="space-y-6">
              {/* Browser Desktop Frame Mockup */}
              <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
                {/* Browser top chrome */}
                <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="px-4 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300">
                    https://{getDomainFromUrl(project.liveUrl)}
                  </div>
                  <div className="w-12" />
                </div>

                {/* Mockup Display Canvas */}
                <div className="p-6 sm:p-8 bg-[#090e18] min-h-[260px] flex flex-col justify-center">
                  <div className="text-center max-w-lg mx-auto">
                    <div className="inline-flex p-3 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 mb-4">
                      {project.id === 'an-tech-cbt' && <GraduationCap className="w-8 h-8" />}
                      {project.id === 'an-link2qr' && <QrCode className="w-8 h-8" />}
                      {(project.id === 'libracore-system' || project.id === 'an-library') && <BookOpen className="w-8 h-8" />}
                      {project.id === 'textsnap-ai-ocr' && <ScanText className="w-8 h-8" />}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {project.screenshots?.desktopTitle || `${project.name} Workspace`}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mb-6">
                      {project.screenshots?.desktopDescription || project.description}
                    </p>

                    {/* Feature highlights bar */}
                    {project.screenshots?.featuresList && (
                      <div className="space-y-2 text-left bg-slate-900/80 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 mb-6">
                        {project.screenshots.featuresList.map((f, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.25)]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Launch Live Website in New Tab</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: INTERACTIVE DEMO */}
          {activeTab === 'interactive' && project.hasInteractiveDemo && (
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-950 border border-cyan-500/20 space-y-6">
              
              {/* If project is Link to QR */}
              {project.demoType === 'qr_generator' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white font-['Outfit']">Live Link to QR Converter Simulator</h4>
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">Client-Side Engine</span>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xs font-mono text-slate-300">Enter Any URL or Text to Generate QR Code:</label>
                    <input
                      type="text"
                      value={qrInputUrl}
                      onChange={(e) => setQrInputUrl(e.target.value)}
                      placeholder="https://linktoqr.in"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-6 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="p-4 bg-[#0a0f1d] rounded-2xl border border-cyan-500/40 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                      <img
                        src={qrImageUrl}
                        alt="Generated QR Code"
                        className="w-44 h-44 rounded-lg object-contain bg-[#0a0f1d]"
                      />
                    </div>

                    <div className="space-y-3 text-center sm:text-left">
                      <div className="text-sm font-semibold text-white">QR Code Status: Rendered</div>
                      <p className="text-xs text-slate-400 max-w-xs">
                        Encoding: UTF-8 • Error Correction: High (30%)
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        <a
                          href={qrImageUrl}
                          download="link_to_qr_code.png"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download QR</span>
                        </a>
                        <a
                          href="https://linktoqr.in/#"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Open Full App</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* If project is AN Tech CBT */}
              {project.demoType === 'cbt_preview' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <h4 className="text-base font-bold text-white">CBT Exam Engine Simulator</h4>
                      <span className="text-xs text-slate-400">Section: Technical Aptitude • Timer: 59:40 remaining</span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono">
                      Live Test Active
                    </span>
                  </div>

                  <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
                    <div className="text-xs font-mono text-cyan-400 mb-2">Question {cbtQuestionIdx + 1} of {sampleCbtQuestions.length}:</div>
                    <p className="text-sm sm:text-base font-medium text-white mb-4">
                      {sampleCbtQuestions[cbtQuestionIdx].q}
                    </p>

                    <div className="space-y-2">
                      {sampleCbtQuestions[cbtQuestionIdx].options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCbtSelectedOption(idx)}
                          className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-medium border transition-all ${
                            cbtSelectedOption === idx
                              ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200'
                              : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          <span className="font-mono text-cyan-400 mr-2">{String.fromCharCode(65 + idx)}.</span>
                          <span>{opt}</span>
                        </button>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between pt-4 border-t border-slate-800 text-xs">
                      <button
                        onClick={() => {
                          setCbtQuestionIdx((cbtQuestionIdx + 1) % sampleCbtQuestions.length);
                          setCbtSelectedOption(null);
                          setCbtSubmitted(false);
                        }}
                        className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                      >
                        Next Question
                      </button>

                      <button
                        onClick={() => setCbtSubmitted(true)}
                        className="px-5 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold transition-colors"
                      >
                        Submit & Calculate Result
                      </button>
                    </div>

                    {cbtSubmitted && (
                      <div className="mt-4 p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-xs text-cyan-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <span>✨ Scorecard generated: {cbtSelectedOption === sampleCbtQuestions[cbtQuestionIdx].correct ? '+4 Marks (Correct)' : '-1 Mark (Incorrect / Unattempted)'}. Batch Rank calculation simulated.</span>
                        <a
                          href="https://an-tech-cbt.onrender.com"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-400 text-slate-950 font-bold text-xs shrink-0"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Visit Live CBT</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* If project is LibraCore / Library System */}
              {project.demoType === 'library_preview' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <h4 className="text-base font-bold text-white">LibraCore Digital Circulation Ledger</h4>
                    <span className="text-xs font-mono text-cyan-400">Status: Active Sync</span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', isbn: '978-0132350884', member: 'Student #1042', status: 'Issued', due: 'In 4 days' },
                      { title: 'Designing Data-Intensive Applications', isbn: '978-1449373320', member: 'Faculty #008', status: 'Available', due: '-' },
                      { title: 'The Pragmatic Programmer', isbn: '978-0135957059', member: 'Student #1089', status: 'Issued', due: 'Tomorrow' }
                    ].map((item, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <div>
                          <div className="font-semibold text-white">{item.title}</div>
                          <div className="text-slate-400 font-mono text-[11px]">ISBN: {item.isbn} • Borrower: {item.member}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded font-mono text-[11px] ${item.status === 'Issued' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'}`}>
                            {item.status}
                          </span>
                          <span className="text-slate-400 font-mono text-[11px]">{item.due}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-right">
                    <a
                      href="https://libracore-87i9.onrender.com/login.html"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open LibraCore System</span>
                    </a>
                  </div>
                </div>
              )}

              {/* If project is TextSnap AI OCR (Image to Text) */}
              {project.demoType === 'ocr_preview' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div>
                      <h4 className="text-base font-bold text-white">TextSnap AI OCR Live Simulator</h4>
                      <span className="text-xs text-slate-400">Select sample document or trigger OCR parser</span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>AI OCR Engine</span>
                    </span>
                  </div>

                  {/* Sample selection buttons */}
                  <div className="flex flex-wrap gap-2">
                    {(['invoice', 'receipt', 'handwritten'] as const).map((type) => (
                      <button
                        key={type}
                        onClick={() => {
                          setOcrSampleType(type);
                          handleRunOcr();
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-colors ${
                          ocrSampleType === type
                            ? 'bg-cyan-400 text-slate-950 font-bold'
                            : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
                        }`}
                      >
                        Sample {type}
                      </button>
                    ))}
                  </div>

                  {/* Side-by-side OCR processing card */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left: Simulated Document Image */}
                    <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-3 text-xs text-slate-400 font-mono">
                        <span className="flex items-center gap-1.5">
                          <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Input Image Frame</span>
                        </span>
                        <span className="uppercase text-[11px]">{ocrSampleType}.png</span>
                      </div>

                      <div className="h-44 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                        <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="text-xs font-semibold text-slate-200 capitalize mb-1">
                          Scanned {ocrSampleType} Document
                        </div>
                        <p className="text-[11px] text-slate-500">
                          Optical resolution: 300 DPI • RGB 24-bit
                        </p>

                        {isOcrProcessing && (
                          <div className="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center gap-2 animate-in fade-in">
                            <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                            <span className="text-xs font-mono text-cyan-300">Extracting Text...</span>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={handleRunOcr}
                        disabled={isOcrProcessing}
                        className="mt-3 w-full py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <ScanText className="w-3.5 h-3.5" />
                        <span>Run OCR Scan</span>
                      </button>
                    </div>

                    {/* Right: Recognized Text Output */}
                    <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-3 text-xs text-slate-400 font-mono">
                        <span className="flex items-center gap-1.5">
                          <ScanText className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Extracted Text</span>
                        </span>
                        <button
                          onClick={handleCopyOcr}
                          className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-mono text-[11px]"
                        >
                          {ocrCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{ocrCopied ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>

                      <pre className="h-44 overflow-y-auto p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-200/90 whitespace-pre-wrap leading-relaxed">
                        {isOcrProcessing ? 'Processing OCR character boundaries...' : ocrSampleOutputs[ocrSampleType]}
                      </pre>

                      <a
                        href="https://textsnap-ai-ocr.onrender.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 w-full py-2 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Launch Full TextSnap AI OCR</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-6 sm:p-8 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-mono">
            {project.status === 'Live & Available' ? 'Production Deployment' : 'Active Build'}
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.25)]"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Visit Live App</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
