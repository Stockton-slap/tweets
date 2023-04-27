import "modern-normalize";
import { Route, Routes } from "react-router-dom";

import { Home, Tweets } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/tweets" element={<Tweets />}></Route>
    </Routes>
  );
}

export default App;
