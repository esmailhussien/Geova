import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import LandingPage from "./pages/LandingPage";
import MapplexAppPage from "./pages/MapplexAppPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FieldGuide from "./pages/FieldGuide";
import UserManualPage from "./pages/UserManualPage";
import PlatformPage from "./pages/PlatformPage";
import ConsultingPage from "./pages/ConsultingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ChangelogPage from "./pages/ChangelogPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/mapplex" element={<MapplexAppPage />} />
        <Route path="/consulting" element={<ConsultingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/guide" element={<UserManualPage />} />
        <Route path="/user-guide" element={<UserManualPage />} />
        <Route path="/ai" element={<Navigate to="/platform" replace />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/updates" element={<ChangelogPage />} />
      </Routes>
    </Router>
  )
}

export default App;
