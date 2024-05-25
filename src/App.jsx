import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import ProfilePage from "./pages/ProfilePage";
import CreateGroupPage from "./pages/CreateGroupPage";
import SignUpPage from "./pages/SignUpPage";

import { useSelector } from "react-redux";

import "./App.scss";

function App() {
  const loggedIn = useSelector((state) => state.userSession.loggedIn);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} exact />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/profile"
            element={loggedIn ? <ProfilePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/create-group"
            element={loggedIn ? <CreateGroupPage /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
