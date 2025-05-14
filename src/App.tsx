import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ConventionPage from "./pages/Convention";
import ReferencePage from "./pages/Reference";
import BlogPage from "./pages/Blog";
import Docs from "./pages/Docs";
import DocsConvention from "./pages/DocsConvention";
import DocsReference from "./pages/DocsReference";
import DocsInstallation from "./pages/DocsInstallation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/convention" element={<ConventionPage />} />
          <Route path="/reference" element={<ReferencePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/docs/convention" element={<DocsConvention />} />
          <Route path="/docs/reference" element={<DocsReference />} />
          <Route path="/docs/installation" element={<DocsInstallation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
