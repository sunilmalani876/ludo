import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LudogamePgae from "./components/LudogamePgae";

function App() {
  return (
    <div className="bg-slate-900">
      <Router>
        <Routes>
          <Route path="/" element={<p>Home page</p>} />

          <Route path="/ludo" element={<LudogamePgae />} />

          <Route path="*" element={<p>Not Found!</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
