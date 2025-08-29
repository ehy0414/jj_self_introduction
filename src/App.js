import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Bbs/pages/HomePage";
import WritePage from "./Bbs/pages/WritePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/write" element={<WritePage />} />
      </Routes>
    </Router>
  );
}

export default App;
