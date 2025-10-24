import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Recipe from "./pages/Recipe";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import MealPlanner from "./pages/MealPlanner";
import Logo from "./pages/Logo";
import CookingAssistant from "./components/CookingAssistant";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/meal-planner" element={<MealPlanner />} />
          <Route path="/logo" element={<Logo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookingAssistant />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
