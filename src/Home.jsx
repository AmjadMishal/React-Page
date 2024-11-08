import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      // If no user is found, redirect to the login page
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Welcome to Homeverse!</h1>
      <p>This is your main landing page after logging in.</p>
      <button onClick={handleLogout} style={logoutButtonStyle}>
        Logout
      </button>
    </div>
  );
};

const logoutButtonStyle = {
  backgroundColor: "#333",
  color: "white",
  padding: "0.8rem 1.5rem",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "1rem",
};

export default Home;
