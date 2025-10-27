import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Privacy from "./Pages/Privacy";
import Pricing from "./Pages/Pricing";
import TermsAndConditions from "./Pages/TermsAndConditions";
import RefundPolicy from "./Pages/RefundPolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />

        <Routes>
          {/* Main landing page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <About />
                <Contact />
              </>
            }
          />

          {/* Policy and Information Pages */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
