import { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';
import { InteractiveDemo } from './components/InteractiveDemo';
import { Plans } from './components/Plans';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

// Sub-pages imports
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { PlansPage } from './pages/PlansPage';
import { LearningPage } from './pages/LearningPage';

type ViewType = 'home' | 'services' | 'solutions' | 'plans' | 'learning';

function App() {
  const [view, setView] = useState<ViewType>('home');
  const [learningTab, setLearningTab] = useState<string>('docs');

  // Prefill state for Consultation Form
  const [selectedPlanService, setSelectedPlanService] = useState('custom-software');
  const [prefillContactMessage, setPrefillContactMessage] = useState('');

  // Global Video Player Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);

  const videoUrl = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4';

  // Global background video fade loop setup
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reset video state
    video.currentTime = 0;
    video.style.opacity = '0';

    const fadeDuration = 0.5; // in seconds

    // Animation frame loop to control video opacity
    const updateOpacity = () => {
      if (video && !video.paused) {
        const currentTime = video.currentTime;
        const duration = video.duration;

        if (duration && duration > 0) {
          let opacity = 0;

          if (currentTime < fadeDuration) {
            // Fade-in at the start
            opacity = currentTime / fadeDuration;
          } else if (currentTime > duration - fadeDuration) {
            // Fade-out at the end
            opacity = (duration - currentTime) / fadeDuration;
          } else {
            // Full opacity in between
            opacity = 1;
          }

          // Clamp opacity between 0 and 1
          opacity = Math.max(0, Math.min(1, opacity));
          video.style.opacity = opacity.toString();
        }
      }
      rafRef.current = requestAnimationFrame(updateOpacity);
    };

    const handlePlay = () => {
      rafRef.current = requestAnimationFrame(updateOpacity);
    };

    const handleEnded = () => {
      // Clean up RAF loop temporarily
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Reset opacity to 0
      video.style.opacity = '0';

      // Wait 100ms, then replay
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch((err) => {
            console.warn('Video replay play promise interrupted:', err);
          });
        }
      }, 100);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('ended', handleEnded);

    // Start playback
    video.play().catch((err) => {
      console.warn('Video autoplay failed or was blocked by browser. Retrying on user interaction.', err);
    });

    const playVideo = () => {
      if (video && video.paused) {
        video.play().catch(() => {});
      }
    };

    window.addEventListener('click', playVideo);
    window.addEventListener('touchstart', playVideo);
    window.addEventListener('scroll', playVideo);
    window.addEventListener('mousemove', playVideo);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('ended', handleEnded);
      window.removeEventListener('click', playVideo);
      window.removeEventListener('touchstart', playVideo);
      window.removeEventListener('scroll', playVideo);
      window.removeEventListener('mousemove', playVideo);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Pause or play background video depending on view state to save resources and match layout
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (view === 'home') {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [view]);

  const handleNavigate = (target: string) => {
    // If navigating to core pages
    if (['home', 'services', 'solutions', 'plans', 'learning'].includes(target)) {
      setView(target as ViewType);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Scroll targets on homepage
    if (['contact', 'about', 'demo'].includes(target)) {
      if (view !== 'home') {
        setView('home');
        // Let the homepage mount before scrolling
        setTimeout(() => {
          const element = document.getElementById(target);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPlan = (planName: string, serviceId: string) => {
    setSelectedPlanService(serviceId);
    setPrefillContactMessage(`Hi Devendra, I would like to schedule a technical callback to discuss the "${planName}" agreement for our operations.`);
    
    // Switch to home and scroll to contact
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-[#a855f7]/30 selection:text-white overflow-x-hidden relative">
      
      {/* Global Background Video - only visible on home view */}
      <div className={`fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 transition-opacity duration-500 ${view === 'home' ? 'opacity-100' : 'opacity-0'}`}>
        <video
          ref={videoRef}
          src={videoUrl}
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-150"
          style={{ opacity: 0 }}
        />
      </div>

      {/* Global Blurred Overlay Shape (centered behind content) - only visible on home view */}
      {view === 'home' && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[984px] max-w-full h-[527px] opacity-90 bg-gray-950 blur-[82px] pointer-events-none z-5" />
      )}

      {/* Main Content Containers (sit on top at z-10) */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between">
        
        {/* Home View */}
        {view === 'home' && (
          <>
            <Hero 
              onNavigate={handleNavigate} 
              onOpenLearningModal={handleOpenLearningPage} 
            />
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
          </>
        )}

        {/* Services Sub-page */}
        {view === 'services' && (
          <div className="w-full min-h-screen bg-[#060415] flex flex-col justify-between">
            <Navbar 
              onNavigate={handleNavigate} 
              onOpenLearningModal={handleOpenLearningPage} 
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
          <div className="w-full min-h-screen bg-[#060415] flex flex-col justify-between">
            <Navbar 
              onNavigate={handleNavigate} 
              onOpenLearningModal={handleOpenLearningPage} 
            />
            <SolutionsPage 
              onBackToHome={() => handleNavigate('home')} 
              onNavigateToContact={handleSelectPlan}
            />
            <Footer onNavigate={handleNavigate} />
          </div>
        )}

        {/* Plans/Pricing Sub-page */}
        {view === 'plans' && (
          <div className="w-full min-h-screen bg-[#060415] flex flex-col justify-between">
            <Navbar 
              onNavigate={handleNavigate} 
              onOpenLearningModal={handleOpenLearningPage} 
            />
            <PlansPage 
              onBackToHome={() => handleNavigate('home')} 
              onSelectPlan={handleSelectPlan}
            />
            <Footer onNavigate={handleNavigate} />
          </div>
        )}

        {/* Developer Learning Portal Sub-page */}
        {view === 'learning' && (
          <div className="w-full min-h-screen bg-[#060415] flex flex-col justify-between">
            <Navbar 
              onNavigate={handleNavigate} 
              onOpenLearningModal={handleOpenLearningPage} 
            />
            <LearningPage 
              onBackToHome={() => handleNavigate('home')} 
              activeTab={learningTab}
            />
            <Footer onNavigate={handleNavigate} />
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
