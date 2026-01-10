import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import Booking from "./pages/Booking";
import Chat from "./pages/Chat";
import LearningDashboard from "./pages/LearningDashboard";
import Settings from "./pages/Settings";
import HowItWorks from "./pages/HowItWorks";
import Company from "./pages/Company";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/community" element={<Community />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/learning" element={<LearningDashboard />} />
            <Route path="/learning-dashboard" element={<LearningDashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/company" element={<Company />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
