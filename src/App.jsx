import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const MapplexAppPage = lazy(() => import('./pages/MapplexAppPage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const AccountDeletionPage = lazy(() => import('./pages/AccountDeletionPage'));
const UserManualPage = lazy(() => import('./pages/UserManualPage'));
const PlatformPage = lazy(() => import('./pages/PlatformPage'));
const ConsultingPage = lazy(() => import('./pages/ConsultingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ChangelogPage = lazy(() => import('./pages/ChangelogPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    let attempts = 0;
    let timer;
    const scrollToAnchor = () => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ block: 'start' });
        return;
      }
      attempts += 1;
      if (attempts < 20) timer = window.setTimeout(scrollToAnchor, 50);
    };
    scrollToAnchor();
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={(
        <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center" role="status" aria-live="polite">
          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
            <span className="h-3 w-3 rounded-full bg-primary animate-pulse" />
            Loading Geova
          </div>
        </div>
      )}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/mapplex" element={<MapplexAppPage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/account-deletion" element={<AccountDeletionPage />} />
          <Route path="/guide" element={<UserManualPage />} />
          <Route path="/user-guide" element={<UserManualPage />} />
          <Route path="/ai" element={<Navigate to="/platform" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/updates" element={<ChangelogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;
