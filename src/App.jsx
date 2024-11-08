// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import Login from "./Login";
import Signup from "./Signup";

const App = () => {
  return (
    <Router>
      <AuthLayout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthLayout>
    </Router>
  );
};

export default App;
