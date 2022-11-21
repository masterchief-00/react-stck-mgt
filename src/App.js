import { Provider } from "react-redux";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import store from "./redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route>404, NOT FOUND</Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
