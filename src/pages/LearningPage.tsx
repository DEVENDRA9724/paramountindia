import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, FileText, Code, Check, Copy, Play } from 'lucide-react';

const inter = "'Inter', system-ui, sans-serif";

interface LearningPageProps {
  onBackToHome: () => void;
  activeTab?: string;
  onNavigateToContact?: (planName: string, serviceId: string) => void;
}

export const LearningPage: React.FC<LearningPageProps> = ({ onBackToHome, activeTab = 'docs' }) => {
  const [activeSubTab, setActiveSubTab] = useState<'docs' | 'cases' | 'api'>(activeTab as any);
  const [copied, setCopied] = useState<boolean>(false);

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

  const clientScriptCode = `<!-- Copy snippet to your index.html head -->
<script
  src="https://cdn.paramountindia.tech/agent.js"
  data-client-id="YOUR_CLIENT_ID"
  data-theme="auto"
  async>
</script>`;

  const apiSampleRequest = `curl -X POST https://api.paramountindia.tech/v1/chat/message \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "message": "${sandboxPrompt}" }'`;

  const runSandboxTest = () => {
    setIsSandboxLoading(true);
    setSandboxResponse('');

    setTimeout(() => {
      let msgResponse = "";
      const query = sandboxPrompt.toLowerCase();

      if (query.includes('crm') || query.includes('webhook')) {
        msgResponse = JSON.stringify({
          status: "success",
          code: 200,
          response: "Paramount Webhook endpoint verified. Leads from web forms and chat widgets sync instantly into Salesforce/HubSpot database schemas.",
          latency: "112ms",
          service: "CRM Pipeline Orchestrator"
        }, null, 2);
      } else if (query.includes('bot') || query.includes('ai')) {
        msgResponse = JSON.stringify({
          status: "success",
          code: 200,
          response: "Paramount NLP Bot Agent active. Intent recognized. Auto-routing enabled.",
          latency: "94ms",
          service: "AI Agent Core"
        }, null, 2);
      } else {
        msgResponse = JSON.stringify({
          status: "success",
          code: 200,
          text: `Developer query processed: "${sandboxPrompt}". AI agent routing to Paramount support services at +91 76006 47428.`,
          latency: "140ms"
        }, null, 2);
      }

      setSandboxResponse(msgResponse);
      setIsSandboxLoading(false);
    }, 900);
  };

  return (
    <div style={{ background: '#f7f9fc', minHeight: '100vh', padding: '48px 0 96px 0', color: '#17213d' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Back button */}
        <button
          onClick={onBackToHome}
          style={{ fontFamily: inter, fontSize: 12, fontWeight: 600, color: '#315efb', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 40 }}
        >
          <ArrowLeft style={{ width: 14, height: 14 }} /> BACK TO HOMEPAGE
        </button>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div className="eyebrow-tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Developer Portal</div>
          <h1 style={{ fontFamily: inter, fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#17213d', marginBottom: 16 }}>
            Knowledge Base &amp; API Docs
          </h1>
          <p style={{ fontFamily: inter, fontSize: 15, fontWeight: 400, lineHeight: 1.7, color: 'rgba(23,33,61,0.45)', maxWidth: 540 }}>
            Technical documentation, API integration guides, and system architecture blueprints from Paramount India Technologies Pvt Ltd.
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 36, borderBottom: '1px solid rgba(37,99,235,0.06)', paddingBottom: 16 }}>
          {[
            { id: 'docs', label: 'Documentation', icon: BookOpen },
            { id: 'cases', label: 'Case Summaries', icon: FileText },
            { id: 'api', label: 'API Reference', icon: Code },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveSubTab(tab.id as any)}
                style={{
                  fontFamily: inter, fontSize: 13, fontWeight: 600, padding: '8px 18px', borderRadius: 8,
                  background: isActive ? '#315efb' : 'transparent',
                  color: isActive ? '#fff' : 'rgba(23,33,61,0.45)',
                  border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
                  transition: 'all 0.2s',
                }}>
                <Icon style={{ width: 15, height: 15 }} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab 1: Docs */}
        {activeSubTab === 'docs' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="surface-card" style={{ padding: 28, borderRadius: 16 }}>
              <h3 style={{ fontFamily: inter, fontSize: 18, fontWeight: 700, color: '#17213d', marginBottom: 12 }}>
                Integration Guide — AI Chatbot Web Widget
              </h3>
              <p style={{ fontFamily: inter, fontSize: 14, fontWeight: 400, lineHeight: 1.65, color: 'rgba(23,33,61,0.45)', marginBottom: 20 }}>
                Embed our autonomous AI chat widget into any web application or CMS with a single script tag.
              </p>

              <div style={{ background: '#f7f9fc', border: '1px solid rgba(37,99,235,0.08)', borderRadius: 10, padding: 16, position: 'relative' }}>
                <button onClick={() => handleCopyText(clientScriptCode)}
                  style={{ position: 'absolute', top: 12, right: 12, fontFamily: inter, fontSize: 11, fontWeight: 600, color: 'rgba(23,33,61,0.5)', background: 'rgba(37,99,235,0.06)', border: 'none', padding: '4px 10px', borderRadius: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                  {copied ? <Check style={{ width: 12, height: 12, color: '#00a88f' }} /> : <Copy style={{ width: 12, height: 12 }} />}
                  {copied ? 'Copied' : 'Copy Code'}
                </button>
                <pre style={{ fontFamily: 'monospace', fontSize: 12, color: '#315efb', margin: 0, overflowX: 'auto', lineHeight: 1.6 }}>
                  {clientScriptCode}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Case Summaries */}
        {activeSubTab === 'cases' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Full-Stack ERP Digitization', category: 'Enterprise Software', desc: 'Re-architected legacy operations with React, Node.js, and PostgreSQL for real-time inventory management.' },
              { title: 'Multi-Cloud AWS Failover', category: 'Cloud Infrastructure', desc: 'Configured Kubernetes clusters across 3 zones with zero-downtime database replication.' },
              { title: 'Automated CRM Lead Pipeline', category: 'CRM Integration', desc: 'Synced webform leads into Salesforce with automated SMS/email triggers and lead scoring.' },
              { title: 'AI Assistant Support Bot', category: 'AI Automation', desc: 'Custom-trained NLP agent handling customer inquiries with zero human intervention.' },
            ].map((c, i) => (
              <div key={i} className="surface-card" style={{ padding: 24, borderRadius: 16 }}>
                <span style={{ fontFamily: inter, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#315efb', marginBottom: 8, display: 'block' }}>{c.category}</span>
                <h3 style={{ fontFamily: inter, fontSize: 16, fontWeight: 600, color: '#17213d', marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontFamily: inter, fontSize: 13, fontWeight: 400, lineHeight: 1.6, color: 'rgba(23,33,61,0.45)' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: API Reference */}
        {activeSubTab === 'api' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="surface-card" style={{ padding: 28, borderRadius: 16 }}>
              <h3 style={{ fontFamily: inter, fontSize: 18, fontWeight: 700, color: '#17213d', marginBottom: 12 }}>
                Interactive API Preview
              </h3>
              <p style={{ fontFamily: inter, fontSize: 14, fontWeight: 400, lineHeight: 1.65, color: 'rgba(23,33,61,0.45)', marginBottom: 20 }}>
                Preview the request and response format locally. No live endpoint or credential is used.
              </p>

              {/* Sample Request */}
              <div style={{ background: '#f7f9fc', border: '1px solid rgba(37,99,235,0.08)', borderRadius: 10, padding: 16, marginBottom: 20 }}>
                <pre style={{ fontFamily: 'monospace', fontSize: 12, color: 'rgba(23,33,61,0.7)', margin: 0, overflowX: 'auto', lineHeight: 1.6 }}>
                  {apiSampleRequest}
                </pre>
              </div>

              {/* Console Input */}
              <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                <input type="text" value={sandboxPrompt} onChange={e => setSandboxPrompt(e.target.value)}
                  className="neo-input" style={{ flex: 1, fontSize: 13 }} />
                <button onClick={runSandboxTest} disabled={isSandboxLoading} className="btn-primary" style={{ flexShrink: 0 }}>
                  <Play style={{ width: 14, height: 14 }} /> Run Preview
                </button>
              </div>

              {/* Output */}
              {isSandboxLoading && (
                <p style={{ fontFamily: inter, fontSize: 13, color: '#315efb' }}>Executing request...</p>
              )}
              {sandboxResponse && (
                <div style={{ background: '#f7f9fc', border: '1px solid rgba(37,99,235,0.08)', borderRadius: 10, padding: 16 }}>
                  <pre style={{ fontFamily: 'monospace', fontSize: 12, color: '#00a88f', margin: 0, overflowX: 'auto', lineHeight: 1.6 }}>
                    {sandboxResponse}
                  </pre>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
