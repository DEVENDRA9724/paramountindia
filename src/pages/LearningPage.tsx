import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, FileText, Code, Check, Copy, Play, Terminal, ShieldCheck } from 'lucide-react';

interface LearningPageProps {
  onBackToHome: () => void;
  activeTab?: string;
}

export const LearningPage: React.FC<LearningPageProps> = ({ onBackToHome, activeTab = 'docs' }) => {
  const [activeSubTab, setActiveSubTab] = useState<'docs' | 'cases' | 'api'>(activeTab as any);
  const [copied, setCopied] = useState<boolean>(false);
  
  // API Sandbox State
  const [sandboxPrompt, setSandboxPrompt] = useState('How do I integrate custom CRM webhooks?');
  const [sandboxResponse, setSandboxResponse] = useState('');
  const [isSandboxLoading, setIsSandboxLoading] = useState(false);

  useEffect(() => {
    if (activeTab === 'docs' || activeTab === 'cases' || activeTab === 'api') {
      setActiveSubTab(activeTab as any);
    }
  }, [activeTab]);

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clientScriptCode = `<!-- Copy this snippet and paste in your main index.html head -->
<script 
  src="https://cdn.paramountindia.tech/agent.js" 
  data-client-id="pmnt_devendra_9724734308" 
  data-theme="dark"
  async>
</script>
<script>
  window.addEventListener('paramount-ready', () => {
    window.ParamountAgent.init({
      city: "Ahmedabad",
      owner: "Devendra Sharma"
    });
  });
</script>`;

  const apiSampleRequest = `curl -X POST https://api.paramountindia.tech/v1/chat/message \\
  -H "Authorization: Bearer pmnt_sec_9724734308_ahmedabad" \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "${sandboxPrompt}"
  }'`;

  const runSandboxTest = () => {
    setIsSandboxLoading(true);
    setSandboxResponse('');

    setTimeout(() => {
      let msgResponse = "";
      const query = sandboxPrompt.toLowerCase();

      if (query.includes('crm') || query.includes('webhook') || query.includes('sync')) {
        msgResponse = JSON.stringify({
          status: 200,
          endpoint: "/v1/chat/message",
          payload: {
            text: "Paramount AI Agent webhook connection verified. Custom CRM sync model established for Ahmedabad network node.",
            syncTarget: "Salesforce/HubSpot Pipeline",
            latencyMs: 98,
            developerAction: "PROCEED_TO_LIVE_DEPLOYMENT"
          }
        }, null, 2);
      } else if (query.includes('cloud') || query.includes('setup') || query.includes('server') || query.includes('aws')) {
        msgResponse = JSON.stringify({
          status: 200,
          endpoint: "/v1/chat/message",
          payload: {
            text: "Cloud VPC cluster setup logs: Auto-scaling configuration group active on AWS Multi-Zone subnets. Security group failover router active.",
            activeClusters: 3,
            uptimeGoal: "99.99%",
            developerAction: "MONITOR_LIVE_UPLINKS"
          }
        }, null, 2);
      } else if (query.includes('chatbot') || query.includes('bot') || query.includes('agent')) {
        msgResponse = JSON.stringify({
          status: 200,
          endpoint: "/v1/chat/message",
          payload: {
            text: "AI Chatbot node initialized. System listening on socket port 8080. Vector store embedding sync is running.",
            greeting: "Hello, looking for IT setups or software development in Ahmedabad?",
            latencyMs: 45,
            developerAction: "TUNING_COMPLETE"
          }
        }, null, 2);
      } else {
        msgResponse = JSON.stringify({
          status: 200,
          endpoint: "/v1/chat/message",
          payload: {
            text: `Developer query processed: "${sandboxPrompt}". Core AI chatbot online and routing to Paramount support services at +91 97247 34308.`,
            assignedDirector: "Devendra Sharma",
            city: "Ahmedabad",
            developerAction: "TRIGGER_CLIENT_CALLBACK"
          }
        }, null, 2);
      }

      setSandboxResponse(msgResponse);
      setIsSandboxLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full min-h-screen bg-transparent relative overflow-visible py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation back */}
        <button 
          onClick={onBackToHome}
          className="flex items-center gap-2 text-xs font-semibold text-[#a855f7] hover:text-white transition-colors duration-200 mb-10 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO HOMEPAGE
        </button>

        {/* Title */}
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fcd34d] bg-[#fcd34d]/10 px-3 py-1 rounded-full">
            Developer Hub & SDK Portals
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-normal tracking-tight mt-6 mb-4">
            Developer Portal & <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#fcd34d] bg-clip-text text-transparent">SDKs</span>
          </h1>
          <p className="text-hero-sub text-base sm:text-lg max-w-3xl opacity-75 font-medium">
            Integrate chat widgets, access RESTful API reference schemas, and test live prompts inside our server sandbox console.
          </p>
        </div>

        {/* Developer split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left: Tab options & Content (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex border-b border-white/5 pb-2 gap-2">
              <button
                onClick={() => setActiveSubTab('docs')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeSubTab === 'docs' ? 'bg-[#a855f7] text-white shadow-lg' : 'text-foreground/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <BookOpen className="w-4 h-4" /> Installation
              </button>
              <button
                onClick={() => setActiveSubTab('cases')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeSubTab === 'cases' ? 'bg-[#a855f7] text-white shadow-lg' : 'text-foreground/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <FileText className="w-4 h-4" /> Migration Logs
              </button>
              <button
                onClick={() => setActiveSubTab('api')}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeSubTab === 'api' ? 'bg-[#a855f7] text-white shadow-lg' : 'text-foreground/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <Code className="w-4 h-4" /> API Schemes
              </button>
            </div>

            {/* Tab panel container */}
            <div className="liquid-glass rounded-2xl p-6 md:p-8 border border-white/5 min-h-[400px] flex flex-col justify-between">
              <div>
                {activeSubTab === 'docs' && (
                  <div className="flex flex-col gap-5 animate-in fade-in duration-300">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white tracking-tight">JavaScript Embedding SDK</h3>
                      <p className="text-[11px] text-foreground/45">Client-side client tag script integration guidelines.</p>
                    </div>
                    <p className="text-xs text-hero-sub/90 leading-relaxed font-medium">
                      Embed the Paramount customer service bot into your website container by loading the asynchronous helper tags script. Place the snippet before the closing <code>&lt;/head&gt;</code> element.
                    </p>

                    <div className="relative bg-black/60 rounded-xl p-4 border border-white/5 font-mono text-[10px] text-emerald-400 overflow-x-auto">
                      <button 
                        onClick={() => handleCopyText(clientScriptCode)}
                        className="absolute top-3.5 right-3.5 p-1.5 bg-white/5 hover:bg-white/10 rounded border border-white/5 text-foreground transition-colors cursor-pointer"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                      <pre>{clientScriptCode}</pre>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-hero-sub/80 leading-relaxed flex flex-col gap-1.5 font-medium">
                      <span className="font-bold text-white block">Parameters configurations:</span>
                      <span>&bull; <code>data-client-id</code>: Unique API identifier generated for your company.</span>
                      <span>&bull; <code>city</code>: Directs AI agents routing calls (set to <code>Ahmedabad</code>).</span>
                    </div>
                  </div>
                )}

                {activeSubTab === 'cases' && (
                  <div className="flex flex-col gap-6 animate-in fade-in duration-300">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white tracking-tight">Migration Operational Logs</h3>
                      <p className="text-[11px] text-foreground/45">Documentation details of core database server migrations.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-hero-sub leading-relaxed font-medium">
                        <span className="font-bold text-white block mb-1">MIGRATION-872: Salesforce Pipeline Sync</span>
                        Migrated a local excel database holding 50k customer cards into HubSpot CRM. Sync pipelines execute hourly checking duplicates, updating contact details, and notifying sales leads instantly.
                      </div>

                      <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-hero-sub leading-relaxed font-medium">
                        <span className="font-bold text-white block mb-1">DEPLOYMENT-343: VPC load balancers</span>
                        Configured AWS Elastic Load Balancer (ELB) syncing client databases across multi-region subnets. Outfitted auto-scaling parameters to trigger container setups during traffic spikes.
                      </div>
                    </div>
                  </div>
                )}

                {activeSubTab === 'api' && (
                  <div className="flex flex-col gap-5 animate-in fade-in duration-300">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white tracking-tight">Restful API Message Schemas</h3>
                      <p className="text-[11px] text-foreground/45">Programmatic API endpoint parameters.</p>
                    </div>

                    <div className="flex flex-col gap-3 font-medium">
                      <div>
                        <span className="text-[10px] font-bold text-[#a855f7] uppercase tracking-wider block mb-1">Endpoint</span>
                        <div className="bg-black/60 rounded-xl p-2.5 px-4 border border-white/5 font-mono text-[10px] text-white">
                          POST https://api.paramountindia.tech/v1/chat/message
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold text-foreground/45 uppercase tracking-wider block mb-1">Required Headers</span>
                        <div className="bg-black/60 rounded-xl p-3 border border-white/5 font-mono text-[10px] text-[#fcd34d] flex flex-col gap-1">
                          <span>Authorization: Bearer YOUR_SECRET_KEY</span>
                          <span>Content-Type: application/json</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] text-[#a855f7] font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Authentications Active
              </div>
            </div>
          </div>

          {/* Right: Interactive API Sandbox Console (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a855f7] bg-[#a855f7]/10 px-3 py-1.5 rounded-lg w-fit flex items-center gap-2">
              <Terminal className="w-4 h-4" /> Live API Sandbox
            </span>

            <div className="liquid-glass rounded-2xl border border-white/5 flex flex-col flex-1 min-h-[400px] overflow-hidden shadow-2xl">
              {/* Console header */}
              <div className="px-5 py-3.5 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#a855f7] rounded-full animate-ping" />
                  <span className="text-xs font-semibold text-white tracking-tight">developer_console</span>
                </div>
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#fcd34d] bg-[#fcd34d]/10 px-2 py-0.5 rounded border border-[#fcd34d]/20">
                  Gujarat_Node
                </span>
              </div>

              {/* Console Playground Body */}
              <div className="flex-1 p-5 flex flex-col justify-between gap-5 bg-black/40">
                {/* Inputs prompt */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] text-foreground/45 uppercase tracking-wider font-semibold">Test Message Request Payload</label>
                  <input
                    type="text"
                    value={sandboxPrompt}
                    onChange={(e) => setSandboxPrompt(e.target.value)}
                    placeholder="Type message (e.g. Test custom CRM webhook sync)..."
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-white/20 transition-all text-white placeholder-foreground/20 font-mono"
                  />
                </div>

                {/* Shell Preview */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] text-foreground/45 uppercase tracking-wider font-semibold">Shell Command Request</span>
                  <div className="bg-black/80 rounded-xl p-3 border border-white/5 font-mono text-[9px] text-[#fcd34d] overflow-x-auto whitespace-pre leading-relaxed">
                    <code>{apiSampleRequest}</code>
                  </div>
                </div>

                {/* Response Code Block */}
                <div className="flex-1 flex flex-col gap-2">
                  <span className="text-[10px] text-foreground/45 uppercase tracking-wider font-semibold">JSON Response payload</span>
                  <div className="bg-black/90 rounded-xl p-4 border border-white/5 font-mono text-[9px] text-cyan-400 overflow-y-auto h-40 max-h-40 leading-relaxed">
                    {isSandboxLoading ? (
                      <div className="flex flex-col gap-1 items-center justify-center h-full text-foreground/50">
                        <span className="inline-block w-4 h-4 border-2 border-[#a855f7]/30 border-t-[#a855f7] rounded-full animate-spin mb-2" />
                        <span>Sending request...</span>
                      </div>
                    ) : sandboxResponse ? (
                      <pre>{sandboxResponse}</pre>
                    ) : (
                      <span className="text-foreground/30 italic">Click "Run Sandbox Test" to dispatch API call...</span>
                    )}
                  </div>
                </div>

                {/* Run button */}
                <button
                  onClick={runSandboxTest}
                  disabled={isSandboxLoading || !sandboxPrompt.trim()}
                  className="btn-hero-secondary rounded-xl py-3 text-xs font-semibold tracking-wider flex items-center justify-center gap-2 cursor-pointer w-full"
                >
                  <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" /> Run Sandbox Test
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
