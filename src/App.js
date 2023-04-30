import "modern-normalize";
import "../src/index.css";
import { Navigate, Route, Routes } from "react-router-dom";

import { Home, Tweets } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tweets" element={<Tweets />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
