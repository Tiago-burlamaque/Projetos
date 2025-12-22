import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import NotFound from "./Pages/NOT FOUND/NotFound";
import Home from "./Pages/Home/Home";
import { AuthProvider } from "./Context/AuthContext";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
