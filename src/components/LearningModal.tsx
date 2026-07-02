import React, { useState, useEffect } from 'react';
import { X, BookOpen, Code, FileText, Check, Copy } from 'lucide-react';

interface LearningModalProps {
  isOpen: boolean;
  activeTab: string;
  onClose: () => void;
}

export const LearningModal: React.FC<LearningModalProps> = ({ isOpen, activeTab, onClose }) => {
  const [currentTab, setCurrentTab] = useState<string>(activeTab);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const tabs = [
    { id: 'docs', name: 'Documentation', icon: BookOpen },
    { id: 'cases', name: 'Case Studies', icon: FileText },
    { id: 'api', name: 'API Reference', icon: Code },
  ];

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clientScriptCode = `<!-- Paste this in the head of your index.html -->
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
      greeting: "Hello, looking for IT setups or software development?"
    });
  });
</script>`;

  const apiRequestCode = `POST /v1/chat/agent/message HTTP/1.1
Host: api.paramountindia.tech
Authorization: Bearer pmnt_sec_9724734308_ahmedabad
Content-Type: application/json

{
  "sessionId": "session_user_8725",
  "message": "We need custom software for CRM automation",
  "context": {
    "user_city": "Ahmedabad",
    "owner": "Devendra Sharma"
  }
}`;

  const apiResponseCode = `HTTP/1.1 200 OK
Content-Type: application/json
X-Response-Time: 120ms

{
  "status": "success",
  "response": "At Paramount India Technologies LLP, we build custom enterprise CRMs syncing leads instantly. Book a callback with Devendra Sharma at +91 9724734308.",
  "routingCode": "PROCEED_TO_SALES",
  "metadata": {
    "assignedAgent": "Paramount AI V2",
    "locationScope": "Gujarat Office"
  }
}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl h-[85vh] liquid-glass border border-white/10 rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-foreground/50 hover:text-white bg-white/5 rounded-lg border border-white/5 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Sidebar Nav */}
        <div className="w-full md:w-60 bg-white/[0.02] border-b md:border-b-0 md:border-r border-white/5 p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#a855f7] font-bold">Developer Hub</span>
            <h4 className="font-display text-lg font-bold text-white tracking-tight">Paramount Hub</h4>
          </div>

          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setCurrentTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all whitespace-nowrap md:whitespace-normal cursor-pointer ${
                    currentTab === tab.id
                      ? 'bg-[#a855f7] text-white shadow-lg'
                      : 'text-foreground/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <TabIcon className="w-4 h-4 flex-shrink-0" />
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 md:p-8 overflow-y-auto flex flex-col justify-between">
          <div className="relative z-10">
            {/* Documentation Tab */}
            {currentTab === 'docs' && (
              <div className="flex flex-col gap-5 animate-in fade-in duration-300">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white tracking-tight">Integration Guide</h3>
                  <p className="text-xs text-foreground/50 mt-1">Embed Paramount Chatbot Agents directly on your business landing page.</p>
                </div>
                <p className="text-xs text-hero-sub/90 leading-relaxed">
                  Integrating our chatbot script takes less than two minutes. Copy the client-side JavaScript snippet below and paste it before the closing <code>&lt;/head&gt;</code> tag on your platform. This loads the async widget which connects to your CRM endpoint automatically.
                </p>

                {/* Code Block */}
                <div className="relative bg-black/60 rounded-xl p-4 border border-white/5 font-mono text-[10px] leading-relaxed text-emerald-400 overflow-x-auto">
                  <button 
                    onClick={() => handleCopyCode(clientScriptCode)}
                    className="absolute top-3.5 right-3.5 p-1.5 bg-white/5 hover:bg-white/10 rounded border border-white/5 text-foreground transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <pre>{clientScriptCode}</pre>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-hero-sub/80 leading-relaxed">
                  <span className="font-bold text-white block mb-1">Configuration parameters:</span>
                  - <code>data-client-id</code>: Identifies your partner profile setup by director Devendra Sharma.<br />
                  - <code>city</code>: Locates server nodes in our cloud networks (default: Ahmedabad).
                </div>
              </div>
            )}

            {/* Case Studies Tab */}
            {currentTab === 'cases' && (
              <div className="flex flex-col gap-6 animate-in fade-in duration-300">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white tracking-tight">Operational Cases</h3>
                  <p className="text-xs text-foreground/50 mt-1">Detailed summaries of core IT migrations and cloud architectures.</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-2">
                    <span className="text-xs font-bold text-white">CASE-972: CRM Migration for Ahmedabad Retailer</span>
                    <p className="text-[11px] text-hero-sub/80 leading-relaxed">
                      Migrated a 50,000-user database from legacy Excel systems to an automated, custom-tailored Salesforce sync model. The integration includes on-site training, cloud database hardening, and CRM pipeline automation.
                    </p>
                    <span className="text-[10px] text-[#a855f7] font-semibold mt-1">Outcome: 100% data fidelity & 30% pipeline response speedup.</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-2">
                    <span className="text-xs font-bold text-white">CASE-343: Kubernetes Cloud Re-architecture</span>
                    <p className="text-[11px] text-hero-sub/80 leading-relaxed">
                      Configured core network setup, server load balancers, and AWS Kubernetes clustering for a high-traffic e-commerce hub, ensuring scaling during traffic spikes.
                    </p>
                    <span className="text-[10px] text-[#a855f7] font-semibold mt-1">Outcome: 0% down-time during holiday sales traffic spikes.</span>
                  </div>
                </div>
              </div>
            )}

            {/* API Reference Tab */}
            {currentTab === 'api' && (
              <div className="flex flex-col gap-5 animate-in fade-in duration-300">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white tracking-tight">AI Agent API</h3>
                  <p className="text-xs text-foreground/50 mt-1">Interact with chatbot services programmatically via HTTP REST calls.</p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Request block */}
                  <div>
                    <span className="text-[10px] font-bold text-[#a855f7] uppercase tracking-wider block mb-2">Request Endpoint</span>
                    <div className="bg-black/60 rounded-xl p-4 border border-white/5 font-mono text-[10px] text-[#fcd34d] overflow-x-auto relative">
                      <button 
                        onClick={() => handleCopyCode(apiRequestCode)}
                        className="absolute top-3.5 right-3.5 p-1.5 bg-white/5 hover:bg-white/10 rounded border border-white/5 text-foreground transition-colors cursor-pointer"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                      <pre>{apiRequestCode}</pre>
                    </div>
                  </div>

                  {/* Response block */}
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-2">Response Payload</span>
                    <div className="bg-black/60 rounded-xl p-4 border border-white/5 font-mono text-[10px] text-cyan-400 overflow-x-auto">
                      <pre>{apiResponseCode}</pre>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-foreground/45 relative z-10">
            <span>Paramount India Technologies LLP &bull; Director Desk</span>
            <span>Mobile Support: +91 9724734308</span>
          </div>

        </div>

      </div>
    </div>
  );
};
