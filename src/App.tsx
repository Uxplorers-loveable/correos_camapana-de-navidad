import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateSmartGiftHome from "./pages/CreateSmartGiftHome";
import ActivateGiftHome from "./pages/ActivateGiftHome";
import CreateGift from "./pages/CreateGift";
import ActivateGift from "./pages/ActivateGift";
import EmailPreview from "./pages/EmailPreview";
import EmailPreviewPayment from "./pages/EmailPreviewPayment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio-crear" element={<CreateSmartGiftHome />} />
          <Route path="/inicio-activar" element={<ActivateGiftHome />} />
          <Route path="/crear-regalo" element={<CreateGift />} />
          <Route path="/activar" element={<ActivateGift />} />
          <Route path="/email-preview" element={<EmailPreview />} />
          <Route path="/email-preview-payment" element={<EmailPreviewPayment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
