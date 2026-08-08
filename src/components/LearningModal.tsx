import React, { useState, useEffect } from 'react';
import { X, BookOpen, Code, FileText, Check, Copy } from 'lucide-react';

const inter = "'Inter', system-ui, sans-serif";

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
  data-client-id="YOUR_CLIENT_ID"
  data-theme="auto"
  async>
</script>`;

  const apiRequestCode = `POST /v1/chat/agent/message HTTP/1.1
Host: api.paramountindia.tech
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "query": "Need help with cloud setup and CRM migration",
  "client_id": "enterprise_01"
}`;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}>
      <div style={{ background: '#ffffff', border: '1px solid rgba(37,99,235,0.08)', borderRadius: 20, width: '100%', maxWidth: 760, maxHeight: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

        {/* Header */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(37,99,235,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontFamily: inter, fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#315efb' }}>Developer Hub</span>
            <h3 style={{ fontFamily: inter, fontSize: 18, fontWeight: 700, color: '#17213d', marginTop: 2 }}>Paramount Technical Portal</h3>
          </div>
          <button onClick={onClose} style={{ background: 'rgba(37,99,235,0.05)', border: '1px solid rgba(37,99,235,0.08)', borderRadius: 8, padding: 6, color: '#17213d', cursor: 'pointer' }}>
            <X style={{ width: 18, height: 18 }} />
          </button>
        </div>

        {/* Sub-nav */}
        <div style={{ display: 'flex', gap: 6, padding: '12px 24px', borderBottom: '1px solid rgba(37,99,235,0.06)', background: 'rgba(37,99,235,0.02)' }}>
          {tabs.map(t => {
            const Icon = t.icon;
            const active = currentTab === t.id;
            return (
              <button key={t.id} onClick={() => setCurrentTab(t.id)}
                style={{
                  fontFamily: inter, fontSize: 12, fontWeight: 600, padding: '6px 14px', borderRadius: 8,
                  background: active ? '#315efb' : 'transparent', color: active ? '#fff' : 'rgba(23,33,61,0.45)',
                  border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                }}>
                <Icon style={{ width: 14, height: 14 }} /> {t.name}
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        <div style={{ flex: 1, padding: 24, overflowY: 'auto' }}>
          {currentTab === 'docs' && (
            <div>
              <h4 style={{ fontFamily: inter, fontSize: 15, fontWeight: 600, color: '#17213d', marginBottom: 8 }}>AI Chat Widget Integration</h4>
              <p style={{ fontFamily: inter, fontSize: 13, color: 'rgba(23,33,61,0.45)', lineHeight: 1.6, marginBottom: 16 }}>
                Copy and paste this script tag into the head section of your site HTML:
              </p>
              <div style={{ background: '#f7f9fc', border: '1px solid rgba(37,99,235,0.08)', borderRadius: 10, padding: 16, position: 'relative' }}>
                <button onClick={() => handleCopyCode(clientScriptCode)}
                  style={{ position: 'absolute', top: 10, right: 10, fontFamily: inter, fontSize: 11, color: 'rgba(23,33,61,0.5)', background: 'rgba(37,99,235,0.06)', border: 'none', padding: '3px 8px', borderRadius: 6, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
                  {copied ? <Check style={{ width: 12, height: 12, color: '#00a88f' }} /> : <Copy style={{ width: 12, height: 12 }} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
                <pre style={{ fontFamily: 'monospace', fontSize: 12, color: '#315efb', margin: 0, overflowX: 'auto', lineHeight: 1.6 }}>
                  {clientScriptCode}
                </pre>
              </div>
            </div>
          )}

          {currentTab === 'cases' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { title: 'Full-Stack ERP System', desc: 'Custom Node.js + React digitizing company workflows.' },
                { title: 'AWS Cloud Infrastructure', desc: 'Kubernetes cluster failover and Terraform IaC.' },
                { title: 'Salesforce CRM Sync', desc: 'Real-time lead scoring and automated webhook distribution.' },
              ].map((c, i) => (
                <div key={i} style={{ background: 'rgba(37,99,235,0.02)', border: '1px solid rgba(37,99,235,0.06)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontFamily: inter, fontSize: 14, fontWeight: 600, color: '#17213d', marginBottom: 4 }}>{c.title}</h4>
                  <p style={{ fontFamily: inter, fontSize: 12, color: 'rgba(23,33,61,0.45)', margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          )}

          {currentTab === 'api' && (
            <div>
              <h4 style={{ fontFamily: inter, fontSize: 15, fontWeight: 600, color: '#17213d', marginBottom: 8 }}>REST API Request Endpoint</h4>
              <div style={{ background: '#f7f9fc', border: '1px solid rgba(37,99,235,0.08)', borderRadius: 10, padding: 16 }}>
                <pre style={{ fontFamily: 'monospace', fontSize: 12, color: '#00a88f', margin: 0, overflowX: 'auto', lineHeight: 1.6 }}>
                  {apiRequestCode}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ padding: '16px 24px', borderTop: '1px solid rgba(37,99,235,0.06)', background: 'rgba(37,99,235,0.01)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: inter, fontSize: 11, color: 'rgba(23,33,61,0.35)' }}>Paramount India Technologies Pvt Ltd • Support +91 76006 47428</span>
          <button onClick={onClose} className="btn-secondary" style={{ padding: '6px 14px', fontSize: 12 }}>Close</button>
        </div>

      </div>
    </div>
  );
};
