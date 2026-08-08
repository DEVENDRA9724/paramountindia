import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';
import { InteractiveDemo } from './components/InteractiveDemo';
import { Plans } from './components/Plans';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { HumanAiSynergy } from './components/HumanAiSynergy';

// Sub-pages imports
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { PlansPage } from './pages/PlansPage';
import { LearningPage } from './pages/LearningPage';
import { SEOPage } from './pages/SEOPage';
import { SitemapPage } from './pages/SitemapPage';

type ViewType = 'home' | 'services' | 'solutions' | 'plans' | 'learning' | 'seo' | 'sitemap';

const PATH_TO_VIEW: Record<string, ViewType> = {
  '/': 'home', '/services': 'services', '/solutions': 'solutions', '/plans': 'plans',
  '/learning': 'learning', '/seo': 'seo', '/sitemap': 'sitemap',
};

const VIEW_TO_PATH: Record<ViewType, string> = {
  home: '/', services: '/services', solutions: '/solutions', plans: '/plans',
  learning: '/learning', seo: '/seo', sitemap: '/sitemap',
};

const PAGE_META: Record<ViewType, { title: string; description: string }> = {
  home: { title: 'Paramount India Technologies | Engineering Without Limits', description: 'Enterprise software, autonomous AI, cloud infrastructure and CRM engineering from Ahmedabad, India.' },
  services: { title: 'Enterprise IT Services | Paramount India Technologies', description: 'Custom software, mobile apps, CRM integration, AI agents, cloud infrastructure and security services.' },
  solutions: { title: 'Technology Solutions & Case Studies | Paramount India', description: 'Explore enterprise software, cloud, CRM and AI solution case studies from Paramount India Technologies.' },
  plans: { title: 'IT Service Plans in INR | Paramount India Technologies', description: 'Transparent monthly and annual plans for software, SEO, AI automation, cloud and enterprise IT operations.' },
  learning: { title: 'Knowledge Base & API Preview | Paramount India', description: 'Technical documentation, implementation examples, case summaries and a safe interactive API preview.' },
  seo: { title: 'Technical SEO Services India | Paramount India Technologies', description: 'Technical SEO, Core Web Vitals, schema, local search and organic growth engineering for modern websites.' },
  sitemap: { title: 'Site Map | Paramount India Technologies', description: 'Browse every Paramount India Technologies page and home-page section.' },
};

function App() {
  const [view, setView] = useState<ViewType>(() => PATH_TO_VIEW[window.location.pathname] ?? 'home');
  const [learningTab, setLearningTab] = useState<string>('docs');

  // Prefill state for Consultation Form
  const [selectedPlanService, setSelectedPlanService] = useState('custom-software');
  const [prefillContactMessage, setPrefillContactMessage] = useState('');

  useEffect(() => {
    const handlePopState = () => setView(PATH_TO_VIEW[window.location.pathname] ?? 'home');
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const meta = PAGE_META[view];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://paramountindia.tech${VIEW_TO_PATH[view]}`);
  }, [view]);

  const handleNavigate = (target: string) => {
    if (['home', 'services', 'solutions', 'plans', 'learning', 'seo', 'sitemap'].includes(target)) {
      const nextView = target as ViewType;
      setView(nextView);
      window.history.pushState({}, '', VIEW_TO_PATH[nextView]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (['contact', 'about', 'demo'].includes(target)) {
      if (view !== 'home') {
        setView('home');
        window.history.pushState({}, '', `/#${target}`);
        setTimeout(() => {
          const element = document.getElementById(target);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.history.replaceState({}, '', `/#${target}`);
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleOpenLearningPage = (tab: string) => {
    setLearningTab(tab);
    setView('learning');
    window.history.pushState({}, '', '/learning');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPlan = (planName: string, serviceId: string) => {
    setSelectedPlanService(serviceId);
    setPrefillContactMessage(`Interested in "${planName}". Please reach out to schedule a consultation.`);
    if (view !== 'home') {
      setView('home');
      window.history.pushState({}, '', '/#contact');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.history.replaceState({}, '', '/#contact');
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen text-foreground antialiased overflow-x-hidden" style={{ background: '#f7f9fc', color: '#17213d' }}>

      {/* Main Content Containers */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between">

        {/* Home View */}
        {view === 'home' && (
          <div className="flex flex-col justify-between flex-1 animate-page-entry">
            <Hero
              onNavigate={handleNavigate}
              onOpenLearningModal={handleOpenLearningPage}
            />
            <HumanAiSynergy />
            <Services />
            <Solutions />
            <InteractiveDemo />
            <Plans onSelectPlan={handleSelectPlan} />
            <About />
            <ContactForm
              selectedService={selectedPlanService}
              prefillMessage={prefillContactMessage}
            />
            <Footer onNavigate={handleNavigate} />
          </div>
        )}

        {/* Services Sub-page */}
        {view === 'services' && (
          <div className="w-full min-h-screen flex flex-col justify-between animate-page-entry" style={{ background: '#f7f9fc' }}>
            <Navbar
              onNavigate={handleNavigate}
              onOpenLearningModal={handleOpenLearningPage}
              activePage="services"
            />
            <ServicesPage
              onBackToHome={() => handleNavigate('home')}
              onNavigateToContact={handleSelectPlan}
            />
            <Footer onNavigate={handleNavigate} />
          </div>
        )}

        {/* Solutions Sub-page */}
        {view === 'solutions' && (
          <div className="w-full min-h-screen flex flex-col justify-between animate-page-entry" style={{ background: '#f7f9fc' }}>
            <Navbar
              onNavigate={handleNavigate}
              onOpenLearningModal={handleOpenLearningPage}
              activePage="solutions"
            />
            <SolutionsPage
              onBackToHome={() => handleNavigate('home')}
              onNavigateToContact={handleSelectPlan}
            />
            <Footer onNavigate={handleNavigate} />
          </div>
        )}

        {/* Plans Sub-page */}
        {view === 'plans' && (
          <div className="w-full min-h-screen flex flex-col justify-between animate-page-entry" style={{ background: '#f7f9fc' }}>
            <Navbar
              onNavigate={handleNavigate}
              onOpenLearningModal={handleOpenLearningPage}
              activePage="plans"
            />
            <PlansPage
              onBackToHome={() => handleNavigate('home')}
              onSelectPlan={handleSelectPlan}
            />
            <Footer onNavigate={handleNavigate} />
          </div>
        )}

        {/* Learning Sub-page */}
        {view === 'learning' && (
          <div className="w-full min-h-screen flex flex-col justify-between animate-page-entry" style={{ background: '#f7f9fc' }}>
            <Navbar
              onNavigate={handleNavigate}
              onOpenLearningModal={handleOpenLearningPage}
              activePage="learning"
            />
            <LearningPage
              activeTab={learningTab}
              onBackToHome={() => handleNavigate('home')}
              onNavigateToContact={handleSelectPlan}
            />
            <Footer onNavigate={handleNavigate} />
          </div>
        )}

        {view === 'seo' && (
          <div className="w-full min-h-screen flex flex-col justify-between animate-page-entry" style={{ background: '#f7f9fc' }}>
            <Navbar onNavigate={handleNavigate} onOpenLearningModal={handleOpenLearningPage} activePage="seo" />
            <SEOPage onBackToHome={() => handleNavigate('home')} onNavigateToContact={() => handleNavigate('contact')} />
            <Footer onNavigate={handleNavigate} />
          </div>
        )}

        {view === 'sitemap' && (
          <div className="w-full min-h-screen flex flex-col justify-between animate-page-entry" style={{ background: '#f7f9fc' }}>
            <Navbar onNavigate={handleNavigate} onOpenLearningModal={handleOpenLearningPage} activePage="sitemap" />
            <SitemapPage onBackToHome={() => handleNavigate('home')} />
            <Footer onNavigate={handleNavigate} />
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
