import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

interface SitemapPageProps { onBackToHome: () => void; }

const pageGroups = [
  {
    title: 'Home sections',
    links: [
      ['Hero banner', '/#home'], ['Human + AI approach', '/#home'], ['Services', '/#services'],
      ['Case studies', '/#solutions'], ['AI demo', '/#demo'], ['Plans', '/#plans'],
      ['About', '/#about'], ['Contact', '/#contact'],
    ],
  },
  {
    title: 'Main pages',
    links: [['Services', '/services'], ['Solutions', '/solutions'], ['Plans', '/plans'], ['Learning & API', '/learning']],
  },
  {
    title: 'Search & company',
    links: [['SEO services', '/seo'], ['XML sitemap', '/sitemap.xml'], ['Robots file', '/robots.txt']],
  },
];

export const SitemapPage: React.FC<SitemapPageProps> = ({ onBackToHome }) => (
  <main className="sitemap-page">
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
      <button className="page-back-link" onClick={onBackToHome}><ArrowLeft size={15} /> Back to Home</button>
      <div className="eyebrow-tag">Site directory</div>
      <h1>Explore Paramount section by section.</h1>
      <p className="sitemap-intro">A clear directory of our capabilities, proof, pricing, company information and technical resources.</p>
      <div className="sitemap-grid">
        {pageGroups.map(group => (
          <section className="sitemap-group" key={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.links.map(([label, href]) => (
                <li key={href + label}><a href={href}>{label}<ArrowUpRight size={14} /></a></li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  </main>
);
