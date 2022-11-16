import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route>404, NOT FOUND</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
