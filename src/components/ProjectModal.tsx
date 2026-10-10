import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, ShieldCheck, CheckCircle2, ArrowRight, Terminal, Cpu, Database, RefreshCw, Zap, AlertTriangle, Lock, Unlock } from 'lucide-react';
import { TechnicalCaseStudy } from '../data/portfolioData';

interface ProjectModalProps {
  project: TechnicalCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'architecture' | 'interactive'>('architecture');

  // Simulator 1: M-Pesa Idempotent Webhook state
  const [webhookLogs, setWebhookLogs] = useState<string[]>([]);
  const [isProcessingWebhook, setIsProcessingWebhook] = useState(false);

  // Simulator 2: RBAC Security Matrix state
  const [selectedRole, setSelectedRole] = useState<'doctor' | 'nurse' | 'pharmacist' | 'cashier'>('doctor');

  // Simulator 3: Offline-First PWA sync state
  const [isOnline, setIsOnline] = useState(true);
  const [offlineQueueCount, setOfflineQueueCount] = useState(0);
  const [syncedCount, setSyncedCount] = useState(148);

  // Simulator 5: AI Crop Diagnostic state
  const [selectedCrop, setSelectedCrop] = useState<'avocado' | 'maize' | 'tomato'>('avocado');
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  const [diagnosticResult, setDiagnosticResult] = useState<{
    disease: string;
    confidence: string;
    pathogen: string;
    intervention: string;
    schemaValid: boolean;
  } | null>(null);

  // Webhook test trigger
  const handleTestDuplicateWebhook = () => {
    setIsProcessingWebhook(true);
    setWebhookLogs([]);

    const transId = `QK${Math.floor(10000000 + Math.random() * 90000000)}`;
    
    // Simulate initial webhook arrival
    setTimeout(() => {
      setWebhookLogs(prev => [
        ...prev,
        `[T+0ms] POST /api/v1/payments/daraja/callback received with TransID: ${transId}`,
        `[T+12ms] Redis SETNX lock acquired for key "idempotency:daraja:${transId}" (TTL: 60s)`,
        `[T+35ms] Database Transaction started. Row lock SELECT stock FROM products WHERE id=412 FOR UPDATE`,
        `[T+62ms] Inventory decremented. Order status updated to PAID. Transaction committed.`
      ]);
    }, 150);

    // Simulate duplicate webhook arriving 80ms later (network retry)
    setTimeout(() => {
      setWebhookLogs(prev => [
        ...prev,
        `[T+80ms] DUPLICATE DETECTED: Second POST callback arrived with same TransID: ${transId}`,
        `[T+92ms] Redis SETNX failed (Lock already held). Duplicate rejected with HTTP 200 OK.`,
        `[T+110ms] Double billing prevented. Zero-loss idempotency verified.`
      ]);
      setIsProcessingWebhook(false);
    }, 800);
  };

  // AI Diagnostic trigger
  const handleRunAiDiagnosis = () => {
    setIsDiagnosing(true);
    setDiagnosticResult(null);

    setTimeout(() => {
      setIsDiagnosing(false);
      if (selectedCrop === 'avocado') {
        setDiagnosticResult({
          disease: "Avocado Anthracnose (Colletotrichum gloeosporioides)",
          confidence: "96.4%",
          pathogen: "Fungal Spores spreading via rain splash during flowering",
          intervention: "Prune lower canopy for air circulation; spray copper-based fungicide before fruit set.",
          schemaValid: true
        });
      } else if (selectedCrop === 'maize') {
        setDiagnosticResult({
          disease: "Maize Fall Armyworm (Spodoptera frugiperda)",
          confidence: "94.8%",
          pathogen: "Lepidopteran pest leaf-whorl feeding damage",
          intervention: "Deploy biological pheromone traps; apply Emamectin benzoate at early instar stage.",
          schemaValid: true
        });
      } else {
        setDiagnosticResult({
          disease: "Tomato Early Blight (Alternaria solani)",
          confidence: "97.1%",
          pathogen: "Fungal concentric leaf lesion rings",
          intervention: "Remove infected bottom foliage; apply Mancozeb preventive spray; implement drip irrigation.",
          schemaValid: true
        });
      }
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ type: "spring", damping: 28, stiffness: 340 }}
        className="relative w-full max-w-4xl bg-[#0E1524] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-slate-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0B0F17]">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
              {project.systemType}
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-xs text-slate-400 font-mono">{project.period}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-slate-850 hover:bg-slate-850/80 border border-slate-700 rounded-lg text-xs font-mono text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <button
              onClick={onClose}
              aria-label="Close case study modal"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Tabs */}
        <div className="px-6 pt-3 pb-2 bg-[#0E1524] border-b border-slate-800 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'architecture'
                ? 'bg-cyan-400 text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            System Architecture &amp; Challenge
          </button>
          <button
            onClick={() => setActiveTab('interactive')}
            className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'interactive'
                ? 'bg-cyan-400 text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            Interactive Technical Walkthrough
          </button>
        </div>

        {/* Modal Content Scroll */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-200">
          
          {/* Main Title */}
          <div>
            <h2 id="modal-headline" className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono text-cyan-300">
              <span>Role: {project.role}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">Stack: {project.techStack.join(' · ')}</span>
            </div>
          </div>

          {/* TAB 1: ARCHITECTURE & CHALLENGE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              
              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
                    The Engineering Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.engineeringChallenge}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    The Technical Solution &amp; Trade-offs
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.technicalSolution}
                  </p>
                </div>
              </div>

              {/* System Constraints */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  System Constraints &amp; SLOs:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  {project.systemConstraints.map((sc, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-[#090D16] border border-slate-800 text-slate-300">
                      <span className="text-cyan-400 font-mono block text-[11px] mb-0.5">SLO #{idx + 1}</span>
                      <span>{sc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  Deep Architectural Highlights:
                </h4>
                <div className="space-y-3">
                  {project.architecturalHighlights.map((hl, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#090D16] border border-slate-800 space-y-1">
                      <h5 className="text-sm font-bold text-white font-display">{hl.title}</h5>
                      <p className="text-xs text-slate-400 leading-relaxed">{hl.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Production Metrics */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  Measurable Production Metrics:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.measurableImpact.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-xl font-extrabold text-cyan-400 font-mono block">
                        {item.metric}
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: INTERACTIVE TECHNICAL WALKTHROUGH */}
          {activeTab === 'interactive' && (
            <div className="space-y-6">
              
              {/* 1. M-Pesa Idempotent Webhook Simulator */}
              {project.interactiveDemoType === 'mpesa-webhook' && (
                <div className="p-6 rounded-2xl bg-[#090D16] border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-sm font-bold text-white">Idempotent Webhook Engine Simulator</h4>
                    </div>
                    <span className="text-xs font-mono text-emerald-400">Redis Lock + Postgres ACID</span>
                  </div>

                  <p className="text-xs text-slate-300">
                    Test what happens when Safaricom sends duplicate webhooks simultaneously due to mobile network retries. Click below to fire concurrent callbacks and verify Redis lock deduplication.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={handleTestDuplicateWebhook}
                      disabled={isProcessingWebhook}
                      className="px-4 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer disabled:opacity-50 flex items-center gap-2"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isProcessingWebhook ? 'animate-spin' : ''}`} />
                      <span>Simulate Out-Of-Order Duplicate Webhooks</span>
                    </button>
                  </div>

                  {webhookLogs.length > 0 && (
                    <div className="p-4 rounded-xl bg-black border border-slate-800 font-mono text-xs space-y-1.5 text-slate-300">
                      <div className="text-slate-500 text-[11px] border-b border-slate-900 pb-1 mb-2">
                        API EXECUTION LOG STREAM (Express.js / Redis Worker)
                      </div>
                      {webhookLogs.map((log, idx) => (
                        <div key={idx} className={log.includes('DUPLICATE') ? 'text-amber-400 font-bold' : log.includes('prevented') ? 'text-emerald-400 font-bold' : 'text-slate-300'}>
                          {log}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* 2. RBAC Security Matrix Simulator */}
              {project.interactiveDemoType === 'rbac-security' && (
                <div className="p-6 rounded-2xl bg-[#090D16] border border-slate-800 space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-sm font-bold text-white">Role-Based Access Control (RBAC) Verifier</h4>
                    </div>
                    <span className="text-xs font-mono text-cyan-400">JWT Scope Middleware</span>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400 uppercase">Select Active User Role to Inspect Token Scopes:</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      {(['doctor', 'nurse', 'pharmacist', 'cashier'] as const).map(role => (
                        <button
                          key={role}
                          onClick={() => setSelectedRole(role)}
                          className={`p-2.5 rounded-lg border font-mono uppercase text-center transition-colors cursor-pointer ${
                            selectedRole === role
                              ? 'bg-cyan-950/70 border-cyan-400 text-cyan-300 font-bold'
                              : 'bg-slate-900 border-slate-800 text-slate-400'
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Scopes Table */}
                  <div className="border border-slate-800 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                        <tr>
                          <th className="p-3">Resource Route</th>
                          <th className="p-3">Required Scope</th>
                          <th className="p-3">Status for {selectedRole.toUpperCase()}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        <tr>
                          <td className="p-3 text-slate-200">GET /api/v1/patients/:id/chart</td>
                          <td className="p-3 text-slate-400">emr:read_diagnostics</td>
                          <td className="p-3">
                            {selectedRole === 'doctor' || selectedRole === 'nurse' ? (
                              <span className="text-emerald-400 flex items-center gap-1"><Unlock className="w-3.5 h-3.5" /> 200 ALLOWED</span>
                            ) : (
                              <span className="text-rose-400 flex items-center gap-1"><Lock className="w-3.5 h-3.5" /> 403 FORBIDDEN</span>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 text-slate-200">POST /api/v1/prescriptions</td>
                          <td className="p-3 text-slate-400">rx:create_order</td>
                          <td className="p-3">
                            {selectedRole === 'doctor' ? (
                              <span className="text-emerald-400 flex items-center gap-1"><Unlock className="w-3.5 h-3.5" /> 200 ALLOWED</span>
                            ) : (
                              <span className="text-rose-400 flex items-center gap-1"><Lock className="w-3.5 h-3.5" /> 403 FORBIDDEN</span>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 text-slate-200">POST /api/v1/pharmacy/dispense</td>
                          <td className="p-3 text-slate-400">pharmacy:dispense</td>
                          <td className="p-3">
                            {selectedRole === 'pharmacist' ? (
                              <span className="text-emerald-400 flex items-center gap-1"><Unlock className="w-3.5 h-3.5" /> 200 ALLOWED</span>
                            ) : (
                              <span className="text-rose-400 flex items-center gap-1"><Lock className="w-3.5 h-3.5" /> 403 FORBIDDEN</span>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td className="p-3 text-slate-200">POST /api/v1/billing/settle</td>
                          <td className="p-3 text-slate-400">billing:reconcile</td>
                          <td className="p-3">
                            {selectedRole === 'cashier' ? (
                              <span className="text-emerald-400 flex items-center gap-1"><Unlock className="w-3.5 h-3.5" /> 200 ALLOWED</span>
                            ) : (
                              <span className="text-rose-400 flex items-center gap-1"><Lock className="w-3.5 h-3.5" /> 403 FORBIDDEN</span>
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              )}

              {/* 3. Offline-First PWA Sync Simulator */}
              {project.interactiveDemoType === 'offline-sync' && (
                <div className="p-6 rounded-2xl bg-[#090D16] border border-slate-800 space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h4 className="text-sm font-bold text-white">Offline IndexedDB Mutation Journal Simulator</h4>
                    <span className="text-xs font-mono text-cyan-400">Service Worker + Vector Clock</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400">Simulated Network Connection:</span>
                      <span className={`text-xs font-mono font-bold ${isOnline ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {isOnline ? 'ONLINE (Broadband)' : 'OFFLINE (Network Drop)'}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        const nextOnline = !isOnline;
                        setIsOnline(nextOnline);
                        if (nextOnline && offlineQueueCount > 0) {
                          // Auto flush sync
                          setSyncedCount(prev => prev + offlineQueueCount);
                          setOfflineQueueCount(0);
                        }
                      }}
                      className="px-3 py-1.5 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 cursor-pointer"
                    >
                      Toggle {isOnline ? 'Offline' : 'Online'} State
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-slate-500 block text-[11px]">LOCAL INDEXEDDB MUTATION QUEUE</span>
                      <span className="text-2xl font-bold text-amber-400 mt-1 block">{offlineQueueCount}</span>
                      <span className="text-[11px] text-slate-400">Pending offline sales queued locally</span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-slate-500 block text-[11px]">CLOUD POSTGRESQL SYNCED SALES</span>
                      <span className="text-2xl font-bold text-cyan-400 mt-1 block">{syncedCount}</span>
                      <span className="text-[11px] text-slate-400">Reconciled in primary database</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (!isOnline) {
                        setOfflineQueueCount(prev => prev + 1);
                      } else {
                        setSyncedCount(prev => prev + 1);
                      }
                    }}
                    className="w-full py-2.5 px-4 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
                  >
                    + Execute Test Retail Barcode Scan &amp; Sale (SKU-89201)
                  </button>
                </div>
              )}

              {/* 4. EduVantage Fee Ingestion Simulator */}
              {project.interactiveDemoType === 'fee-queue' && (
                <div className="p-6 rounded-2xl bg-[#090D16] border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h4 className="text-sm font-bold text-white">Safaricom C2B Real-Time Validation Hook</h4>
                    <span className="text-xs font-mono text-cyan-400">Two-Step Paybill Hook</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Safaricom queries the validation endpoint before money leaves the parent's phone. If admission exists in the database, HTTP 200 with ResultCode 0 is returned.
                  </p>
                  <div className="p-4 rounded-xl bg-black border border-slate-800 font-mono text-xs text-slate-300">
                    <div className="text-emerald-400 mb-1">// POST /api/v1/daraja/c2b/validation</div>
                    <div>&#123; "BillRefNumber": "ADM-2025-084", "TransAmount": "18500" &#125;</div>
                    <div className="text-cyan-400 mt-2">// RESPONSE:</div>
                    <div>&#123; "ResultCode": 0, "ResultDesc": "Accepted student ADM-2025-084" &#125;</div>
                  </div>
                </div>
              )}

              {/* 5. FinSight AI Crop Diagnostics Simulator */}
              {project.interactiveDemoType === 'ai-diagnosis' && (
                <div className="p-6 rounded-2xl bg-[#090D16] border border-slate-800 space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-sm font-bold text-white">Gemini Multimodal Crop Diagnostic Engine</h4>
                    </div>
                    <span className="text-xs font-mono text-emerald-400">Structured JSON Output</span>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400 uppercase">Select Crop Sample to Analyze:</label>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {(['avocado', 'maize', 'tomato'] as const).map(crop => (
                        <button
                          key={crop}
                          onClick={() => {
                            setSelectedCrop(crop);
                            setDiagnosticResult(null);
                          }}
                          className={`p-2.5 rounded-lg border font-mono uppercase text-center transition-colors cursor-pointer ${
                            selectedCrop === crop
                              ? 'bg-cyan-950/70 border-cyan-400 text-cyan-300 font-bold'
                              : 'bg-slate-900 border-slate-800 text-slate-400'
                          }`}
                        >
                          {crop} Sample
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleRunAiDiagnosis}
                    disabled={isDiagnosing}
                    className="w-full py-2.5 px-4 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isDiagnosing ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Running Multimodal Inference...</span>
                      </>
                    ) : (
                      <span>Run Diagnostic Inference on {selectedCrop.toUpperCase()}</span>
                    )}
                  </button>

                  {diagnosticResult && (
                    <div className="p-4 rounded-xl bg-black border border-cyan-800 font-mono text-xs space-y-2 text-slate-300 animate-fadeIn">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span className="text-cyan-400 font-bold">{diagnosticResult.disease}</span>
                        <span className="text-emerald-400 font-mono text-[11px]">Confidence: {diagnosticResult.confidence}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[11px]">CAUSAL PATHOGEN / VECTOR:</span>
                        <span className="text-slate-300">{diagnosticResult.pathogen}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[11px]">RECOMMENDED AGRONOMIC INTERVENTION:</span>
                        <span className="text-emerald-300">{diagnosticResult.intervention}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

            </div>
          )}

        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#0B0F17] flex items-center justify-between">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Inspect Source Code on GitHub</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-950 bg-white hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>

      </motion.div>
    </div>
  );
};
