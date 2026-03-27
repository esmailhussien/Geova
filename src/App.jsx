import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import MapplexAppPage from "./pages/MapplexAppPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FieldGuide from "./pages/FieldGuide";
import GeovaAiPage from "./pages/GeovaAiPage";
import ContactPage from "./pages/ContactPage";
import ChangelogPage from "./pages/ChangelogPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mapplex" element={<MapplexAppPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/guide" element={<FieldGuide />} />
        <Route path="/ai" element={<GeovaAiPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/updates" element={<ChangelogPage />} />
      </Routes>
    </Router>
  )
}

export default App;
