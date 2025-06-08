import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkipSelection from "./pages/SkipSelection";
import NotFound from "./pages/NotFound";
import { StepProvider } from "./context/StepContext";
import { ThemeProvider } from "next-themes";

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <StepProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SkipSelection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </StepProvider>
  </ThemeProvider>
);

export default App;
