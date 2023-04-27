import "modern-normalize";
import { Route, Routes } from "react-router-dom";

import { Home, Tweet } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tweets" element={<Tweet />}></Route>
    </Routes>
  );
}

export default App;
