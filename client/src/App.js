import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Header from "./components/header/Header";
import Single from "./pages/single/Single";

function App() {
  const currentUser = true;
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/register"
          element={currentUser ? <Home /> : <Register />}
        ></Route>
        <Route
          path="/login"
          element={currentUser ? <Home /> : <Login />}
        ></Route>
        <Route
          path="/write"
          element={currentUser ? <Write /> : <Login />}
        ></Route>
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Login />}
        ></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
