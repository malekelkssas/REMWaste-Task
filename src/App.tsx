import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkipSelection from "./pages/SkipSelection";
import NotFound from "./pages/NotFound";
import { StepProvider } from "./context/StepContext";

const App = () => (
  <StepProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SkipSelection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StepProvider>
);

export default App;
