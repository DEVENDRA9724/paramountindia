import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  BookOpen,
  Copy,
  Check,
  MessageSquare,
  Mail,
  Code2,
  Cloud,
  ShieldCheck,
  Building2,
} from 'lucide-react';

interface DocsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

const CODE_WHATSAPP_API = `// Official WhatsApp Business Cloud API Integration
// PARAMOUNT INDIA TECHNOLOGIES PRIVATE LIMITED (CIN: U62011GJ2026PTC183227)

import axios from 'axios';

export async function sendWhatsAppNotification(to: string, clientName: string, orderId: string) {
  const WHATSAPP_API_URL = 'https://api.paramountindiatechnologies.com/v1/whatsapp/messages';
  
  const payload = {
    messaging_product: 'whatsapp',
    to: to, // recipient phone with country code e.g. '919876543210'
    type: 'template',
    template: {
      name: 'order_status_update',
      language: { code: 'en' },
      components: [
        {
          type: 'body',
          parameters: [
            { type: 'text', text: clientName },
            { type: 'text', text: orderId },
            { type: 'text', text: 'Confirmed & In Transit' }
          ]
        }
      ]
    }
  };

  const response = await axios.post(WHATSAPP_API_URL, payload, {
    headers: {
      'Authorization': \`Bearer \${process.env.PARAMOUNT_WHATSAPP_TOKEN}\`,
      'Content-Type': 'application/json'
    }
  });

  return response.data; // { status: 'sent', messageId: 'wamid.HBgL...' }
}`;

const CODE_EMAIL_AUTOMATION = `// Email Automation Tool REST API
// Trigger Dynamic Drip Campaign & Contact Segmentation

const response = await fetch('https://api.paramountindiatechnologies.com/v1/email/drip-campaign', {
  method: 'POST',
  headers: {
    'Authorization': \`Bearer \${process.env.PARAMOUNT_EMAIL_API_KEY}\`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    subscriberEmail: 'client@enterprise.com',
    campaignId: 'welcome_onboarding_sequence_2026',
    customVariables: {
      name: 'Priya Sharma',
      company: 'Enterprise Solutions Pvt Ltd',
      plan: 'Enterprise Cloud Suite'
    },
    trackOpens: true,
    trackClicks: true
  })
});

const result = await response.json();
console.log('Campaign triggered successfully:', result.trackingId);`;

const CODE_WEB_APP_SDK = `// Paramount Web & Application Development Client
import { ParamountAppKit } from '@paramount/web-app-kit';

export const appKit = new ParamountAppKit({
  appId: 'pit_app_prod_2026',
  environment: 'production',
  features: {
    authentication: true,      // JWT & OAuth2 flows
    realtimeSync: true,        // WebSockets push
    analytics: true            // Privacy-compliant telemetry
  }
});

// Initialize on App Start
await appKit.initialize();`;

const CODE_CLOUD_INFRA_CLI = `# Paramount Cloud Infrastructure & IT Support Deployment CLI
# PARAMOUNT INDIA TECHNOLOGIES PRIVATE LIMITED

# 1. Authenticate with Paramount Secure Cloud Gateway
paramount cloud login --corp-cin U62011GJ2026PTC183227

# 2. Provision Auto-Scaling Cluster (AWS / GCP / Azure)
paramount infra provision --type kubernetes-ha --nodes 3 --region ap-south-1

# 3. Deploy Web Application with Zero Downtime Rolling Update
paramount deploy --app web-portal --env production --ssl auto

# 4. Run IT Security & Uptime Health Audit
paramount audit run --compliance soc2 --firewall strict`;

export const DocsModal: React.FC<DocsModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'email' | 'web-app' | 'cloud'>(
    'whatsapp'
  );
  const [copied, setCopied] = useState(false);

  const getCurrentSnippet = () => {
    switch (activeTab) {
      case 'whatsapp':
        return CODE_WHATSAPP_API;
      case 'email':
        return CODE_EMAIL_AUTOMATION;
      case 'web-app':
        return CODE_WEB_APP_SDK;
      case 'cloud':
        return CODE_CLOUD_INFRA_CLI;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCurrentSnippet());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden z-10 my-6 flex flex-col max-h-[88vh]"
          >
            {/* Header */}
            <div className="px-6 py-5 sm:px-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#0a152d] text-white flex items-center justify-center shadow-sm">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#0a1b33]">
                    Paramount Product Documentation & APIs
                  </h3>
                  <p className="text-xs text-slate-500">
                    PARAMOUNT INDIA TECHNOLOGIES PRIVATE LIMITED · CIN: U62011GJ2026PTC183227
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center border border-slate-200 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Tabs - Specifically for the user's products */}
            <div className="px-6 sm:px-8 pt-4 pb-2 border-b border-slate-100 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto max-w-full">
                <button
                  onClick={() => setActiveTab('whatsapp')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                    activeTab === 'whatsapp'
                      ? 'bg-white text-emerald-800 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp API</span>
                </button>
                <button
                  onClick={() => setActiveTab('email')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                    activeTab === 'email'
                      ? 'bg-white text-blue-800 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>Email Automation</span>
                </button>
                <button
                  onClick={() => setActiveTab('web-app')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                    activeTab === 'web-app'
                      ? 'bg-white text-indigo-800 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Web & App SDK</span>
                </button>
                <button
                  onClick={() => setActiveTab('cloud')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                    activeTab === 'cloud'
                      ? 'bg-white text-sky-800 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Cloud className="w-3.5 h-3.5 text-sky-600" />
                  <span>Cloud & IT CLI</span>
                </button>
              </div>

              <div className="text-xs font-semibold text-slate-500 font-mono">
                Official Developer Hub
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    {activeTab === 'whatsapp' && 'Official WhatsApp Business Cloud API Integration'}
                    {activeTab === 'email' && 'Email Automation Tool REST API'}
                    {activeTab === 'web-app' && 'Web, Application & Software Development Kit'}
                    {activeTab === 'cloud' && 'Cloud Infrastructure & Managed IT Deployment CLI'}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {activeTab === 'whatsapp' &&
                      'Send verified transactional broadcasts, OTPs, and automated chatbot responses'}
                    {activeTab === 'email' &&
                      'Automate onboarding drips, event triggers, and high-inbox deliverability'}
                    {activeTab === 'web-app' &&
                      'Pre-configured client libraries for React, Next.js, and Mobile apps'}
                    {activeTab === 'cloud' &&
                      'Automated Kubernetes orchestration, multi-cloud clusters & 24/7 IT monitoring'}
                  </p>
                </div>

                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Snippet</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Snippet Container */}
              <div className="relative rounded-2xl bg-[#0a152d] text-slate-100 p-5 font-mono text-xs leading-relaxed overflow-x-auto shadow-inner border border-slate-800">
                <pre>{getCurrentSnippet()}</pre>
              </div>

              {/* Product Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60">
                  <div className="text-xs font-semibold text-slate-900">
                    Official Pvt Ltd Compliance
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Incorporated under MCA India: CIN U62011GJ2026PTC183227.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60">
                  <div className="text-xs font-semibold text-slate-900">Enterprise SLA</div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    99.99% guaranteed API uptime with 24/7 technical helpdesk.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60">
                  <div className="text-xs font-semibold text-slate-900">Instant Onboarding</div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Production API keys and WhatsApp Green Tick verification support.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 sm:px-8 border-t border-slate-100 bg-slate-50/60 flex items-center justify-between flex-wrap gap-3">
              <div className="text-xs text-slate-600">
                PARAMOUNT INDIA TECHNOLOGIES PRIVATE LIMITED · Engineering Team
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-5 py-2 bg-[#0a152d] text-white text-xs font-semibold rounded-full hover:bg-[#1b2f58] transition-colors cursor-pointer"
              >
                Request Product Integration Call
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
