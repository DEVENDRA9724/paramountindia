import React from 'react';
import { ArrowLeft, ArrowRight, BarChart3, Gauge, MapPin, Search, ShieldCheck, Tags } from 'lucide-react';

interface SEOPageProps {
  onBackToHome: () => void;
  onNavigateToContact: () => void;
}

const capabilities = [
  { icon: Search, title: 'Technical SEO', text: 'Crawl diagnostics, indexation controls, canonical strategy, redirects, XML sitemaps and robots directives.' },
  { icon: Gauge, title: 'Core Web Vitals', text: 'Performance engineering for fast loading, stable layouts and responsive interaction across mobile and desktop.' },
  { icon: MapPin, title: 'Local Search', text: 'Location pages, Google Business Profile alignment and structured local signals for Indian service markets.' },
  { icon: Tags, title: 'Schema & Metadata', text: 'Organization, service, breadcrumb and FAQ structured data with page-specific titles and descriptions.' },
  { icon: BarChart3, title: 'Search Measurement', text: 'Search Console and analytics configuration with meaningful conversion events and clear monthly reporting.' },
  { icon: ShieldCheck, title: 'Sustainable Growth', text: 'Accessible content architecture and quality-first optimization without risky shortcuts or manufactured claims.' },
];

export const SEOPage: React.FC<SEOPageProps> = ({ onBackToHome, onNavigateToContact }) => (
  <main className="seo-page">
    <section className="seo-hero">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <button className="page-back-link" onClick={onBackToHome}><ArrowLeft size={15} /> Back to Home</button>
        <div className="eyebrow-tag">SEO &amp; Organic Growth</div>
        <h1>Search visibility built into the engineering.</h1>
        <p>Paramount combines technical SEO, performance, structured data and conversion-focused content architecture so your website can be discovered and trusted.</p>
        <div className="flex flex-wrap gap-3">
          <button className="btn-primary" onClick={onNavigateToContact}>Request an SEO audit <ArrowRight size={16} /></button>
          <a className="btn-secondary" href="/sitemap">View site map</a>
        </div>
      </div>
    </section>

    <section className="seo-capabilities">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="section-heading-row">
          <div><div className="eyebrow-tag">Full-stack SEO</div><h2>From crawlability to conversion</h2></div>
          <p>Every recommendation is tied to a technical implementation and a measurable business action.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <article className="feature-card" key={title}>
              <div className="icon-box"><Icon size={18} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </main>
);
