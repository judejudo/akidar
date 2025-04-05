import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import AboutUs from "./pages/Aboutus";
import EventSecurity from "./pages/services/EventSecurity";
import SystemServices from "./pages/services/SystemServices";
import EventSecurityPage from "./pages/services/EventSecurity";
import SecuritySystemsPage from "./pages/services/SystemServices";
import CCTVInstallationPage from "./pages/services/CctvServices";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop

import PatrolService from "./pages/services/PatrolServices";
import SecurityFencing from "./pages/services/SecurityFencing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* Ensures each page starts at the top */}
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/services/event-security" element={<Layout><EventSecurityPage /></Layout>} />
          <Route path="/services/patrol-services" element={<Layout><PatrolService /></Layout>} />
          <Route path="/services/security-Fencing" element={<Layout><SecurityFencing /></Layout>} />
          <Route path="/services/security-systems" element={<Layout><SecuritySystemsPage /></Layout>} />
          <Route path="/services/cctv-installation" element={<Layout><CCTVInstallationPage /></Layout>} />
          <Route path="/systemServices" element={<Layout><SystemServices /></Layout>} />
          <Route path="/events" element={<Layout><EventSecurity /></Layout>} />
          <Route path="/aboutUs" element={<Layout><AboutUs /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
