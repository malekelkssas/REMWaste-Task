import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkipSelection from "./pages/SkipSelection";
import NotFound from "./pages/NotFound";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SkipSelection />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
