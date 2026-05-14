import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import MapplexAppPage from "./pages/MapplexAppPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FieldGuide from "./pages/FieldGuide";
import PlatformPage from "./pages/PlatformPage";
import ConsultingPage from "./pages/ConsultingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ChangelogPage from "./pages/ChangelogPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/mapplex" element={<MapplexAppPage />} />
        <Route path="/consulting" element={<ConsultingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/guide" element={<FieldGuide />} />
        <Route path="/ai" element={<Navigate to="/platform" replace />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/updates" element={<ChangelogPage />} />
      </Routes>
    </Router>
  )
}

export default App;
