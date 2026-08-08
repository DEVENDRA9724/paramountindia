import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Brand } from './Brand';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const SERVICES = [
  { label: 'Software Development', section: 'services' },
  { label: 'Mobile Application', section: 'services' },
  { label: 'CRM Development', section: 'services' },
  { label: 'AI Bots & Agents', section: 'demo' },
  { label: 'Cloud Infrastructure', section: 'services' },
  { label: 'SEO & Organic Growth', section: 'seo' },
];

const LINKS = [
  { label: 'Home', section: 'home' },
  { label: 'Services', section: 'services' },
  { label: 'Solutions', section: 'solutions' },
  { label: 'Plans', section: 'plans' },
  { label: 'About Us', section: 'about' },
  { label: 'Contact', section: 'contact' },
  { label: 'Site Map', section: 'sitemap' },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => (
  <footer className="site-footer w-full" style={{ background: '#091126', borderTop: '1px solid rgba(129,140,248,0.16)' }}>
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4 cursor-pointer" onClick={() => onNavigate('home')}>
            <Brand compact />
          </div>
          <p className="text-xs leading-relaxed mb-5" style={{ color: 'rgba(226,232,255,0.35)', lineHeight: 1.75 }}>
            Registered Pvt Ltd. Full-cycle IT engineering — software, AI, cloud, and CRM for enterprises across India.
          </p>
          <div className="flex flex-col gap-2">
            <a href="mailto:info@paramountindia.tech" className="flex items-center gap-2 text-xs transition-colors hover:text-white" style={{ color: 'rgba(226,232,255,0.4)' }}>
              <Mail style={{ width: 12, height: 12 }} /> info@paramountindia.tech
            </a>
            <a href="tel:+917600647428" className="flex items-center gap-2 text-xs transition-colors hover:text-white" style={{ color: 'rgba(226,232,255,0.4)' }}>
              <Phone style={{ width: 12, height: 12 }} /> +91 76006 47428
            </a>
            <span className="flex items-center gap-2 text-xs" style={{ color: 'rgba(226,232,255,0.4)' }}>
              <MapPin style={{ width: 12, height: 12 }} /> Ahmedabad, Gujarat, India
            </span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white" style={{ opacity: 0.5 }}>IT Services</h4>
          <ul className="flex flex-col gap-2.5">
            {SERVICES.map(item => (
              <li key={item.label}>
                <button onClick={() => onNavigate(item.section)}
                  className="text-xs transition-colors hover:text-white text-left"
                  style={{ color: 'rgba(226,232,255,0.4)', fontFamily: 'var(--font-sans)', background: 'none', border: 'none', cursor: 'pointer' }}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white" style={{ opacity: 0.5 }}>Quick Links</h4>
          <ul className="flex flex-col gap-2.5">
            {LINKS.map(item => (
              <li key={item.label}>
                <button onClick={() => onNavigate(item.section)}
                  className="text-xs transition-colors hover:text-white text-left"
                  style={{ color: 'rgba(226,232,255,0.4)', fontFamily: 'var(--font-sans)', background: 'none', border: 'none', cursor: 'pointer' }}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Leadership */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white" style={{ opacity: 0.5 }}>Leadership</h4>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs font-semibold text-white mb-0.5">Devendra Sharma</p>
              <p className="text-xs" style={{ color: 'rgba(226,232,255,0.35)' }}>Co-Founder & Software Director</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-white mb-0.5">Nikita Tejwani</p>
              <p className="text-xs" style={{ color: 'rgba(226,232,255,0.35)' }}>Co-Founder & Growth Director</p>
            </div>
            <div className="mt-1 pt-4" style={{ borderTop: '1px solid rgba(129,140,248,0.06)' }}>
              <p className="text-xs" style={{ color: 'rgba(226,232,255,0.25)' }}>For enterprise inquiries: <br />
                <a href="tel:+917600647428" className="hover:text-indigo-400 transition-colors">+91 76006 47428</a>
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: '1px solid rgba(129,140,248,0.05)' }}>
        <span className="text-xs" style={{ color: 'rgba(226,232,255,0.25)' }}>
          © {new Date().getFullYear()} Paramount India Technologies Pvt Ltd. All rights reserved.
        </span>
        <div className="flex gap-5">
          {['Privacy Policy', 'Terms of Service'].map(l => (
            <a key={l} href="#" className="text-xs hover:text-white transition-colors" style={{ color: 'rgba(226,232,255,0.25)' }}>{l}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
